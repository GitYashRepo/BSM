import { initAdmin } from "@/lib/initAdmin";

export async function POST() {
  try {
    await initAdmin();
    return new Response(
      JSON.stringify({ message: "Admin initialization successful" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Admin init error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to initialize admin" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
