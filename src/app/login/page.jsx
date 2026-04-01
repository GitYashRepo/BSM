"use client";

import { useState } from "react";
import { Eye, EyeOff, ShieldCheck, Lock } from "lucide-react";

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
               if (role === "admin") {
                  window.location.href = "/admin/dashboard";
               } else {
                  window.location.href = "/ourpricing";
               }
            }, 500);
         } else {
            setError(data.message || data.error || "Login failed");
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
            className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-xl p-8 flex flex-col gap-6"
         >
            {/* Header */}
            <div className="flex flex-col items-center gap-3 mb-2">
               <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                  {role === "admin" ? (
                     <ShieldCheck size={28} className="text-black" />
                  ) : (
                     <Lock size={28} className="text-black" />
                  )}
               </div>
               <div className="text-center">
                  <h2 className="text-2xl font-bold text-black tracking-tight">
                     {role === "admin" ? "Admin Login" : "Sub-Admin Login"}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                     {role === "admin"
                        ? "Restricted access for administrators"
                        : "Access to private pricing details"}
                  </p>
               </div>
            </div>

            {/* Role Selector */}
            <div className="flex rounded-lg overflow-hidden border border-gray-200 p-1 bg-gray-50">
               <button
                  type="button"
                  onClick={() => { setRole("admin"); setError(""); }}
                  className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-md ${
                     role === "admin"
                        ? "bg-black text-white shadow-md"
                        : "bg-transparent text-gray-500 hover:text-black"
                  }`}
               >
                  Admin
               </button>
               <button
                  type="button"
                  onClick={() => { setRole("subadmin"); setError(""); }}
                  className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-md ${
                     role === "subadmin"
                        ? "bg-black text-white shadow-md"
                        : "bg-transparent text-gray-500 hover:text-black"
                  }`}
               >
                  Sub-Admin
               </button>
            </div>

            {/* Fields Container */}
            <div className="flex flex-col gap-4">
               {/* Email */}
               <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input
                     type="email"
                     placeholder="name@gmail.com"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     className="border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all bg-white"
                  />
               </div>

               {/* Password */}
               <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Password</label>
                  <div className="relative">
                     <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border border-gray-200 p-3 rounded-lg w-full pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all bg-white"
                     />
                     <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                     >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                     </button>
                  </div>
               </div>
            </div>

            {/* Error Message */}
            {error && (
               <div className="bg-red-50 border border-red-100 text-red-600 text-xs py-3 px-4 rounded-lg text-center animate-pulse">
                  {error}
               </div>
            )}

            {/* Submit Button */}
            <button
               disabled={loading}
               className={`flex justify-center items-center gap-2 bg-black text-white py-3.5 rounded-lg font-bold text-sm uppercase tracking-widest transition-all ${
                  loading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-800 active:scale-[0.98]"
               }`}
            >
               {loading ? (
                  <>
                     <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                     Processing...
                  </>
               ) : (
                  "Sign In"
               )}
            </button>

            {/* Footer Label */}
            <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest mt-1">
               Secure Login Portal • Blush By Sakshi
            </p>
         </form>
      </div>
   );
}
