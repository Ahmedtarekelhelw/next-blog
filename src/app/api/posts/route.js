import { getAuthSession } from "@/utlits/auth";
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

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ msg: "user not authenticated" }, { status: 401 })
    );
  }
  try {
    const body = await req.json();
    console.log(body);
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ msg: "Something Went Wrong" }, { status: 500 })
    );
  }
};
