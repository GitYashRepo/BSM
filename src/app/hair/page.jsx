"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ServiceSlider } from "@/components/ServiceSlider/ServiceSlider";

export default function HairPage() {
   const handleWhatsAppClick = () => {
      const phoneNumber = "919053102324";
      const message = "Hello! I want to book a hair service at BSM Salon.";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
         message
      )}`;
      window.open(whatsappUrl, "_blank");
   };

   const hairTopics = [
      {
         id: 1,
         title: "Hair",
         subtitle: "Complete Hair Care Solutions",
         image: "/services/hair/hair2.jpg",
         description: [
            "Personalized hair care for every hair type",
            "Healthy, shiny & well-maintained hair",
            "Professional salon-grade products",
            "Expert styling & treatments",
         ],
      },
      {
         id: 2,
         title: "Haircuts",
         subtitle: "Precision Cuts & Styling",
         image: "/services/hair/haircut.jpg",
         description: [
            "Customized cuts for face shape",
            "Trendy & classic styles",
            "Perfect finishing & blow-dry",
            "Easy-to-maintain looks",
         ],
      },
      {
         id: 3,
         title: "Hair Color",
         subtitle: "Professional Hair Coloring",
         image: "/services/hair/haircolor.png",
         description: [
            "Global, highlights & balayage",
            "Ammonia-free premium colors",
            "Long-lasting vibrant shades",
            "Grey coverage perfection",
         ],
      },
      {
         id: 4,
         title: "Hair Spa",
         subtitle: "Deep Nourishment Therapy",
         image: "/services/hair/hairspa.jpg",
         description: [
            "Repairs damaged hair",
            "Improves scalp health",
            "Boosts shine & softness",
            "Relaxing rejuvenation treatment",
         ],
      },
      {
         id: 5,
         title: "Keratin Treatment",
         subtitle: "Smooth & Frizz-Free Hair",
         image: "/services/hair/keratin.jpg",
         description: [
            "Reduces frizz & dryness",
            "Adds shine & smoothness",
            "Long-lasting results",
            "Perfect for unmanageable hair",
         ],
      },
      {
         id: 6,
         title: "Smoothening",
         subtitle: "Silky Straight Finish",
         image: "/services/hair/smoothning.jpg",
         description: [
            "Naturally straight look",
            "Reduces daily styling effort",
            "Soft, manageable texture",
            "Professional safe products",
         ],
      },
      {
         id: 7,
         title: "Hair Extensions",
         subtitle: "Length & Volume Instantly",
         image: "/services/hair/hairext.jpg",
         description: [
            "100% natural-looking extensions",
            "Adds volume & length",
            "Comfortable & secure fit",
            "Style versatility",
         ],
      },
      {
         id: 8,
         title: "Bridal Hairstyling",
         subtitle: "Perfect Wedding Hair",
         image: "/services/hair/bridalhairstyle.jpg",
         description: [
            "Elegant bridal hairstyles",
            "Long-lasting hold",
            "Customized to outfit & makeup",
            "Perfect for photos & ceremonies",
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
                     Hair Services
                  </span>
                  <div className="w-12 h-px bg-amber-600" />
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight text-gray-900"
               >
                  Hair Perfection
                  <span className="block text-amber-600">Redefined</span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
               >
                  Discover expert hair services crafted to enhance your style,
                  confidence, and personality.
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
         <ServiceSlider topics={hairTopics} onBookAppointment={handleWhatsAppClick} />



         {/* CTA Section */}
         <section className="bsm-section py-32 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-10">
               <h2 className="text-5xl md:text-6xl font-light text-black">
                  Ready for <span className="font-serif italic">Perfect Hair</span>?
               </h2>

               <p className="text-xl text-black/80 font-light">
                  Book your hair transformation today with our expert stylists.
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
