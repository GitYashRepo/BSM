'use client';

import { MessageCircle, ArrowRight } from "lucide-react"

export function CTAAboutBSM() {
   const handleWhatsAppClick = () => {
      const phoneNumber = "919467777773"
      const message = "Hello! I want to book an appointment at BSM Salon."
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
   }

   return (
      <section className="bsm-section py-32 px-6 lg:px-12">
         <div className="max-w-4xl mx-auto text-center space-y-10">
            {/* Content */}
            <div className="space-y-6">
               <h2 className="bsm-text-line text-5xl md:text-6xl font-light text-black leading-tight">
                  Ready to Experience <span className="font-serif italic">Premium</span> Beauty?
               </h2>
               <p className="bsm-text-line text-xl text-black/80 font-light max-w-2xl mx-auto leading-relaxed">
                  Connect with us today to schedule your transformation. Let's create something extraordinary together.
               </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <button
                  onClick={handleWhatsAppClick}
                  className="bsm-text-line flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-white/95 text-[#6E2E35] transition-all duration-300 rounded-lg font-light text-base tracking-wide"
               >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
               </button>
               <a href="tel:+919467777773">
                  <button className="bsm-text-line flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/30 hover:border-white bg-transparent hover:bg-white/10 text-black transition-all duration-300 rounded-lg font-light text-base tracking-wide">
                     Book Appointment
                     <ArrowRight size={20} />
                  </button>
               </a>
            </div>

            {/* Footer Text */}
            <p className="bsm-text-line text-sm text-black/60 font-light pt-6">
               Available 7 days • We respond within 2 hours
            </p>
         </div>
      </section>
   )
}
