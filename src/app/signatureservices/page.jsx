"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ServiceSlider } from "@/components/ServiceSlider/ServiceSlider";

export default function SignatureServicesPage() {
   const handleWhatsAppClick = () => {
      const phoneNumber = "919053102324";
      const message =
         "Hello! I want to book a Signature Service at BSM Salon.";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
         message
      )}`;
      window.open(whatsappUrl, "_blank");
   };

   const signatureTopics = [
      {
         id: 1,
         title: "Signature Services",
         subtitle: "Our Finest Creations",
         image: "/services/sigserv/signature.jpg",
         description: [
            "Exclusive luxury salon experiences",
            "Crafted by expert professionals",
            "Premium products & techniques",
            "Tailored for special occasions",
         ],
         price: "5999"
      },
      {
         id: 2,
         title: "Bridal Makeovers",
         subtitle: "Your Dream Wedding Look",
         image: "/bridalnewimg.jpg",
         description: [
            "Complete bridal hair & makeup",
            "Personalized consultations & trials",
            "Flawless, long-lasting finish",
            "Picture-perfect results",
         ],
         price: "18999"
      },
      {
         id: 3,
         title: "Pre-Bridal Package",
         subtitle: "Glow Before the Big Day",
         image: "/services/sigserv/pre-bridal.jpg",
         description: [
            "Skin, hair & beauty preparation",
            "Customized multi-session packages",
            "Ensures radiant bridal glow",
            "Stress-free wedding prep",
         ],
         price: "9999"
      },
      {
         id: 4,
         title: "Groom Makeover",
         subtitle: "Refined & Confident Look",
         image: "/services/sigserv/groom.jpg",
         description: [
            "Professional grooming & styling",
            "Skin, hair & beard perfection",
            "Natural, polished finish",
            "Designed for wedding day confidence",
         ],
         price: "4999"
      },
      {
         id: 5,
         title: "Celebrity Styling",
         subtitle: "Red-Carpet Ready",
         image: "/services/sigserv/celeb.jpg",
         description: [
            "High-fashion hair & makeup",
            "Inspired by celebrity trends",
            "Perfect for shoots & events",
            "Statement-making luxury looks",
         ],
         price: "9999"
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

         {/* DRAG CAROUSEL SECTION */}
         <ServiceSlider topics={signatureTopics} onBookAppointment={handleWhatsAppClick} />



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
