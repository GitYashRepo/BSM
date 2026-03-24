import jwt from "jsonwebtoken";

export function verifyToken(req) {
  try {
    const adminToken = req.cookies.get("admin_token")?.value;
    const subAdminToken = req.cookies.get("subadmin_token")?.value;

    if (adminToken) {
      return jwt.verify(adminToken, process.env.JWT_SECRET);
    }

    if (subAdminToken) {
      return jwt.verify(subAdminToken, process.env.JWT_SECRET_PRICE);
    }

    return null;
  } catch {
    return null;
  }
}
