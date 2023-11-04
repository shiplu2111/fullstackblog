import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { VerifyToken } from "@/utility/JWTTokenHelper";
export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();
    let result = await prisma.categorys.findMany({
      orderBy: { id: "asc" },
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

    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    const user_id = payload["id"];
    let result = await prisma.categorys.create({
      data: {
        title: reqBody.title,
        slug: reqBody.slug,
        imgCDN: reqBody.imgCDN,
        shortDesc: reqBody.shortDesc,
        longDesc: reqBody.longDesc,
        user_id: user_id,
      },
    });
    return NextResponse.json({
      status: "success",
      message: "Category Added Successfully",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({
      status: "Fail",
      message: "Something Went Wrong",
      data: e.toString(),
    });
  }
}

export async function PUT(req, res) {
  try {
    let reqBody = await req.json();

    let { searchParams } = new URL(req.url);
    let cat_id = searchParams.get("cat_id");

    const prisma = new PrismaClient();
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    const user_id = payload["id"];
    const result = await prisma.categorys.update({
      where: { id: parseInt(cat_id) },
      data: {
        title: reqBody.title,
        slug: reqBody.slug,
        imgCDN: reqBody.imgCDN,
        shortDesc: reqBody.shortDesc,
        longDesc: reqBody.longDesc,
        user_id: user_id,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "Category Updated Successfully",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let cat_id = searchParams.get("cat_id");

    const prisma = new PrismaClient();
    const result = await prisma.categorys.delete({
      where: {
        id: parseInt(cat_id),
      },
    });
    return NextResponse.json({
      status: "success",
      message: "Category Deleted Successfully",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function PATCH(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let cat_id = searchParams.get("cat_id");
    const prisma = new PrismaClient();

    const result = await prisma.categorys.findUnique({
      where: {
        id: parseInt(cat_id),
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
