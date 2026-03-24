"use client";

import { useState, useRef, useEffect } from "react";
import { X, PlayCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoSection() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const videoRef = useRef(null);
   const [isInView, setIsInView] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            setIsInView(entry.isIntersecting);
         },
         { threshold: 0.1 } // 10% visibility to start
      );

      if (videoRef.current) {
         observer.observe(videoRef.current);
      }

      return () => {
         if (videoRef.current) {
            observer.unobserve(videoRef.current);
         }
      };
   }, []);

   useEffect(() => {
      if (videoRef.current) {
         if (isInView && !isModalOpen) {
            videoRef.current.muted = true; // Ensure it's muted
            videoRef.current.play().catch(err => console.log("Autoplay prevented:", err));
         } else {
            videoRef.current.pause();
         }
      }
   }, [isInView, isModalOpen]);

   return (
      <section className="relative w-full pb-10 md:pb-20 bg-background overflow-hidden">
         <div className="w-full mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative group cursor-pointer overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-neutral-900 border border-white/10 w-full md:h-screen h-auto"
               onClick={() => setIsModalOpen(true)}
            >
               {/* Video Thumbnail / Preview */}
               <video
                  ref={videoRef}
                  src={`https://ik.imagekit.io/imageidsetupkey/homevdo%20(2).mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
               />

               {/* Overlay with Play Icon - Always visible on mobile, hover on desktop */}
               <div className="absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-all duration-500">
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     className="bg-white/10 backdrop-blur-xl p-3 md:p-6 rounded-full border border-white/20 shadow-2xl"
                  >
                     <PlayCircle className="text-white w-8 h-8 md:w-16 md:h-16" strokeWidth={1} />
                  </motion.div>
               </div>

               {/* Premium Content Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

               <div className="hidden md:block absolute bottom-12 left-12 text-white z-10 text-left">
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.3 }}
                  >
                     <span className="inline-block px-3 py-1 mb-3 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-full backdrop-blur-md">
                        Virtual Tour
                     </span>
                     <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 font-serif leading-tight">
                        Experience Our <br className="hidden md:block" /> Sanctuary
                     </h2>
                     <p className="text-white/70 text-sm md:text-lg max-w-sm md:max-w-xl font-light line-clamp-2 md:line-clamp-none">
                        Immerse yourself in the art of beauty. Take a journey through our space where every detail is designed for your comfort.
                     </p>
                  </motion.div>
               </div>
            </motion.div>
         </div>

         {/* Full Screen Video Modal */}
         <AnimatePresence>
            {isModalOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
                  onClick={() => setIsModalOpen(false)}
               >
                  <button
                     onClick={(e) => {
                        e.stopPropagation();
                        setIsModalOpen(false);
                     }}
                     className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full z-10 hover:cursor-pointer"
                  >
                     <X size={32} />
                  </button>

                  <motion.div
                     initial={{ scale: 0.9, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0.9, opacity: 0 }}
                     className="relative w-full h-full flex items-center justify-center"
                     onClick={(e) => e.stopPropagation()}
                  >
                     <video
                        src={`https://drive.google.com/uc?export=download&id=1gNviwZUyhzUbjEf05pAmxiext_nf7GaZ`}
                        controls
                        autoPlay
                        className="w-full max-h-screen object-contain"
                     />
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </section>
   );
}
