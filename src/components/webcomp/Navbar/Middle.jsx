"use client";

import { Phone, LogOut, MessageCircle, Menu, Instagram, Facebook, } from "lucide-react";
import AppointmentPopover from "../Appointment/AppointmentPopover";
import useAdminAuth from "@/hooks/useAdminAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";


const MiddleBar = ({ onMenuClick }) => {
   const role = useAdminAuth();
   const router = useRouter();

   async function handleLogout() {
      try {
         if (role === "admin") {
            await fetch("/api/admin/logout", { method: "POST" });
         }

         if (role === "subadmin") {
            await fetch("/api/admin/logoutsubadmin", { method: "POST" });
         }

         router.push("/login");
         // Force reload to clear all states and cached roles
         window.location.reload();
      } catch (err) {
         console.error(err);
      }
   }

   return (
      <div className="bg-[#191A1A] px-2 md:px-14">
         <div className="container mx-auto py-2">
            <div className="flex items-center justify-between gap-6">
               {/* Logo */}
               <div className="flex-shrink-0">
                  <a href="/" className="flex items-center gap-2 md:gap-3">
                     <img
                        src="/logo/logo.jpg"
                        alt="BSM Logo"
                        className="w-10 md:w-12 rounded-full"
                     />

                     <div className="flex flex-col">
                        <div
                           className="flex flex-row text-[#D99726] font-bold whitespace-nowrap justify-between text-base md:text-xl"
                        >
                           <span>B</span>
                           <span>L</span>
                           <span>U</span>
                           <span>S</span>
                           <span>H</span>
                        </div>

                        {/* Subtitle */}
                        <span className="text-[12px] md:text-xs font-bold tracking-widest uppercase text-white">
                           By Sakshi
                        </span>
                     </div>
                  </a>
               </div>


               {/* Contact & Actions */}
               <div className="flex items-center gap-6">
                  {!role && (
                     <ul className="flex gap-4">
                        {[
                           { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/sakshi.makeovers" },
                           { icon: Facebook, label: "Facebook", link: "https://www.facebook.com/share/1C6Croo93d/?mibextid=wwXIfr" },
                        ].map(({ icon: Icon, label, link }) => (
                           <li key={label}>
                              <a
                                 href={link}
                                 target="_blank"
                                 className="text-gray-400 hover:text-[#D99726] transition-colors duration-300"
                                 aria-label={label}
                              >
                                 <Icon className="w-4 h-4" />
                              </a>
                           </li>
                        ))}
                     </ul>
                  )}


                  <div className="flex items-center gap-3">
                     {!role && (
                        <div className="hidden md:block">
                           <AppointmentPopover />
                        </div>
                     )}

                     {/* Logout Button */}
                     {role && (
                        <button
                           onClick={handleLogout}
                           className="flex items-center gap-2 p-1 text-xl rounded-sm border bg-red-600 text-white hover:bg-red-700 transition"
                        >
                           <LogOut size={16} />
                        </button>
                     )}

                     <button
                        onClick={onMenuClick}
                        className="lg:hidden p-1 rounded-sm border bg-white"
                     >
                        <Menu size={16} />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div >
   );
};

export default MiddleBar;
