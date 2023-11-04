import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { VerifyToken } from "@/utility/JWTTokenHelper";
export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();
    let result = await prisma.blogs.findMany({
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

    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    const user_id = payload["id"];
    let result = await prisma.blogs.create({
      data: {
        title: reqBody.title,
        slug: reqBody.slug,
        imgCDN: reqBody.imgCDN,
        imgCDN2: reqBody.imgCDN2,
        imgCDN3: reqBody.imgCDN3,
        imgCDN4: reqBody.imgCDN4,
        imgCDN5: reqBody.imgCDN5,
        shortDesc: reqBody.shortDesc,
        longDesc: reqBody.longDesc,
        isFeatured: reqBody.featured,
        isBreaking: reqBody.breaking,
        category_id: parseInt(reqBody.category_id),
        user_id: user_id,
      },
    });
    return NextResponse.json({
      status: "success",
      message: "Blog Created Successfully",
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
    let blog_id = searchParams.get("blog_id");

    const prisma = new PrismaClient();
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    const user_id = payload["id"];
    const result = await prisma.blogs.update({
      where: { id: parseInt(blog_id) },
      data: {
        title: reqBody.title,
        slug: reqBody.slug,
        imgCDN: reqBody.imgCDN,
        imgCDN2: reqBody.imgCDN2,
        imgCDN3: reqBody.imgCDN3,
        imgCDN4: reqBody.imgCDN4,
        imgCDN5: reqBody.imgCDN5,
        shortDesc: reqBody.shortDesc,
        longDesc: reqBody.longDesc,
        category_id: parseInt(reqBody.category_id),
        user_id: user_id,

        isFeatured: reqBody.featured,
        isBreaking: reqBody.breaking,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "Blog Updated Successfully",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let blog_id = searchParams.get("blog_id");

    const prisma = new PrismaClient();
    const result = await prisma.blogs.delete({
      where: {
        id: parseInt(blog_id),
      },
    });
    return NextResponse.json({
      status: "success",
      message: "Blog Deleted Successfully",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function PATCH(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let blog_id = searchParams.get("blog_id");
    const prisma = new PrismaClient();

    const result = await prisma.blogs.findUnique({
      where: {
        id: parseInt(blog_id),
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
