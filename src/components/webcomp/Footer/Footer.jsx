"use client"

import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { backgroundColor } from "@/components/webcomp/webcolor/bgcolor";

const PagesLinks = [
   {
      name: "About",
      href: "/about"
   },
   {
      name: "Services",
      href: "/services"
   },
   {
      name: "Locations",
      href: "/locations"
   },
   {
      name: "Admin",
      href: "/admin/dashboard"
   },
   {
      name: "Sub-Admin",
      href: "/sub-admin/services"
   }
]

export default function Footer() {
   const [phone, setPhone] = useState("")
   const [isSubmitting, setIsSubmitting] = useState(false)
   const [hoveredLink, setHoveredLink] = useState(null)

   const handleNewsletterSubmit = (e) => {
      e.preventDefault()
      setIsSubmitting(true)
      setTimeout(() => {
         setPhone("")
         setIsSubmitting(false)
      }, 500)
   }

   return (
      <div className="w-full md:p-0.5">
         <div className="relative w-full flex justify-center">
            <div className="w-full md:rounded-tl-2xl bg-[#101518]"></div>
            <img
               src="/footerimg.png"
               alt="Top curve"
               className="hidden w-40 md:block inset-0 z-20 pointer-events-none"
               draggable={false}
            />
            <div className="w-full md:rounded-tr-2xl bg-[#101518]"></div>
         </div>
         <footer className="text-white overflow-hidden md:rounded-b-2xl bg-[#101518]">
            {/* Section 1: Minimal Hero with Split Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen border-b border-white/10 pb-10">
               {/* Left: Large Typography */}
               <div className="flex flex-col justify-center items-start px-8 md:px-12 lg:px-16 py-16 lg:py-0">
                  <span className="text-[#D99726] text-xs font-light tracking-widest uppercase pt-16 mb-8">Let's Connect</span>
                  <h2 className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight mb-12 font-serif text-white/90 hover:text-white transition-colors duration-300">
                     Transform Your Beauty
                  </h2>
                  <p className="text-base text-gray-400 max-w-sm leading-relaxed mb-12">
                     Experience the artistry of professional makeup and styling with our expert team dedicated to bringing your
                     vision to life.
                  </p>
                  <Link href="/contact">
                     <button className="group relative px-8 py-3 text-sm font-medium uppercase tracking-widest overflow-hidden hover:text-black transition-colors duration-300">
                        <span className="relative z-10 flex items-center gap-2">
                           Get Started
                           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-[#D99726] translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></div>
                        <div className="absolute inset-0 border border-[#D99726] z-0"></div>
                     </button>
                  </Link>
               </div>

               {/* Right: Contact Grid */}
               <div className="flex flex-col p-8 md:p-12 lg:p-16 border-l border-white/10">
                  <div>
                     <span className="text-[#D99726] text-xs font-light tracking-widest uppercase mb-12 block">
                        Contact Info
                     </span>
                  </div>

                  <div className="space-y-12">
                     {[
                        { icon: Phone, label: "Phone", value: "+91 90531-02324", link: "tel:+919053102324" },
                        {
                           icon: Mail,
                           label: "Email",
                           value: "sakshimakeovers@gmail.com",
                           link: "mailto:sakshimakeovers@gmail.com",
                        },
                        { icon: MapPin, label: "Location", value: "Rewari", link: "#" },
                     ].map(({ icon: Icon, label, value, link }) => (
                        <Link
                           key={label}
                           href={link}
                           onMouseEnter={() => setHoveredLink(label)}
                           onMouseLeave={() => setHoveredLink(null)}
                           className="block group"
                        >
                           <div className="flex items-start gap-4">
                              <Icon
                                 className={`w-5 h-5 mt-1 transition-all duration-300 ${hoveredLink === label ? "text-[#D99726] translate-y-1" : "text-white/50"}`}
                              />
                              <div>
                                 <p className="text-xs uppercase tracking-widest text-gray-300 mb-2">{label}</p>
                                 <p
                                    className={`text-xs font-light transition-colors duration-300 ${hoveredLink === label ? "text-[#D99726]" : "text-white"}`}
                                 >
                                    {value}
                                 </p>
                              </div>
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
            </div>

            {/* Section 4: Bottom Bar with Navigation */}
            <div className="px-8 md:px-12 lg:px-16 py-12">
               <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12 pb-12 border-b border-white/10">
                  <div>
                     <p className="text-xl font-light">
                        <span className="text-[#D99726]">BLUSH</span> by Sakshi Makeovers
                     </p>
                     <p className="text-xs text-gray-400 mt-2">Premium Beauty Services</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                     <div>
                        <p className="text-xs uppercase tracking-widest text-gray-300 mb-4">Quick Links</p>
                        <ul className="space-y-2">
                           {PagesLinks.map((item) => (
                              <li key={item.name}>
                                 <Link
                                    href={item.href}
                                    className="text-sm text-gray-400 hover:text-[#D99726] transition-colors duration-300 font-light"
                                 >
                                    {item.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div>
                        <p className="text-xs uppercase tracking-widest text-gray-300 mb-4">Legal</p>
                        <ul className="space-y-2">
                           {[
                              { name: "Privacy", href: "/privacy" },
                              { name: "Terms", href: "/terms" },
                              { name: "Cookies", href: "/cookies" },
                           ].map((item) => (
                              <li key={item.name}>
                                 <Link
                                    href={item.href}
                                    className="text-sm text-gray-400 hover:text-[#D99726] transition-colors duration-300 font-light"
                                 >
                                    {item.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div>
                        <p className="text-xs uppercase tracking-widest text-gray-300 mb-4">Follow</p>
                        <ul className="space-y-2 flex gap-4">
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
                     </div>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-gray-200">
                  <p>© 2025 BLUSH. All rights reserved.</p>
                  <a href="http://www.webtechware.in" target="_blank" rel="noopener noreferrer"><p>Designed & Developed by WTW</p></a>
               </div>
            </div>
         </footer>
         {/* <div className="relative w-full flex justify-center">
            <div className="w-full rounded-bl-2xl" style={{ backgroundColor: backgroundColor.velvet }}></div>
            <img
               src={curveImage}
               alt="Top curve"
               className="hidden w-40 md:block rotate-180 z-20 pointer-events-none"
               draggable={false}
            />
            <div className="w-full rounded-br-2xl" style={{ backgroundColor: backgroundColor.velvet }}></div>
         </div> */}
      </div>
   )
}
