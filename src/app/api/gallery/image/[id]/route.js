import { connectDB } from "@/lib/mongodb";
import GalleryImage from "@/models/GalleryImage";
import { requireAdmin } from "@/lib/requireAdmin";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(req, context) {
  try {
    const admin = await requireAdmin(req);
    if (!admin) return Response.json({ msg: "Unauthorized" }, { status: 401 });

    await connectDB();

    // params is not available synchronously in Next.js 15, but since we are not sure what version, we can await params just in case but usually it's passed as second argument. Next.js 14 and below uses { params }, Next.js 15 requires awaiting it. Let's assume standard app router.
    const params =
      typeof context.params?.then === "function"
        ? await context.params
        : context.params;

    const { id } = params;

    if (!id)
      return Response.json({ msg: "Missing ID" }, { status: 400 });

    const image = await GalleryImage.findById(id);
    if (!image) return Response.json({ msg: "Image not found" }, { status: 404 });

    if (image.src && image.src.includes("cloudinary.com")) {
        const match = image.src.match(/\/upload\/(?:v\d+\/)?([^\.]+)/);
        if (match && match[1]) {
            try {
                await cloudinary.uploader.destroy(match[1]);
            } catch (err) {
                console.error("Cloudinary delete error:", err);
            }
        }
    }

    await GalleryImage.findByIdAndDelete(id);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return Response.json({ msg: "Failed to delete" }, { status: 500 });
  }
}
