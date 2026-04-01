"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Book from "@/components/bookflip/Book";
import { LogOut } from "lucide-react";

export default function OurPricing() {
   const router = useRouter();
   const [role, setRole] = useState(null);
   const [checking, setChecking] = useState(true);

   useEffect(() => {
      async function checkAuth() {
         // Check admin token first
         const adminRes = await fetch("/api/admin/status", { credentials: "include" });
         const adminData = await adminRes.json();

         if (adminData.role === "admin") {
            setRole("admin");
            setChecking(false);
            return;
         }

         // Check subadmin token
         const subRes = await fetch("/api/admin/subadminstatus", { credentials: "include" });
         const subData = await subRes.json();

         if (subData.role === "subadmin") {
            setRole("subadmin");
            setChecking(false);
            return;
         }

         // Not authenticated — redirect to login
         router.replace("/login");
      }

      checkAuth();
   }, [router]);

   async function handleLogout() {
      if (role === "admin") {
         await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
         window.location.href = "/login";
      } else {
         await fetch("/api/admin/logoutsubadmin", { method: "POST", credentials: "include" });
         window.location.href = "/login";
      }
   }

   if (checking) {
      return (
         <div className="flex items-center justify-center min-h-screen">
            <span className="w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></span>
         </div>
      );
   }

   return (
      <div className="relative w-[90vw] min-h-screen flex items-center justify-center mx-auto py-10">
         <Book />
      </div>
   );
}
