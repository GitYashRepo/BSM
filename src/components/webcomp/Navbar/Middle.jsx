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
                  <a href="/" className="flex items-center gap-3">
                     <img
                        src="/logo/logo.jpg"
                        alt="BSM Logo"
                        className="w-14 md:w-20 rounded-full border-2 border-[#D99726]"
                     />

                     <div className="flex flex-col">
                        <div
                           className="flex flex-row text-[#D99726] font-extrabold whitespace-nowrap justify-between text-xl md:text-3xl tracking-tighter"
                        >
                           <span>B</span>
                           <span>L</span>
                           <span>U</span>
                           <span>S</span>
                           <span>H</span>
                        </div>

                        {/* Subtitle */}
                        <span className="text-[14px] md:text-sm font-bold tracking-[0.2em] uppercase text-white -mt-1 text-center">
                           By Sakshi
                        </span>
                     </div>
                  </a>
               </div>


               {/* Contact & Actions */}
               <div className="flex items-center gap-2">
                  {!role && (
                     <ul className="flex gap-2">
                        {[
                           {
                              icon: Instagram,
                              label: "Instagram",
                              link: "https://www.instagram.com/sakshi.makeovers",
                              color: "#E4405F"
                           },
                           {
                              icon: Facebook,
                              label: "Facebook",
                              link: "https://www.facebook.com/share/1C6Croo93d/?mibextid=wwXIfr",
                              color: "#1877F2"
                           },
                        ].map(({ icon: Icon, label, link, color }) => (
                           <li key={label}>
                              <a
                                 href={link}
                                 target="_blank"
                                 className="transition-transform duration-300 hover:scale-110 block"
                                 style={{ color }}
                                 aria-label={label}
                              >
                                 <Icon className="w-6 h-6" />
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
