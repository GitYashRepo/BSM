import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET_PRICE);

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("subadmin_token")?.value;

  if (!token) {
    return Response.json({ role: null });
  }

  try {
    const { payload } = await jwtVerify(token, SECRET);
    return Response.json({ role: payload.role });
  } catch {
    return Response.json({ role: null });
  }
}
