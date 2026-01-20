import { cookies } from "next/headers";

export async function POST() {
  cookies().set({
    name: "admin_token",
    value: "",
    maxAge: 0,
    path: "/",
  });

  return new Response(JSON.stringify({ message: "Logged out" }), { status: 200 });
}
