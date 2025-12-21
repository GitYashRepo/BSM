"use client"

import { Sparkles, Heart, Star, Award } from "lucide-react"

const values = [
   {
      icon: Heart,
      title: "Client-Centered",
      description: "Your vision, your comfort, your beauty—everything we do revolves around you.",
   },
   {
      icon: Sparkles,
      title: "Artistic Excellence",
      description: "We treat every face as a canvas and every session as an opportunity to create art.",
   },
   {
      icon: Star,
      title: "Premium Quality",
      description: "Only the finest products and techniques make their way into our studio.",
   },
   {
      icon: Award,
      title: "Continuous Innovation",
      description: "We stay ahead of trends while honoring timeless beauty principles.",
   },
]

export function Philosophy() {
   return (
      <section className="fade-in-section py-32 md:py-40 bg-white transition-all duration-1000">
         <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-24">
                  <span className="text-[10px] tracking-[0.4em] text-[#c89b6d] uppercase font-light">Philosophy</span>
                  <h2 className="text-5xl md:text-7xl font-serif font-extralight mt-6 mb-8 text-[#2d2520]">
                     What We Believe
                  </h2>
               </div>

               <div className="grid md:grid-cols-2 gap-1 mb-24">
                  {values.map((value, index) => (
                     <div
                        key={index}
                        className="group p-12 bg-[#faf8f6] hover:bg-[#2d2520] transition-all duration-500 relative overflow-hidden"
                     >
                        <div className="relative z-10">
                           <div className="mb-6">
                              <value.icon
                                 size={32}
                                 className="text-[#c89b6d] group-hover:text-[#d4a574] transition-colors duration-500"
                                 strokeWidth={1}
                              />
                           </div>
                           <h3 className="text-2xl font-serif font-light mb-4 text-[#2d2520] group-hover:text-[#faf8f6] transition-colors duration-500">
                              {value.title}
                           </h3>
                           <p className="text-[#6b5d52] group-hover:text-[#d4a574] leading-relaxed transition-colors duration-500">
                              {value.description}
                           </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#c89b6d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     </div>
                  ))}
               </div>

               <div className="relative py-20 px-12 md:px-20">
                  <div className="absolute top-0 left-0 text-[#c89b6d]/20 text-9xl font-serif leading-none">"</div>
                  <blockquote className="relative z-10 text-center">
                     <p className="text-3xl md:text-4xl font-serif font-light italic text-[#2d2520] mb-8 text-balance leading-relaxed">
                        Beauty is not about being perfect. It's about being confident, comfortable, and unapologetically
                        yourself.
                     </p>
                     <footer className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-[#c89b6d]" />
                        <span className="text-xs tracking-[0.3em] text-[#8b7355]">SAKSHI MUKHIJA</span>
                        <div className="h-[1px] w-12 bg-[#c89b6d]" />
                     </footer>
                  </blockquote>
               </div>
            </div>
         </div>
      </section>
   )
}
