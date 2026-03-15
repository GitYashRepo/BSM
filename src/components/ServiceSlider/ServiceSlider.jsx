"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ServiceSlider({ topics, onBookAppointment }) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [screenWidth, setScreenWidth] = useState(0);

   useEffect(() => {
      setScreenWidth(window.innerWidth);
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   const handleNext = () => {
      if (currentIndex < topics.length - 1) {
         setCurrentIndex((prev) => prev + 1);
      }
   };

   const handlePrev = () => {
      if (currentIndex > 0) {
         setCurrentIndex((prev) => prev - 1);
      }
   };

   return (
      <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-white to-amber-50 pt-10">
         {/* Desktop Navigation Buttons */}
         <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-50 flex justify-between pointer-events-none md:flex hidden">
            <button
               onClick={handlePrev}
               disabled={currentIndex === 0}
               className={`p-3 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200 shadow-lg pointer-events-auto transition-all duration-300 ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-amber-100 hover:scale-110 active:scale-95"
                  }`}
               aria-label="Previous Slide"
            >
               <ChevronLeft className="w-6 h-6 text-amber-800" />
            </button>
            <button
               onClick={handleNext}
               disabled={currentIndex === topics.length - 1}
               className={`p-3 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200 shadow-lg pointer-events-auto transition-all duration-300 ${currentIndex === topics.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-amber-100 hover:scale-110 active:scale-95"
                  }`}
               aria-label="Next Slide"
            >
               <ChevronRight className="w-6 h-6 text-amber-800" />
            </button>
         </div>

         {/* Mobile Navigation Area (Bottom) */}
         <div className="absolute bottom-6 left-0 right-0 z-50 flex flex-col items-center gap-6 md:hidden px-6">
            <div className="flex justify-between w-full pointer-events-none">
               <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`p-1 rounded-full bg-white border border-amber-200 shadow-lg pointer-events-auto transition-all active:scale-95 ${currentIndex === 0 ? "opacity-0 pointer-events-none" : ""
                     }`}
                  aria-label="Previous Slide"
               >
                  <ChevronLeft className="w-6 h-6 text-amber-800" />
               </button>
               <button
                  onClick={handleNext}
                  disabled={currentIndex === topics.length - 1}
                  className={`p-1 rounded-full bg-white border border-amber-200 shadow-lg pointer-events-auto transition-all active:scale-95 ${currentIndex === topics.length - 1 ? "opacity-0 pointer-events-none" : ""
                     }`}
                  aria-label="Next Slide"
               >
                  <ChevronRight className="w-6 h-6 text-amber-800" />
               </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2.5">
               {topics.map((_, index) => (
                  <button
                     key={index}
                     onClick={() => setCurrentIndex(index)}
                     className={`h-1 rounded-full transition-all duration-500 ${currentIndex === index ? "w-8 bg-amber-600" : "w-3 bg-amber-200"
                        }`}
                     aria-label={`Go to slide ${index + 1}`}
                  />
               ))}
            </div>
         </div>

         {/* Desktop Indicators */}
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 hidden md:flex gap-3">
            {topics.map((_, index) => (
               <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === index ? "w-10 bg-amber-600" : "w-4 bg-amber-200"
                     }`}
                  aria-label={`Go to slide ${index + 1}`}
               />
            ))}
         </div>

         <motion.div
            drag="x"
            dragConstraints={{
               left: -(topics.length - 1) * screenWidth,
               right: 0,
            }}
            dragElastic={0.08}
            onDragEnd={(e, info) => {
               const offset = info.offset.x;
               let newIndex = currentIndex;

               if (offset < -100 && currentIndex < topics.length - 1) {
                  newIndex = currentIndex + 1;
               } else if (offset > 100 && currentIndex > 0) {
                  newIndex = currentIndex - 1;
               }

               setCurrentIndex(newIndex);
            }}
            animate={{ x: -currentIndex * screenWidth }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="flex h-full"
            style={{ width: `${topics.length * 100}vw` }}
         >
            {topics.map((topic, index) => (
               <div
                  key={topic.id}
                  className="w-screen h-screen flex items-center justify-center px-6 md:px-16"
               >
                  <div className="max-w-6xl w-full h-full">
                     {/* MOBILE */}
                     <div className="block md:hidden w-full h-full pt-4 pb-28">
                        <div className="w-full h-full flex flex-col px-4">
                           <div className="flex-shrink-0 flex items-center justify-center mb-6">
                              <div className="relative w-full h-[45vh] overflow-hidden rounded-xl shadow-xl border-2 border-white">
                                 <img
                                    src={topic.image}
                                    alt={topic.title}
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                 />
                              </div>
                           </div>

                           <div className="flex-grow flex flex-col justify-center">
                              <div className="w-full text-center">
                                 <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 mb-2 justify-center">
                                    <span className="font-mono text-amber-600 font-bold">
                                       {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="w-8 h-px bg-amber-200" />
                                    <span>{topic.subtitle}</span>
                                 </div>

                                 <h2 className="text-[clamp(1.4rem,4vw,2rem)] leading-tight text-gray-900 mb-6 font-serif px-2">
                                    {topic.title}
                                 </h2>

                                 <button
                                    onClick={onBookAppointment}
                                    className="w-full flex items-center justify-center gap-3 text-sm uppercase tracking-wider font-bold active:scale-95 transition-transform"
                                 >
                                    Book Now
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                       <path d="M5 12h14m-7-7 7 7-7 7" />
                                    </svg>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* DESKTOP */}
                     <div className="hidden md:flex h-full justify-between px-12 lg:px-20">
                        <div className="w-1/2">
                           <div className="flex items-center gap-6 text-md text-gray-500 mb-8">
                              <span className="font-mono tracking-wider text-xl text-amber-600 font-bold">
                                 {String(index + 1).padStart(2, "0")}
                              </span>
                              <span className="h-px flex-1 bg-amber-200" />
                              <span className="uppercase tracking-widest text-xs font-semibold">
                                 {topic.subtitle}
                              </span>
                           </div>

                           <h2 className="text-[clamp(2.5rem,4vw,4.5rem)] font-serif leading-tight text-gray-900 mb-8">
                              {topic.title}
                           </h2>

                           <div className="space-y-4 max-w-md text-gray-600 leading-relaxed mb-10 text-lg">
                              {topic.description.map((point, i) => (
                                 <div key={i} className="flex gap-3">
                                    <span className="text-amber-600 mt-1">
                                       <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="6" cy="6" r="4" fill="currentColor" />
                                       </svg>
                                    </span>
                                    <p>{point}</p>
                                 </div>
                              ))}
                           </div>

                           <button
                              onClick={onBookAppointment}
                              className="group inline-flex items-center gap-3 text-sm tracking-wide uppercase text-amber-900 font-bold"
                           >
                              Book Appointment
                              <span className="w-12 h-px bg-amber-900 group-hover:w-20 transition-all duration-300" />
                           </button>
                        </div>

                        <div className="hidden w-1/3 md:block">
                           <div className="relative h-[80vh] overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                              <img
                                 src={topic.image}
                                 alt={topic.title}
                                 className="absolute inset-0 w-full h-full object-cover object-top scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </motion.div>
      </section>
   );
}
