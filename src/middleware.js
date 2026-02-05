import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const ADMIN_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const SUBADMIN_SECRET = new TextEncoder().encode(process.env.JWT_SECRET_PRICE);

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isSubAdminRoute = pathname.startsWith("/sub-admin");

  if (!isAdminRoute && !isSubAdminRoute) {
    return NextResponse.next();
  }

  // Try admin token first
  const adminToken = req.cookies.get("admin_token")?.value;
  const subAdminToken = req.cookies.get("subadmin_token")?.value;

  try {
    /** ---------------- ADMIN TOKEN ---------------- */
    if (adminToken) {
      const { payload } = await jwtVerify(adminToken, ADMIN_SECRET);

      if (payload.role === "admin") {
        // ✅ Admin can access BOTH admin & sub-admin
        return NextResponse.next();
      }
    }

    /** ---------------- SUBADMIN TOKEN ---------------- */
    if (subAdminToken && isSubAdminRoute) {
      const { payload } = await jwtVerify(subAdminToken, SUBADMIN_SECRET);

      if (payload.role === "subadmin") {
        // ✅ Sub-admin can access ONLY sub-admin
        return NextResponse.next();
      }
    }

    throw new Error("Unauthorized");
  } catch (err) {
    const response = NextResponse.redirect(new URL("/login", req.url));

    response.cookies.set("admin_token", "", { maxAge: 0 });
    response.cookies.set("subadmin_token", "", { maxAge: 0 });

    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*", "/sub-admin/:path*"],
};
