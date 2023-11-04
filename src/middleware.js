import { NextResponse } from "next/server";
import { VerifyToken } from "@/utility/JWTTokenHelper";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    try {
      let token = req.cookies.get("token");
      let payload = await VerifyToken(token["value"]);

      const requestHeader = new Headers(req.headers);
      requestHeader.set("email", payload["email"]);
      requestHeader.set("id", payload["id"]);

      return NextResponse.next({
        request: { headers: requestHeader },
      });
    } catch (e) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/login")) {
    try {
      let token = req.cookies.get("token");
      let payload = await VerifyToken(token["value"]);

      const requestHeader = new Headers(req.headers);
      requestHeader.set("email", payload["email"]);
      requestHeader.set("id", payload["id"]);
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } catch (e) {
      return NextResponse.next();
    }
  }

  if (req.nextUrl.pathname.startsWith("/register")) {
    try {
      let token = req.cookies.get("token");
      let payload = await VerifyToken(token["value"]);

      const requestHeader = new Headers(req.headers);
      requestHeader.set("email", payload["email"]);
      requestHeader.set("id", payload["id"]);
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } catch (e) {
      return NextResponse.next();
    }
  }
}
