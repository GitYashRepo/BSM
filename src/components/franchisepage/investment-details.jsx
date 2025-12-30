"use client"

export function InvestmentDetails() {
   return (
      <section id="investment" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#faf8f6] to-[#f5f1ed]">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               {/* Left Content */}
               <div className="fade-in-section">
                  <span className="text-sm tracking-[0.3em] text-[#b8936d] uppercase font-light mb-4 block">
                     Financial Overview
                  </span>
                  <h2 className="text-5xl md:text-6xl font-serif font-light text-[#2c2420] leading-tight mb-8">
                     Investment
                     <br />
                     <span className="italic text-[#b8936d]">Details</span>
                  </h2>
                  <p className="text-lg text-[#6b5d54] leading-relaxed mb-12">
                     Transparent pricing with comprehensive support. Your investment includes everything needed to launch and
                     operate a successful Blush franchise location.
                  </p>

                  {/* Investment Breakdown */}
                  <div className="space-y-6">
                     <div className="flex justify-between items-center py-4 border-b border-[#b8936d]/20">
                        <span className="text-[#2c2420] font-medium">Initial Franchise Fee</span>
                        <span className="text-2xl font-serif text-[#b8936d]">Rs. 50,000</span>
                     </div>
                     <div className="flex justify-between items-center py-4 border-b border-[#b8936d]/20">
                        <span className="text-[#2c2420] font-medium">Setup & Equipment</span>
                        <span className="text-2xl font-serif text-[#b8936d]">Rs. 75,000</span>
                     </div>
                     <div className="flex justify-between items-center py-4 border-b border-[#b8936d]/20">
                        <span className="text-[#2c2420] font-medium">Working Capital</span>
                        <span className="text-2xl font-serif text-[#b8936d]">Rs. 25,000</span>
                     </div>
                     <div className="flex justify-between items-center py-6 bg-[#b8936d]/5 px-6 -mx-6 rounded-lg">
                        <span className="text-[#2c2420] font-semibold text-lg">Total Investment</span>
                        <span className="text-3xl font-serif text-[#b8936d] font-semibold">Rs. 150,000</span>
                     </div>
                  </div>
               </div>

               {/* Right Content - Additional Info */}
               <div className="space-y-8 fade-in-section" style={{ transitionDelay: "200ms" }}>
                  <div className="relative p-10 bg-white rounded-lg shadow-lg border border-[#b8936d]/10">
                     <div className="absolute -top-6 left-10 bg-[#b8936d] text-white px-6 py-2 text-sm tracking-wide">
                        WHAT'S INCLUDED
                     </div>
                     <ul className="space-y-5 mt-4">
                        {[
                           "Complete interior design consultation",
                           "Professional equipment & furniture",
                           "Initial product inventory",
                           "Comprehensive training program",
                           "Marketing materials & brand assets",
                           "Technology & booking systems",
                           "Grand opening support",
                        ].map((item, i) => (
                           <li key={i} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#b8936d]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                 <div className="w-2 h-2 rounded-full bg-[#b8936d]" />
                              </div>
                              <span className="text-[#2c2420]">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* ROI Info */}
                  <div className="grid grid-cols-2 gap-6">
                     <div className="p-6 bg-[#2c2420] text-white rounded-lg">
                        <div className="text-sm tracking-wide text-[#d4af8c] mb-2">Break-Even</div>
                        <div className="text-3xl font-serif">18-24</div>
                        <div className="text-sm text-[#c4b5a8]">Months</div>
                     </div>
                     <div className="p-6 bg-[#2c2420] text-white rounded-lg">
                        <div className="text-sm tracking-wide text-[#d4af8c] mb-2">Avg ROI</div>
                        <div className="text-3xl font-serif">30-40%</div>
                        <div className="text-sm text-[#c4b5a8]">Annually</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
