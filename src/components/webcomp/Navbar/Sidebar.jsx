"use client"

import { X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const navItems = [
   {
      label: "About",
      items: [
         { label: "Go to Home", href: "/" },
         { label: "Who Am I ?", href: "/about" },
         { label: "Experience our interior", href: "/gettour" },
      ],
      featured: {
         title: "Bridal Special",
         description: "Complete bridal package with pre-bridal treatments, trials & D-day makeup",
         href: "/makeup",
      },
   },
   {
      label: "Makeup",
      items: [
         { label: "Go to Home", href: "/" },
         { label: "Makeup", href: "/makeup" },
         { label: "Bridal Packages", href: "/bridal-packages" },
         { label: "Bridal Makeup", href: "/makeup#bridal" },
         { label: "Party Makeup", href: "/makeup#party" },
         { label: "HD Makeup", href: "/makeup#hd" },
         { label: "Airbrush Makeup", href: "/makeup#airbrush" },
         { label: "Engagement Makeup", href: "/makeup#engagement" },
         { label: "Celebrity Makeup", href: "/makeup#celebrity" },
      ],
      featured: {
         title: "Bridal Special",
         description: "Complete bridal package with pre-bridal treatments, trials & D-day makeup",
         href: "/makeup",
      },
   },
   {
      label: "Hair",
      items: [
         { label: "Go to Home", href: "/" },
         { label: "Hair", href: "/hair" },
         { label: "Haircuts", href: "/hair#haircuts" },
         { label: "Hair Color", href: "/hair#color" },
         { label: "Hair Spa", href: "/hair#spa" },
         { label: "Keratin Treatment", href: "/hair#keratin" },
         { label: "Smoothening", href: "/hair#smoothening" },
         { label: "Hair Extensions", href: "/hair#extensions" },
         { label: "Bridal Hairstyling", href: "/hair#bridal-hair" },
      ],
      featured: {
         title: "Hair Transformation",
         description: "Expert stylists for the perfect look you deserve",
         href: "/hair",
      },
   },
   {
      label: "Beauty",
      items: [
         { label: "Go to Home", href: "/" },
         { label: "Beauty", href: "/beauty" },
         { label: "Facial", href: "/beauty#facial" },
         { label: "Cleanup", href: "/beauty#cleanup" },
         { label: "Bleach", href: "/beauty#bleach" },
         { label: "Threading", href: "/beauty#threading" },
         { label: "Waxing", href: "/beauty#waxing" },
         { label: "Manicure", href: "/beauty#manicure" },
         { label: "Pedicure", href: "/beauty#pedicure" },
      ],
      featured: {
         title: "Glow Package",
         description: "Complete beauty treatments for radiant skin",
         href: "/beauty",
      },
   },
   {
      label: "Esthetics",
      items: [
         { label: "Go to Home", href: "/" },
         { label: "Esthetics", href: "/esthetics" },
         { label: "Skin Treatments", href: "/esthetics#skin" },
         { label: "Anti-Aging", href: "/esthetics#anti-aging" },
         { label: "Acne Treatment", href: "/esthetics#acne" },
         { label: "Pigmentation", href: "/esthetics#pigmentation" },
         { label: "Laser Treatment", href: "/esthetics#laser" },
         { label: "Chemical Peels", href: "/esthetics#peels" },
      ],
      featured: {
         title: "Advanced Skincare",
         description: "Clinical treatments for lasting results",
         href: "/esthetics",
      },
   },
   {
      label: "Signature Services",
      items: [
         { label: "Go to Home", href: "/" },
         { label: "Signature Services", href: "/signatureservices" },
         { label: "Bridal Makeovers", href: "/signatureservices#bridal-makeover" },
         { label: "Pre-Bridal Package", href: "/signatureservices#pre-bridal" },
         { label: "Bridal Packages", href: "/bridal-packages" },
         { label: "Groom Makeover", href: "/signatureservices#groom" },
         { label: "Celebrity Styling", href: "/signatureservices#celebrity-styling" },
      ],
      featured: {
         title: "Complete Bridal Experience",
         description: "From engagement to reception - we've got you covered",
         href: "/signatureservices",
      },
   },
   {
      label: "Franchise",
      items: [
         { label: "Go to Home", href: "/" },
         { label: "Franchise", href: "/franchise" },
         { label: "Why Partner With Us", href: "/franchise#whypartnerwithus" },
         { label: "Investment Details", href: "/franchise#investment" },
         { label: "Support & Training", href: "/franchise#support" },
         { label: "Apply Now", href: "/franchise#apply" },
      ],
      featured: {
         title: "Own a BSM Franchise",
         description: "Contact Nitin (CEO): 94677-77773",
         href: "/franchise",
      },
   },
   {
      label: "Gallery",
      items: [
         { label: "Go to Home", href: "/" },
         { label: "Bridal Makeup", href: "/gallery" },
         { label: "Party Makeup", href: "/gallery" },
         { label: "Engagement Makeup", href: "/gallery" },
      ],
      featured: {
         title: "Our Gallery",
         description: "We're here to help you look your best",
         href: "/gallery",
      },
   },
   {
      label: "Contact",
      items: [
         { label: "Go to Home", href: "/" },
         { label: "Contact-Support", href: "/contact" },
         { label: "Book Appointment", href: "/contact#appointment" },
         { label: "Our Locations", href: "/contact#location" },
      ],
      featured: {
         title: "Get In Touch",
         description: "We're here to help you look your best",
         href: "/contact",
      },
   },
   {
      label: "Get-Pricing",
      items: [
         { label: "Our Pricing", href: "/ourpricing" },
      ],
      featured: {
         title: "Want to see our pricing?",
         description: "Contact us for more details",
         href: "/contact",
      },
   },
]

const MobileSidebar = ({ open, onClose }) => {
   const router = useRouter()
   const [openSection, setOpenSection] = useState(null)

   useEffect(() => {
      document.body.style.overflow = open ? "hidden" : ""
      return () => (document.body.style.overflow = "")
   }, [open])

   return (
      <div className={`fixed inset-0 z-[9999999] transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
         {/* Overlay */}
         <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
         />

         {/* Sidebar */}
         <aside className={`absolute left-0 top-0 h-screen w-[300px] bg-[#191A1A] shadow-xl flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b">
               <span className="font-bold text-[#D99726] text-lg">Menu</span>
               <button onClick={onClose} className="text-[#D99726]">
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
                        className="flex w-full items-center justify-between font-semibold text-white"
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
                                 <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="block w-full text-left py-3 text-sm text-[#D99726] hover:text-[#D99726]"
                                 >
                                    {item.label}
                                 </Link>
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
