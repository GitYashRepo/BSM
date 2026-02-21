import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");

  const filter = {};
  if (categoryId) filter.category = categoryId;

  const data = await Service.find(filter)
    .populate("category", "name order")
    .sort({ createdAt: -1 });

  return Response.json(data);
}

export async function POST(req) {
  const user = verifyToken(req);
  if (!user) return Response.json({ message: "Unauthorized" }, { status: 401 });

  await connectDB();
  const body = await req.json();
  const { category, workName, price, offerPrice } = body;

  try {
    const created = await Service.create({
      category,
      workName,
      price: price?.trim(),
      offerPrice: offerPrice?.trim() || null,
    });
    return Response.json(created);
  } catch (err) {
    return Response.json({ message: err.message }, { status: 400 });
  }
}

export async function PUT(req) {
  const user = verifyToken(req);
  if (!user) return Response.json({ message: "Unauthorized" }, { status: 401 });

  await connectDB();
  const body = await req.json();
  const { id, price, offerPrice, ...rest } = body;

  const updateData = {
    ...rest,
    ...(price !== undefined && { price: price?.trim() }),
    ...(offerPrice !== undefined && { offerPrice: offerPrice?.trim() || null }),
  };

  try {
    const updated = await Service.findByIdAndUpdate(id, updateData, { new: true });
    return Response.json(updated);
  } catch (err) {
    return Response.json({ message: err.message }, { status: 400 });
  }
}

export async function DELETE(req) {
  const user = verifyToken(req);
  if (!user) return Response.json({ message: "Unauthorized" }, { status: 401 });

  await connectDB();
  const { id } = await req.json();

  try {
    await Service.findByIdAndDelete(id);
    return Response.json({ message: "Deleted" });
  } catch (err) {
    return Response.json({ message: err.message }, { status: 400 });
  }
}
