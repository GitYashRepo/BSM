import SubAdmin from "@/models/SubAdmin";
import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

const ADMIN_EMAIL = "sakshimakeovers@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PRICE_PASSWORD;
const ADMIN_NAME = "BSM Admin - Price View";

export async function priceSubAdmin() {
  await connectDB();
  await SubAdmin.deleteMany({ email: ADMIN_EMAIL });

  const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);
  await SubAdmin.create({
    name: ADMIN_NAME,
    email: ADMIN_EMAIL,
    password: hashed,
  });

  console.log("✅ Admin For Price View recreated successfully with correct password");
}
