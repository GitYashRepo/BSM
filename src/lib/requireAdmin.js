import { verifyToken } from "./auth";

export function requireAdmin(req) {
  const user = verifyToken(req);
  if (!user || user.role !== "admin") {
    return null;
  }
  return user;
}
