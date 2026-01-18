'use client'

import React from "react"

import Image from 'next/image'
import { useState } from 'react'

export function TeamAboutBSM() {
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
   const [isHovered, setIsHovered] = useState(false)

   const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      setMousePosition({
         x: e.clientX - rect.left,
         y: e.clientY - rect.top,
      })
   }

   return (
      <section className="bsm-section py-32 px-6 lg:px-12 bg-white">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-24">
               <p className="bsm-text-line text-xs tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6">Our Team</p>
               <h2 className="bsm-text-line text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight">
                  Meet the <span className="text-[#6E2E35] font-serif italic">Collective</span>
               </h2>
               <p className="bsm-text-line text-lg text-[#666] font-light max-w-2xl mx-auto mt-8">
                  United by passion, driven by excellence. Our team of beauty specialists working as one.
               </p>
            </div>

            {/* Unique Interactive Group Image Display */}
            <div
               className="relative mb-20 group"
               onMouseMove={handleMouseMove}
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
            >
               {/* Dynamic Spotlight Effect */}
               <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20 rounded-3xl"
                  style={{
                     background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(110, 46, 53, 0.15), transparent 80%)`,
                  }}
               />

               {/* Decorative Floating Elements */}
               <div className="absolute -top-12 -right-12 w-48 h-48 bg-rose-200 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
               <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-200 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

               {/* Main Image Container */}
               <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                  <div className="relative h-96 sm:h-[500px] lg:h-[650px]">
                     <Image
                        src="/team-group.jpg"
                        alt="Beauty salon team collective"
                        fill
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                        priority
                     />

                     {/* Luxury Gradient Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                     {/* Floating Info Badge - appears on hover */}
                     <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                        <p className="text-[#6E2E35] text-xs tracking-widest uppercase font-light">Excellence in Unity</p>
                     </div>

                     {/* Bottom Info Card - slides up on hover */}
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <h3 className="text-3xl font-light text-white mb-2">Beauty Salon Masters</h3>
                        <p className="text-white/80 font-light">6 passionate professionals united in creating transformative beauty experiences</p>
                     </div>
                  </div>

                  {/* Luxury Border Frame */}
                  <div className="absolute inset-0 pointer-events-none border-2 border-white/10 rounded-3xl group-hover:border-white/20 transition-colors duration-500" />
               </div>

               {/* Decorative Corner Elements */}
               <div className="absolute top-0 left-0 w-16 h-16 border-2 border-[#6E2E35] rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="absolute bottom-0 right-0 w-16 h-16 border-2 border-[#6E2E35] rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Custom animation keyframes */}
            <style jsx>{`
               @keyframes fadeInUp {
                  from {
                     opacity: 0;
                     transform: translateY(10px);
                  }
                  to {
                     opacity: 1;
                     transform: translateY(0);
                  }
               }
            `}</style>
         </div>
      </section>
   )
}
