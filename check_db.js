import mongoose from "mongoose";
import GalleryImage from "./src/models/GalleryImage.js";
import 'dotenv/config';

async function check() {
  await mongoose.connect(process.env.MONGODB_URI);
  const images = await GalleryImage.find();
  console.log(images);
  process.exit(0);
}

check();
