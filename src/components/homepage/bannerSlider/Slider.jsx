"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function FullScreenSlider() {
   const images = [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      // "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      // "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      // "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
   ]

   const [currentIndex, setCurrentIndex] = useState(0)

   const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
   }

   const prevSlide = () => {
      setCurrentIndex((prev) =>
         prev === 0 ? images.length - 1 : prev - 1
      )
   }

   return (
      <div className="relative w-full h-[70vh] overflow-hidden mb-10">
         {/* Images */}
         <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
         >
            {images.map((src, index) => (
               <div key={index} className="w-full h-screen flex-shrink-0">
                  <img
                     src={src}
                     alt="slider"
                     className="w-full h-full object-cover"
                  />
               </div>
            ))}
         </div>

         {images.length > 1 && (
            <>
               <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
               >
                  <ChevronLeft size={28} />
               </button>

               <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
               >
                  <ChevronRight size={28} />
               </button>
            </>
         )}
      </div>
   )
}
