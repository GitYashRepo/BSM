"use client"

import { Check, MessageCircle } from "lucide-react"

export function InvestmentDetails() {
   const handleWhatsAppClick = () => {
      const phoneNumber = "919876543210" // Replace with your WhatsApp number
      const message = "Hello! I'm interested in learning more about your salon franchise opportunity."
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
   }

   return (
      <section id="investment" className="py-32 px-6 lg:px-12 bg-[#FAFAFA]">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
               {/* Left Content */}
               <div className="space-y-12">
                  <div>
                     <p className="text-xs tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6">Investment Overview</p>
                     <h2 className="text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight mb-8">
                        Your Dream
                        <br />
                        <span className="text-[#AC2121] font-serif italic">Awaits</span>
                     </h2>
                     <p className="text-base text-[#666] leading-relaxed font-light max-w-lg">
                        Ready to start your journey? Connect with our team directly on WhatsApp to discuss investment details, customized packages, and your path to owning a premium salon franchise.
                     </p>
                  </div>

                  {/* WhatsApp CTA Button */}
                  <div className="space-y-6">
                     <button
                        onClick={handleWhatsAppClick}
                        className="w-full lg:w-auto flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] hover:bg-[#20ba5a] transition-all duration-300 text-white rounded-lg font-light text-base tracking-wide shadow-lg hover:shadow-xl"
                     >
                        <MessageCircle size={20} />
                        Get Investment Details on WhatsApp
                     </button>
                     <p className="text-xs text-[#666] font-light">
                        Our team responds within minutes. Get personalized pricing and packages tailored to your location.
                     </p>
                  </div>
               </div>

               {/* Right Content - What's Included */}
               <div className="space-y-8">
                  <div className="bg-white p-12 border border-[#6E2E35]/10 hover:border-[#6E2E35]/30 transition-colors">
                     <h3 className="text-lg font-light text-[#1a1a1a] mb-8 uppercase tracking-[0.15em]">What's Included</h3>
                     <ul className="space-y-5">
                        {[
                           "Complete salon design & setup",
                           "Professional equipment & furniture",
                           "Initial product inventory",
                           "6-week training program",
                           "Marketing materials & branding",
                           "Technology & booking systems",
                           "Grand opening campaign",
                        ].map((item, i) => (
                           <li key={i} className="flex items-start gap-4 group">
                              <div className="w-5 h-5 rounded-full border border-[#6E2E35]/40 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#6E2E35]/10 transition-colors">
                                 <Check size={12} className="text-[#6E2E35]" strokeWidth={3} />
                              </div>
                              <span className="text-sm text-[#666] font-light leading-relaxed">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
