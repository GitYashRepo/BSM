"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, Minus } from "lucide-react"

const services = [
   {
      number: "01",
      title: "Makeup\nArtistry",
      category: "MAKEUP",
      description:
         "Professional makeup application for any occasion. From natural everyday looks to glamorous evening makeup with premium products.",
      image: "/images/img5.jpg",
      duration: "45-60 min",
      price: "From $75",
   },
   {
      number: "02",
      title: "Hair\nStyling",
      category: "HAIR",
      description:
         "Complete hair care services including cuts, styling, treatments, and coloring to enhance your natural beauty.",
      image: "/images/img7.jpg",
      duration: "60-90 min",
      price: "From $95",
   },
   {
      number: "03",
      title: "Beauty\nServices",
      category: "BEAUTY",
      description:
         "Comprehensive beauty treatments including lashes, brows, waxing, and more for a complete beauty transformation.",
      image: "/images/img1.jpg",
      duration: "30-60 min",
      price: "From $55",
   },
   {
      number: "04",
      title: "Esthetics\nCare",
      category: "ESTHETICS",
      description:
         "Advanced skincare treatments, facials, and rejuvenation services for radiant, healthy skin using medical-grade products.",
      image: "/images/img9.jpg",
      duration: "75-90 min",
      price: "From $120",
   },
   // {
   //    number: "05",
   //    title: "Bridal\nMakeup",
   //    category: "BRIDAL",
   //    description:
   //       "Flawless bridal makeup for your special day with trials, touch-up kits, and complete packages for the bridal party.",
   //    image: "/images/img2.jpg",
   //    duration: "2-3 hours",
   //    price: "From $250",
   // },
]

export function ServiceSection() {
   const [activeIndex, setActiveIndex] = useState(0)

   return (
      <section className="relative min-h-screen bg-primary text-primary-foreground overflow-hidden">
         {/* Hero Typography */}
         <div className="relative px-6 lg:px-12 pt-16 lg:pt-24 pb-12">
            <div className="max-w-screen-2xl mx-auto">
               <div className="mb-6">
                  <span className="text-xs lg:text-sm font-mono tracking-widest uppercase text-muted-foreground">
                     Our Services
                  </span>
               </div>
               <h1 className="text-[15vw] lg:text-[12vw] xl:text-[10vw] leading-[0.85] font-light tracking-tighter">
                  <span className="block">Transform</span>
                  <span className="block text-secondary">Your Look</span>
               </h1>
            </div>
         </div>

         {/* Services Grid */}
         <div className="relative px-6 lg:px-12 pb-24">
            <div className="max-w-screen-2xl mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                  {services.map((service, index) => {
                     const cardRef = useRef(null)
                     const cursorRef = useRef(null)

                     useEffect(() => {
                        const card = cardRef.current;
                        const cursor = cursorRef.current;
                        if (!card || !cursor) return;

                        let mouseX = 0;
                        let mouseY = 0;
                        let currentX = 0;
                        let currentY = 0;
                        const speed = 0.15; // lower = smoother (0.1–0.2 recommended)

                        const handleMove = (e) => {
                           const rect = card.getBoundingClientRect();
                           mouseX = e.clientX - rect.left;
                           mouseY = e.clientY - rect.top;
                        };

                        const follow = () => {
                           currentX += (mouseX - currentX) * speed;
                           currentY += (mouseY - currentY) * speed;

                           cursor.style.transform = `translate(${currentX - 40}px, ${currentY - 40}px)`;

                           requestAnimationFrame(follow);
                        };

                        card.addEventListener("mousemove", handleMove);
                        requestAnimationFrame(follow);

                        return () => {
                           card.removeEventListener("mousemove", handleMove);
                        };
                     }, []);

                     return (
                        <div
                           key={index}
                           ref={cardRef}
                           className={`group relative cursor-pointer ${index === 0
                              ? "lg:col-span-7 lg:row-span-2"
                              : index === 1
                                 ? "lg:col-span-5"
                                 : index === 2
                                    ? "lg:col-span-5"
                                    : index === 3
                                       ? "lg:col-span-7"
                                       : "lg:col-span-0"
                              }`}
                           onClick={() => setActiveIndex(index)}
                        >
                           {/* Cursor follower inside card */}
                           <div
                              ref={cursorRef}
                              className="pointer-events-none absolute z-10 opacity-0 group-hover:opacity-100  transition-opacity duration-300"
                              style={{ width: "80px", height: "80px" }}
                           >
                              <div className="w-20 h-20 rounded-full bg-[#D99726] border-2 border-white flex items-center justify-center">
                                 <span className="text-sm font-black font-mono">VIEW</span>
                              </div>
                           </div>

                           {/* Card Container */}
                           <div className="relative h-[50vh] lg:h-full min-h-[400px] overflow-hidden bg-card rounded-sm">
                              <div className="absolute inset-0">
                                 <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                                 />
                                 <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors duration-700" />
                              </div>

                              <div className="relative h-full flex flex-col justify-between p-6 lg:p-8">
                                 <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                       <span className="text-6xl lg:text-8xl font-light leading-none opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                          {service.number}
                                       </span>

                                       <div className="flex flex-col gap-1">
                                          <span className="text-xs font-mono tracking-wider uppercase opacity-60">
                                             {service.category}
                                          </span>
                                          <div className="flex items-center gap-2 text-xs font-mono opacity-60">
                                             <span>{service.duration}</span>
                                             <Minus className="w-3 h-3" />
                                             <span>{service.price}</span>
                                          </div>
                                       </div>
                                    </div>

                                    <div className="w-10 h-10 rounded-full border border-primary-foreground/20 group-hover:border-secondary group-hover:bg-secondary flex items-center justify-center transition-all duration-300 group-hover:scale-110 z-20">
                                       <ArrowUpRight className="w-5 h-5 group-hover:text-primary transition-colors" />
                                    </div>
                                 </div>

                                 <div className="space-y-4 z-20">
                                    <h2
                                       className="text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.9] tracking-tight whitespace-pre-line"
                                       style={{ textShadow: "2px 2px 20px rgba(0,0,0,0.3)" }}
                                    >
                                       {service.title}
                                    </h2>

                                    <p className="text-sm lg:text-base leading-relaxed max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                       {service.description}
                                    </p>

                                    <button className="inline-flex items-center gap-2 text-xs lg:text-sm font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 hover:text-secondary z-20 cursor-pointer">
                                       Learn More
                                       <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                 </div>
                              </div>

                              {activeIndex === index && (
                                 <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-secondary animate-pulse" />
                              )}
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>

         {/* Bottom CTA */}
         <div className="sticky bottom-0 left-0 right-0 bg-primary-foreground text-primary border-t border-border">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6 lg:py-8">
               <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="space-y-2">
                     <p className="text-xs font-mono tracking-wider uppercase opacity-60">Ready to begin?</p>
                     <h3 className="text-2xl lg:text-4xl font-light tracking-tight">Book your transformation today</h3>
                  </div>

                  <button className="group relative px-8 py-4 my-10 bg-primary text-primary-foreground overflow-hidden transition-all duration-300 hover:scale-105">
                     <span className="relative z-10 flex items-center gap-2 text-sm group-hover:text-black font-mono tracking-wider uppercase">
                        Book Now
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                     </span>
                     <div className="absolute inset-0 bg-secondary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}
