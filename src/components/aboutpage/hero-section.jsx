"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
   const [scrollY, setScrollY] = useState(0)

   useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
   }, [])

   return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
         <div
            className="absolute inset-0 bg-gradient-to-br from-[#f8f5f2] via-[#faf8f6] to-[#f5ebe6]"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
         />

         <div className="absolute top-20 right-20 w-96 h-96 bg-[#d4a574]/10 rounded-full blur-3xl" />
         <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#c89b6d]/10 rounded-full blur-3xl" />

         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
               <div
                  className="flex items-center justify-center mb-12 opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
               >
                  <div className="flex items-center gap-4">
                     <div className="h-px w-16 bg-[#c89b6d]" />
                     <span className="text-xs tracking-[0.4em] text-[#8b7355] uppercase font-light">Blush by Sakshi</span>
                     <div className="h-px w-16 bg-[#c89b6d]" />
                  </div>
               </div>

               <h1
                  className="text-7xl md:text-8xl lg:text-[10rem] font-serif font-extralight mb-10 leading-[0.9] text-center text-[#2d2520] opacity-0 animate-fade-in text-balance"
                  style={{ animationDelay: "0.6s" }}
               >
                  Beauty
                  <br />
                  Redefined
               </h1>

               <p
                  className="text-xl md:text-2xl text-[#6b5d52] max-w-3xl mx-auto leading-relaxed text-center font-light opacity-0 animate-fade-in text-balance"
                  style={{ animationDelay: "0.9s" }}
               >
                  Where artistry meets elegance in the heart of luxury beauty
               </p>

               <div className="mt-20 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
                  <div className="flex flex-col items-center gap-3">
                     <span className="text-[10px] tracking-[0.3em] text-[#8b7355] uppercase">Discover</span>
                     <div className="w-[1px] h-16 bg-gradient-to-b from-[#c89b6d] to-transparent animate-pulse" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
