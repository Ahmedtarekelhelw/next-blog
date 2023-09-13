import { getAuthSession } from "@/utlits/auth";
import prisma from "@/utlits/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get("postSlug");
  try {
    const comments = await prisma.comment.findMany({
      where: { postSlug },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
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
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ msg: "Something Went Wrong" }, { status: 500 })
    );
  }
};
