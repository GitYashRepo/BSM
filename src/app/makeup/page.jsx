"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ServiceSlider } from "@/components/ServiceSlider/ServiceSlider";

export default function MakeupPage() {
   const handleWhatsAppClick = () => {
      const phoneNumber = "919468456266"
      const message = "Hello! I want to book an appointment at BSM Salon."
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
   }

   const makeupTopics = [
      {
         id: 1,
         title: "Makeup",
         subtitle: "Professional Makeup Artistry",
         image: "/bridalnewimg.jpg",
         description: [
            "Enhances your natural features with precision",
            "Customized to skin tone & face shape",
            "Premium, long-lasting products",
            "Perfect for everyday or glam looks",
         ],
      },
      {
         id: 2,
         title: "Bridal",
         subtitle: "Your Special Wedding Day",
         image: "/comp/img8.jpg",
         description: [
            "Flawless, camera-ready bridal makeup",
            "Long-lasting & waterproof finish",
            "Personalized trials & consultations",
            "Designed to last all day & night",
         ],
      },
      {
         id: 3,
         title: "Party",
         subtitle: "Glamorous Evening Looks",
         image: "/comp/img1.jpg",
         description: [
            "Bold, glamorous party-ready looks",
            "Enhances eyes, lips & contours",
            "Complements outfit & event style",
            "Fresh, long-lasting finish",
         ],
      },
      {
         id: 4,
         title: "HD",
         subtitle: "Flawless HD & Film Makeup",
         image: "/comp/img9.jpg",
         description: [
            "Perfect under HD cameras & lighting",
            "No flashback or texture issues",
            "Smooth, flawless skin finish",
            "Ideal for shoots & events",
         ],
      },
      {
         id: 5,
         title: "Airbrush",
         subtitle: "Flawless Airbrush Finish",
         image: "/comp/img2.jpg",
         description: [
            "Lightweight & breathable coverage",
            "Waterproof & sweat-resistant",
            "Smooth, second-skin finish",
            "Ideal for long events",
         ],
      },
      {
         id: 6,
         title: "Engagement",
         subtitle: "Radiant Engagement Looks",
         image: "/comp/img7.jpg",
         description: [
            "Soft, elegant & radiant makeup",
            "Designed for photography",
            "Enhances natural beauty",
            "Comfortable & long-lasting",
         ],
      },
      {
         id: 7,
         title: "Celebrity",
         subtitle: "Red Carpet Glamour",
         image: "/comp/img6.jpg",
         description: [
            "High-fashion, bold makeup looks",
            "Inspired by celebrity trends",
            "Perfect under professional lighting",
            "Statement-making finish",
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
               {/* Decorative Top Accent */}
               <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center gap-4"
               >
                  <div className="w-12 h-px bg-amber-600" />
                  <span className="text-amber-600 text-sm font-serif tracking-widest uppercase">
                     Makeup Services
                  </span>
                  <div className="w-12 h-px bg-amber-600" />
               </motion.div>

               {/* Main Title */}
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight text-gray-900"
               >
                  Makeup Artistry
                  <span className="block text-amber-600">Perfected</span>
               </motion.h1>

               {/* Description */}
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
               >
                  Explore our comprehensive collection of makeup services designed to enhance your natural beauty and make you feel confident for any occasion.
               </motion.p>

               {/* Decorative Line */}
               <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 bg-amber-600 mx-auto"
               />
            </div>
         </motion.section>

         {/* DRAG CAROUSEL SECTION */}
         <ServiceSlider topics={makeupTopics} onBookAppointment={handleWhatsAppClick} />



         {/* CTA Section */}
         <section className="bsm-section py-32 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-10">
               <div className="space-y-6">
                  <h2 className="bsm-text-line text-5xl md:text-6xl font-light text-black leading-tight">
                     Ready to Experience <span className="font-serif italic">Premium</span> Beauty?
                  </h2>
                  <p className="bsm-text-line text-xl text-black/80 font-light max-w-2xl mx-auto leading-relaxed">
                     Connect with us today to schedule your transformation. Let's create something extraordinary together.
                  </p>
               </div>
               <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <button
                     onClick={handleWhatsAppClick}
                     className="bsm-text-line flex items-center justify-center gap-3 px-10 py-5 bg-white hover:cursor-pointer hover:bg-white/95 text-[#6E2E35] transition-all duration-300 rounded-lg font-light text-base tracking-wide"
                  >
                     <MessageCircle size={20} />
                     Chat on WhatsApp
                  </button>
                  <a href="tel:+919468456266">
                     <button className="bsm-text-line flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/30 hover:cursor-pointer hover:border-white bg-transparent hover:bg-white/10 text-black transition-all duration-300 rounded-lg font-light text-base tracking-wide">
                        Book Appointment
                        <ArrowRight size={20} />
                     </button>
                  </a>
               </div>
               <p className="bsm-text-line text-sm text-black/60 font-light pt-6">
                  Available 7 days • We respond within 2 hours
               </p>
            </div>
         </section>
      </div>
   );
}
