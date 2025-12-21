"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Instagram, Mail, Phone } from "lucide-react"

export function CallToAction() {
   return (
      <section className="fade-in-section py-24 md:py-32 bg-primary text-primary-foreground transition-all duration-1000">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 text-balance">
                  Ready to Experience the Blush Difference?
               </h2>
               <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
                  {
                     "Let's create something beautiful together. Book your appointment today and discover why thousands of clients trust us with their most important moments."
                  }
               </p>

               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
                     <Calendar className="mr-2" size={20} />
                     Book Appointment
                  </Button>
                  <Button
                     size="lg"
                     variant="outline"
                     className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base px-8"
                  >
                     View Our Gallery
                  </Button>
               </div>

               <div className="border-t border-primary-foreground/20 pt-12">
                  <p className="text-sm tracking-wider uppercase mb-6 text-primary-foreground/60">Connect With Us</p>
                  <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm">
                     <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
                        <Phone size={16} />
                        <span>+91 98765 43210</span>
                     </a>
                     <a
                        href="mailto:hello@blushbysakshi.com"
                        className="flex items-center gap-2 hover:text-accent transition-colors"
                     >
                        <Mail size={16} />
                        <span>hello@blushbysakshi.com</span>
                     </a>
                     <a
                        href="https://instagram.com/blushbysakshi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-accent transition-colors"
                     >
                        <Instagram size={16} />
                        <span>@blushbysakshi</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
