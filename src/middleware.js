import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const decoded = jwt.decode(token);

  if (!decoded || !decoded.role) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const { role } = decoded;
  const url = req.nextUrl.clone();

  // Role-based access control
  if (url.pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (url.pathname.startsWith("/user") && role !== "user") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};
