"use client"

import Image from "next/image"

export function OwnerSection() {
   return (
      <section className="scroll-section py-32 px-6 lg:px-12 bg-[#FAFAFA]">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               {/* Left - Image */}
               <div className="scroll-card relative">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                     <div className="parallax-element w-full h-full bg-gradient-to-br from-[#AC2121] to-[#6E2E35] flex items-center justify-center">
                        <div className="text-center text-white/30">
                           <p className="text-sm font-light">Salon Founder</p>
                           <p className="text-4xl font-serif italic">Est. 2015</p>
                        </div>
                     </div>
                  </div>

                  {/* Accent Elements */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 border border-[#AC2121]/30 rounded-full"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-[#AC2121]/20 rounded-full"></div>
               </div>

               {/* Right - Content */}
               <div className="space-y-8 text-[#1a1a1a]">
                  <div>
                     <p className="text-md tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6 text-line">Our Founder</p>
                     <h2 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-line">
                        A <span className="font-serif italic">Vision</span> for Excellence
                     </h2>
                  </div>

                  <p className="text-line text-lg font-light leading-relaxed text-[#666]">
                     With over 15 years of experience in the beauty industry, our founder envisioned creating a premium salon
                     brand that doesn't just offer services, but transforms lives through the power of confidence and beauty.
                  </p>

                  <div className="space-y-6 pt-6 border-t border-[#6E2E35]/15">
                     <div className="scroll-card group">
                        <div className="flex items-start gap-6">
                           <div className="flex-shrink-0">
                              <p className="text-line counter text-4xl font-light text-[#6E2E35]" data-value="500">0</p>
                              <p className="text-xs text-[#666] font-light uppercase tracking-widest">Happy Brides</p>
                           </div>
                           <div className="h-16 w-px bg-[#6E2E35]/20"></div>
                           <p className="text-sm text-[#666] font-light leading-relaxed pt-2">
                              Over 500 brides have trusted us to make their special day unforgettable with our expert beauty services.
                           </p>
                        </div>
                     </div>

                     <div className="scroll-card group">
                        <div className="flex items-start gap-6">
                           <div className="flex-shrink-0">
                              <p className="text-line counter text-4xl font-light text-[#6E2E35]" data-value="15">0</p>
                              <p className="text-xs text-[#666] font-light uppercase tracking-widest">Years of Exp.</p>
                           </div>
                           <div className="h-16 w-px bg-[#6E2E35]/20"></div>
                           <p className="text-sm text-[#666] font-light leading-relaxed pt-2">
                              A decade of dedication to mastering the art of beauty, ensuring every client receives top-tier service.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
