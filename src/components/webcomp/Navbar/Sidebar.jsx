"use client"

import { X, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
   {
      label: "About",
      items: [
         { label: "Experience our interior", href: "/gettour" },
         { label: "Who Am I ?", href: "/about" },
         { label: "About BSM", href: "/bsm" },
      ],
   },
   {
      label: "Makeup",
      items: [
         { label: "Makeup", href: "/makeup" },
         { label: "Bridal Makeup", href: "/makeup#bridal" },
         { label: "Party Makeup", href: "/makeup#party" },
         { label: "HD Makeup", href: "/makeup#hd" },
         { label: "Airbrush Makeup", href: "/makeup#airbrush" },
         { label: "Engagement Makeup", href: "/makeup#engagement" },
         { label: "Celebrity Makeup", href: "/makeup#celebrity" },
      ],
   },
   {
      label: "Hair",
      items: [
         { label: "Hair", href: "/hair" },
         { label: "Haircuts", href: "/hair#haircuts" },
         { label: "Hair Color", href: "/hair#color" },
         { label: "Hair Spa", href: "/hair#spa" },
         { label: "Keratin Treatment", href: "/hair#keratin" },
         { label: "Smoothening", href: "/hair#smoothening" },
         { label: "Hair Extensions", href: "/hair#extensions" },
         { label: "Bridal Hairstyling", href: "/hair#bridal-hair" },
      ],
   },
   {
      label: "Beauty",
      items: [
         { label: "Beauty", href: "/beauty" },
         { label: "Facial", href: "/beauty#facial" },
         { label: "Cleanup", href: "/beauty#cleanup" },
         { label: "Bleach", href: "/beauty#bleach" },
         { label: "Threading", href: "/beauty#threading" },
         { label: "Waxing", href: "/beauty#waxing" },
         { label: "Manicure", href: "/beauty#manicure" },
         { label: "Pedicure", href: "/beauty#pedicure" },
      ],
   },
   {
      label: "Esthetics",
      items: [
         { label: "Esthetics", href: "/esthetics" },
         { label: "Skin Treatments", href: "/esthetics#skin" },
         { label: "Anti-Aging", href: "/esthetics#anti-aging" },
         { label: "Acne Treatment", href: "/esthetics#acne" },
         { label: "Pigmentation", href: "/esthetics#pigmentation" },
         { label: "Laser Treatment", href: "/esthetics#laser" },
         { label: "Chemical Peels", href: "/esthetics#peels" },
      ],
   },
   {
      label: "Signature Services",
      items: [
         { label: "Signature Services", href: "/signatureservices" },
         { label: "Bridal Makeovers", href: "#bridal-makeover" },
         { label: "Pre-Bridal Package", href: "#pre-bridal" },
         { label: "Groom Makeover", href: "#groom" },
         { label: "Celebrity Styling", href: "#celebrity-styling" },
      ],
   },
   {
      label: "Franchise",
      items: [
         { label: "Franchise", href: "/franchise" },
         { label: "Why Partner With Us", href: "/franchise#whypartnerwithus" },
         { label: "Investment Details", href: "/franchise#investment" },
         { label: "Support & Training", href: "/franchise#support" },
         { label: "Apply Now", href: "/franchise#apply" },
      ],
   },
   {
      label: "Gallery",
      items: [
         { label: "Bridal Gallery", href: "/gallery" },
         { label: "Party Makeup", href: "/gallery" },
         { label: "Video Gallery", href: "/gallery" },
      ],
   },
   {
      label: "Contact",
      items: [
         { label: "Contact", href: "/contact" },
         { label: "Book Appointment", href: "/contact#appointment" },
         { label: "Our Locations", href: "/contact#location" },
      ],
   },
]

const MobileSidebar = ({ open, onClose }) => {
   const [openSection, setOpenSection] = useState(null)

   useEffect(() => {
      document.body.style.overflow = open ? "hidden" : ""
      return () => (document.body.style.overflow = "")
   }, [open])

   if (!open) return null

   return (
      <div className="fixed inset-0 z-[999999]">
         {/* Overlay */}
         <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
         />

         {/* Sidebar */}
         <aside className="absolute left-0 top-0 h-screen w-[300px] bg-white shadow-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b">
               <span className="font-bold text-[#750851] text-lg">Menu</span>
               <button onClick={onClose}>
                  <X />
               </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
               {navItems.map((section) => (
                  <div key={section.label} className="mb-4">
                     <button
                        onClick={() =>
                           setOpenSection(
                              openSection === section.label ? null : section.label
                           )
                        }
                        className="flex w-full items-center justify-between font-semibold text-[#750851]"
                     >
                        {section.label}
                        <ChevronDown
                           className={`transition-transform ${openSection === section.label ? "rotate-180" : ""
                              }`}
                        />
                     </button>

                     {openSection === section.label && (
                        <ul className="mt-2 space-y-2 pl-2">
                           {section.items.map((item) => (
                              <li key={item.label}>
                                 <a
                                    href={item.href}
                                    onClick={onClose}
                                    className="block text-sm text-gray-700 hover:text-[#D99726]"
                                 >
                                    {item.label}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     )}
                  </div>
               ))}
            </div>
         </aside>
      </div>
   )
}

export default MobileSidebar
