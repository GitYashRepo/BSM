"use client"

import { MessageCircle, ArrowRight } from "lucide-react"

export function CallToAction() {
   const handleWhatsAppClick = () => {
      const phoneNumber = "919876543210"
      const message = "Hello! I'm interested in learning more about your salon franchise opportunity."
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
   }

   return (
      <section className="scroll-section py-32 px-6 lg:px-12 bg-[#6E2E35]">
         <div className="max-w-4xl mx-auto text-center space-y-10">
            {/* Content */}
            <div className="space-y-6">
               <h2 className="text-line text-5xl md:text-6xl font-light text-white leading-tight">
                  Ready to <span className="font-serif italic">Join</span> Us?
               </h2>
               <p className="text-line text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                  Start your journey as a premium salon franchise partner and be part of our growing luxury beauty network
               </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
               <button
                  onClick={handleWhatsAppClick}
                  className="text-line flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] hover:bg-[#20ba5a] transition-all duration-300 text-white rounded-lg font-light text-base tracking-wide shadow-xl hover:shadow-2xl"
               >
                  <MessageCircle size={20} />
                  Get Started on WhatsApp
               </button>
               <button className="text-line flex items-center justify-center gap-3 px-8 py-5 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white transition-all duration-300 rounded-lg font-light text-base tracking-wide">
                  Learn More
                  <ArrowRight size={20} />
               </button>
            </div>

            {/* Footer Text */}
            <p className="text-line text-sm text-white/60 font-light pt-6">
               Join over 50+ successful salon partners in our premium franchise network
            </p>
         </div>
      </section>
   )
}
