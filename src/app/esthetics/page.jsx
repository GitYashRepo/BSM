"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EstheticsPage() {
   const horizontalSectionRef = useRef(null);
   const horizontalTrackRef = useRef(null);

   const handleWhatsAppClick = () => {
      const phoneNumber = "919467777773";
      const message =
         "Hello! I want to book an esthetics service at BSM Salon.";
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

   const estheticsTopics = [
      {
         id: 1,
         title: "Esthetics",
         subtitle: "Advanced Skin Care",
         image: "/images/esthetics1.jpg",
         description: [
            "Advanced aesthetic skin solutions",
            "Personalized skin analysis",
            "Clinically proven treatments",
            "Safe & effective results",
         ],
      },
      {
         id: 2,
         title: "Skin Treatments",
         subtitle: "Healthy Skin Solutions",
         image: "/images/esthetics2.jpg",
         description: [
            "Customized professional treatments",
            "Improves skin health & texture",
            "Targets specific skin concerns",
            "Visible long-term results",
         ],
      },
      {
         id: 3,
         title: "Anti-Aging",
         subtitle: "Youthful Skin Therapy",
         image: "/images/esthetics3.jpg",
         description: [
            "Reduces fine lines & wrinkles",
            "Boosts collagen production",
            "Improves skin elasticity",
            "Restores youthful glow",
         ],
      },
      {
         id: 4,
         title: "Acne Treatment",
         subtitle: "Clear Skin Solutions",
         image: "/images/esthetics4.jpg",
         description: [
            "Targets active acne & breakouts",
            "Reduces scars & inflammation",
            "Balances oil production",
            "Clinically safe procedures",
         ],
      },
      {
         id: 5,
         title: "Pigmentation",
         subtitle: "Even Skin Tone Care",
         image: "/images/esthetics5.jpg",
         description: [
            "Reduces dark spots & melasma",
            "Improves overall complexion",
            "Advanced pigmentation therapies",
            "Long-lasting brightening results",
         ],
      },
      {
         id: 6,
         title: "Laser Treatment",
         subtitle: "Advanced Laser Solutions",
         image: "/images/esthetics6.jpg",
         description: [
            "Hair & skin laser treatments",
            "Safe, modern laser technology",
            "Targets skin concerns precisely",
            "Minimal downtime",
         ],
      },
      {
         id: 7,
         title: "Chemical Peels",
         subtitle: "Skin Renewal Therapy",
         image: "/images/esthetics7.jpg",
         description: [
            "Removes dead skin layers",
            "Improves texture & tone",
            "Boosts skin regeneration",
            "Instant visible glow",
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
                     Esthetics Services
                  </span>
                  <div className="w-12 h-px bg-amber-600" />
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight text-gray-900"
               >
                  Advanced
                  <span className="block text-amber-600">Esthetics</span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
               >
                  Experience advanced aesthetic treatments designed to restore,
                  rejuvenate, and perfect your skin.
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
               style={{ width: `${estheticsTopics.length * 100}vw` }}
            >
               {estheticsTopics.map((topic) => (
                  <div
                     key={topic.id}
                     className="w-screen h-screen flex items-center justify-center px-16"
                  >
                     <div className="max-w-6xl w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                           <div className="md:col-span-1">
                              <div className="relative overflow-hidden rounded-2xl h-80 shadow-xl">
                                 <img
                                    src={topic.image}
                                    alt={topic.title}
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                           </div>

                           <div className="md:col-span-2 space-y-6">
                              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                                 {topic.title}
                              </h2>

                              <ul className="space-y-2">
                                 {topic.description.map((point, i) => (
                                    <li key={i} className="flex gap-2 text-gray-600">
                                       <span className="text-amber-600">•</span>
                                       {point}
                                    </li>
                                 ))}
                              </ul>

                              <button
                                 onClick={handleWhatsAppClick}
                                 className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:cursor-pointer"
                              >
                                 Book {topic.title}
                              </button>
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
                  Ready for <span className="font-serif italic">Perfect Skin</span>?
               </h2>

               <p className="text-xl text-black/80 font-light">
                  Consult our esthetics experts and start your skin transformation
                  today.
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
