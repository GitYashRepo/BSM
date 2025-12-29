"use client"

import { useEffect, useState } from "react"

export function FranchiseHero() {
   const [titleVisible, setTitleVisible] = useState(false)

   useEffect(() => {
      setTitleVisible(true)
   }, [])

   return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#faf8f6] via-[#f5f1ed] to-[#ede6df]">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-[0.03]">
            <div
               className="absolute inset-0"
               style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #b8936d 1px, transparent 0)`,
                  backgroundSize: "48px 48px",
               }}
            />
         </div>

         {/* Content */}
         <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
            <div className="space-y-8">
               {/* Tagline */}
               <div
                  className={`transition-all duration-1000 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
               >
                  <span className="inline-block text-sm tracking-[0.3em] text-[#b8936d] uppercase font-light mb-6">
                     Join Our Family
                  </span>
               </div>

               {/* Main Title */}
               <h1
                  className={`text-6xl md:text-8xl lg:text-9xl font-serif font-light text-[#2c2420] leading-[0.95] transition-all duration-1200 delay-200 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
               >
                  Own A Piece
                  <br />
                  <span className="italic text-[#b8936d]">Of Beauty</span>
               </h1>

               {/* Description */}
               <p
                  className={`text-lg md:text-xl max-w-2xl mx-auto text-[#6b5d54] leading-relaxed transition-all duration-1000 delay-500 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
               >
                  Partner with Blush by Sakshi Makeovers and bring luxury beauty services to your community. Build a thriving
                  business with our proven model.
               </p>

               {/* Stats */}
               <div
                  className={`grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 transition-all duration-1000 delay-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
               >
                  <div className="border-l border-[#b8936d]/30 pl-6 text-left">
                     <div className="text-4xl md:text-5xl font-serif text-[#b8936d] mb-2">15+</div>
                     <div className="text-sm text-[#6b5d54] tracking-wide">Locations</div>
                  </div>
                  <div className="border-l border-[#b8936d]/30 pl-6 text-left">
                     <div className="text-4xl md:text-5xl font-serif text-[#b8936d] mb-2">95%</div>
                     <div className="text-sm text-[#6b5d54] tracking-wide">Success Rate</div>
                  </div>
                  <div className="border-l border-[#b8936d]/30 pl-6 text-left">
                     <div className="text-4xl md:text-5xl font-serif text-[#b8936d] mb-2">2Lakh+</div>
                     <div className="text-sm text-[#6b5d54] tracking-wide">Avg Revenue</div>
                  </div>
               </div>
            </div>
         </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#b8936d]/40 rounded-full flex justify-center pt-2">
               <div className="w-1.5 h-3 bg-[#b8936d]/60 rounded-full" />
            </div>
         </div>
      </section>
   )
}
