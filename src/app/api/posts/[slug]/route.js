import prisma from "@/utlits/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify({ post }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ msg: "Something Went Wrong" }, { status: 500 })
    );
  }
};
