import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },

    workHeading: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WorkHeading",
      required: true,
    },

    workName: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    offerPrice: {
      type: Number,
      default: null,
    },

    offerPercentage: {
      type: Number,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

/* ---------------- VALIDATION LOGIC ---------------- */

ServiceSchema.pre("save", function (next) {
  if (this.offerPrice != null && this.offerPercentage != null) {
    const calculated =
      this.price - (this.price * this.offerPercentage) / 100;

    if (Math.round(calculated) !== this.offerPrice) {
      return next(
        new Error(
          "Offer price and percentage do not match"
        )
      );
    }
  }

  next();
});

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
