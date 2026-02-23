"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Link from "next/link"
import { FileText, CalendarCheck, AlertTriangle, Ban, Scissors, Mail } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const sections = [
   {
      icon: <FileText className="w-6 h-6" />,
      title: "General Terms",
      content: [
         "By accessing and using the BLUSH by Sakshi Makeovers website (blushbysakshimakeovers.com), you agree to the following terms and conditions.",
         "• This website is purely informational and showcases our salon services, gallery, and contact information",
         "• We reserve the right to update the content on our website at any time without prior notice",
         "• The website does not offer any online transactions, purchases, or account creation",
         "• If you do not agree with any part of these terms, please discontinue use of the website"
      ]
   },
   {
      icon: <CalendarCheck className="w-6 h-6" />,
      title: "Appointments & Services",
      content: [
         "All appointments and services are subject to the following conditions:",
         "• Appointments can be booked via phone, WhatsApp, or by visiting our salon directly",
         "• We recommend booking at least 24–48 hours in advance for regular services",
         "• Bridal and package bookings should be made well in advance with a consultation",
         "• Walk-ins are welcome but subject to availability",
         "• Service prices displayed on our website are indicative and may vary — please confirm at the time of booking",
         "• All payments are made directly at the salon — we do not accept online payments"
      ]
   },
   {
      icon: <Scissors className="w-6 h-6" />,
      title: "Cancellation & Rescheduling",
      content: [
         "We understand plans change. Here's our policy:",
         "• Please inform us at least 4 hours before your scheduled appointment for cancellations",
         "• Rescheduling requests are accommodated based on availability",
         "• No-shows without prior notice may affect future booking priority",
         "• For bridal packages, a minimum 48-hour notice is required for cancellations or changes"
      ]
   },
   {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Service Disclaimers",
      content: [
         "Please note the following regarding our services:",
         "• We use professional, high-quality, and skin-safe products for all our services",
         "• Clients with known allergies or skin conditions must inform us before receiving any service",
         "• We are not responsible for adverse reactions to products if allergies were not disclosed",
         "• Results may vary from person to person based on individual skin and hair type",
         "• Images on our website are for representational purposes — actual results may differ"
      ]
   },
   {
      icon: <Ban className="w-6 h-6" />,
      title: "Intellectual Property",
      content: [
         "All content on this website is owned by BLUSH by Sakshi Makeovers:",
         "• All photographs, designs, text, logos, and media are the intellectual property of the salon",
         "• Unauthorized use, reproduction, or distribution of any content is strictly prohibited",
         "• You may not use our branding or images for any commercial purpose without written consent",
         "• If you wish to feature our work, please contact us for permission"
      ]
   },
   {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Us",
      content: [
         "If you have any questions about these terms, please reach out:",
         "• **Phone**: +91 90531-02324",
         "• **WhatsApp**: +91 94677-77773 (Nitin – Brand Steward)",
         "• **Email**: sakshimakeovers@gmail.com",
         "• **Visit**: Blush by Sakshi Makeovers, Rewari, Haryana, India",
         "These terms were last updated on February 23, 2026."
      ]
   }
]

export default function TermsPage() {
   const pageRef = useRef(null)

   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.utils.toArray(".terms-section").forEach((section) => {
            gsap.from(section, {
               scrollTrigger: { trigger: section, start: "top 85%" },
               opacity: 0,
               y: 60,
               duration: 0.8,
            })
         })
      }, pageRef)
      return () => ctx.revert()
   }, [])

   return (
      <main ref={pageRef} className="min-h-screen bg-background text-foreground">
         {/* Hero */}
         <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#D99726]/5 to-transparent pointer-events-none" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
               <span className="text-[#D99726] text-xs font-light tracking-[0.3em] uppercase mb-6 block">
                  Legal
               </span>
               <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 tracking-tight">
                  Terms & Conditions
               </h1>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Please read these terms before using our website or booking any services at{" "}
                  <span className="text-[#D99726]">BLUSH</span> by Sakshi Makeovers.
               </p>
               <div className="w-20 h-px bg-[#D99726] mx-auto mt-10" />
            </div>
         </section>

         {/* Content Sections */}
         <section className="pb-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
               {sections.map((section, index) => (
                  <div
                     key={index}
                     className="terms-section group p-8 md:p-10 border border-border rounded-xl
                                bg-card hover:border-[#D99726]/30 transition-all duration-500"
                  >
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#D99726]/10 flex items-center justify-center
                                        text-[#D99726] group-hover:bg-[#D99726]/20 transition-colors duration-300">
                           {section.icon}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-light">{section.title}</h2>
                     </div>
                     <div className="space-y-3 pl-0 md:pl-16">
                        {section.content.map((line, i) => (
                           <p
                              key={i}
                              className={`text-sm leading-relaxed ${line.startsWith("•")
                                    ? "text-muted-foreground pl-2"
                                    : "text-foreground/80"
                                 }`}
                              dangerouslySetInnerHTML={{
                                 __html: line.replace(
                                    /\*\*(.*?)\*\*/g,
                                    '<strong class="text-foreground font-medium">$1</strong>'
                                 ),
                              }}
                           />
                        ))}
                     </div>
                  </div>
               ))}
            </div>

            {/* Bottom Links */}
            <div className="max-w-4xl mx-auto mt-16 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
               <p className="text-sm text-muted-foreground">
                  Also see our{" "}
                  <Link href="/privacy" className="text-[#D99726] hover:underline">Privacy Policy</Link>{" "}and{" "}
                  <Link href="/cookies" className="text-[#D99726] hover:underline">Cookie Policy</Link>.
               </p>
               <Link
                  href="/contact"
                  className="text-sm text-[#D99726] hover:text-[#D99726]/80 transition-colors duration-300 font-light uppercase tracking-widest"
               >
                  Contact Us →
               </Link>
            </div>
         </section>
      </main>
   )
}
