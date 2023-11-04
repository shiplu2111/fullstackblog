import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function DELETE(req, res) {
  try {
    const cookieStore = cookies();
    cookieStore.delete("token");
    return NextResponse.json({
      status: "success",
      message: "Logout Successfully",
    });
  } catch (e) {
    return NextResponse.json({
      status: "Fail",
      message: "Something went wrong",
      data: e.toString(),
    });
  }
}
