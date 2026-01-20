import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    heading: { type: String },
    workName: { type: String },
    price: { type: Number },
    offerPrice: { type: Number },
    offerPercentage: { type: Number },
    description: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
