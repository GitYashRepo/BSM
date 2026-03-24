"use client"

import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
   return (
      <section className="scroll-section relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 lg:px-12 bg-white">
         <div className="max-w-6xl mx-auto text-center space-y-12">
            {/* Icon Accent */}
            <div className="flex justify-center">
               <div className="w-16 h-16 rounded-full border border-[#6E2E35]/20 flex items-center justify-center bg-[#6E2E35]/5">
                  <Sparkles size={32} className="text-[#6E2E35]" strokeWidth={1.5} />
               </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-8">
               <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#1a1a1a] leading-0.7">
                  <span className="text-line block">The Art of</span>
                  <span className="text-line block">
                     <span className="text-[#6E2E35] font-serif italic">Luxury Beauty</span>
                  </span>
                  <span className="text-line block">Perfected</span>
               </h1>
               <p className="text-line text-xl text-[#666] font-light max-w-2xl mx-auto leading-relaxed">
                  Discover the story behind our premium salon franchise and the passion that drives excellence in every detail.
               </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-8">
               <button className="text-line flex items-center gap-3 px-10 py-4 border border-[#6E2E35]/30 hover:border-[#6E2E35] bg-white hover:bg-[#6E2E35]/5 text-[#6E2E35] transition-all duration-300 rounded-lg font-light">
                  Explore Our Journey
                  <ArrowRight size={18} />
               </button>
            </div>

            {/* Bottom Decoration */}
            <div className="flex justify-center pt-12">
               <div className="w-0.5 h-12 bg-[#6E2E35]/20"></div>
            </div>
         </div>
      </section>
   )
}
