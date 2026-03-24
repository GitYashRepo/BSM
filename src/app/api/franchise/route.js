import { connectDB } from "@/lib/mongodb";
import Franchise from "@/models/Franchise";
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  const user = verifyToken(req);
  if (!user) return Response.json({ message: "Unauthorized" }, { status: 401 });

  await connectDB();
  const forms = await Franchise.find().sort({ createdAt: -1 });

  return Response.json(forms);
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const created = await Franchise.create(body);

    return Response.json(created);
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  const user = verifyToken(req);
  if (!user) return Response.json({ message: "Unauthorized" }, { status: 401 });

  await connectDB();
  const { id } = await req.json();

  try {
    await Franchise.findByIdAndDelete(id);
    return Response.json({ message: "Deleted" });
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
