import mongoose from "mongoose";

const WorkHeadingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
    required: true
  }
}, { timestamps: true });

export default mongoose.models.WorkHeading ||
mongoose.model("WorkHeading", WorkHeadingSchema);
