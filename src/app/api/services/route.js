import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import { requireAdmin } from "@/lib/requireAdmin";

// ======================
// GET – List services
// Optional: ?categoryId=
// ======================
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId");

    const filter = categoryId ? { category: categoryId } : {};

    const services = await Service.find(filter)
      .populate("category", "name")
      .sort({ createdAt: -1 });

    return Response.json(services);
  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

// ======================
// POST – Create service
// ======================
export async function POST(req) {
  try {
    const admin = requireAdmin(req);
    if (!admin) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();
    const data = await req.json();

    const {
      category,
      workName,
      price,
      offerPrice,
      offerPercentage,
    } = data;

    // Basic validation
    if (
      !category ||
      !workName ||
      price == null ||
      offerPrice == null ||
      offerPercentage == null
    ) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const service = await Service.create({
      category,
      workName,
      price,
      offerPrice,
      offerPercentage,
    });

    return Response.json(service, { status: 201 });
  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 400 }
    );
  }
}

// ======================
// PUT – Update service
// ======================
export async function PUT(req) {
  try {
    const admin = requireAdmin(req);
    if (!admin) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();
    const { id, ...data } = await req.json();

    if (!id) {
      return Response.json(
        { message: "Service ID is required" },
        { status: 400 }
      );
    }

    const updated = await Service.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
        runValidators: true, // 🔥 important
      }
    );

    if (!updated) {
      return Response.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    return Response.json(updated);
  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 400 }
    );
  }
}

// ======================
// DELETE – Remove service
// ======================
export async function DELETE(req) {
  try {
    const admin = requireAdmin(req);
    if (!admin) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();
    const { id } = await req.json();

    if (!id) {
      return Response.json(
        { message: "Service ID is required" },
        { status: 400 }
      );
    }

    await Service.findByIdAndDelete(id);

    return Response.json({ message: "Deleted successfully" });
  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
