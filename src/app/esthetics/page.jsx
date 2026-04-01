"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ServiceSlider } from "@/components/ServiceSlider/ServiceSlider";

export default function EstheticsPage() {
   const handleWhatsAppClick = () => {
      const phoneNumber = "919053102324";
      const message =
         "Hello! I want to book an esthetics service at BSM Salon.";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
         message
      )}`;
      window.open(whatsappUrl, "_blank");
   };


   const estheticsTopics = [
      {
         id: 1,
         title: "Skin Treatments",
         subtitle: "Advanced Skin Care",
         image: "/services/esthetics/skintreat.jpg",
         description: [
            "Customized professional treatments",
            "Improves skin health & texture",
            "Targets specific skin concerns",
            "Visible long-term results",
         ],
         price: "399"
      },
      {
         id: 2,
         title: "Anti-Aging",
         subtitle: "Youthful Skin Therapy",
         image: "/services/esthetics/antiage.png",
         description: [
            "Reduces fine lines & wrinkles",
            "Boosts collagen production",
            "Improves skin elasticity",
            "Restores youthful glow",
         ],
         price: "3499"
      },
      {
         id: 3,
         title: "Acne Treatment",
         subtitle: "Clear Skin Solutions",
         image: "/services/esthetics/acne.jpg",
         description: [
            "Targets active acne & breakouts",
            "Reduces scars & inflammation",
            "Balances oil production",
            "Clinically safe procedures",
         ],
         price: "999"
      },
      {
         id: 4,
         title: "Pigmentation",
         subtitle: "Even Skin Tone Care",
         image: "/services/esthetics/pigmentation.jpg",
         description: [
            "Reduces dark spots & melasma",
            "Improves overall complexion",
            "Advanced pigmentation therapies",
            "Long-lasting brightening results",
         ],
         price: "399"
      },
      {
         id: 5,
         title: "Peels",
         subtitle: "Skin Renewal Therapy",
         image: "/services/esthetics/chempeel.jpg",
         description: [
            "Removes dead skin layers",
            "Improves texture & tone",
            "Boosts skin regeneration",
            "Instant visible glow",
         ],
         price: "999"
      },
      {
         id: 6,
         title: "Laser Treatment",
         subtitle: "Advanced Laser Solutions",
         image: "/services/esthetics/laser.jpg",
         description: [
            "Hair & skin laser treatments",
            "Safe, modern laser technology",
            "Targets skin concerns precisely",
            "Minimal downtime",
         ],
         price: "1499"
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

         {/* DRAG CAROUSEL SECTION */}
         <ServiceSlider topics={estheticsTopics} onBookAppointment={handleWhatsAppClick} />



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
