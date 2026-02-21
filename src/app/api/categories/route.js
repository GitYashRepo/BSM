import { connectDB } from "@/lib/mongodb";
import Category from "@/models/Category";
import { verifyToken } from "@/lib/auth";

// GET – List categories sorted by order
export async function GET() {
  await connectDB();
  const categories = await Category.find().sort({ order: 1, createdAt: 1 });
  return Response.json(categories);
}

// POST – Create category
export async function POST(req) {
  try {
    await connectDB();
    const { name, order } = await req.json();

    const exists = await Category.findOne({ name });
    if (exists) {
      return Response.json({ message: "Category already exists" }, { status: 400 });
    }

    // Auto-assign next order position if not provided
    let sequence = 0;
    if (order !== undefined && order !== null && order !== "") {
      sequence = Number(order);
    } else {
      const count = await Category.countDocuments();
      sequence = count;
    }

    const created = await Category.create({ name, order: sequence });
    return Response.json(created);
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}

// PUT – Update category name OR bulk reorder
// Body: { id, name }  → rename single
// Body: { reorder: [{ id, order }, ...] }  → save sequence
export async function PUT(req) {
  const user = verifyToken(req);
  if (!user) return Response.json({ message: "Unauthorized" }, { status: 401 });

  await connectDB();
  const body = await req.json();

  // Bulk reorder
  if (body.reorder) {
    await Promise.all(
      body.reorder.map(({ id, order }) =>
        Category.findByIdAndUpdate(id, { order })
      )
    );
    return Response.json({ message: "Order updated" });
  }

  // Rename
  const { id, name } = body;
  if (!id || !name) {
    return Response.json({ message: "Category ID and name are required" }, { status: 400 });
  }
  const updated = await Category.findByIdAndUpdate(id, { name }, { new: true, runValidators: true });
  return Response.json(updated);
}

// DELETE – Remove category
export async function DELETE(req) {
  const user = verifyToken(req);
  if (!user) return Response.json({ message: "Unauthorized" }, { status: 401 });

  await connectDB();
  const { id } = await req.json();
  if (!id) return Response.json({ message: "Category ID is required" }, { status: 400 });

  await Category.findByIdAndDelete(id);
  return Response.json({ message: "Category deleted" });
}
