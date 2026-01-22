import { connectDB } from "@/lib/mongodb";
import SubAdmin from "@/models/SubAdmin";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET_PRICE || "super_secret_jwt_key";

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();

  const admin = await SubAdmin.findOne({ email });
  if (!admin) {
    return new Response(JSON.stringify({ message: "Admin not found" }), { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
   console.log("Stored hash:", admin.password);
   console.log("Given password:", password);
    return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
  }

  const token = jwt.sign({ id: admin._id, role: "admin" }, JWT_SECRET, { expiresIn: "1h" });

  const cookieStore = await cookies();
  cookieStore.set({
    name: "subadmin_token",
    value: token,
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 3600,
    path: "/",
  });

  return new Response(JSON.stringify({ message: "Login successful" }), { status: 200 });
}
