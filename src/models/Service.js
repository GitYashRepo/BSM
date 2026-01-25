import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    category: {type: mongoose.Schema.Types.ObjectId,ref: "Category",required: true },
    workName: { type: String },
    price: { type: Number },
    offerPrice: { type: Number },
    offerPercentage: { type: Number },
  },
  { timestamps: true }
);


ServiceSchema.pre("save", function (next) {
  const calculatedOffer =
    this.price - (this.price * this.offerPercentage) / 100;

  if (this.offerPrice !== Math.round(calculatedOffer)) {
    return next(
      new Error("Offer price does not match offer percentage")
    );
  }

  next();
});


export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
