import { connectDB } from "@/lib/mongodb";
import SubCategory from "@/models/SubCategory";
import { requireAdmin } from "@/lib/requireAdmin";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");

  const filter = categoryId ? { category: categoryId } : {};

  const data = await SubCategory.find(filter)
    .populate("category", "name")
    .sort({ createdAt: -1 });

  return Response.json(data);
}

export async function POST(req) {
  const admin = requireAdmin(req);
  if (!admin) return Response.json({ msg: "Unauthorized" }, { status: 401 });

  await connectDB();
  const { name, category } = await req.json();

  const created = await SubCategory.create({ name, category });
  return Response.json(created);
}

export async function DELETE(req) {
  const admin = requireAdmin(req);
  if (!admin) return Response.json({ msg: "Unauthorized" }, { status: 401 });

  await connectDB();
  const { id } = await req.json();
  await SubCategory.findByIdAndDelete(id);

  return Response.json({ msg: "Deleted" });
}
