"use client"

export function SalonStory() {
   return (
      <section className="fade-in-section py-32 md:py-40 bg-[#2d2520] text-[#faf8f6] transition-all duration-1000">
         <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-24">
                  <span className="text-[10px] tracking-[0.4em] text-[#c89b6d] uppercase font-light">Our Journey</span>
                  <h2 className="text-5xl md:text-7xl font-serif font-extralight mt-6 mb-12 text-balance">
                     Blush by Sakshi
                     <br />
                     Makeovers
                  </h2>
                  <p className="text-xl md:text-2xl text-[#d4a574] max-w-3xl mx-auto leading-relaxed font-light">
                     What started as a dream has blossomed into a sanctuary where confidence is cultivated and beauty is
                     celebrated
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 mb-24">
                  <div className="space-y-6">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-[#c89b6d]" />
                        <h3 className="text-sm tracking-[0.3em] text-[#c89b6d] uppercase">2015</h3>
                     </div>
                     <h4 className="text-2xl font-serif font-light">The Beginning</h4>
                     <p className="text-[#d4a574] leading-loose">
                        Founded with a simple mission: to create a space where every client feels heard, valued, and beautiful.
                        A vision to build more than just a makeup studio—an experience.
                     </p>
                  </div>

                  <div className="space-y-6">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-[#c89b6d]" />
                        <h3 className="text-sm tracking-[0.3em] text-[#c89b6d] uppercase">Growth</h3>
                     </div>
                     <h4 className="text-2xl font-serif font-light">Our Evolution</h4>
                     <p className="text-[#d4a574] leading-loose">
                        From humble beginnings to a full-service beauty destination. Our team of skilled artists shares Sakshi's
                        passion, ensuring personalized attention and outstanding results.
                     </p>
                  </div>

                  <div className="space-y-6">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-[#c89b6d]" />
                        <h3 className="text-sm tracking-[0.3em] text-[#c89b6d] uppercase">Space</h3>
                     </div>
                     <h4 className="text-2xl font-serif font-light">The Studio</h4>
                     <p className="text-[#d4a574] leading-loose">
                        A peaceful retreat from daily chaos. Soft lighting, comfortable seating, and a welcoming atmosphere
                        where you can relax and enjoy your beauty journey.
                     </p>
                  </div>

                  <div className="space-y-6">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-[#c89b6d]" />
                        <h3 className="text-sm tracking-[0.3em] text-[#c89b6d] uppercase">Promise</h3>
                     </div>
                     <h4 className="text-2xl font-serif font-light">Our Commitment</h4>
                     <p className="text-[#d4a574] leading-loose">
                        Premium, cruelty-free products and cutting-edge techniques. What sets us apart is understanding your
                        unique needs and bringing your vision to life.
                     </p>
                  </div>
               </div>

               <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-2 aspect-[4/3] bg-[#3d3530] overflow-hidden">
                     <img
                        src="/luxury-makeup-studio-interior-with-elegant-vanity-.jpg"
                        alt="Studio interior"
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                     />
                  </div>
                  <div className="aspect-square bg-[#3d3530] overflow-hidden">
                     <img
                        src="/professional-high-end-makeup-products-and-brushes-.jpg"
                        alt="Premium products"
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                     />
                  </div>
                  <div className="aspect-square bg-[#3d3530] overflow-hidden">
                     <img
                        src="/elegant-bridal-makeup-application-in-luxury-salon-.jpg"
                        alt="Bridal makeup"
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                     />
                  </div>
                  <div className="aspect-square bg-[#3d3530] overflow-hidden">
                     <img
                        src="/beauty-awards-and-certificates-displayed-on-luxury.jpg"
                        alt="Awards"
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                     />
                  </div>
                  <div className="col-span-3 aspect-[16/9] bg-[#3d3530] overflow-hidden">
                     <img
                        src="/team-of-professional-makeup-artists-in-elegant-sal.jpg"
                        alt="Our team"
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
