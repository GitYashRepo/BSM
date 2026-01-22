import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import { requireAdmin } from "@/lib/requireAdmin";

export async function GET(req) {
  await connectDB();
  const services = await Service.find();
  return Response.json(services);
}

export async function POST(req) {
  const admin = requireAdmin(req);
  if (!admin) return Response.json({ message: "Unauthorized" }, { status: 401 });

  await connectDB();
  const data = await req.json();
  const service = await Service.create(data);

  return Response.json(service);
}

export async function PUT(req) {
  const admin = requireAdmin(req);
  if (!admin) return Response.json({ message: "Unauthorized" }, { status: 401 });

  await connectDB();
  const { id, ...data } = await req.json();

  const updated = await Service.findByIdAndUpdate(id, data, { new: true });
  return Response.json(updated);
}

export async function DELETE(req) {
  const admin = requireAdmin(req);
  if (!admin) return Response.json({ message: "Unauthorized" }, { status: 401 });

  await connectDB();
  const { id } = await req.json();

  await Service.findByIdAndDelete(id);
  return Response.json({ message: "Deleted" });
}
