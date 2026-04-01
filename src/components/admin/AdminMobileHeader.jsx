"use client";

import { Menu, User } from "lucide-react";

export default function AdminMobileHeader({ onMenuClick }) {
   return (
      <header className="lg:hidden sticky top-0 z-[1000] bg-black text-white px-4 py-4 flex items-center justify-between border-b border-white/10 shadow-lg">
         {/* Hamburger Menu Icon */}
         <button 
            onClick={onMenuClick} 
            className="p-2 hover:bg-white/10 rounded-lg transition-colors active:scale-95"
         >
            <Menu size={24} />
         </button>

         {/* Center Title */}
         <div className="flex flex-col items-center">
            <h1 className="text-sm font-black tracking-tighter uppercase mb-0.5">Salon Admin</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-none">Management Dashboard</p>
         </div>

         {/* Admin Profile/Logout placeholder icon */}
         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/5 shadow-inner">
            <User size={18} className="text-gray-400" />
         </div>
      </header>
   );
}
