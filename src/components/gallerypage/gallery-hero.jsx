"use client"

import { useEffect, useState } from "react"

export function GalleryHero() {
   const [titleVisible, setTitleVisible] = useState(false)

   useEffect(() => {
      setTitleVisible(true)
   }, [])

   return (
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#faf8f6] via-[#f5f1ed] to-[#ede6df]">
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

         {/* Animated Background Elements */}
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b8936d]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af8c]/5 rounded-full blur-3xl animate-pulse delay-1000" />
         </div>

         {/* Content */}
         <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-8 text-center pb-24">
            <div className="space-y-4">
               {/* Tagline */}
               <div
                  className={`transition-all duration-1000 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
               >
                  <span className="inline-block text-sm tracking-[0.3em] text-[#b8936d] uppercase font-light mb-6">
                     Portfolio Showcase
                  </span>
               </div>

               {/* Main Title */}
               <h1
                  className={`text-6xl md:text-8xl lg:text-9xl font-serif font-light text-[#2c2420] leading-[0.9] transition-all duration-1200 delay-200 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
               >
                  Our Work
                  <br />
                  <span className="italic text-[#b8936d]">Speaks</span>
               </h1>

               {/* Description */}
               <p
                  className={`text-lg md:text-xl max-w-2xl mx-auto text-[#6b5d54] leading-relaxed transition-all duration-1000 delay-500 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
               >
                  A curated collection of our finest transformations, showcasing the artistry and elegance that define Blush by Sakshi Makeovers.
               </p>
            </div>
         </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#b8936d]/40 rounded-full flex justify-center pt-2">
               <div className="w-1.5 h-3 bg-[#b8936d]/60 rounded-full" />
            </div>
         </div>
      </section>
   )
}
