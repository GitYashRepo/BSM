"use client"

import { Crown, Heart, Zap, Users } from "lucide-react"

export function Philosophy() {
   const values = [
      {
         icon: Crown,
         title: "Excellence",
         description: "Unwavering commitment to premium quality in every service and experience",
      },
      {
         icon: Heart,
         title: "Passion",
         description: "Deep love for the beauty industry and transforming our clients' confidence",
      },
      {
         icon: Zap,
         title: "Innovation",
         description: "Continuously evolving techniques and embracing modern trends",
      },
      {
         icon: Users,
         title: "Community",
         description: "Building a family of salon partners who grow together",
      },
   ]

   return (
      <section className="scroll-section py-32 px-6 lg:px-12 bg-white">
         <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-20 text-center">
               <p className="text-line text-xs tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6">Our Philosophy</p>
               <h2 className="text-line text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight mb-8">
                  Built on <span className="text-[#AC2121] font-serif italic">Core Values</span>
               </h2>
               <p className="text-line text-lg text-[#666] font-light max-w-2xl mx-auto">
                  Every decision we make reflects our deep commitment to beauty, luxury, and partnership
               </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                     <div key={index} className="scroll-card group">
                        <div className="bg-white hover:bg-[#6E2E35]/5 transition-all duration-500 p-10 rounded-lg space-y-6 border border-[#6E2E35]/15 hover:border-[#6E2E35]/40 shadow-sm hover:shadow-md">
                           {/* Icon */}
                           <div className="w-14 h-14 rounded-full bg-[#6E2E35]/8 group-hover:bg-[#6E2E35]/12 flex items-center justify-center transition-colors duration-500">
                              <Icon size={28} className="text-[#6E2E35] group-hover:text-[#750851]" strokeWidth={1.5} />
                           </div>

                           {/* Content */}
                           <div className="space-y-3">
                              <h3 className="text-lg font-light text-[#1a1a1a] group-hover:text-[#6E2E35]">{value.title}</h3>
                              <p className="text-sm text-[#666] font-light leading-relaxed group-hover:text-[#555]">
                                 {value.description}
                              </p>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </section>
   )
}
