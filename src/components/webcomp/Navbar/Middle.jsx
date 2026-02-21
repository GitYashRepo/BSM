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
            await fetch("/api/admin/logoutSubAdmin", { method: "POST" });
         }

         router.refresh();
         router.push("/login");
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
                           className="flex flex-row text-[#D99726] font-bold whitespace-nowrap justify-between text-xl"
                        >
                           <span>B</span>
                           <span>L</span>
                           <span>U</span>
                           <span>S</span>
                           <span>H</span>
                        </div>

                        {/* Subtitle */}
                        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white">
                           By Sakshi Makeovers
                        </span>
                     </div>
                  </a>
               </div>


               {/* Contact & Actions */}
               <div className="flex items-center gap-6">
                  {/* {!role && (
                     <div className="hidden lg:flex items-center gap-6 text-sm">
                        <a
                           href="tel:9053102324"
                           className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                        >
                           <Phone className="w-4 h-4" />
                           <span>90531-02324</span>
                        </a>
                        <a
                           href="https://wa.me/9467777773"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                        >
                           <MessageCircle className="w-4 h-4" />
                           <span>WhatsApp</span>
                        </a>
                     </div>
                  )} */}
                  <ul className="flex gap-4">
                     {[
                        { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/sakshi.makeovers" },
                        { icon: Facebook, label: "Facebook", link: "https://www.facebook.com/share/1C6Croo93d/?mibextid=wwXIfr" },
                        // { icon: Linkedin, label: "LinkedIn" },
                     ].map(({ icon: Icon, label, link }) => (
                        <li key={label}>
                           <Link
                              href={link}
                              className="text-gray-400 hover:text-[#D99726] transition-colors duration-300"
                              aria-label={label}
                           >
                              <Icon className="w-4 h-4" />
                           </Link>
                        </li>
                     ))}
                  </ul>

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
                           className="flex items-center gap-2 p-2 text-xl rounded-md border bg-red-600 text-white hover:bg-red-700 transition"
                        >
                           <LogOut size={24} />
                        </button>
                     )}

                     <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 rounded-md border"
                     >
                        <Menu />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MiddleBar;
