"use client"

import Image from "next/image"

export function SuccessStories() {
   const stories = [
      {
         name: "Priya Sharma",
         location: "Mumbai, Maharashtra",
         image: "/salon-success-story.jpg",
         quote: "Joining was the best decision. In 18 months, we became the go-to salon in our area.",
         revenue: "₹25L",
         year: "2024",
      },
      {
         name: "Anjali Verma",
         location: "Delhi NCR",
         image: "/beauty-salon-entrepreneur.jpg",
         quote: "With no prior experience, the training made me a confident salon owner.",
         revenue: "₹31L",
         year: "2024",
      },
      {
         name: "Neha Kapoor",
         location: "Bangalore, Karnataka",
         image: "/luxury-beauty-salon.jpg",
         quote: "The brand trust opened doors immediately. Clients knew Blush quality.",
         revenue: "₹28L",
         year: "2024",
      },
   ]

   return (
      <section className="py-32 px-6 lg:px-12 bg-[#FAFAFA]">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-24 max-w-3xl">
               <p className="text-xs tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6">Real Success</p>
               <h2 className="text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight mb-8">
                  Meet Our
                  <br />
                  <span className="text-[#AC2121] font-serif italic">Success Stories</span>
               </h2>
               <p className="text-base text-[#666] leading-relaxed font-light">
                  Franchise partners thriving with proven systems and dedicated support.
               </p>
            </div>

            {/* Stories */}
            <div className="space-y-24">
               {stories.map((story, index) => (
                  <div
                     key={index}
                     className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                     {/* Image */}
                     <div
                        className={`relative aspect-[3/4] rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}
                     >
                        <Image
                           src={story.image || "/placeholder.svg?height=400&width=300&query=luxury salon"}
                           alt={story.name}
                           fill
                           className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent" />
                     </div>

                     {/* Content */}
                     <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                        <div className="space-y-6">
                           <blockquote className="text-xl md:text-2xl font-light text-[#1a1a1a] leading-relaxed">
                              "{story.quote}"
                           </blockquote>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-12">
                           <div className="space-y-2">
                              <p className="text-xs uppercase tracking-[0.15em] text-[#6E2E35] font-light">Revenue</p>
                              <p className="text-2xl font-light text-[#AC2121]">{story.revenue}</p>
                           </div>
                           <div className="space-y-2">
                              <p className="text-xs uppercase tracking-[0.15em] text-[#6E2E35] font-light">Year</p>
                              <p className="text-2xl font-light text-[#6E2E35]">{story.year}</p>
                           </div>
                        </div>

                        {/* Name & Location */}
                        <div className="pt-6 border-t border-[#6E2E35]/10">
                           <p className="text-lg font-light text-[#1a1a1a]">{story.name}</p>
                           <p className="text-sm text-[#666] font-light">{story.location}</p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3">
                           <span className="px-4 py-2 text-xs uppercase tracking-[0.1em] font-light border border-[#6E2E35]/30 text-[#6E2E35]">
                              Top Performer
                           </span>
                           <span className="px-4 py-2 text-xs uppercase tracking-[0.1em] font-light border border-[#AC2121]/30 text-[#AC2121]">
                              5★ Rated
                           </span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
