"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BeautyPage() {
   const horizontalSectionRef = useRef(null);
   const horizontalTrackRef = useRef(null);

   const handleWhatsAppClick = () => {
      const phoneNumber = "919467777773";
      const message = "Hello! I want to book a beauty service at BSM Salon.";
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

   const beautyTopics = [
      {
         id: 1,
         title: "Beauty",
         subtitle: "Complete Beauty Care",
         image: "/images/beauty1.jpg",
         description: [
            "Professional beauty treatments",
            "Healthy, glowing skin",
            "Premium salon products",
            "Customized beauty solutions",
         ],
      },
      {
         id: 2,
         title: "Facial",
         subtitle: "Radiant Skin Therapy",
         image: "/images/beauty2.jpg",
         description: [
            "Deep cleansing & hydration",
            "Brightens dull skin",
            "Improves skin texture",
            "Relaxing & rejuvenating",
         ],
      },
      {
         id: 3,
         title: "Cleanup",
         subtitle: "Instant Skin Refresh",
         image: "/images/beauty3.jpg",
         description: [
            "Removes dirt & impurities",
            "Quick glow boost",
            "Unclogs pores",
            "Perfect before events",
         ],
      },
      {
         id: 4,
         title: "Bleach",
         subtitle: "Even Skin Tone",
         image: "/images/beauty4.jpg",
         description: [
            "Lightens facial hair",
            "Instant brightness",
            "Safe & gentle formulas",
            "Even complexion",
         ],
      },
      {
         id: 5,
         title: "Threading",
         subtitle: "Perfect Brow Shaping",
         image: "/images/beauty5.jpg",
         description: [
            "Precise eyebrow shaping",
            "Gentle on skin",
            "Clean & defined look",
            "Long-lasting results",
         ],
      },
      {
         id: 6,
         title: "Waxing",
         subtitle: "Smooth, Hair-Free Skin",
         image: "/images/beauty6.jpg",
         description: [
            "Hygienic waxing methods",
            "Smooth & soft skin",
            "Long-lasting hair removal",
            "Suitable for all skin types",
         ],
      },
      {
         id: 7,
         title: "Manicure",
         subtitle: "Beautiful Hands Care",
         image: "/images/beauty7.jpg",
         description: [
            "Nail shaping & cuticle care",
            "Soft, nourished hands",
            "Polish & nail spa",
            "Relaxing experience",
         ],
      },
      {
         id: 8,
         title: "Pedicure",
         subtitle: "Foot Care & Relaxation",
         image: "/images/beauty8.jpg",
         description: [
            "Removes tan & dead skin",
            "Soft, healthy feet",
            "Relaxing foot massage",
            "Perfect polish finish",
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
                     Beauty Services
                  </span>
                  <div className="w-12 h-px bg-amber-600" />
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight text-gray-900"
               >
                  Beauty
                  <span className="block text-amber-600">Refined</span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
               >
                  Indulge in luxurious beauty treatments designed to rejuvenate,
                  refresh, and enhance your natural glow.
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
               style={{ width: `${beautyTopics.length * 100}vw` }}
            >
               {beautyTopics.map((topic) => (
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
                  Ready for <span className="font-serif italic">Radiant Beauty</span>?
               </h2>

               <p className="text-xl text-black/80 font-light">
                  Book your beauty session today and glow with confidence.
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
