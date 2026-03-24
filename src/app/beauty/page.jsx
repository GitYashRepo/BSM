"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ServiceSlider } from "@/components/ServiceSlider/ServiceSlider";

export default function BeautyPage() {
   const handleWhatsAppClick = () => {
      const phoneNumber = "919053102324";
      const message = "Hello! I want to book a beauty service at BSM Salon.";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
         message
      )}`;
      window.open(whatsappUrl, "_blank");
   };


   const beautyTopics = [
      {
         id: 1,
         title: "Beauty",
         subtitle: "Complete Beauty Care",
         image: "/banner/beauty.jpeg",
         description: [
            "Professional beauty treatments",
            "Healthy, glowing skin",
            "Premium salon products",
            "Customized beauty solutions",
         ],
      },
      {
         id: 2,
         title: "Cleanup",
         subtitle: "Instant Skin Refresh",
         image: "/services/beauty/cleanup.jpg",
         description: [
            "Removes dirt & impurities",
            "Quick glow boost",
            "Unclogs pores",
            "Perfect before events",
         ],
      },
      {
         id: 3,
         title: "Facial",
         subtitle: "Radiant Skin Therapy",
         image: "/services/beauty/facial.jpg",
         description: [
            "Deep cleansing & hydration",
            "Brightens dull skin",
            "Improves skin texture",
            "Relaxing & rejuvenating",
         ],
      },
      {
         id: 4,
         title: "Bleach",
         subtitle: "Even Skin Tone",
         image: "/services/beauty/bleach.jpg",
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
         image: "/services/beauty/Threading.jpg",
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
         image: "/services/beauty/waxing.jpg",
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
         image: "/services/beauty/meni.jpg",
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
         image: "/services/beauty/pedi.jpg",
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

         {/* DRAG CAROUSEL SECTION */}
         <ServiceSlider topics={beautyTopics} onBookAppointment={handleWhatsAppClick} />



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

                  <a href="tel:+919053102324">
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
