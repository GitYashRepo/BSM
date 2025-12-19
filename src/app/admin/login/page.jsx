"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
   const [password, setPassword] = useState("");
   const router = useRouter();

   async function handleLogin() {
      const res = await fetch("/api/auth/login", {
         method: "POST",
         body: JSON.stringify({ password }),
      });

      if (res.ok) {
         const { token } = await res.json();
         localStorage.setItem("token", token);
         router.push("/admin/dashboard");
      } else {
         alert("Wrong password");
      }
   }

   return (
      <div className="p-10 max-w-md mx-auto">
         <h1 className="text-2xl mb-4">Admin Login</h1>
         <input
            type="password"
            className="border p-2 w-full"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
         />
         <button
            onClick={handleLogin}
            className="mt-4 bg-black text-white px-4 py-2"
         >
            Login
         </button>
      </div>
   );
}
