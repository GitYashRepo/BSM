"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function MakeupPage() {
   const scrollContainer = useRef(null);
   const [canScrollLeft, setCanScrollLeft] = useState(false);
   const [canScrollRight, setCanScrollRight] = useState(true);
   const [screenWidth, setScreenWidth] = useState(0);


   useEffect(() => {
      setScreenWidth(window.innerWidth);
   }, []);

   const handleWhatsAppClick = () => {
      const phoneNumber = "919053102324"
      const message = "Hello! I want to book an appointment at BSM Salon."
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
   }

   const makeupTopics = [
      {
         id: 1,
         title: "Makeup",
         subtitle: "Professional Makeup Artistry",
         image: "/banner/Makeup.jpeg",
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
         image: "/images/img8.jpg",
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
         image: "/images/img1.jpg",
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
         image: "/images/img9.jpg",
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
         image: "/images/img2.jpg",
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
         image: "/images/img7.jpg",
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
         image: "/images/img6.jpg",
         description: [
            "High-fashion, bold makeup looks",
            "Inspired by celebrity trends",
            "Perfect under professional lighting",
            "Statement-making finish",
         ],
      },
   ];


   const scroll = (direction) => {
      if (scrollContainer.current) {
         const scrollAmount = 400;
         scrollContainer.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
         });
      }
   };

   const handleScroll = () => {
      if (scrollContainer.current) {
         setCanScrollLeft(scrollContainer.current.scrollLeft > 0);
         setCanScrollRight(
            scrollContainer.current.scrollLeft <
            scrollContainer.current.scrollWidth - scrollContainer.current.clientWidth - 10
         );
      }
   };

   useEffect(() => {
      handleScroll();
      const container = scrollContainer.current;
      if (container) {
         container.addEventListener("scroll", handleScroll);
         return () => container.removeEventListener("scroll", handleScroll);
      }
   }, []);

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
         <section className="relative w-full h-screen overflow-hidden overflow-x-visible bg-gradient-to-b from-white to-amber-50">

            <motion.div
               drag="x"
               dragConstraints={{ left: -(makeupTopics.length - 1) * screenWidth, right: 0 }}
               dragElastic={0.05}
               className="flex h-full"
               style={{ width: `${makeupTopics.length * 100}vw` }}
            >

               {makeupTopics.map((topic, index) => (
                  <div
                     key={topic.id}
                     className="w-screen h-screen flex items-center justify-center px-6 md:px-16"
                  >
                     <div className="max-w-6xl w-full h-full">

                        {/* MOBILE */}
                        <div className="block md:hidden w-full h-full py-4">
                           <div className="w-full h-full grid grid-rows-[auto_1fr_auto] px-4">

                              <div className="flex items-center justify-center">
                                 <div className="relative w-full h-[38vh] overflow-hidden rounded-xl">
                                    <img
                                       src={topic.image}
                                       alt={topic.title}
                                       className="absolute inset-0 w-full h-full object-cover object-top"
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
                              <div className="flex items-center gap-6 text-md text-gray-500 mb-8">
                                 <span className="font-mono tracking-wider text-xl">
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
                                    className="absolute inset-0 w-full h-full object-cover object-top scale-105"
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
                  <a href="tel:+919053102324">
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
