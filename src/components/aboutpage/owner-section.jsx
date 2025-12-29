"use client"

export function OwnerSection() {
   return (
      <section className="fade-in-section py-32 md:py-40 transition-all duration-1000 bg-white">
         <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
               <div className="grid lg:grid-cols-12 gap-16 items-start">
                  <div className="lg:col-span-7">
                     <div className="relative">
                        <div className="aspect-[4/5] overflow-hidden bg-[#f5ebe6]">
                           <img
                              src="/images/img11.jpg"
                              alt="Sakshi Mukhija - Founder & Lead Artist"
                              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                           />
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-[#2d2520] text-[#faf8f6] p-8 max-w-xs">
                           <p className="font-serif text-2xl mb-1">Sakshi Mukhija</p>
                           <p className="text-[#c89b6d] text-xs tracking-[0.3em] uppercase">Founder & Lead Artist</p>
                           <div className="mt-6 pt-6 border-t border-[#c89b6d]/30">
                              <p className="text-sm text-[#d4a574]">10+ Years of Excellence</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-5 lg:pt-20">
                     <div className="space-y-8">
                        <div>
                           <span className="text-[10px] tracking-[0.4em] text-[#c89b6d] uppercase font-light">
                              The Visionary
                           </span>
                           <h2 className="text-5xl md:text-6xl font-serif font-extralight mt-4 mb-8 text-[#2d2520] leading-tight">
                              The Artist
                              <br />
                              Behind
                              <br />
                              the Brush
                           </h2>
                        </div>

                        <div className="space-y-6 text-[#6b5d52] leading-loose">
                           <p className="text-lg">
                              With over a decade of experience in the beauty industry, Sakshi Mukhija has transformed the art of
                              makeup into a celebration of individuality.
                           </p>
                           <p>
                              Trained at prestigious academies worldwide, she brings classical techniques infused with
                              contemporary innovation to every creation.
                           </p>
                           <p>Her philosophy is profound yet simple—beauty is not transformation, it's revelation.</p>
                        </div>

                        <div className="pt-12 space-y-6">
                           <div className="flex items-baseline gap-4 border-b border-[#e5d5c8] pb-3">
                              <span className="text-4xl font-serif font-light text-[#c89b6d]">500+</span>
                              <span className="text-sm text-[#8b7355] tracking-wider">Happy Brides</span>
                           </div>
                           <div className="flex items-baseline gap-4 border-b border-[#e5d5c8] pb-3">
                              <span className="text-4xl font-serif font-light text-[#c89b6d]">50+</span>
                              <span className="text-sm text-[#8b7355] tracking-wider">Awards Won</span>
                           </div>
                           <div className="flex items-baseline gap-4 border-b border-[#e5d5c8] pb-3">
                              <span className="text-4xl font-serif font-light text-[#c89b6d]">10+</span>
                              <span className="text-sm text-[#8b7355] tracking-wider">Years Experience</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
