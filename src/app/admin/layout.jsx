"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminMobileHeader from "@/components/admin/AdminMobileHeader";

export default function AdminLayout({ children }) {
   const [sidebarOpen, setSidebarOpen] = useState(false);

   // Prevent body scroll when mobile sidebar is open
   useEffect(() => {
      if (sidebarOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "";
      }
      return () => (document.body.style.overflow = "");
   }, [sidebarOpen]);

   return (
      <div className="flex min-h-screen bg-gray-50 flex-col lg:flex-row relative">
         
         {/* MOBILE HEADER */}
         <AdminMobileHeader onMenuClick={() => setSidebarOpen(true)} />

         {/* SIDEBAR (DESKTOP) */}
         <div className="hidden lg:block lg:flex-shrink-0">
            <AdminSidebar />
         </div>

         {/* SIDEBAR (MOBILE DRAWER) */}
         {/* Backdrop */}
         <div 
            className={`lg:hidden fixed inset-0 bg-black/50 z-[2000] backdrop-blur-sm transition-opacity duration-300 ${
               sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setSidebarOpen(false)}
         />
         
         {/* Drawer Content */}
         <div 
            className={`lg:hidden fixed left-0 top-0 h-screen z-[2001] transition-transform duration-300 ease-in-out shadow-2xl ${
               sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
         >
            <AdminSidebar onClose={() => setSidebarOpen(false)} />
         </div>

         {/* MAIN CONTENT AREA */}
         <main className="flex-1 w-full relative min-h-screen p-4 md:p-8 lg:p-10 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
               {children}
            </div>
         </main>
      </div>
   );
}
