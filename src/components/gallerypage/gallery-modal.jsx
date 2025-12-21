"use client"

import Image from "next/image"
import { useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"


export function GalleryModal({ image, onClose, onNext, onPrev, currentIndex, totalImages }) {
   useEffect(() => {
      const handleKeyDown = (e) => {
         if (e.key === "Escape") onClose()
         if (e.key === "ArrowRight") onNext()
         if (e.key === "ArrowLeft") onPrev()
      }

      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"

      return () => {
         document.removeEventListener("keydown", handleKeyDown)
         document.body.style.overflow = "unset"
      }
   }, [onClose, onNext, onPrev])

   const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
         onClose()
      }
   }

   const handleCloseClick = (e) => {
      e.stopPropagation()
      onClose()
   }

   const handlePrevClick = (e) => {
      e.stopPropagation()
      onPrev()
   }

   const handleNextClick = (e) => {
      e.stopPropagation()
      onNext()
   }

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-300">
         {/* Backdrop */}
         <div className="absolute inset-0 bg-black/96 backdrop-blur-lg" onClick={handleBackdropClick} />

         <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6">
            {/* Counter */}
            <div className="text-white/60 text-xs sm:text-sm tracking-[0.2em] font-light">
               {String(currentIndex + 1).padStart(2, "0")} / {String(totalImages).padStart(2, "0")}
            </div>

            {/* Close Button */}
            <button
               onClick={handleCloseClick}
               className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/60 hover:text-white transition-all duration-500"
               aria-label="Close"
               type="button"
            >
               <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-all duration-500 group-hover:rotate-90" />
               <X className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
            </button>
         </div>

         <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-24">
            <div className="relative w-full h-full max-w-[95vw] max-h-[85vh] sm:max-h-[80vh] md:max-h-[75vh] lg:max-h-[70vh] animate-in fade-in zoom-in-95 duration-700">
               <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 85vw"
               />

               <div className="absolute -top-8 sm:-top-10 left-0 text-[10px] sm:text-xs text-white/50 tracking-[0.3em] uppercase font-light">
                  {image.category}
               </div>

               <div className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 left-0 right-0 sm:right-auto sm:max-w-2xl">
                  <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-light leading-tight tracking-wide">
                     {image.alt}
                  </h2>
                  <p className="text-white/40 text-xs sm:text-sm mt-2 leading-relaxed hidden sm:block">{image.description}</p>
               </div>
            </div>

            <button
               onClick={handlePrevClick}
               className="group absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center text-white/40 hover:text-white transition-all duration-500"
               aria-label="Previous"
               type="button"
            >
               <div className="absolute inset-0 border border-white/10 group-hover:border-[#b8936d] transition-all duration-500 group-hover:scale-110" />
               <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 relative z-10" />
            </button>

            <button
               onClick={handleNextClick}
               className="group absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center text-white/40 hover:text-white transition-all duration-500"
               aria-label="Next"
               type="button"
            >
               <div className="absolute inset-0 border border-white/10 group-hover:border-[#b8936d] transition-all duration-500 group-hover:scale-110" />
               <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 relative z-10" />
            </button>
         </div>

         <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-6 text-white/30 text-xs tracking-wider">
            <div className="flex items-center gap-2">
               <kbd className="px-2 py-1 border border-white/10 text-[10px]">←</kbd>
               <span>PREV</span>
            </div>
            <div className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-2">
               <kbd className="px-2 py-1 border border-white/10 text-[10px]">→</kbd>
               <span>NEXT</span>
            </div>
            <div className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-2">
               <kbd className="px-2 py-1 border border-white/10 text-[10px]">ESC</kbd>
               <span>CLOSE</span>
            </div>
         </div>
      </div>
   )
}
