import mongoose from "mongoose";

const FranchiseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    experience: { type: String },
    investment: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Franchise ||
  mongoose.model("Franchise", FranchiseSchema);
