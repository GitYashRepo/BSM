import { connectDB } from "@/lib/mongodb";
import Offer from "@/models/Offer";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  await connectDB();
  return Response.json(await Offer.find().sort({ createdAt: -1 }));
}

export async function POST(req) {
  const user = verifyToken(req);
  if (!user) return Response.json({ msg: "Unauthorized" }, { status: 401 });

  await connectDB();
  const body = await req.json();
  const created = await Offer.create(body);

  return Response.json(created);
}

export async function DELETE(req) {
  const user = verifyToken(req);
  if (!user) return Response.json({ msg: "Unauthorized" }, { status: 401 });

  await connectDB();
  const { id } = await req.json();
  await Offer.findByIdAndDelete(id);

  return Response.json({ msg: "Deleted" });
}
