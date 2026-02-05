"use client"

export function SalonStory() {
   const milestones = [
      {
         year: "2015",
         title: "Founded",
         description:
            "Launched our first premium salon with a clear vision to deliver high-quality, personalized beauty and grooming services.",
      },
      {
         year: "2017",
         title: "Service Expansion",
         description:
            "Expanded our offerings to include professional makeup, advanced hair care, skincare treatments, and bridal services.",
      },
      {
         year: "2020",
         title: "Operational Excellence",
         description:
            "Strengthened internal processes, staff training, and service standards to ensure consistency and exceptional customer experience.",
      },
      {
         year: "2022",
         title: "Brand Recognition",
         description:
            "Established a strong reputation through customer loyalty, word-of-mouth growth, and a commitment to quality.",
      },
      {
         year: "2024",
         title: "Franchise Launch",
         description:
            "Introduced franchising opportunities, inviting partners to grow with a proven salon model, strong brand identity, and operational support.",
      },
   ];


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
