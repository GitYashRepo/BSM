"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

const services = [
   {
      title: "Bridal Excellence",
      desc: "Exquisite bridal makeovers that bring out your natural glow on your special day.",
      bg: "/bgimg.jpg",
      thumb: "/banner/Makeup.jpeg",
   },
   {
      title: "Hair Couture",
      desc: "From precision cuts to vibrant coloring, our stylists craft the perfect look for you.",
      bg: "/bgimg.jpg",
      thumb: "/banner/hair3.jpeg",
   },
   {
      title: "Radiant Skin",
      desc: "Rejuvenating facials and skin treatments tailored to your unique beauty needs.",
      bg: "/bgimg.jpg",
      thumb: "/banner/beauty.jpeg",
   },
   {
      title: "Esthetics",
      desc: "Get the perfect look with our esthetics services, from facials to waxing, we have got you covered.",
      bg: "/bgimg.jpg",
      thumb: "/banner/Esthetics.jpeg",
   },
   {
      title: "Signature Services",
      desc: "Get the perfect look with our signature services, crafted to bring out your natural glow.",
      bg: "/bgimg.jpg",
      thumb: "/comp/img3.jpg",
   },
]

export default function CenterModeCarousel() {
   const trackRef = useRef(null)
   const [current, setCurrent] = useState(0)
   const [isMobile, setIsMobile] = useState(false)

   useEffect(() => {
      const checkMode = () => setIsMobile(window.innerWidth < 768)
      checkMode()
      window.addEventListener("resize", checkMode)
      return () => window.removeEventListener("resize", checkMode)
   }, [])

   const center = (index) => {
      if (isMobile) return // Single-slide handles positioning via translate
      const wrap = trackRef.current?.parentElement
      const card = trackRef.current?.children[index]
      if (!wrap || !card) return

      const size = wrap.clientWidth
      const start = card.offsetLeft
      const cardSize = card.clientWidth

      wrap.scrollTo({
         left: start - (size / 2 - cardSize / 2),
         behavior: "smooth",
      })
   }

   const activate = (index) => {
      setCurrent(index)
      if (!isMobile) center(index)
   }

   const go = (step) => {
      const next = (current + step + services.length) % services.length
      activate(next)
   }

   // keyboard navigation
   useEffect(() => {
      const handle = (e) => {
         if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1)
         if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1)
      }
      window.addEventListener("keydown", handle)
      return () => window.removeEventListener("keydown", handle)
   }, [current, isMobile])

   return (
      <section className="bg-[#07090d] text-white py-12 md:py-16">
         <div className="w-full mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12 gap-6 text-center md:text-left">
               <h2 className="text-3xl md:text-5xl font-extralight tracking-tight max-w-2xl leading-tight">
                  Experience Luxury: Our <span className="text-orange-500 font-normal">Signature Services</span>
               </h2>

               <div className="hidden md:flex gap-3">
                  <Button
                     variant="outline"
                     size="icon"
                     onClick={() => go(-1)}
                     className="rounded-full bg-white/10 border-white/20 hover:bg-white/30 hover:text-white transition-colors"
                  >
                     <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                     variant="outline"
                     size="icon"
                     onClick={() => go(1)}
                     className="rounded-full bg-white/10 border-white/20 hover:bg-white/30 hover:text-white transition-colors"
                  >
                     <ChevronRight className="w-5 h-5" />
                  </Button>
               </div>
            </div>

            <div className="relative group">
               {/* Mobile Nav Overlay Arrows */}
               {isMobile && (
                  <>
                     <div className="absolute inset-y-0 left-0 z-10 flex items-center">
                        <button
                           onClick={() => go(-1)}
                           className="p-2 bg-black/40 backdrop-blur-sm rounded-r-full text-white/70 hover:text-white transition-colors"
                        >
                           <ChevronLeft className="w-6 h-6" />
                        </button>
                     </div>
                     <div className="absolute inset-y-0 right-0 z-10 flex items-center">
                        <button
                           onClick={() => go(1)}
                           className="p-2 bg-black/40 backdrop-blur-sm rounded-l-full text-white/70 hover:text-white transition-colors"
                        >
                           <ChevronRight className="w-6 h-6" />
                        </button>
                     </div>
                  </>
               )}

               <div className={cn(
                  "overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl border border-white/5",
                  isMobile ? "bg-white/5" : "overflow-x-auto no-scrollbar outline-none"
               )}>
                  <div
                     ref={trackRef}
                     className={cn(
                        "flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
                        isMobile ? "" : "flex items-center justify-center gap-4 md:gap-5 items-start p-4"
                     )}
                     style={isMobile ? { transform: `translateX(-${current * 100}%)` } : {}}
                  >
                     {services.map((item, i) => {
                        const active = i === current
                        return (
                           <div
                              key={i}
                              onClick={() => activate(i)}
                              className={cn(
                                 "relative overflow-hidden cursor-pointer transition-all duration-500 ease-out flex-shrink-0 group/card",
                                 isMobile
                                    ? "w-full h-[20rem]"
                                    : cn(
                                       "rounded-2xl h-[26rem]",
                                       active
                                          ? "w-[30rem] -translate-y-2 shadow-2xl brightness-100"
                                          : "w-[5rem] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 brightness-75"
                                    )
                              )}
                           >
                              {/* Background Image */}
                              <img
                                 src={isMobile ? item.thumb : item.bg}
                                 alt={item.title}
                                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                              />

                              {/* Desktop/Mobile Content Overlay */}
                              <div className={cn(
                                 "absolute inset-0 flex",
                                 isMobile
                                    ? "items-end bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 pb-12"
                                    : "items-center bg-gradient-to-b from-transparent to-black/90 p-6"
                              )}>
                                 <div className={cn(
                                    "flex items-center gap-8 w-full",
                                    isMobile ? "flex-col md:flex-row text-left items-start" : "justify-center md:justify-start"
                                 )}>
                                    {/* Responsive Thumbnail (Hidden on mobile as it's now the background) */}
                                    {active && !isMobile && (
                                       <div className="relative shrink-0 hidden md:block">
                                          <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-xl blur opacity-20 group-hover/card:opacity-40 transition duration-500" />
                                          <img
                                             src={item.thumb}
                                             alt={item.title}
                                             className="relative rounded-xl object-cover shadow-2xl border border-white/10 w-[180px] h-[260px]"
                                          />
                                       </div>
                                    )}

                                    <div className={cn(
                                       "transition-all duration-300",
                                       !isMobile && !active ? "text-center" : "text-left flex-1"
                                    )}>
                                       {isMobile && active && (
                                          <span className="inline-block px-3 py-1 bg-orange-500/20 text-white text-[14px] font-semibold uppercase tracking-wider rounded-full mb-4">
                                             For {item.title}
                                          </span>
                                       )}

                                       <h3 className={cn(
                                          "font-bold transition-all duration-300 whitespace-nowrap",
                                          isMobile
                                             ? "text-2xl md:text-3xl mb-2"
                                             : (active ? "text-3xl" : "writing-mode-vertical rotate-180 text-lg")
                                       )}
                                          style={!isMobile && !active ? { writingMode: "vertical-rl" } : {}}
                                       >
                                          {item.title}
                                       </h3>

                                       {active && (
                                          <>
                                             <p className={cn(
                                                "text-gray-300 max-w-sm leading-relaxed mb-4",
                                                isMobile ? "text-sm md:text-base" : "mt-3 text-sm"
                                             )}>
                                                {item.desc}
                                             </p>
                                             <a
                                                href="https://wa.me/919467777773"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                             >
                                                <Button className={cn(
                                                   "rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]",
                                                   isMobile ? "px-6 py-2.5 h-auto text-sm" : "px-6 py-2"
                                                )}>
                                                   Book Appointment
                                                </Button>
                                             </a>
                                          </>
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </div>

               {/* Indicators (Visible in both modes) */}
               <div className="flex justify-center gap-3 mt-8">
                  {services.map((_, i) => (
                     <button
                        key={i}
                        onClick={() => activate(i)}
                        className={cn(
                           "transition-all duration-500 rounded-full",
                           i === current
                              ? "bg-orange-500 w-10 h-1.5"
                              : "bg-white/20 w-4 h-1.5 hover:bg-white/40"
                        )}
                        aria-label={`Go to slide ${i + 1}`}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
