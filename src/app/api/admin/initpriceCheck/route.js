import { priceSubAdmin } from "@/lib/priceSubAdmin";

export async function POST() {
  try {
    await priceSubAdmin();
    return new Response(
      JSON.stringify({ message: "Sub-Admin initialization successful" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Sub-Admin init error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to initialize sub-admin" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
