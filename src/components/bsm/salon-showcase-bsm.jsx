'use client'

import React from "react"
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

export function SalonShowcaseBSM() {
   const [activeIndex, setActiveIndex] = useState(0)
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
   const containerRef = useRef(null)

   const salonImages = [
      {
         image: '/images/img1.jpg',
         title: 'Cutting Edge',
         description: 'Precision hair cutting techniques',
      },
      {
         image: '/images/img2.jpg',
         title: 'Color Mastery',
         description: 'Professional color transformation',
      },
      {
         image: '/images/img3.jpg',
         title: 'Wellness Retreat',
         description: 'Relaxation and spa treatments',
      },
      {
         image: '/images/img4.jpg',
         title: 'Artistry in Motion',
         description: 'Expert coloring techniques',
      },
      {
         image: '/images/img5.jpg',
         title: 'Luxury Welcome',
         description: 'Premium salon experience',
      },
      {
         image: '/images/img6.jpg',
         title: 'Styling Excellence',
         description: 'Professional styling mastery',
      },
      {
         image: '/images/img7.jpg',
         title: 'Premium Care',
         description: 'Curated beauty products',
      },
      {
         image: '/images/img8.jpg',
         title: 'Bridal Perfection',
         description: 'Wedding day transformations',
      },
   ]

   const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
         x: e.clientX - rect.left,
         y: e.clientY - rect.top,
      })
   }

   const nextSlide = () => {
      setActiveIndex((prev) => (prev + 1) % salonImages.length)
   }

   const prevSlide = () => {
      setActiveIndex((prev) => (prev - 1 + salonImages.length) % salonImages.length)
   }

   const goToSlide = (index) => {
      setActiveIndex(index)
   }

   return (
      <section className="bsm-section py-32 px-6 lg:px-12 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
               <p className="bsm-text-line text-base tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6">
                  Salon Stories
               </p>
               <h2 className="bsm-text-line text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight">
                  Experience the <span className="text-[#6E2E35] font-serif italic">Beauty</span>
               </h2>
               <p className="bsm-text-line text-lg text-[#666] font-light max-w-2xl mx-auto mt-8">
                  Explore our premium salon spaces, services, and transformations
               </p>
            </div>

            {/* 3D Card Stack Showcase */}
            <div
               ref={containerRef}
               className="relative h-[80vh]"
               onMouseMove={handleMouseMove}
            >
               {/* Background Blur Elements */}
               <div className="absolute inset-0 overflow-hidden">
                  {salonImages.map((item, index) => {
                     const offset = (index - activeIndex + salonImages.length) % salonImages.length
                     const isActive = offset === 0
                     const zIndex = salonImages.length - offset

                     // Calculate rotation and positioning
                     const rotateY = offset * 8
                     const rotateX = offset * 2
                     const translateY = offset * 20
                     const scale = 1 - offset * 0.04
                     const opacity = offset === 0 ? 1 : Math.max(0, 1 - offset * 0.15)

                     return (
                        <div
                           key={index}
                           className="absolute w-full h-full transition-all duration-700 ease-out"
                           style={{
                              transform: `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(${translateY}px) scale(${scale})`,
                              opacity: opacity,
                              zIndex: zIndex,
                              transformStyle: 'preserve-3d',
                           }}
                        >
                           <div className="relative w-full h-full overflow-hidden shadow-2xl group">
                              <Image
                                 src={item.image || "/placeholder.svg"}
                                 alt={item.title}
                                 fill
                                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />

                              {/* Luxury Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                              {/* Floating Info - Always visible for active */}
                              {isActive && (
                                 <div className="absolute top-0 left-0 right-0 p-10 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="max-w-2xl">
                                       <p className="text-base tracking-widest uppercase font-light mb-2 text-black/70">
                                          Premium Experience
                                       </p>
                                       <h3 className="text-4xl lg:text-5xl font-light mb-3 text-black/90 font-serif">{item.title}</h3>
                                       <p className="text-lg text-black/90 font-light">{item.description}</p>
                                    </div>
                                 </div>
                              )}

                              {/* Decorative frame */}
                              <div className="absolute inset-0 pointer-events-none border border-white/20 rounded-3xl" />

                              {/* Navigation Controls */}
                              <div className="absolute w-full -bottom-8 bg-white/90 z-10 flex items-center justify-between mb-8">
                                 {/* Left Navigation */}
                                 <button
                                    onClick={prevSlide}
                                    className="group p-4 hover:bg-[#6E2E35]/10 rounded-full transition-all duration-300"
                                    aria-label="Previous slide"
                                 >
                                    <ChevronLeft className="w-6 h-6 text-[#6E2E35] transition-transform" />
                                 </button>

                                 {/* Counter and Progress */}
                                 <div className="flex flex-col items-center gap-4">
                                    <div className="text-center">
                                       <p className="text-sm text-[#666] font-light">
                                          <span className="text-[#6E2E35] font-medium">{activeIndex + 1}</span> of {salonImages.length}
                                       </p>
                                    </div>

                                    {/* Dot Navigation with Animation */}
                                    <div className="flex gap-2">
                                       {salonImages.map((_, index) => (
                                          <button
                                             key={index}
                                             onClick={() => goToSlide(index)}
                                             className={`transition-all duration-500 rounded-full cursor-pointer ${index === activeIndex
                                                ? 'w-8 h-2 bg-[#6E2E35]'
                                                : 'w-2 h-2 bg-[#6E2E35]/30 hover:bg-[#6E2E35]/60'
                                                }`}
                                             aria-label={`Go to slide ${index + 1}`}
                                          />
                                       ))}
                                    </div>
                                 </div>

                                 {/* Right Navigation */}
                                 <button
                                    onClick={nextSlide}
                                    className="group p-4 hover:bg-[#6E2E35]/10 rounded-full transition-all duration-300"
                                    aria-label="Next slide"
                                 >
                                    <ChevronRight className="w-6 h-6 text-[#6E2E35] group-hover:scale-125 transition-transform" />
                                 </button>
                              </div>
                           </div>
                        </div>
                     )
                  })}
               </div>

               {/* Dynamic Glow Effect Following Mouse */}
               <div
                  className="absolute inset-0 pointer-events-none rounded-3xl z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                     background: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(110, 46, 53, 0.1), transparent 60%)`,
                  }}
               />
            </div>



            {/* Showcase Cards Grid - Service Cards Below */}
            <div className="grid grid-cols-4 mt-5 md:grid-cols-8 lg:grid-cols-8 gap-6 border-t border-[#6E2E35]/10">
               {salonImages.map((item, index) => (
                  <button
                     key={index}
                     onClick={() => goToSlide(index)}
                     className={`group relative h-20 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer transform hover:scale-105 ${index === activeIndex ? 'ring-2 ring-[#6E2E35]' : ''
                        }`}
                  >
                     <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div>
                           <p className="text-white font-light text-sm">{item.title}</p>
                        </div>
                     </div>
                  </button>
               ))}
            </div>
         </div>

         <style jsx>{`
            @keyframes float {
               0%,
               100% {
                  transform: translateY(0px);
               }
               50% {
                  transform: translateY(-10px);
               }
            }

            .group:hover {
               animation: float 3s ease-in-out infinite;
            }
         `}</style>
      </section>
   )
}
