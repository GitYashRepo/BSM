import { connectDB } from "@/lib/mongodb";
import GalleryImage from "@/models/GalleryImage";
import { requireAdmin } from "@/lib/requireAdmin";

export async function GET() {
  await connectDB();
  return Response.json(await GalleryImage.find().sort({ createdAt: -1 }));
}

export async function POST(req) {
  const admin = requireAdmin(req);
  if (!admin) return Response.json({ msg: "Unauthorized" }, { status: 401 });

  await connectDB();
  const body = await req.json();
  const created = await GalleryImage.create(body);

  return Response.json(created);
}
