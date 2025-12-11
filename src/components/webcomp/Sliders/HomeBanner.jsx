"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
   {
      id: 1,
      tag: "BLUSH",
      heading: "Makeup",
      title: "Elegance",
      description:
         "Enhance your look with flawless makeup artistry tailored for parties, events, and everyday beauty.",
      buttonText: "EXPLORE",
      image: "/images/img2.jpg",
   },
   {
      id: 2,
      tag: "BLUSH",
      heading: "Hair",
      title: "Design",
      description:
         "Experience expert haircuts, smoothening, styling, and treatments crafted for your unique texture.",
      buttonText: "EXPLORE",
      image: "/images/img5.jpg",
   },
   {
      id: 3,
      tag: "BLUSH",
      heading: "Beauty",
      title: "Enhancement",
      description:
         "Refine your features with professional beauty services including brows, lashes, and signature detailing.",
      buttonText: "EXPLORE",
      image: "/images/img7.jpg",
   },
   {
      id: 4,
      tag: "BLUSH",
      heading: "Esthetics",
      title: "Radiance",
      description:
         "Rejuvenate your skin with premium facials, peels, and esthetic therapies for long-lasting glow.",
      buttonText: "EXPLORE",
      image: "/images/img9.jpg",
   },
   {
      id: 5,
      tag: "BLUSH",
      heading: "Skin",
      title: "Glow",
      description:
         "Brighten and nourish your skin with advanced skincare treatments crafted for clarity and hydration.",
      buttonText: "EXPLORE",
      image: "/images/img3.jpg",
   },
   {
      id: 6,
      tag: "BLUSH",
      heading: "Bridal",
      title: "Bridal Makeup",
      description:
         "Experience luxurious bridal makeup designed to stay flawless, elegant, and radiant throughout your special day.",
      buttonText: "EXPLORE",
      image: "/images/img8.jpg",
   },
];


// const slides = [
//    {
//       id: 1,
//       tag: "BLUSH",
//       heading: "Hair",
//       title: "Artistry",
//       description: "Experience the finest hair care services crafted with precision and elegance.",
//       buttonText: "EXPLORE",
//       image: "/images/img5.jpg",
//    },
//    {
//       id: 2,
//       tag: "BLUSH",
//       heading: "Makeup",
//       title: "Mastery",
//       description: "Transform your look with our expert color treatments and techniques.",
//       buttonText: "EXPLORE",
//       image: "/images/img6.jpg",
//    },
//    {
//       id: 3,
//       tag: "BLUSH",
//       heading: "Bridal",
//       title: "Perfection",
//       description: "Achieve your ideal texture with our specialized treatments and styling.",
//       buttonText: "EXPLORE",
//       image: "/images/img2.jpg",
//    },
// ]

const SLIDE_DURATION = 6000

export default function HairSalonSlider() {
   const [current, setCurrent] = useState(0)
   const [direction, setDirection] = useState(0)
   const [progress, setProgress] = useState(0)
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
   const sliderRef = useRef(null)

   const slideVariants = {
      enter: (dir) => ({
         x: dir > 0 ? 1000 : -1000,
         opacity: 0,
      }),
      center: {
         zIndex: 1,
         x: 0,
         opacity: 1,
      },
      exit: (dir) => ({
         zIndex: 0,
         x: dir < 0 ? 1000 : -1000,
         opacity: 0,
      }),
   }

   const contentVariants = {
      hidden: { y: 80, opacity: 0 },
      visible: (i) => ({
         y: 0,
         opacity: 1,
         transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut",
         },
      }),
      exit: {
         y: 80,
         opacity: 0,
         transition: { duration: 0.4 },
      },
   }

   const paginate = (newDirection) => {
      setDirection(newDirection)
      setCurrent((prev) => (prev + newDirection + slides.length) % slides.length)
      setProgress(0)
   }

   useEffect(() => {
      setProgress(0)
      const startTime = Date.now()

      const animationInterval = setInterval(() => {
         const elapsed = Date.now() - startTime
         const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
         setProgress(newProgress)

         if (newProgress >= 100) {
            clearInterval(animationInterval)
            paginate(1)
         }
      }, 8)

      return () => clearInterval(animationInterval)
   }, [current])

   const handleMouseMove = (e) => {
      if (!sliderRef.current) return

      const rect = sliderRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      setMousePosition({
         x: x * -20,
         y: y * -20,
      })
   }

   const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 })
   }

   const slide = slides[current]

   return (
      <div
         ref={sliderRef}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         className="relative w-full h-screen overflow-hidden bg-white flex"
      >
         {/* Left Side - White background with black text */}
         <div className="w-1/2 flex flex-col justify-between p-8 md:p-12 lg:p-16 z-10 bg-white">
            {/* Top Section */}
            <div>
               <motion.div
                  key={`tag-${current}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xs md:text-xs tracking-widest text-[#D99726] font-light uppercase"
               >
                  {slide.tag}
               </motion.div>
            </div>

            {/* Center Content - Animates from below */}
            <div className="flex-1 flex gap-20">
               <div className="flex flex-col items-center justify-start pt-12">
                  <div className="w-[1px] h-40 bg-gray-200 relative rounded-full overflow-hidden">
                     <motion.div
                        className="absolute top-0 left-0 w-full bg-[#D99726] rounded-full"
                        style={{ height: `${progress}%` }}
                        transition={{ type: "linear" }}
                     />
                  </div>
               </div>

               {/* Content */}
               <div className="flex-1 flex flex-col justify-start relative z-0">
                  <motion.div
                     key={`number-${current}`}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 0.08 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.5 }}
                     className="absolute -top-20 left-6 pointer-events-none -z-10"
                  >
                     <span
                        className="text-[300px] font-extrabold text-black select-none"
                        style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.05em" }}
                     >
                        {String(current + 1).padStart(2, "0")}
                     </span>
                  </motion.div>

                  <div className="pt-10">
                     <AnimatePresence mode="wait">
                        <motion.div
                           key={`title-${current}`}
                           variants={contentVariants}
                           initial="hidden"
                           animate="visible"
                           exit="exit"
                           custom={1}
                           className="relative z-10 py-4"
                        >
                           <p className="text-sm uppercase tracking-widest md:text-md lg:text-md text-[#D99726] font-light">{slide.title}</p>
                        </motion.div>

                        <motion.div
                           key={`heading-${current}`}
                           variants={contentVariants}
                           initial="hidden"
                           animate="visible"
                           exit="exit"
                           custom={0}
                           className="mb-6 pb-10 relative z-10"
                        >
                           <h2 className="text-4xl md:text-3xl lg:text-6xl font-bold text-black leading-none">{slide.heading}</h2>
                        </motion.div>



                        {/* <motion.div
                        key={`desc-${current}`}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        custom={2}
                        className="mb-8"
                     >
                        <p className="text-sm md:text-base text-gray-600 max-w-md leading-relaxed">{slide.description}</p>
                     </motion.div> */}

                        {/* <button
                           key={`button-${current}`}
                           variants={contentVariants}
                           initial="hidden"
                           animate="visible"
                           exit="exit"
                           custom={3}
                           className="w-auto flex flex-row gap-4 items-center hover:text-[#D99726] cursor-pointer"
                        >
                           <span>{slide.buttonText}</span><span className="w-[80px] h-[1px] border border-black"></span>
                        </button> */}
                        <button
                           key={`button-${current}`}
                           variants={contentVariants}
                           initial="hidden"
                           animate="visible"
                           exit="exit"
                           custom={3}
                           className="
                                group
                                w-auto flex flex-row gap-4 items-center
                                cursor-pointer
                                text-black
                                hover:text-[#D99726]
                                transition-colors duration-300
                              "
                        >
                           <span>{slide.buttonText}</span>

                           <span
                              className="
                                   h-[1px]
                                   w-[80px]
                                   bg-black
                                   transition-all duration-300
                                   group-hover:w-[120px]
                                   group-hover:bg-[#D99726]
                                 "
                           ></span>
                        </button>

                     </AnimatePresence>
                  </div>
               </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex items-center justify-between gap-6">
               {/* Navigation Arrows */}
               <div className="flex gap-4">
                  <button
                     onClick={() => paginate(-1)}
                     className="p-3 hover:bg-gray-100 transition-colors duration-200 rounded-full group"
                     aria-label="Previous slide"
                  >
                     <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:scale-110 transition-transform" />
                  </button>
                  <button
                     onClick={() => paginate(1)}
                     className="p-3 hover:bg-gray-100 transition-colors duration-200 rounded-full group"
                     aria-label="Next slide"
                  >
                     <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:scale-110 transition-transform" />
                  </button>
               </div>

               {/* Slide Indicators */}
               <div className="flex gap-3 items-center">
                  {slides.map((_, index) => (
                     <motion.button
                        key={index}
                        onClick={() => {
                           setDirection(index > current ? 1 : -1)
                           setCurrent(index)
                           setProgress(0)
                        }}
                        className={`h-1 transition-all duration-300 cursor-pointer ${index === current ? "bg-black w-8" : "bg-gray-300 w-2"
                           }`}
                        aria-label={`Go to slide ${index + 1}`}
                     />
                  ))}
               </div>
            </div>
         </div>

         {/* Right Side - Image (50%) with Parallax */}
         <div className="w-1/2 relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
               <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                     opacity: { duration: 0.8, ease: "easeInOut" },
                     scale: { duration: 0.8, ease: "easeInOut" },
                  }}
                  className="absolute inset-0"
                  style={{
                     x: mousePosition.x,
                     y: mousePosition.y,
                  }}
               >
                  <Image
                     src={slide.image || "/placeholder.svg"}
                     alt={`${slide.heading} ${slide.title}`}
                     fill
                     className="object-cover object-top scale-104"
                     priority
                  />
               </motion.div>
            </AnimatePresence>
         </div>
      </div>
   )
}
