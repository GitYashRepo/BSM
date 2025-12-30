"use client"

export function SupportTraining() {
   const trainingModules = [
      {
         phase: "Phase 1",
         duration: "2 Weeks",
         title: "Foundation Training",
         topics: ["Brand philosophy & values", "Business operations", "Customer service excellence", "Product knowledge"],
      },
      {
         phase: "Phase 2",
         duration: "3 Weeks",
         title: "Technical Mastery",
         topics: ["Advanced makeup techniques", "Bridal styling", "Hair treatments", "Safety & hygiene protocols"],
      },
      {
         phase: "Phase 3",
         duration: "1 Week",
         title: "Business Launch",
         topics: ["Marketing strategies", "Staff management", "Financial planning", "Grand opening execution"],
      },
   ]

   return (
      <section id="support" className="py-32 px-6 lg:px-12 bg-[#faf8f6]">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 fade-in-section">
               <span className="text-sm tracking-[0.3em] text-[#b8936d] uppercase font-light mb-4 block">
                  Your Success Journey
               </span>
               <h2 className="text-5xl md:text-7xl font-serif font-light text-[#2c2420] leading-tight mb-6">
                  Support &
                  <br />
                  <span className="italic text-[#b8936d]">Training</span>
               </h2>
               <p className="text-lg text-[#6b5d54] max-w-2xl mx-auto leading-relaxed">
                  Our comprehensive 6-week training program prepares you for every aspect of running a successful salon
                  franchise.
               </p>
            </div>

            {/* Training Timeline */}
            <div className="space-y-8 mb-20">
               {trainingModules.map((module, index) => (
                  <div key={index} className="group fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                     <div className="relative grid md:grid-cols-[200px_1fr] gap-8 items-start p-8 bg-white rounded-lg border border-[#b8936d]/10 hover:border-[#b8936d]/30 hover:shadow-xl transition-all duration-500">
                        {/* Phase Info */}
                        <div className="space-y-2">
                           <div className="text-sm tracking-[0.2em] text-[#b8936d] uppercase">{module.phase}</div>
                           <div className="text-4xl font-serif text-[#2c2420]">{module.duration}</div>
                           <div className="h-1 w-16 bg-gradient-to-r from-[#b8936d] to-transparent" />
                        </div>

                        {/* Content */}
                        <div>
                           <h3 className="text-2xl font-serif text-[#2c2420] mb-4 group-hover:text-[#b8936d] transition-colors">
                              {module.title}
                           </h3>
                           <div className="grid sm:grid-cols-2 gap-3">
                              {module.topics.map((topic, i) => (
                                 <div key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#b8936d]" />
                                    <span className="text-[#6b5d54]">{topic}</span>
                                 </div>
                              ))}
                           </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#b8936d]/5 to-transparent rounded-lg" />
                     </div>
                  </div>
               ))}
            </div>

            {/* Support Features */}
            <div className="grid md:grid-cols-3 gap-8 fade-in-section">
               <div className="relative overflow-hidden p-8 bg-gradient-to-br from-[#2c2420] to-[#3a302a] text-white rounded-lg group hover:-translate-y-2 transition-all duration-500">
                  <div className="relative z-10">
                     <div className="text-5xl mb-4">📞</div>
                     <h3 className="text-xl font-serif mb-3">24/7 Hotline</h3>
                     <p className="text-[#c4b5a8] text-sm leading-relaxed">
                        Dedicated support team available round the clock for any urgent concerns or questions.
                     </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#b8936d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>

               <div className="relative overflow-hidden p-8 bg-gradient-to-br from-[#2c2420] to-[#3a302a] text-white rounded-lg group hover:-translate-y-2 transition-all duration-500">
                  <div className="relative z-10">
                     <div className="text-5xl mb-4">💼</div>
                     <h3 className="text-xl font-serif mb-3">Business Coaching</h3>
                     <p className="text-[#c4b5a8] text-sm leading-relaxed">
                        Monthly one-on-one sessions with franchise advisors to optimize your operations and growth.
                     </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#b8936d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>

               <div className="relative overflow-hidden p-8 bg-gradient-to-br from-[#2c2420] to-[#3a302a] text-white rounded-lg group hover:-translate-y-2 transition-all duration-500">
                  <div className="relative z-10">
                     <div className="text-5xl mb-4">🎯</div>
                     <h3 className="text-xl font-serif mb-3">Marketing Hub</h3>
                     <p className="text-[#c4b5a8] text-sm leading-relaxed">
                        Access to updated marketing materials, campaign templates, and social media content library.
                     </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#b8936d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
            </div>
         </div>
      </section>
   )
}
