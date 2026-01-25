import { connectDB } from "@/lib/mongodb";
import Category from "@/models/Category";
import { requireAdmin } from "@/lib/requireAdmin";

// ======================
// GET – List categories
// ======================
export async function GET() {
  await connectDB();
  const categories = await Category.find().sort({ createdAt: -1 });
  return Response.json(categories);
}

// ======================
// POST – Create category
// ======================
export async function POST(req) {
  const admin = requireAdmin(req);
  if (!admin) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const { name } = await req.json();

  if (!name) {
    return Response.json(
      { message: "Category name is required" },
      { status: 400 }
    );
  }

  const category = await Category.create({ name });
  return Response.json(category, { status: 201 });
}

// ======================
// PUT – Update category
// ======================
export async function PUT(req) {
  const admin = requireAdmin(req);
  if (!admin) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const { id, name } = await req.json();

  if (!id || !name) {
    return Response.json(
      { message: "Category ID and name are required" },
      { status: 400 }
    );
  }

  const updated = await Category.findByIdAndUpdate(
    id,
    { name },
    { new: true, runValidators: true }
  );

  return Response.json(updated);
}

// ======================
// DELETE – Remove category
// ======================
export async function DELETE(req) {
  const admin = requireAdmin(req);
  if (!admin) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const { id } = await req.json();

  if (!id) {
    return Response.json(
      { message: "Category ID is required" },
      { status: 400 }
    );
  }

  await Category.findByIdAndDelete(id);
  return Response.json({ message: "Category deleted" });
}
