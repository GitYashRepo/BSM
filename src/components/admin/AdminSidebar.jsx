"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
   LayoutDashboard, 
   Grid, 
   Image as ImageIcon, 
   Tag, 
   Users, 
   X 
} from "lucide-react";

const navItems = [
   { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
   { label: "Categories", href: "/admin/categories", icon: Grid },
   { label: "Gallery", href: "/admin/gallery", icon: ImageIcon },
   { label: "Offers", href: "/admin/offers", icon: Tag },
   { label: "Franchise", href: "/admin/franchise", icon: Users },
];

export default function AdminSidebar({ onClose }) {
   const pathname = usePathname();

   return (
      <aside className="w-64 bg-black text-white h-screen flex flex-col border-r border-white/10 shadow-2xl overflow-y-auto">
         {/* Sidebar Header */}
         <div className="p-6 flex items-center justify-between border-b border-white/10">
            <h1 className="text-xl font-black tracking-tighter uppercase">Salon Admin</h1>
            {onClose && (
               <button 
                  onClick={onClose} 
                  className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
               >
                  <X size={20} />
               </button>
            )}
         </div>

         {/* Navigation Links */}
         <nav className="flex-1 p-4 flex flex-col gap-2 mt-4 text-sm font-medium">
            {navItems.map((item) => {
               const isActive = pathname === item.href;
               const Icon = item.icon;

               return (
                  <Link
                     key={item.href}
                     href={item.href}
                     onClick={() => setTimeout(onClose, 150)}
                     className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                        isActive 
                           ? "bg-white text-black" 
                           : "text-gray-400 hover:bg-white/5 hover:text-white"
                     }`}
                  >
                     <Icon size={18} className={isActive ? "text-black" : "text-gray-500 group-hover:text-white"} />
                     {item.label}
                  </Link>
               );
            })}
         </nav>

         {/* Sidebar Footer */}
         <div className="p-6 border-t border-white/10">
            <Link 
               href="/" 
               className="text-[10px] text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
            >
               View Live Site
            </Link>
         </div>
      </aside>
   );
}
