import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { VerifyToken } from "@/utility/JWTTokenHelper";
export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();
    let result = await prisma.blogs.findMany({
      where: {
        isFeatured: true,
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
