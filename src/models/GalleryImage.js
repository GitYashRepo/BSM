import mongoose from "mongoose";

const GalleryImageSchema = new mongoose.Schema(
  {
    heading: { type: String },
    description: { type: String },
    src: { type: String },
    alt: { type: String },
    category: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.GalleryImage ||
  mongoose.model("GalleryImage", GalleryImageSchema);
