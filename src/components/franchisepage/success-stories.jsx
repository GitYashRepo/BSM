"use client"

import Image from "next/image"

export function SuccessStories() {
   const stories = [
      {
         name: "Priya Sharma",
         location: "Mumbai, Maharashtra",
         image: "/success-story-priya.jpg",
         quote:
            "Joining Blush was the best decision of my life. In just 18 months, we've become the go-to salon in our area with a loyal client base.",
         revenue: "$2.5M",
         year: "2023",
      },
      {
         name: "Anjali Verma",
         location: "Delhi NCR",
         image: "/success-story-anjali.jpg",
         quote:
            "The training and support system is incredible. I had no prior salon experience, but now I'm running one of the most successful locations.",
         revenue: "$3.1M",
         year: "2023",
      },
      {
         name: "Neha Kapoor",
         location: "Bangalore, Karnataka",
         image: "/success-story-neha.jpg",
         quote:
            "The brand recognition opened doors immediately. Clients trust Blush, and that trust translated to a thriving business from day one.",
         revenue: "$2.8M",
         year: "2023",
      },
   ]

   return (
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#2c2420] to-[#1a1614]">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 fade-in-section">
               <span className="text-sm tracking-[0.3em] text-[#d4af8c] uppercase font-light mb-4 block">Real Results</span>
               <h2 className="text-5xl md:text-7xl font-serif font-light text-white leading-tight mb-6">
                  Success
                  <br />
                  <span className="italic text-[#d4af8c]">Stories</span>
               </h2>
               <p className="text-lg text-[#c4b5a8] max-w-2xl mx-auto leading-relaxed">
                  Meet our franchise partners who have built thriving beauty businesses with Blush by Sakshi Makeovers.
               </p>
            </div>

            {/* Stories Grid */}
            <div className="space-y-16">
               {stories.map((story, index) => (
                  <div
                     key={index}
                     className={`fade-in-section grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                     style={{ transitionDelay: `${index * 200}ms` }}
                  >
                     {/* Image */}
                     <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                           <Image
                              src={story.image || "/placeholder.svg"}
                              alt={story.name}
                              fill
                              className="object-cover transition-transform duration-700 hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-[#2c2420]/60 to-transparent" />

                           {/* Stats Overlay */}
                           <div className="absolute bottom-6 left-6 right-6">
                              <div className="flex items-end justify-between text-white">
                                 <div>
                                    <div className="text-sm text-[#d4af8c] mb-1">Annual Revenue</div>
                                    <div className="text-4xl font-serif">{story.revenue}</div>
                                 </div>
                                 <div className="text-right">
                                    <div className="text-sm text-[#d4af8c] mb-1">Year</div>
                                    <div className="text-2xl font-serif">{story.year}</div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Content */}
                     <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                        <div className="relative">
                           <div className="absolute -left-4 top-0 text-8xl font-serif text-[#d4af8c]/10">"</div>
                           <blockquote className="relative text-2xl md:text-3xl font-serif text-white leading-relaxed mb-8 pl-8">
                              {story.quote}
                           </blockquote>
                        </div>

                        <div className="flex items-center gap-4">
                           <div className="h-px flex-1 bg-gradient-to-r from-[#d4af8c] to-transparent" />
                           <div className="text-right">
                              <div className="text-xl font-serif text-[#d4af8c]">{story.name}</div>
                              <div className="text-sm text-[#c4b5a8] tracking-wide">{story.location}</div>
                           </div>
                        </div>

                        {/* Achievement Tags */}
                        <div className="flex flex-wrap gap-3 mt-8">
                           <span className="px-4 py-2 bg-[#d4af8c]/10 border border-[#d4af8c]/30 text-[#d4af8c] text-sm rounded-full">
                              Top Performer
                           </span>
                           <span className="px-4 py-2 bg-[#d4af8c]/10 border border-[#d4af8c]/30 text-[#d4af8c] text-sm rounded-full">
                              5★ Rated
                           </span>
                           <span className="px-4 py-2 bg-[#d4af8c]/10 border border-[#d4af8c]/30 text-[#d4af8c] text-sm rounded-full">
                              Award Winner
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
