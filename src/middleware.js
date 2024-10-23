import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  console.log("Token:", token);

  if (!token) {
    console.log("No token found, redirecting to login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const decoded = jwt.decode(token);

  if (!decoded || !decoded.role) {
    console.log("Invalid token or role missing, redirecting to login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const { role } = decoded;
  const url = req.nextUrl.clone();

  // Role-based access control
  if (url.pathname.startsWith("/admin") && role !== "admin") {
    console.log("User not admin, redirecting to home");
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (url.pathname.startsWith("/user") && role !== "user") {
    console.log("User not user role, redirecting to home");
    return NextResponse.redirect(new URL("/", req.url));
  }

  console.log("Access granted, proceeding to next");
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};
