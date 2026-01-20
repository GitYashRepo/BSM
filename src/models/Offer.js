import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema(
  {
    offerType: {
      type: String,
      enum: ["daily", "monthly", "modal"],
      required: true,
    },

    name: { type: String },
    serviceCategory: { type: String },
    serviceName: { type: String },
    image: { type: String }, // image URL
    price: { type: Number },
    details: { type: String },
    description: { type: String },
    timeline: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Offer ||
  mongoose.model("Offer", OfferSchema);
