"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Link from "next/link"
import { Sparkles, Crown, Star, Gem } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const packages = [
   {
      name: "Package One",
      price: "₹19,000",
      type: "Basic Bridal Package",
      icon: <Star className="w-5 h-5" />,
      image: "/comp/Makeup.jpeg",
      sittings: [
         {
            title: "Iˢᵗ Sitting",
            items: ["Face D Tan", "Facial", "Thread Work", "Head Massage"]
         },
         {
            title: "IIⁿᵈ Sitting",
            items: ["Thread Work", "Facial", "Full Body Wax Chocolate", "Manicure", "Pedicure", "Hair Spa"]
         },
         {
            title: "IIIʳᵈ Sitting",
            items: ["Bridal Makeup"]
         }
      ],
      extras: "Jewellery (3000) + Mehndi (2100)"
   },
   {
      name: "Package Two",
      price: "₹29,000",
      type: "Makeup - H.D",
      icon: <Sparkles className="w-5 h-5" />,
      image: "/comp/img2.jpg",
      sittings: [
         {
            title: "Iˢᵗ Sitting",
            items: ["Face D Tan", "Facial", "Thread Work", "Head Massage"]
         },
         {
            title: "IIⁿᵈ Sitting",
            items: ["Thread Work", "Face Bleach", "Facial (O')", "Full Body (Gel Wax)", "Manicure", "Pedicure", "Hair Cut", "Hair Spa"]
         },
         {
            title: "IIIʳᵈ Sitting",
            items: ["Bridal Makeup"]
         }
      ],
      extras: "Jewellery (3000) + Mehndi (2100)"
   },
   {
      name: "Package Three",
      price: "₹37,000",
      type: "Signature Makeup",
      icon: <Crown className="w-5 h-5" />,
      image: "/comp/img6.jpg",
      sittings: [
         {
            title: "Iˢᵗ Sitting",
            items: ["Face Bleach", "Cleanup + Head Massage"]
         },
         {
            title: "IIⁿᵈ Sitting",
            items: ["Face D Tan", "Facial (O'/Kanpeki)", "Manicure", "Pedicure (Pedilogix)", "Hair Cut + Hair Spa"]
         },
         {
            title: "IIIʳᵈ Sitting",
            items: ["Face Bleach", "Facial + Thread Work (Radiant Glow)", "Manicure Luxury (Alga)", "Pedicure Luxury (Alga)", "Full Body Wax (Rica)", "Full Body Bleach/Body Polishing"]
         },
         {
            title: "IVᵗʰ Sitting",
            items: ["Bridal Makeup"]
         }
      ],
      extras: "Jewellery (5000) + Mehndi (2100) + Lense + Real Flower + Eye Lash"
   },
   {
      name: "Package Four",
      price: "₹45,000",
      type: "Signature Makeup Luxury +",
      icon: <Gem className="w-5 h-5" />,
      image: "/comp/img14.jpg",
      sittings: [
         {
            title: "Iˢᵗ Sitting",
            items: ["Bleach + Cleanup", "Thread Work + Spa (Metal Dx)", "Head Massage"]
         },
         {
            title: "IIⁿᵈ Sitting",
            items: ["Face D Tan + Facial (Radiant Glow/Japanese)", "Deep Conditioning (Metal Dx)", "Manicure + Pedicure (Alga Therapy)"]
         },
         {
            title: "IIIʳᵈ Sitting",
            items: ["Face Bleach + Facial (Casmara/Made In Spain)", "Manicure + Pedicure (Luxury)", "Full Body Wax (Rica)", "Full Body Bleach/Body Polishing", "Gel Nail Polishing + Bikini Wax"]
         },
         {
            title: "IVᵗʰ Sitting",
            items: ["Bridal Makeup"]
         }
      ],
      extras: "Jewellery (5000) + Mehndi (2100) + Lense (D-Hab) + Real Flower + Eye Lash"
   }
]

export default function BridalPackagesPage() {
   const pageRef = useRef(null)

   useEffect(() => {
      const ctx = gsap.context(() => {
         // Animate hero text
         gsap.from(".bridal-hero-text", {
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 0.2,
         })

         // Animate each package card
         gsap.utils.toArray(".package-card").forEach((card, i) => {
            gsap.from(card, {
               scrollTrigger: { trigger: card, start: "top 80%" },
               opacity: 0,
               y: 80,
               duration: 1,
               ease: "power3.out",
            })
         })

         // Animate images
         gsap.utils.toArray(".package-image").forEach((img) => {
            gsap.from(img, {
               scrollTrigger: { trigger: img, start: "top 85%" },
               opacity: 0,
               scale: 0.9,
               duration: 1,
               ease: "power2.out",
            })
         })
      }, pageRef)
      return () => ctx.revert()
   }, [])

   return (
      <main ref={pageRef} className="min-h-screen bg-background text-foreground">
         {/* Hero Section */}
         <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D99726]/5 rounded-full blur-3xl" />
               <div className="absolute top-20 right-0 w-40 h-40 bg-[#D99726]/3 rounded-full blur-2xl" />
               <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#D99726]/3 rounded-full blur-2xl" />
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10 bridal-hero-text">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D99726]/30 bg-[#D99726]/5 mb-8">
                  <Crown className="w-4 h-4 text-[#D99726]" />
                  <span className="text-[#D99726] text-xs font-light tracking-[0.2em] uppercase">
                     Exclusive Bridal Collection
                  </span>
               </div>
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 tracking-tight leading-tight">
                  Elite Bridal
                  <span className="block text-[#D99726]">Packages</span>
               </h1>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                  We have 4 exclusive bridal packages designed to make your special day truly unforgettable.
                  Each package includes multiple sittings of premium beauty services.
               </p>
               <div className="flex items-center justify-center gap-8 mt-10">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#D99726]/50" />
                  <Sparkles className="w-5 h-5 text-[#D99726]" />
                  <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#D99726]/50" />
               </div>
            </div>
         </section>

         {/* Packages */}
         <section className="pb-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
               {packages.map((pkg, index) => {
                  const isReversed = index % 2 !== 0

                  return (
                     <div key={index} className="package-card">
                        {/* Package Header */}
                        <div className={`flex items-center gap-3 mb-8 ${isReversed ? "md:justify-end" : ""}`}>
                           <div className="w-10 h-10 rounded-full bg-[#D99726]/10 flex items-center justify-center text-[#D99726]">
                              {pkg.icon}
                           </div>
                           <div>
                              <p className="text-xs text-[#D99726] tracking-[0.2em] uppercase font-light">
                                 {pkg.type}
                              </p>
                           </div>
                        </div>

                        {/* Image + Content Grid */}
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start ${isReversed ? "md:direction-rtl" : ""
                           }`}>
                           {/* Image */}
                           <div className={`${isReversed ? "md:order-2" : "md:order-1"} order-1`}>
                              <div className="package-image relative group overflow-hidden rounded-2xl">
                                 <div className="aspect-[3/4] relative overflow-hidden rounded-2xl">
                                    <img
                                       src={pkg.image}
                                       alt={`${pkg.name} - ${pkg.type}`}
                                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                    {/* Price badge */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                       <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4">
                                          <h3 className="text-2xl md:text-3xl font-serif font-light text-white">
                                             {pkg.name}{" "}
                                             <span className="text-[#D99726]">{pkg.price}</span>
                                          </h3>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Content */}
                           <div className={`${isReversed ? "md:order-1" : "md:order-2"} order-2`}>
                              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-2 tracking-tight">
                                 {pkg.name}
                              </h2>
                              <p className="text-lg text-[#D99726] font-light mb-8">{pkg.price}</p>

                              {/* Sittings */}
                              <div className="space-y-6">
                                 {pkg.sittings.map((sitting, sIdx) => (
                                    <div
                                       key={sIdx}
                                       className="group/sitting pl-6 border-l-2 border-[#D99726]/20
                                                  hover:border-[#D99726] transition-colors duration-300"
                                    >
                                       <h4 className="text-sm font-medium uppercase tracking-widest text-[#D99726] mb-3">
                                          {sitting.title}
                                       </h4>
                                       <ul className="space-y-1.5">
                                          {sitting.items.map((item, iIdx) => (
                                             <li
                                                key={iIdx}
                                                className="text-sm text-muted-foreground flex items-center gap-2
                                                           group-hover/sitting:text-foreground/70 transition-colors duration-300"
                                             >
                                                <span className="w-1 h-1 rounded-full bg-[#D99726]/50 flex-shrink-0" />
                                                {item}
                                             </li>
                                          ))}
                                       </ul>
                                    </div>
                                 ))}
                              </div>

                              {/* Extras */}
                              <div className="mt-8 p-4 rounded-xl bg-[#D99726]/5 border border-[#D99726]/20">
                                 <p className="text-xs uppercase tracking-widest text-[#D99726] mb-2 font-medium">
                                    Includes
                                 </p>
                                 <p className="text-sm text-foreground/70">{pkg.extras}</p>
                              </div>
                           </div>
                        </div>

                        {/* Divider */}
                        {index < packages.length - 1 && (
                           <div className="flex items-center justify-center mt-20 md:mt-24">
                              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#D99726]/30" />
                              <Sparkles className="w-4 h-4 text-[#D99726]/30 mx-4" />
                              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#D99726]/30" />
                           </div>
                        )}
                     </div>
                  )
               })}
            </div>
         </section>

         {/* CTA Section */}
         <section className="relative py-24 px-4 md:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#D99726]/5 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-3xl mx-auto text-center relative z-10">
               <Crown className="w-10 h-10 text-[#D99726] mx-auto mb-6" />
               <h2 className="text-3xl md:text-5xl font-serif font-light mb-6 tracking-tight">
                  Ready to Become a <span className="text-[#D99726]">BLUSH</span> Bride?
               </h2>
               <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                  Book your bridal consultation today and let our expert team create the perfect look
                  for your special day.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                     href="/contact"
                     className="group relative px-10 py-4 text-sm font-medium uppercase tracking-widest overflow-hidden hover:text-black transition-colors duration-300"
                  >
                     <span className="relative z-10 flex items-center gap-2">
                        Book Consultation
                        <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                     </span>
                     <div className="absolute inset-0 bg-[#D99726] translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
                     <div className="absolute inset-0 border border-[#D99726] z-0" />
                  </Link>
                  <a
                     href="https://wa.me/919467777773"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-sm text-muted-foreground hover:text-[#D99726] transition-colors duration-300 uppercase tracking-widest"
                  >
                     WhatsApp Us →
                  </a>
               </div>
            </div>
         </section>
      </main>
   )
}
