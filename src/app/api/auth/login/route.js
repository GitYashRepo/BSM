import jwt from "jsonwebtoken";

export async function POST(req) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ message: "Invalid password" }, { status: 401 });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return Response.json({ token });
}
