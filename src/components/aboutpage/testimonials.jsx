"use client"

import { Star } from "lucide-react"

export function Testimonials() {
   const testimonials = [
      {
         name: "Priya Sharma",
         role: "Bride",
         text: "Sakshi made me feel like the most beautiful version of myself on my wedding day. Her attention to detail and warm personality made the entire experience magical.",
         rating: 5,
      },
      {
         name: "Anjali Kapoor",
         role: "Fashion Influencer",
         text: "Professional, creative, and absolutely talented. Blush is my go-to for every important event. The team understands exactly what I need.",
         rating: 5,
      },
      {
         name: "Kavya Patel",
         role: "Working Professional",
         text: "From my engagement to reception, Sakshi and her team were there for every function. Each look was unique, beautiful, and lasted perfectly through the celebrations.",
         rating: 5,
      },
   ]

   return (
      <section className="scroll-section py-32 px-6 lg:px-12 bg-[#FAFAFA]">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
               <p className="text-line text-xs tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6">Hear from our clients</p>
               <h2 className="text-line text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight mb-6">
                  Client <span className="text-[#6E2E35] font-serif italic">Stories</span>
               </h2>
               <p className="text-line text-lg text-[#666] font-light max-w-2xl mx-auto">
                  Discover why brides and clients trust Blush by Sakshi Makeover's for their most special occasions.
               </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-8">
               {testimonials.map((testimonial, index) => (
                  <div key={index} className="scroll-card">
                     <div className="bg-white p-10 rounded-lg border border-[#6E2E35]/10 hover:border-[#6E2E35]/30 transition-all duration-300 h-full flex flex-col">
                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                           {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} size={16} className="fill-[#6E2E35] text-[#6E2E35]" />
                           ))}
                        </div>

                        {/* Text */}
                        <p className="text-line text-lg font-light text-[#1a1a1a] mb-8 flex-grow leading-relaxed">
                           "{testimonial.text}"
                        </p>

                        {/* Author */}
                        <div className="border-t border-[#6E2E35]/10 pt-6">
                           <p className="text-line font-light text-[#1a1a1a] text-sm">{testimonial.name}</p>
                           <p className="text-xs text-[#6E2E35] font-light uppercase tracking-widest mt-1">{testimonial.role}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
