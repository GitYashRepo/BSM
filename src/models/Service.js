import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.models.Service || mongoose.model("Service", ServiceSchema);
