import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const SubAdminSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, unique: true, required: true },
   password: { type: String, required: true },
});

export default mongoose.models.SubAdmin || mongoose.model("SubAdmin", SubAdminSchema);
