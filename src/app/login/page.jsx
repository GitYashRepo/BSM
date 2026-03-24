"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
   const [role, setRole] = useState("admin");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   async function handleSubmit(e) {
      e.preventDefault();
      setError("");
      setLoading(true);

      const apiUrl =
         role === "admin"
            ? "/api/admin/login"
            : "/api/admin/loginpricecheck";


      try {
         const res = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            credentials: "include",
         });

         const data = await res.json();

         if (res.ok) {
            setTimeout(() => {
               role === "admin"
                  ? (window.location.href = "/admin/dashboard")
                  : (window.location.href = "/sub-admin/services");
            }, 500);
         } else {
            setError(data.message || "Login failed");
            setLoading(false);
         }
      } catch (err) {
         console.error(err);
         setError("Something went wrong. Try again.");
         setLoading(false);
      }
   }

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
         <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm bg-white border rounded-lg shadow-md p-6 flex flex-col gap-4"
         >
            <h2 className="text-2xl font-bold text-center">Admin Panel Login</h2>

            <select
               value={role}
               onChange={(e) => setRole(e.target.value)}
               className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
            >
               <option value="admin">Login as Admin</option>
            </select>

            <input
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
               className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
            />

            <div className="relative">
               <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border p-2 rounded-md w-full pr-10 focus:ring-2 focus:ring-blue-400"
               />
               <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
               >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
               </button>
            </div>

            {error && (
               <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
               disabled={loading}
               className={`flex justify-center items-center gap-2 bg-blue-500 text-white p-2 rounded-md transition ${loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-blue-600"
                  }`}
            >
               {loading ? (
                  <>
                     <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                     Logging in...
                  </>
               ) : (
                  "Login"
               )}
            </button>
         </form>
      </div>
   );
}
