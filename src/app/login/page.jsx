"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // 👁️ import icons

export default function LoginPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false); // 👈 visibility state
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   async function handleSubmit(e) {
      e.preventDefault();
      setError("");
      setLoading(true);

      try {
         const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            credentials: "include",
         });

         const data = await res.json();

         if (res.ok) {
            setTimeout(() => {
               window.location.href = "/admin/dashboard";
            }, 600);
         } else {
            setError(data.message || "Login failed. Please try again.");
            setLoading(false);
         }
      } catch (err) {
         console.error("Login error:", err);
         setError("Something went wrong. Please try again later.");
         setLoading(false);
      }
   }

   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
         <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 border border-gray-200 rounded-lg bg-white shadow-md w-full max-w-sm"
         >
            <h2 className="text-2xl font-bold text-center text-gray-800">
               Admin Login
            </h2>

            {/* Email Input */}
            <input
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
               required
            />

            {/* Password Input with Eye Toggle */}
            <div className="relative">
               <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                  required
               />
               <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
               >
                  {showPassword ? (
                     <EyeOff className="w-5 h-5" />
                  ) : (
                     <Eye className="w-5 h-5" />
                  )}
               </button>
            </div>

            {/* Error Message */}
            {error && (
               <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Submit Button with Spinner */}
            <button
               type="submit"
               disabled={loading}
               className={`flex justify-center items-center gap-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors ${loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
            >
               {loading ? (
                  <>
                     <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
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
