"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function MakeupPage() {
   const scrollContainer = useRef(null);
   const [canScrollLeft, setCanScrollLeft] = useState(false);
   const [canScrollRight, setCanScrollRight] = useState(true);
   const horizontalSectionRef = useRef(null);
   const horizontalTrackRef = useRef(null);

   const handleWhatsAppClick = () => {
      const phoneNumber = "919467777773"
      const message = "Hello! I want to book an appointment at BSM Salon."
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
   }

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
         ScrollTrigger.getAll().forEach(t => t.kill());
      };
   }, []);


   const makeupTopics = [
      {
         id: 1,
         title: "Makeup",
         subtitle: "Professional Makeup Artistry",
         image: "/images/img5.jpg",
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
         image: "/images/img7.jpg",
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
         image: "/images/img8.jpg",
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

         {/* Horizontal Scroll Section */}
         {/* <section className="relative py-20 bg-white">
            <div className="max-w-full mx-auto px-4 md:px-6 lg:px-12">
               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12 space-y-2"
               >
                  <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                     Our Makeup Services
                  </h2>
                  <p className="text-gray-600 text-lg">
                     Scroll to explore our specialized makeup techniques and styles
                  </p>
               </motion.div>

               <div className="flex justify-end gap-4 mb-8">
                  <button
                     onClick={() => scroll("left")}
                     disabled={!canScrollLeft}
                     className="p-3 rounded-full border border-amber-600 hover:bg-amber-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                     aria-label="Scroll left"
                  >
                     <ChevronLeft className="w-6 h-6 text-amber-600" />
                  </button>
                  <button
                     onClick={() => scroll("right")}
                     disabled={!canScrollRight}
                     className="p-3 rounded-full border border-amber-600 hover:bg-amber-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                     aria-label="Scroll right"
                  >
                     <ChevronRight className="w-6 h-6 text-amber-600" />
                  </button>
               </div>

               <div
                  ref={scrollContainer}
                  className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
                  style={{ scrollBehavior: "smooth" }}
               >
                  {makeupTopics.map((topic, index) => (
                     <motion.div
                        key={topic.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex-shrink-0 w-96 group"
                     >
                        <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                           <div className="relative h-64 overflow-hidden bg-gray-200">
                              <img
                                 src={topic.image || "/placeholder.svg"}
                                 alt={topic.title}
                                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                              <div className="absolute top-4 right-4 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-light text-lg">
                                 {String(index + 1).padStart(2, "0")}
                              </div>
                           </div>

                           <div className="flex-1 flex flex-col p-6 space-y-4">
                              <div className="space-y-1">
                                 <h3 className="text-3xl font-light text-gray-900">
                                    {topic.title}
                                 </h3>
                                 <p className="text-sm font-serif text-amber-600 tracking-widest uppercase">
                                    {topic.subtitle}
                                 </p>
                              </div>

                              <div className="h-px bg-amber-200" />

                              <p className="text-gray-600 leading-relaxed text-sm flex-1 line-clamp-6">
                                 {topic.description}
                              </p>

                              <button className="mt-4 px-6 py-3 bg-amber-600 text-white font-light rounded-lg hover:bg-amber-700 transition-colors duration-300 group-hover:shadow-md">
                                 Learn More
                              </button>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section> */}

         {/* Full Description Sections */}
         <section
            ref={horizontalSectionRef}
            className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-white to-amber-50"
         >
            <div
               ref={horizontalTrackRef}
               className="flex h-full"
               style={{ width: `${makeupTopics.length * 100}vw` }}
            >
               {makeupTopics.map((topic, index) => (
                  <div
                     key={topic.id}
                     className="w-screen h-screen flex items-center justify-center px-16"
                  >
                     <div className="max-w-6xl w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                           {/* Image */}
                           <div className="md:col-span-1">
                              <div className="relative overflow-hidden rounded-2xl h-80 shadow-xl">
                                 <img
                                    src={topic.image}
                                    alt={topic.title}
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                           </div>

                           {/* Content */}
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

                              <button onClick={handleWhatsAppClick} className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:cursor-pointer">
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
               {/* Content */}
               <div className="space-y-6">
                  <h2 className="bsm-text-line text-5xl md:text-6xl font-light text-black leading-tight">
                     Ready to Experience <span className="font-serif italic">Premium</span> Beauty?
                  </h2>
                  <p className="bsm-text-line text-xl text-black/80 font-light max-w-2xl mx-auto leading-relaxed">
                     Connect with us today to schedule your transformation. Let's create something extraordinary together.
                  </p>
               </div>

               {/* CTA Buttons */}
               <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <button
                     onClick={handleWhatsAppClick}
                     className="bsm-text-line flex items-center justify-center gap-3 px-10 py-5 bg-white hover:cursor-pointer hover:bg-white/95 text-[#6E2E35] transition-all duration-300 rounded-lg font-light text-base tracking-wide"
                  >
                     <MessageCircle size={20} />
                     Chat on WhatsApp
                  </button>
                  <a href="tel:+919467777773">
                     <button className="bsm-text-line flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/30 hover:cursor-pointer hover:border-white bg-transparent hover:bg-white/10 text-black transition-all duration-300 rounded-lg font-light text-base tracking-wide">
                        Book Appointment
                        <ArrowRight size={20} />
                     </button>
                  </a>
               </div>

               {/* Footer Text */}
               <p className="bsm-text-line text-sm text-black/60 font-light pt-6">
                  Available 7 days • We respond within 2 hours
               </p>
            </div>
         </section>
      </div>
   );
}
