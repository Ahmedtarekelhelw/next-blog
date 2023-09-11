import prisma from "@/utlits/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories, { Status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ msg: "Something Went Wrong", Status: 500 })
    );
  }
};
