import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { VerifyToken } from "@/utility/JWTTokenHelper";
export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();
    let result = await prisma.contact.findMany({
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

    let result = await prisma.contact.create({
      data: {
        firstName: reqBody.firstName,
        lastName: reqBody.lastName,
        email: reqBody.email,
        mobile: reqBody.mobile,
        message: reqBody.message,
      },
    });
    return NextResponse.json({
      status: "success",
      message: "Thanks For Contacting Us",
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

export async function PATCH(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let contact_id = searchParams.get("contact_id");
    const prisma = new PrismaClient();

    const result = await prisma.contact.findUnique({
      where: {
        id: parseInt(contact_id),
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e.toString() });
  }
}
