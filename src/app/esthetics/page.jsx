"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function EstheticsPage() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [screenWidth, setScreenWidth] = useState(0);


   useEffect(() => {
      setScreenWidth(window.innerWidth);
   }, []);


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
      },
      {
         id: 5,
         title: "Laser Treatment",
         subtitle: "Advanced Laser Solutions",
         image: "/services/esthetics/laser.jpg",
         description: [
            "Hair & skin laser treatments",
            "Safe, modern laser technology",
            "Targets skin concerns precisely",
            "Minimal downtime",
         ],
      },
      {
         id: 6,
         title: "Chemical Peels",
         subtitle: "Skin Renewal Therapy",
         image: "/services/esthetics/chempeel.jpg",
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

         {/* DRAG CAROUSEL SECTION */}
         <section className="relative w-full h-screen overflow-y-hidden overflow-x-scroll bg-gradient-to-b from-white to-amber-50">

            <motion.div
               drag="x"
               dragConstraints={{
                  left: -(estheticsTopics.length - 1) * screenWidth,
                  right: 0,
               }}
               dragElastic={0.08}
               onDragEnd={(e, info) => {
                  const offset = info.offset.x;
                  let newIndex = currentIndex;

                  if (offset < -100 && currentIndex < estheticsTopics.length - 1) {
                     newIndex = currentIndex + 1;
                  } else if (offset > 100 && currentIndex > 0) {
                     newIndex = currentIndex - 1;
                  }

                  setCurrentIndex(newIndex);
               }}
               animate={{ x: -currentIndex * screenWidth }}
               transition={{ type: "spring", stiffness: 80, damping: 20 }}
               className="flex h-full"
               style={{ width: `${estheticsTopics.length * 100}vw` }}
            >
               {estheticsTopics.map((topic, index) => (
                  <div
                     key={topic.id}
                     className="w-screen h-screen flex items-center justify-center px-6 md:px-16"
                  >
                     <div className="max-w-6xl w-full h-full">

                        {/* MOBILE */}
                        <div className="block md:hidden w-full h-full">
                           <div className="w-full h-full grid grid-rows-[auto_1fr_auto] px-4">

                              <div className="flex items-center justify-center">
                                 <div className="relative w-full h-[38vh] overflow-hidden rounded-xl">
                                    <img
                                       src={topic.image}
                                       alt={topic.title}
                                       className="absolute inset-0 w-full h-full object-cover"
                                    />
                                 </div>
                              </div>

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

                        {/* DESKTOP */}
                        <div className="hidden md:grid h-full grid-cols-12 gap-x-20 items-center px-12 lg:px-20">

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

                           <div className="col-span-7">
                              <div className="relative h-[100vh] overflow-hidden">
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
               ))}

            </motion.div>
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
