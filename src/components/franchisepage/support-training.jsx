"use client"

import { Phone, Briefcase, Zap } from "lucide-react"

export function SupportTraining() {
   const trainingPhases = [
      {
         phase: "Phase 1",
         duration: "2 Weeks",
         title: "Foundation",
         topics: ["Brand philosophy", "Operations", "Customer service", "Product knowledge"],
      },
      {
         phase: "Phase 2",
         duration: "3 Weeks",
         title: "Technical Mastery",
         topics: ["Advanced techniques", "Bridal styling", "Hair treatments", "Safety protocols"],
      },
      {
         phase: "Phase 3",
         duration: "1 Week",
         title: "Business Launch",
         topics: ["Marketing", "Staff management", "Financial planning", "Grand opening"],
      },
   ]

   return (
      <section id="support" className="py-32 px-6 lg:px-12 bg-white">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-24 max-w-3xl">
               <p className="text-base tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6">Your Success Path</p>
               <h2 className="text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight mb-8">
                  Training &
                  <br />
                  <span className="text-[#AC2121] font-serif italic">Support</span>
               </h2>
               <p className="text-base text-[#666] leading-relaxed font-light">
                  Comprehensive 6-week program preparing you for every aspect of salon ownership.
               </p>
            </div>

            {/* Training Timeline */}
            <div className="space-y-8 mb-24">
               {trainingPhases.map((module, index) => (
                  <div key={index} className="group">
                     <div className="grid md:grid-cols-[220px_1fr] gap-12 items-start py-12 border-b border-[#6E2E35]/10 group-hover:border-[#6E2E35]/30 transition-colors">
                        {/* Phase Info */}
                        <div className="space-y-4">
                           <p className="text-base uppercase tracking-[0.15em] text-[#6E2E35] font-light">{module.phase}</p>
                           <div className="text-3xl font-light text-[#1a1a1a]">{module.duration}</div>
                           <div className="w-8 h-px bg-[#AC2121]/50" />
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                           <h3 className="text-2xl font-light text-[#1a1a1a] group-hover:text-[#6E2E35] transition-colors">
                              {module.title}
                           </h3>
                           <div className="grid sm:grid-cols-2 gap-4">
                              {module.topics.map((topic, i) => (
                                 <div key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#6E2E35]/50" />
                                    <span className="text-sm text-[#666] font-light">{topic}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Support Features */}
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-gradient-to-br from-[#6E2E35] to-[#4a1f24] p-12 text-white group hover:-translate-y-2 transition-transform space-y-6">
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                     <Phone size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-light uppercase tracking-[0.1em]">24/7 Hotline</h3>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                     Dedicated support team available round-the-clock for immediate assistance.
                  </p>
               </div>

               <div className="bg-gradient-to-br from-[#750851] to-[#4a0530] p-12 text-white group hover:-translate-y-2 transition-transform space-y-6">
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                     <Briefcase size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-light uppercase tracking-[0.1em]">Business Coaching</h3>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                     Monthly one-on-one sessions optimizing operations and accelerating growth.
                  </p>
               </div>

               <div className="bg-gradient-to-br from-[#AC2121] to-[#7d1515] p-12 text-white group hover:-translate-y-2 transition-transform space-y-6">
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                     <Zap size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-light uppercase tracking-[0.1em]">Marketing Hub</h3>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                     Access updated materials, campaign templates, and social media content library.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}
