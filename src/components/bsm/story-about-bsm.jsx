import { Scissors } from "lucide-react"

export function StoryAboutBSM() {
   return (
      <section className="bsm-section py-32 px-6 lg:px-12 bg-[#FAFAFA]">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               {/* Left Content */}
               <div className="space-y-10">
                  <div>
                     <p className="bsm-text-line text-xs tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6">Our Story</p>
                     <h2 className="bsm-text-line text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight mb-8">
                        Born from <span className="text-[#6E2E35] font-serif italic">Passion</span>
                     </h2>
                  </div>

                  <div className="space-y-6">
                     <p className="bsm-text-line text-lg text-[#666] font-light leading-relaxed">
                        BSM Salon was founded on a simple yet powerful belief: that beauty is an art form, and every client deserves to be treated like a masterpiece. What started as a single location has blossomed into a sanctuary where creativity, expertise, and luxury converge.
                     </p>

                     <p className="bsm-text-line text-lg text-[#666] font-light leading-relaxed">
                        Today, we're not just a salon. We're a movement dedicated to redefining the beauty experience through innovation, impeccable service, and an unwavering commitment to excellence.
                     </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#6E2E35]/15">
                     <div className="bsm-section">
                        <p className="bsm-counter text-4xl font-light text-[#6E2E35]" data-value="15">
                           0
                        </p>
                        <p className="text-sm text-[#666] font-light uppercase tracking-widest">Years</p>
                     </div>
                     <div className="bsm-section">
                        <p className="bsm-counter text-4xl font-light text-[#6E2E35]" data-value="500">
                           0
                        </p>
                        <p className="text-sm text-[#666] font-light uppercase tracking-widest">Happy Clients</p>
                     </div>
                     <div className="bsm-section">
                        <p className="bsm-counter text-4xl font-light text-[#6E2E35]" data-value="25">
                           0
                        </p>
                        <p className="text-sm text-[#666] font-light uppercase tracking-widest">Expert Artists</p>
                     </div>
                  </div>
               </div>

               {/* Right - Image Section */}
               <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bsm-parallax">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6E2E35]/10 to-[#750851]/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="flex items-center justify-center w-32 h-32 rounded-full border-4 border-[#6E2E35]/20 bg-[#6E2E35]/5">
                        <Scissors size={64} className="text-[#6E2E35]" strokeWidth={0.8} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
