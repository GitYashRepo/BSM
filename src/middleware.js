import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const ADMIN_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const ADMINPRICE_SECRET = new TextEncoder().encode(process.env.JWT_SECRET_PRICE);

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isAdminPriceRoute = pathname.startsWith("/sub-admin");

  // Only protect secured routes
  if (!isAdminRoute && !isAdminPriceRoute) {
    return NextResponse.next();
  }

  const token = isAdminRoute
    ? req.cookies.get("admin_token")?.value
    : req.cookies.get("subadmin_token")?.value;

  const secret = isAdminRoute
    ? ADMIN_SECRET
    : ADMINPRICE_SECRET;

  if (!token) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  try {
    const { payload } = await jwtVerify(token, secret);

    // 🔒 Role enforcement
    if (isAdminRoute && payload.role !== "admin") {
      throw new Error("Invalid admin role");
    }

    if (isAdminPriceRoute && payload.role !== "subadmin") {
      throw new Error("Invalid adminprice role");
    }

    return NextResponse.next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);

    const response = NextResponse.redirect(
      new URL("/login", req.url)
    );

    response.cookies.set(
      isAdminRoute ? "admin_token" : "subadmin_token",
      "",
      { maxAge: 0 }
    );

    return response;
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/adminprice/:path*",
  ],
};
