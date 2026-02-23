"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const slides = [
   {
      id: 1,
      tag: "BLUSH",
      heading: "Makeup",
      title: "Elegance",
      description:
         "Enhance your look with flawless makeup artistry tailored for parties, events, and everyday beauty.",
      buttonText: "EXPLORE",
      link: "/makeup",
      image: "/comp/Makeup.jpeg",
   },
   {
      id: 2,
      tag: "BLUSH",
      heading: "Hair",
      title: "Design",
      description:
         "Experience expert haircuts, smoothening, styling, and treatments crafted for your unique texture.",
      buttonText: "EXPLORE",
      link: "/hair",
      image: "/banner/hair3.jpeg",
   },
   {
      id: 3,
      tag: "BLUSH",
      heading: "Beauty",
      title: "Enhancement",
      description:
         "Refine your features with professional beauty services including brows, lashes, and signature detailing.",
      buttonText: "EXPLORE",
      link: "/beauty",
      image: "/comp/beauty.jpeg",
   },
   {
      id: 4,
      tag: "BLUSH",
      heading: "Esthetics",
      title: "Radiance",
      description:
         "Rejuvenate your skin with premium facials, peels, and esthetic therapies for long-lasting glow.",
      buttonText: "EXPLORE",
      link: "/esthetics",
      image: "/comp/Esthetics.jpeg",
   },
   {
      id: 5,
      tag: "BLUSH",
      heading: "Signature Services",
      title: "Glow",
      description:
         "Brighten and nourish your skin with advanced skincare treatments crafted for clarity and hydration.",
      buttonText: "EXPLORE",
      link: "/signatureservices",
      image: "/comp/img3.jpg",
   },
   {
      id: 6,
      tag: "BLUSH",
      heading: "Bridal",
      title: "Bridal Makeup",
      description:
         "Experience luxurious bridal makeup designed to stay flawless, elegant, and radiant throughout your special day.",
      buttonText: "EXPLORE",
      link: "/makeup",
      image: "/comp/img15.jpg",
   },
];


const SLIDE_DURATION = 5000


export default function SalonSlider() {
   const [current, setCurrent] = useState(0)
   const [direction, setDirection] = useState(0)
   const [progress, setProgress] = useState(0)
   const sliderRef = useRef(null)

   const slide = slides[current]

   const paginate = (dir) => {
      setDirection(dir)
      setCurrent((prev) => (prev + dir + slides.length) % slides.length)
      setProgress(0)
   }

   useEffect(() => {
      setProgress(0)
      const start = Date.now()

      const timer = setInterval(() => {
         const elapsed = Date.now() - start
         const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
         setProgress(pct)

         if (pct === 100) {
            clearInterval(timer)
            paginate(1)
         }
      }, 16)

      return () => clearInterval(timer)
   }, [current])

   return (
      <div
         ref={sliderRef}
         className="relative w-full h-[90vh] md:h-[80vh] overflow-hidden bg-white flex flex-col justify-between md:flex-row"
      >
         {/* IMAGE SECTION */}
         <div className="w-full md:w-2/5 h-[60%] md:h-full relative order-1 md:order-2 overflow-hidden">
            <AnimatePresence mode="wait">
               <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
               >
                  <Image
                     src={slide.image}
                     alt={slide.heading}
                     fill
                     priority
                     className="object-cover object-center md:object-top"
                  />
               </motion.div>
            </AnimatePresence>
         </div>

         {/* CONTENT SECTION */}
         <div className="w-full md:w-2/3 flex flex-col justify-between px-6 pb-6 md:p-12 lg:p-16 order-2 md:order-1 relative">
            {/* TAG */}
            <motion.div
               key={`tag-${current}`}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4 }}
               className="tracking-widest text-sm text-[#750851] font-bold hidden md:block"
            >
               {slide.tag}
            </motion.div>

            {/* CENTER CONTENT */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-20 flex-1 mt-6 ml-8 md:ml-0">
               {/* PROGRESS BAR */}
               <div className="flex hidden md:block items-center md:flex-col md:justify-start justify-center">
                  <div className="w-full md:w-[2px] h-[4px] md:h-40 bg-gray-200 rounded-full overflow-hidden">
                     <motion.div
                        className="bg-[#750851]"
                        style={{
                           width:
                              typeof window !== "undefined" && window.innerWidth < 768
                                 ? `${progress}%`
                                 : "100%",
                           height:
                              typeof window !== "undefined" && window.innerWidth >= 768
                                 ? `${progress}%`
                                 : "100%",
                        }}
                     />
                  </div>
               </div>

               {/* TEXT */}
               <div className="relative flex-1 ">
                  {/* WATERMARK NUMBER */}
                  <motion.div
                     key={`num-${current}`}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 0.08 }}
                     className="absolute -top-10 md:-top-32 right-0 md:left-6 text-[160px] md:text-[300px] font-extrabold pointer-events-none select-none"
                     style={{ fontFamily: "Georgia, serif" }}
                  >
                     {String(current + 1).padStart(2, "0")}
                  </motion.div>

                  <AnimatePresence mode="wait">
                     <motion.div
                        key={`title-${current}`}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                     >
                        <p className="uppercase tracking-widest text-sm text-[#750851]">
                           {slide.title}
                        </p>
                        <h2 className="text-xl md:text-4xl font-bold mt-3">
                           {slide.heading}
                        </h2>
                     </motion.div>
                  </AnimatePresence>

                  {/* CTA */}
                  <Link href={slide.link}>
                     <button className="group mt-6 flex items-center gap-4 text-black hover:text-[#D99726] transition">
                        <span>{slide.buttonText}</span>
                        <span className="h-[1px] w-16 bg-black group-hover:w-24 group-hover:bg-[#D99726] transition-all" />
                     </button>
                  </Link>
               </div>
            </div>

            {/* NAVIGATION */}
            <div className="flex items-center justify-between mt-6 mx-8 md:mx-0">
               <div className="flex gap-3">
                  <button onClick={() => paginate(-1)}>
                     <ChevronLeft className="md:w-12 md:h-12 hover:scale-105" />
                  </button>
                  <button onClick={() => paginate(1)}>
                     <ChevronRight className="md:w-12 md:h-12 hover:scale-105" />
                  </button>
               </div>

               <div className="flex gap-2">
                  {slides.map((_, i) => (
                     <button
                        key={i}
                        onClick={() => {
                           setDirection(i > current ? 1 : -1)
                           setCurrent(i)
                           setProgress(0)
                        }}
                        className={`h-1 transition-all ${i === current ? "w-8 bg-black" : "w-2 bg-gray-300"
                           }`}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}
