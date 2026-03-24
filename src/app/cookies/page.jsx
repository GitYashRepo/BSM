"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Link from "next/link"
import { Cookie, Settings, BarChart3, Shield, ToggleRight, HelpCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const sections = [
   {
      icon: <Cookie className="w-6 h-6" />,
      title: "What Are Cookies?",
      content: [
         "Cookies are small text files placed on your device when you visit our website.",
         "• Cookies help us understand how you interact with our site",
         "• They allow us to remember your preferences and improve your experience",
         "• Cookies do not contain personal data like your name, email, or phone number",
         "• They are widely used across the internet and are essential for modern websites",
         "We use cookies responsibly and only for legitimate purposes."
      ]
   },
   {
      icon: <Settings className="w-6 h-6" />,
      title: "Types of Cookies We Use",
      content: [
         "Our website uses the following categories of cookies:",
         "• **Essential Cookies**: Required for the website to function properly (e.g., session management for admin panel)",
         "• **Functional Cookies**: Remember your preferences and settings to improve your browsing experience",
         "• **Analytics Cookies**: Help us understand how visitors use the site so we can improve it",
         "• **Authentication Cookies**: Securely manage admin and sub-admin login sessions",
         "We do not use any advertising or tracking cookies for commercial purposes."
      ]
   },
   {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "How We Use Cookies",
      content: [
         "Cookies on our website serve the following purposes:",
         "• To maintain secure login sessions for our admin and sub-admin panels",
         "• To remember your browsing preferences and improve site performance",
         "• To analyze website traffic and usage patterns",
         "• To ensure the proper functioning of interactive features",
         "We do not use cookies to collect payment information or track users across other websites."
      ]
   },
   {
      icon: <Shield className="w-6 h-6" />,
      title: "Third-Party Cookies",
      content: [
         "Some cookies may be set by third-party services embedded on our site:",
         "• **Google Maps**: May set cookies when you view the embedded map on our Contact page",
         "• **Instagram & Facebook**: Social media embeds may set tracking cookies",
         "• These cookies are governed by the respective third party's cookie policy",
         "• We have no control over third-party cookies",
         "We recommend reviewing the privacy and cookie policies of these services."
      ]
   },
   {
      icon: <ToggleRight className="w-6 h-6" />,
      title: "Managing Cookies",
      content: [
         "You have control over how cookies are handled on your device:",
         "• **Browser settings**: Most browsers allow you to block or delete cookies via settings",
         "• **Device settings**: Mobile devices have privacy settings to limit cookie usage",
         "• Disabling cookies may affect the functionality of some parts of our website",
         "• Essential cookies cannot be disabled as they are necessary for the site to work",
         "For instructions on managing cookies, refer to your browser's help documentation."
      ]
   },
   {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Questions?",
      content: [
         "If you have any questions about our use of cookies, please contact us:",
         "• **Email**: sakshimakeovers@gmail.com",
         "• **Phone**: +91 90531-02324",
         "• **WhatsApp**: +91 94677-77773 (Nitin – Brand Steward)",
         "• **Address**: Blush by Sakshi Makeovers, Rewari, Haryana, India",
         "This Cookie Policy was last updated on February 23, 2026."
      ]
   }
]

export default function CookiePolicyPage() {
   const pageRef = useRef(null)

   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.utils.toArray(".cookie-section").forEach((section) => {
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
                  Cookie Policy
               </h1>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Learn how <span className="text-[#D99726]">BLUSH</span> by Sakshi Makeovers uses cookies to
                  enhance your browsing experience.
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
                     className="cookie-section group p-8 md:p-10 border border-border rounded-xl
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
                  <Link href="/terms" className="text-[#D99726] hover:underline">Terms & Conditions</Link>.
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
