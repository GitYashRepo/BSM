import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    workName: {
      type: String,
      required: true,
      trim: true,
    },

    // Free-text allows "500", "1000/1100/1200", etc.
    price: {
      type: String,
      required: true,
      trim: true,
    },

    offerPrice: {
      type: String,
      default: null,
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
