import prisma from "@/utlits/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");
  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    return new NextResponse(
      JSON.stringify({ posts, hasNext, hasPrev }, { status: 200 })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ msg: "Something Went Wrong" }, { status: 500 })
    );
  }
};
