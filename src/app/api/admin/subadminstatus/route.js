import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET_PRICE || "super_secret_jwt_key";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("subadmin_token")?.value;

    if (!token) {
      return new Response(JSON.stringify({ isAdmin: false }), { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    return new Response(JSON.stringify({ isAdmin: true, id: decoded.id }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ isAdmin: false }), { status: 401 });
  }
}
