"use client";

import { X } from "lucide-react";

const navItems = [
   {
      label: "Get Tour",
      links: [
         { label: "Home", href: "/" },
         { label: "Experience Our Interior", href: "/gettour" },
      ],
   },
   {
      label: "About",
      links: [
         { label: "Who Am I?", href: "/about" },
         { label: "About BSM", href: "/bsm" },
      ],
   },
   {
      label: "Makeup",
      links: [
         { label: "Bridal Makeup", href: "/makeup#bridal" },
         { label: "Party Makeup", href: "/makeup#party" },
         { label: "HD Makeup", href: "/makeup#hd" },
      ],
   },
   {
      label: "Contact",
      links: [
         { label: "Contact", href: "/contact" },
         { label: "Book Appointment", href: "/contact#appointment" },
      ],
   },
];

const Sidebar = ({ open, onClose }) => {
   if (!open) return null;

   return (
      <div className="fixed inset-0 z-[999999]">
         {/* overlay */}
         <div
            className="absolute inset-0 bg-black/40 "
            onClick={onClose}
         />

         {/* drawer */}
         <div className="absolute left-0 top-0 h-full w-[280px] bg-white shadow-xl p-6 overflow-y-auto z-[99999]">
            <div className="flex items-center justify-between mb-6">
               <span className="font-bold text-lg text-[#750851]">Menu</span>
               <button onClick={onClose}>
                  <X />
               </button>
            </div>

            {navItems.map((section) => (
               <div key={section.label} className="mb-6">
                  <h4 className="font-semibold text-[#750851] mb-3">
                     {section.label}
                  </h4>

                  <ul className="space-y-2">
                     {section.links.map((link) => (
                        <li key={link.label}>
                           <a
                              href={link.href}
                              onClick={onClose}
                              className="block text-sm text-gray-700 hover:text-[#D99726]"
                           >
                              {link.label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Sidebar;
