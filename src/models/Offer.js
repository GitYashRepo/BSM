import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["daily", "seasonal"],
    required: true
  },

  heading: String,
  description: String,
  image: String,

  regularPrice: Number,
  discountedPrice: Number,
  discountPercentage: Number,

  validTill: Date,

  isActive: { type: Boolean, default: true }
}, { timestamps: true });


export default mongoose.models.Offer ||
  mongoose.model("Offer", OfferSchema);
