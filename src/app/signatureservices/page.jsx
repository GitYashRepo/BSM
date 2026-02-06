"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SignatureServicesPage() {
   const horizontalSectionRef = useRef(null);
   const horizontalTrackRef = useRef(null);

   const handleWhatsAppClick = () => {
      const phoneNumber = "919467777773";
      const message =
         "Hello! I want to book a Signature Service at BSM Salon.";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
         message
      )}`;
      window.open(whatsappUrl, "_blank");
   };

   useEffect(() => {
      const section = horizontalSectionRef.current;
      const track = horizontalTrackRef.current;

      const totalWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(track, {
         x: -(totalWidth - viewportWidth),
         ease: "none",
         scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
         },
      });

      return () => {
         ScrollTrigger.getAll().forEach((t) => t.kill());
      };
   }, []);

   const signatureTopics = [
      {
         id: 1,
         title: "Signature Services",
         subtitle: "Our Finest Creations",
         image: "/images/signature1.jpg",
         description: [
            "Exclusive luxury salon experiences",
            "Crafted by expert professionals",
            "Premium products & techniques",
            "Tailored for special occasions",
         ],
      },
      {
         id: 2,
         title: "Bridal Makeovers",
         subtitle: "Your Dream Wedding Look",
         image: "/images/signature2.jpg",
         description: [
            "Complete bridal hair & makeup",
            "Personalized consultations & trials",
            "Flawless, long-lasting finish",
            "Picture-perfect results",
         ],
      },
      {
         id: 3,
         title: "Pre-Bridal Package",
         subtitle: "Glow Before the Big Day",
         image: "/images/signature3.jpg",
         description: [
            "Skin, hair & beauty preparation",
            "Customized multi-session packages",
            "Ensures radiant bridal glow",
            "Stress-free wedding prep",
         ],
      },
      {
         id: 4,
         title: "Groom Makeover",
         subtitle: "Refined & Confident Look",
         image: "/images/signature4.jpg",
         description: [
            "Professional grooming & styling",
            "Skin, hair & beard perfection",
            "Natural, polished finish",
            "Designed for wedding day confidence",
         ],
      },
      {
         id: 5,
         title: "Celebrity Styling",
         subtitle: "Red-Carpet Ready",
         image: "/images/signature5.jpg",
         description: [
            "High-fashion hair & makeup",
            "Inspired by celebrity trends",
            "Perfect for shoots & events",
            "Statement-making luxury looks",
         ],
      },
   ];

   return (
      <div className="w-full bg-white horizontal-page">
         {/* Hero Section */}
         <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen bg-gradient-to-br from-white via-amber-50 to-white flex items-center justify-center px-6 py-20"
         >
            <div className="max-w-5xl mx-auto text-center space-y-8">
               <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center gap-4"
               >
                  <div className="w-12 h-px bg-amber-600" />
                  <span className="text-amber-600 text-sm font-serif tracking-widest uppercase">
                     Signature Services
                  </span>
                  <div className="w-12 h-px bg-amber-600" />
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight text-gray-900"
               >
                  Our Signature
                  <span className="block text-amber-600">Services</span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
               >
                  Curated luxury services crafted for weddings, celebrities, and
                  once-in-a-lifetime moments.
               </motion.p>

               <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 bg-amber-600 mx-auto"
               />
            </div>
         </motion.section>

         {/* Horizontal Scroll Section */}
         <section
            ref={horizontalSectionRef}
            className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-white to-amber-50"
         >
            <div
               ref={horizontalTrackRef}
               className="flex h-full"
               style={{ width: `${signatureTopics.length * 100}vw` }}
            >
               {signatureTopics.map((topic, index) => (
                  <div
                     key={topic.id}
                     className="w-screen h-screen flex items-center justify-center px-16"
                  >
                     <div className="max-w-6xl w-full">
                        <div className="w-screen h-screen">
                           {/* ===================== */}
                           {/* MOBILE (sm and below) */}
                           {/* ===================== */}
                           <div className="block md:hidden w-full h-full">
                              <div className="w-full h-full grid grid-rows-[auto_1fr_auto] px-4">
                                 {/* IMAGE */}
                                 <div className="flex items-center justify-center">
                                    <div className="relative w-full h-[38vh] overflow-hidden">
                                       <img
                                          src={topic.image}
                                          alt={topic.title}
                                          className="absolute inset-0 w-full h-full object-cover"
                                       />
                                    </div>
                                 </div>

                                 {/* TEXT */}
                                 <div className="flex items-center">
                                    <div className="w-full">

                                       <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                                          <span className="font-mono">
                                             {String(index + 1).padStart(2, "0")}
                                          </span>
                                          <span className="h-px flex-1 bg-gray-300" />
                                          <span>{topic.subtitle}</span>
                                       </div>

                                       <h2 className="text-[clamp(1.6rem,4.5vw,3rem)] leading-tight text-gray-900 mb-3">
                                          {topic.title}
                                       </h2>

                                       <div className="text-[13px] leading-snug text-gray-600 space-y-1 mb-4">
                                          {topic.description.map((point, i) => (
                                             <p key={i}>{point}</p>
                                          ))}
                                       </div>

                                       <button
                                          onClick={handleWhatsAppClick}
                                          className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-gray-900"
                                       >
                                          Book Appointment
                                          <span className="w-8 h-px bg-gray-900" />
                                       </button>

                                    </div>
                                 </div>

                              </div>
                           </div>

                           {/* ===================== */}
                           {/* TABLET + DESKTOP (md+) */}
                           {/* ===================== */}
                           <div className="hidden md:grid h-full grid-cols-12 gap-x-20 items-center px-12 lg:px-20">

                              {/* TEXT */}
                              <div className="col-span-5">

                                 <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                                    <span className="font-mono tracking-wider">
                                       {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="h-px flex-1 bg-gray-200" />
                                    <span className="uppercase tracking-widest text-xs">
                                       {topic.subtitle}
                                    </span>
                                 </div>

                                 <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-normal leading-tight text-gray-900 mb-8">
                                    {topic.title}
                                 </h2>

                                 <div className="space-y-4 max-w-md text-gray-600 leading-relaxed mb-10">
                                    {topic.description.map((point, i) => (
                                       <p key={i}>{point}</p>
                                    ))}
                                 </div>

                                 <button
                                    onClick={handleWhatsAppClick}
                                    className="group inline-flex items-center gap-3 text-sm tracking-wide uppercase text-gray-900"
                                 >
                                    Book Appointment
                                    <span className="w-12 h-px bg-gray-900 group-hover:w-20 transition-all duration-300" />
                                 </button>

                              </div>

                              {/* IMAGE */}
                              <div className="col-span-7">
                                 <div className="relative h-[70vh] overflow-hidden">
                                    <img
                                       src={topic.image}
                                       alt={topic.title}
                                       className="absolute inset-0 w-full h-full object-cover scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* CTA Section */}
         <section className="bsm-section py-32 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-10">
               <h2 className="text-5xl md:text-6xl font-light text-black">
                  Ready for a <span className="font-serif italic">Signature</span>{" "}
                  Experience?
               </h2>

               <p className="text-xl text-black/80 font-light">
                  Let our experts craft a premium, unforgettable look just for you.
               </p>

               <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <button
                     onClick={handleWhatsAppClick}
                     className="flex items-center gap-3 px-10 py-5 bg-white text-[#6E2E35] rounded-lg"
                  >
                     <MessageCircle size={20} />
                     Chat on WhatsApp
                  </button>

                  <a href="tel:+919467777773">
                     <button className="flex items-center gap-3 px-10 py-5 border rounded-lg">
                        Book Appointment
                        <ArrowRight size={20} />
                     </button>
                  </a>
               </div>
            </div>
         </section>
      </div>
   );
}
