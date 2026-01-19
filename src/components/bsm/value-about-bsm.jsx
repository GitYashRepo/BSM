import { Heart, Zap, Users, Crown } from "lucide-react"

export function ValueAboutBSM() {
   const values = [
      {
         icon: Heart,
         title: "Passion Driven",
         description: "Every detail reflects our love for the craft and dedication to perfection.",
      },
      {
         icon: Zap,
         title: "Innovation First",
         description: "We constantly evolve with the latest trends and techniques in beauty.",
      },
      {
         icon: Users,
         title: "Client Centered",
         description: "Your satisfaction and confidence are at the heart of everything we do.",
      },
      {
         icon: Crown,
         title: "Excellence Always",
         description: "Premium quality standards applied to every service, every time.",
      },
   ]

   return (
      <section className="bsm-section py-32 px-6 lg:px-12 bg-white">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-24">
               <p className="bsm-text-line text-base tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6">
                  Core Values
               </p>
               <h2 className="bsm-text-line text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight">
                  What We <span className="text-[#6E2E35] font-serif italic">Believe</span> In
               </h2>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                     <div key={index} className="bsm-section group">
                        <div className="bg-[#FAFAFA] hover:bg-[#F5F5F5] transition-all duration-500 p-10 rounded-xl border border-[#6E2E35]/10 hover:border-[#6E2E35]/30 space-y-6">
                           {/* Icon */}
                           <div className="w-16 h-16 rounded-full bg-[#6E2E35]/8 group-hover:bg-[#6E2E35]/12 flex items-center justify-center transition-colors duration-500">
                              <Icon size={32} className="text-[#6E2E35]" strokeWidth={1.5} />
                           </div>

                           {/* Content */}
                           <div className="space-y-3">
                              <h3 className="bsm-text-line text-xl font-light text-[#1a1a1a] group-hover:text-[#6E2E35]">
                                 {value.title}
                              </h3>
                              <p className="bsm-text-line text-sm text-[#666] font-light leading-relaxed group-hover:text-[#555]">
                                 {value.description}
                              </p>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>

            {/* Bottom decorative line */}
            <div className="flex justify-center mt-20">
               <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#6E2E35]/30 to-transparent"></div>
            </div>
         </div>
      </section>
   )
}
