import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let cat_id = searchParams.get("cat_id");
    let prisma = new PrismaClient();
    let result = await prisma.blogs.findMany({
      where: {
        category_id: parseInt(cat_id), //cat_id,
      },
      orderBy: { id: "desc" },
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
