import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let take_limit = searchParams.get("take_limit");
    let prisma = new PrismaClient();
    let result = await prisma.blogs.findMany({
      orderBy: { id: "desc" },
      take: parseInt(take_limit),
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({
      status: "fail",
      message: "Something Went Wrong",
      data: e.toString(),
    });
  }
}
