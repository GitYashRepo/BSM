"use client"

export function SalonStory() {
   const milestones = [
      { year: "2015", title: "Founded", description: "First premium salon launched with a vision for excellence" },
      { year: "2017", title: "Expansion", description: "Opened 5 new locations across major cities" },
      { year: "2019", title: "Franchise Model", description: "Introduced franchise opportunities for entrepreneurs" },
      { year: "2023", title: "50+ Salons", description: "Network grew to over 50 premium salon locations" },
   ]

   return (
      <section className="scroll-section py-32 px-6 lg:px-12 bg-[#FAFAFA]">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
               <p className="text-line text-base tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6">Our Journey</p>
               <h2 className="text-line text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight">
                  A <span className="text-[#6E2E35] font-serif italic">Timeline</span> of Growth
               </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
               {/* Center Line - Smooth single color */}
               <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#6E2E35]/30 -translate-x-1/2"></div>

               {/* Milestones */}
               <div className="space-y-16 lg:space-y-24">
                  {milestones.map((milestone, index) => (
                     <div key={index} className="scroll-card">
                        <div
                           className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? "lg:text-right" : ""}`}
                        >
                           {/* Content */}
                           <div className={index % 2 === 0 ? "lg:order-2" : ""}>
                              <div className="space-y-4 p-8 bg-white rounded-lg border border-[#6E2E35]/10 hover:border-[#6E2E35]/30 transition-all duration-300">
                                 <p className="text-line text-sm tracking-[0.2em] font-light text-[#6E2E35] uppercase">{milestone.year}</p>
                                 <h3 className="text-line text-2xl font-light text-[#1a1a1a]">{milestone.title}</h3>
                                 <p className="text-line text-base text-[#666] font-light leading-relaxed">{milestone.description}</p>
                              </div>
                           </div>

                           {/* Dot */}
                           <div className="hidden lg:flex justify-center">
                              <div className="relative flex items-center justify-center">
                                 <div className="absolute w-4 h-4 rounded-full bg-[#6E2E35] z-10"></div>
                                 <div className="absolute w-8 h-8 rounded-full border border-[#6E2E35]/30"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
