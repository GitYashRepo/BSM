"use client"

import { Award, Zap, Users, TrendingUp, Gem, Shield } from "lucide-react"

export function WhyPartner() {
   const benefits = [
      {
         number: "01",
         title: "Proven Model",
         description: "Battle-tested business system with consistent success across all locations.",
         icon: TrendingUp,
      },
      {
         number: "02",
         title: "Brand Trust",
         description: "Leverage established reputation and premium brand recognition.",
         icon: Gem,
      },
      {
         number: "03",
         title: "Expert Training",
         description: "Comprehensive 6-week mastery program covering all operations.",
         icon: Award,
      },
      {
         number: "04",
         title: "Marketing Suite",
         description: "Professional materials, strategies, and digital marketing support.",
         icon: Zap,
      },
      {
         number: "05",
         title: "24/7 Support",
         description: "Dedicated team available round-the-clock for guidance.",
         icon: Shield,
      },
      {
         number: "06",
         title: "Premium Network",
         description: "Exclusive access to suppliers and partnership opportunities.",
         icon: Users,
      },
   ]

   return (
      <section id="whypartnerwithus" className="py-32 px-6 lg:px-12 bg-white">
         <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-24 max-w-3xl">
               <p className="text-base tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6">Why Partner With Us</p>
               <h2 className="text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight mb-6">
                  Six Reasons to
                  <br />
                  <span className="text-[#6E2E35] font-serif italic">Join Us</span>
               </h2>
               <p className="text-base text-[#666] leading-relaxed max-w-2xl font-light">
                  Everything you need to build and scale a thriving salon business with confidence.
               </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
               {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                     <div
                        key={index}
                        className="group space-y-6 pb-8 border-b border-[#6E2E35]/10 hover:border-[#6E2E35]/30 transition-colors"
                     >
                        {/* Icon Circle */}
                        <div className="w-14 h-14 rounded-full border border-[#6E2E35]/30 flex items-center justify-center group-hover:border-[#6E2E35]/60 group-hover:bg-[#6E2E35]/5 transition-all">
                           <IconComponent size={22} className="text-[#6E2E35]" />
                        </div>

                        {/* Number */}
                        <div className="text-4xl font-light text-[#6E2E35]/50 group-hover:text-[#6E2E35]/80 transition-colors">
                           {benefit.number}
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                           <h3 className="text-xl font-light text-[#1a1a1a] group-hover:text-[#6E2E35] transition-colors">
                              {benefit.title}
                           </h3>
                           <p className="text-sm text-[#777] leading-relaxed font-light">{benefit.description}</p>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </section>
   )
}
