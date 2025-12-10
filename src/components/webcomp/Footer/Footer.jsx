"use client"

import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

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
      <footer className="bg-black text-white overflow-hidden">
         {/* Section 1: Minimal Hero with Split Design */}
         <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen border-b border-white/10 pb-10">
            {/* Left: Large Typography */}
            <div className="flex flex-col justify-center items-start px-8 md:px-12 lg:px-16 py-16 lg:py-0">
               <span className="text-[#D99726] text-sm font-light tracking-widest uppercase pt-16 mb-8">Let's Connect</span>
               <h2 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight mb-12 font-serif text-white/90 hover:text-white transition-colors duration-300">
                  Transform Your Beauty
               </h2>
               <p className="text-base text-gray-400 max-w-sm leading-relaxed mb-12">
                  Experience the artistry of professional makeup and styling with our expert team dedicated to bringing your
                  vision to life.
               </p>
               <button className="group relative px-8 py-3 text-sm font-medium uppercase tracking-widest overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                     Get Started
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-[#D99726] translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></div>
                  <div className="absolute inset-0 border border-[#D99726] z-0"></div>
               </button>
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
                              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{label}</p>
                              <p
                                 className={`text-lg font-light transition-colors duration-300 ${hoveredLink === label ? "text-[#D99726]" : "text-white"}`}
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

         {/* Section 2: Services Grid with Hover Effects */}
         <div className="border-b border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
               {[
                  { title: "Makeup", description: "Professional makeup services" },
                  { title: "Hair", description: "Expert hair styling" },
                  { title: "Beauty", description: "Complete beauty solutions" },
                  { title: "Bridal", description: "Specialized bridal packages" },
               ].map(({ title, description }) => (
                  <div
                     key={title}
                     className="group p-6 md:p-8 border border-white/10 hover:border-[#D99726] hover:bg-[#D99726]/5 transition-all duration-500 cursor-pointer"
                  >
                     <p className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-[#D99726] mb-3 transition-colors duration-300">
                        {title}
                     </p>
                     <p className="text-2xl md:text-3xl font-light text-white/70 group-hover:text-white transition-colors duration-300">
                        {title}
                     </p>
                     <p className="text-xs text-gray-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {description}
                     </p>
                  </div>
               ))}
            </div>
         </div>

         {/* Section 3: Newsletter with Split Layout */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 lg:p-16 border-b border-white/10">
            <div>
               <span className="text-[#D99726] text-xs font-light tracking-widest uppercase mb-8 block">Newsletter</span>
               <h3 className="text-4xl md:text-5xl font-light leading-tight mb-6">Stay In The Loop</h3>
               <p className="text-gray-400 text-base leading-relaxed">
                  Get exclusive updates, special offers, and beauty tips delivered straight to your WhatsApp.
               </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
               <div className="relative flex items-center gap-2">

                  {/* Fixed +91 */}
                  <span className="text-white text-base">+91</span>

                  {/* Phone Input */}
                  <input
                     type="text"
                     placeholder="0000-000-000"
                     value={phone}
                     onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ""); // keep digits only
                        if (value.length <= 10) setPhone(value);
                     }}
                     maxLength={10}
                     required
                     className="w-full px-0 py-3 bg-transparent border-b border-white/20
               text-white placeholder:text-gray-600 focus:outline-none
               focus:border-[#D99726] transition-colors duration-300 text-base"
                  />
               </div>
               <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-sm font-light uppercase tracking-widest text-[#D99726] hover:text-white transition-colors duration-300 flex items-center gap-2 group disabled:opacity-50"
               >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
               </button>
            </form>
         </div>

         {/* Section 4: Bottom Bar with Navigation */}
         <div className="px-8 md:px-12 lg:px-16 py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12 pb-12 border-b border-white/10">
               <div>
                  <p className="text-xl font-light">
                     <span className="text-[#D99726]">BLUSH</span> by Sakshi Makeovers
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Premium Beauty Services</p>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                  <div>
                     <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Company</p>
                     <ul className="space-y-2">
                        {["About", "Services", "Locations"].map((item) => (
                           <li key={item}>
                              <Link
                                 href="#"
                                 className="text-sm text-gray-400 hover:text-[#D99726] transition-colors duration-300 font-light"
                              >
                                 {item}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Legal</p>
                     <ul className="space-y-2">
                        {["Privacy", "Terms", "Cookies"].map((item) => (
                           <li key={item}>
                              <Link
                                 href="#"
                                 className="text-sm text-gray-400 hover:text-[#D99726] transition-colors duration-300 font-light"
                              >
                                 {item}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Follow</p>
                     <ul className="space-y-2 flex gap-4">
                        {[
                           { icon: Instagram, label: "Instagram" },
                           { icon: Facebook, label: "Facebook" },
                           { icon: Linkedin, label: "LinkedIn" },
                        ].map(({ icon: Icon, label }) => (
                           <li key={label}>
                              <Link
                                 href="#"
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

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-gray-600">
               <p>© 2025 BLUSH. All rights reserved.</p>
               <a href="http://www.webtechware.in" target="_blank" rel="noopener noreferrer"><p>Crafted with elegance & precision by Web Tech Ware</p></a>
            </div>
         </div>
      </footer>
   )
}
