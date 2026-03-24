import { ArrowRight, Sparkles } from "lucide-react"

export function HeroAboutBSM() {
   return (
      <section className="bsm-section relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 lg:px-12 bg-white overflow-hidden">
         {/* Background elements */}
         <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#6E2E35]/5 bsm-parallax"></div>
         <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-[#750851]/3 bsm-parallax"></div>

         <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
            {/* Icon Accent */}
            <div className="flex justify-center">
               <div className="w-16 h-16 rounded-full border border-[#6E2E35]/20 flex items-center justify-center bg-[#6E2E35]/5">
                  <Sparkles size={32} className="text-[#6E2E35]" strokeWidth={1.5} />
               </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-8 max-w-4xl mx-auto">
               <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#1a1a1a] leading-0.7">
                  <span className="bsm-text-line block">Where Artistry</span>
                  <span className="bsm-text-line block">
                     Meets <span className="text-[#6E2E35] font-serif italic">Excellence</span>
                  </span>
                  <span className="bsm-text-line block">in Beauty</span>
               </h1>
               <p className="bsm-text-line text-lg md:text-xl text-[#666] font-light leading-relaxed max-w-2xl mx-auto">
                  Discover the soul of BSM Salon. A sanctuary of luxury where every cut, color, and treatment is a masterpiece crafted with passion and precision.
               </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-8">
               <button className="bsm-text-line flex items-center gap-3 px-10 py-4 border border-[#6E2E35]/30 hover:border-[#6E2E35] bg-white hover:bg-[#6E2E35]/5 text-[#6E2E35] transition-all duration-300 rounded-lg font-light">
                  Explore Our World
                  <ArrowRight size={18} />
               </button>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center pt-12">
               <div className="w-0.5 h-12 bg-gradient-to-b from-[#6E2E35] to-transparent"></div>
            </div>
         </div>
      </section>
   )
}
