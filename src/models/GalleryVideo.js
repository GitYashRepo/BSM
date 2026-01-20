import mongoose from "mongoose";

const GalleryVideoSchema = new mongoose.Schema(
  {
    heading: { type: String },
    description: { type: String },
    videoUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.GalleryVideo ||
  mongoose.model("GalleryVideo", GalleryVideoSchema);
