import Admin from "@/models/Admin";
import dbConnect from "@/lib/db";
import bcrypt from "bcryptjs";

const ADMIN_EMAIL = "sakshimakeovers@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const ADMIN_NAME = "BSM Admin";

export async function initAdmin() {
  await dbConnect();
   // Delete any existing admin with same email
  await Admin.deleteMany({ email: ADMIN_EMAIL });

  const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);
  await Admin.create({
    name: ADMIN_NAME,
    email: ADMIN_EMAIL,
    password: hashed,
  });

  console.log("✅ Admin recreated successfully with correct password");
}
