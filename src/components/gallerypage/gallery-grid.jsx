"use client"

import Image from "next/image"
import { useState } from "react"

export function GalleryGrid({ images, onImageClick }) {
   const [filter, setFilter] = useState("All")
   const categories = ["All", "Bridal-MakeUp", "Party-MakeUp", "Engagement-MakeUp"]

   const filteredImages = filter === "All" ? images : images.filter((img) => img.category === filter)

   return (
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-[#faf8f6] to-[#f5f1ed]">
         <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 fade-in-section">
               {categories.map((category) => (
                  <button
                     key={category}
                     onClick={() => setFilter(category)}
                     className={`px-6 py-2 rounded-full text-sm tracking-wide transition-all duration-300 ${filter === category
                        ? "bg-[#b8936d] text-white shadow-lg scale-105"
                        : "bg-white text-[#6b5d54] border border-[#b8936d]/20 hover:border-[#b8936d] hover:text-[#b8936d]"
                        }`}
                  >
                     {category}
                  </button>
               ))}
            </div>

            {/* Masonry Grid - Award-Winning Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
               {filteredImages.map((image, index) => {
                  // Create varied heights for masonry effect
                  const spanClass = [
                     "row-span-2", // tall
                     "row-span-1", // short
                     "row-span-2", // tall
                     "row-span-3", // extra tall
                     "row-span-1", // short
                     "row-span-2", // tall
                  ][index % 6]

                  return (
                     <div
                        key={image.id}
                        className={`group relative overflow-hidden rounded-lg cursor-pointer fade-in-section ${spanClass}`}
                        style={{ transitionDelay: `${index * 50}ms` }}
                        onClick={() => onImageClick(index)}
                     >
                        {/* Image */}
                        <Image
                           src={image.src || "/placeholder.svg"}
                           alt={image.alt}
                           fill
                           className="object-cover transition-all duration-700 group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2420]/90 via-[#2c2420]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 bg-[#b8936d]/90 backdrop-blur-sm text-white text-xs tracking-wide rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                           {image.category}
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                           <h3 className="text-white text-xl font-serif mb-2">{image.alt}</h3>
                           <p className="text-[#c4b5a8] text-sm">{image.description}</p>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#d4af8c] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-lg" />
                     </div>
                  )
               })}
            </div>

            {/* Load More Section */}
            <div className="mt-20 text-center fade-in-section">
               <div className="inline-flex flex-col items-center gap-4">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#b8936d] to-transparent" />
                  <p className="text-[#6b5d54] text-sm tracking-wide">Showcasing {filteredImages.length} Beautiful Moments</p>
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#b8936d] to-transparent" />
               </div>
            </div>
         </div>
      </section>
   )
}
