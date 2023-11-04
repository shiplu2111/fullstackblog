import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();
    let result = await prisma.subscriber.findMany({
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

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    let prisma = new PrismaClient();

    let result = await prisma.subscriber.create({
      data: {
        email: reqBody.email,
      },
    });
    return NextResponse.json({
      status: "success",
      message: "Thanks For Subscribe Us",
      data: reqBody,
    });
  } catch (e) {
    return NextResponse.json({
      status: "Fail",
      message: "Something Went Wrong",
      data: e.toString(),
    });
  }
}
