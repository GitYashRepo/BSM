import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "super_secret_jwt_key";

export async function GET(req) {
  const auth = req.headers.get("authorization");
  if (!auth) return new Response(JSON.stringify({ valid: false }), { status: 401 });

  const token = auth.split(" ")[1];
  try {
    jwt.verify(token, JWT_SECRET);
    return new Response(JSON.stringify({ valid: true }));
  } catch (err) {
    return new Response(JSON.stringify({ valid: false }), { status: 401 });
  }
}
