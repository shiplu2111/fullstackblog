import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let blog_id = searchParams.get("blog_id");
    const prisma = new PrismaClient();

    const result = await prisma.blogs.findUnique({
      where: {
        slug: blog_id,
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
