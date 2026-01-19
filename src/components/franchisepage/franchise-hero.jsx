"use client"

import { useEffect, useState } from "react"
import { Sparkles, Crown, Star } from "lucide-react"

export function FranchiseHero() {
   const [isVisible, setIsVisible] = useState(false)

   useEffect(() => {
      setIsVisible(true)
   }, [])

   return (
      <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
         {/* Elegant Background Lines */}
         <div className="absolute inset-0 opacity-3">
            <div className="absolute top-1/4 left-0 w-96 h-px bg-[#6E2E35]" />
            <div className="absolute bottom-1/3 right-0 w-72 h-px bg-[#AC2121]" />
            <div className="absolute top-1/2 left-1/3 w-1 h-40 bg-gradient-to-b from-[#750851] to-transparent" />
         </div>

         {/* Main Content */}
         <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-24 text-center space-y-12">
            {/* Top Accent Icons - Elegant Circles */}
            <div
               className={`flex justify-center gap-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
               <div className="w-16 h-16 rounded-full border border-[#6E2E35] flex items-center justify-center hover:bg-[#6E2E35]/5 transition-colors">
                  <Crown size={24} className="text-[#6E2E35]" />
               </div>
               <div className="w-16 h-16 rounded-full border border-[#AC2121] flex items-center justify-center hover:bg-[#AC2121]/5 transition-colors">
                  <Sparkles size={24} className="text-[#AC2121]" />
               </div>
               <div className="w-16 h-16 rounded-full border border-[#750851] flex items-center justify-center hover:bg-[#750851]/5 transition-colors">
                  <Star size={24} className="text-[#750851]" />
               </div>
            </div>

            {/* Tagline */}
            <div
               className={`transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
               <p className="text-base tracking-[0.3em] text-[#6E2E35] uppercase font-light letter-spacing leading-0">
                  Premium Salon Franchise
               </p>
            </div>

            {/* Main Headline */}
            <div
               className={`transition-all duration-1000 delay-200 space-y-6 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
               <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#1a1a1a] leading-[0.8]">
                  Own Your
                  <br />
                  <span className="text-[#6E2E35]">Beauty Empire</span>
               </h1>
            </div>

            {/* Decorative Line */}
            <div
               className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
               <div className="w-50 h-px bg-[#AC2121]" />
            </div>

            {/* Description */}
            <p
               className={`text-base md:text-lg text-[#555] max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
               Join a thriving network of salon entrepreneurs. Premium franchise opportunity with proven systems, dedicated
               support, and exponential growth potential.
            </p>

            {/* CTA Button - Minimal Design */}
            <div
               className={` transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
               <button className="px-12 py-4 bg-[#6E2E35] text-white text-base uppercase tracking-[0.2em] font-light hover:bg-[#750851] transition-colors duration-300 hover:shadow-lg">
                  Explore Opportunity
               </button>
            </div>
         </div>
      </section>
   )
}
