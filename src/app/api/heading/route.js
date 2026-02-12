import { connectDB } from "@/lib/mongodb";
import WorkHeading from "@/models/WorkHeading";
import { requireAdmin } from "@/lib/requireAdmin";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const subCategoryId = searchParams.get("subCategoryId");

  const filter = subCategoryId ? { subCategory: subCategoryId } : {};

  const data = await WorkHeading.find(filter)
    .populate("subCategory", "name")
    .sort({ createdAt: -1 });

  return Response.json(data);
}

export async function POST(req) {
  const admin = requireAdmin(req);
  if (!admin) return Response.json({ msg: "Unauthorized" }, { status: 401 });

  await connectDB();
  const body = await req.json();

  const created = await WorkHeading.create(body);
  return Response.json(created);
}

export async function DELETE(req) {
  const admin = requireAdmin(req);
  if (!admin) return Response.json({ msg: "Unauthorized" }, { status: 401 });

  await connectDB();
  const { id } = await req.json();
  await WorkHeading.findByIdAndDelete(id);

  return Response.json({ msg: "Deleted" });
}
