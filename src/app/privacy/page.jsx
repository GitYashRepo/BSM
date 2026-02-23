"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Link from "next/link"
import { Shield, Eye, Globe, Cookie, Camera, Mail } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const sections = [
   {
      icon: <Eye className="w-6 h-6" />,
      title: "What We Don't Collect",
      content: [
         "BLUSH by Sakshi Makeovers does not collect, store, or process any personal information through this website.",
         "• We do not have any sign-up, registration, or login forms for visitors",
         "• We do not collect names, email addresses, phone numbers, or any contact details",
         "• We do not have any payment integration or collect financial information",
         "• We do not use tracking pixels or third-party analytics that identify individual users",
         "Our website is purely informational — designed to showcase our services, gallery, and contact details."
      ]
   },
   {
      icon: <Cookie className="w-6 h-6" />,
      title: "Cookies & Browser Data",
      content: [
         "Our website may use minimal cookies for basic functionality:",
         "• **Essential cookies**: Used only for our internal admin panel sessions (not visible to visitors)",
         "• **No advertising cookies**: We do not use cookies for ads, remarketing, or profiling",
         "• **No analytics tracking**: We do not track individual browsing behavior",
         "Your browser may store temporary data for page performance, but no personal data is involved."
      ]
   },
   {
      icon: <Globe className="w-6 h-6" />,
      title: "Third-Party Embeds",
      content: [
         "Our website includes embedded content from third-party platforms:",
         "• **Google Maps**: Embedded on our Contact page to show our salon location",
         "• **Instagram & Facebook**: Social media links that redirect to our profiles",
         "• **WhatsApp**: A direct chat link for customer inquiries",
         "These platforms may collect their own data when you interact with them. We recommend reviewing their respective privacy policies.",
         "We have no control over data collected by third-party services."
      ]
   },
   {
      icon: <Camera className="w-6 h-6" />,
      title: "Images & Content",
      content: [
         "All photographs, designs, text, and media on this website are the property of BLUSH by Sakshi Makeovers.",
         "• Client photos are shared only with explicit verbal or written consent",
         "• Gallery images represent real work done at our salon",
         "• You may not download, reproduce, or use our images without permission",
         "If you have concerns about any image, please contact us and we will address it promptly."
      ]
   },
   {
      icon: <Shield className="w-6 h-6" />,
      title: "Your Privacy Is Safe",
      content: [
         "Since we do not collect any personal data through this website, there is nothing to store, share, or sell.",
         "• No databases of visitor information exist",
         "• No data is shared with third parties for marketing purposes",
         "• Our website is a simple, static showcase of our salon and services",
         "We believe in complete transparency with our visitors and clients."
      ]
   },
   {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Us",
      content: [
         "If you have any questions about this Privacy Policy, feel free to reach out:",
         "• **Phone**: +91 90531-02324",
         "• **WhatsApp**: +91 94677-77773 (Nitin – Brand Steward)",
         "• **Email**: sakshimakeovers@gmail.com",
         "• **Visit**: Blush by Sakshi Makeovers, Rewari, Haryana, India",
         "This policy was last updated on February 23, 2026."
      ]
   }
]

export default function PrivacyPolicyPage() {
   const pageRef = useRef(null)

   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.utils.toArray(".privacy-section").forEach((section) => {
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
                  Privacy Policy
               </h1>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  At <span className="text-[#D99726]">BLUSH</span> by Sakshi Makeovers, your privacy matters.
                  Our website does not collect any personal information — it is purely informational.
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
                     className="privacy-section group p-8 md:p-10 border border-border rounded-xl
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
                  <Link href="/terms" className="text-[#D99726] hover:underline">Terms & Conditions</Link>{" "}and{" "}
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
