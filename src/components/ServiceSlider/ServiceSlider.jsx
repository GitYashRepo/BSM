"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function ServiceSlider({ topics, onBookAppointment }) {
   const [current, setCurrent] = useState(0);
   const [dragging, setDragging] = useState(false);
   const [cardW, setCardW] = useState(0);
   const [winW, setWinW] = useState(0);

   // 78% on mobile, 52% on desktop — intentionally shows next card
   useEffect(() => {
      const measure = () => {
         const w = window.innerWidth;
         setWinW(w);
         setCardW(w >= 768 ? w * 0.48 : w * 0.76);
      };
      measure();
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
   }, []);

   const GAP = 16;
   const PEEK_PAD = winW >= 768 ? (winW - cardW) / 2 : 24;

   const offsetFor = (i) => PEEK_PAD + i * (cardW + GAP);
   const translateX = -offsetFor(current) + PEEK_PAD;

   const handleDragEnd = (_, info) => {
      const swipe = info.offset.x;
      const vel = info.velocity.x;
      if ((swipe < -60 || vel < -400) && current < topics.length - 1) {
         setCurrent((p) => p + 1);
      } else if ((swipe > 60 || vel > 400) && current > 0) {
         setCurrent((p) => p - 1);
      }
   };

   if (cardW === 0) return null;

   const totalTrack = topics.length * cardW + (topics.length - 1) * GAP + PEEK_PAD * 2;

   return (
      <section className="w-full bg-[#FAFAF8] py-16 overflow-hidden">

         {/* ── Header ── */}
         <div className="flex items-end justify-between px-6 md:px-16 mb-10">
            <div>
               <p
                  className="text-[10px] uppercase tracking-[0.35em] text-stone-400 mb-2"
                  style={{ fontFamily: "sans-serif" }}
               >
                  Our Expertise
               </p>
               <h2
                  className="text-3xl md:text-4xl text-stone-900 leading-snug"
                  style={{ fontFamily: "Georgia, serif", fontWeight: 300 }}
               >
                  Signature Services
               </h2>
            </div>
         </div>

         {/* ── Draggable track ── */}
         <div className="relative overflow-visible" style={{ height: winW >= 768 ? 540 : 440 }}>

            {/* ── LEFT ARROW ── */}
            <button
               onClick={() => setCurrent((p) => Math.max(0, p - 1))}
               disabled={current === 0}
               aria-label="Previous slide"
               className="transition-all duration-200"
               style={{
                  position: "absolute",
                  left: winW >= 768 ? 16 : 6,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 50,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "1px solid",
                  borderColor: current === 0 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: current === 0 ? "not-allowed" : "pointer",
                  opacity: current === 0 ? 0.35 : 1,
                  boxShadow: current === 0 ? "none" : "0 2px 12px rgba(0,0,0,0.15)",
               }}
            >
               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4 7L9 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>

            {/* ── RIGHT ARROW ── */}
            <button
               onClick={() => setCurrent((p) => Math.min(topics.length - 1, p + 1))}
               disabled={current === topics.length - 1}
               aria-label="Next slide"
               className="transition-all duration-200"
               style={{
                  position: "absolute",
                  right: winW >= 768 ? 16 : 6,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 50,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "1px solid",
                  borderColor: current === topics.length - 1 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: current === topics.length - 1 ? "not-allowed" : "pointer",
                  opacity: current === topics.length - 1 ? 0.35 : 1,
                  boxShadow: current === topics.length - 1 ? "none" : "0 2px 12px rgba(0,0,0,0.15)",
               }}
            >
               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2L10 7L5 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>
            <motion.div
               drag="x"
               dragConstraints={{
                  left: -(totalTrack - winW - PEEK_PAD),
                  right: PEEK_PAD,
               }}
               dragElastic={0.05}
               animate={{ x: translateX }}
               transition={{ type: "spring", stiffness: 65, damping: 18 }}
               onDragStart={() => setDragging(true)}
               onDragEnd={(e, info) => {
                  setDragging(false);
                  handleDragEnd(e, info);
               }}
               className="absolute top-0 left-0 flex h-full cursor-grab active:cursor-grabbing"
               style={{ width: totalTrack }}
            >
               {topics.map((topic, i) => {
                  const isActive = i === current;
                  return (
                     <motion.div
                        key={topic.id}
                        onClick={() => { if (!dragging) setCurrent(i); }}
                        animate={{ opacity: isActive ? 1 : 0.5 }}
                        transition={{ duration: 0.35 }}
                        className="relative flex-shrink-0 overflow-hidden select-none"
                        style={{
                           width: cardW,
                           height: "100%",
                           marginRight: i < topics.length - 1 ? GAP : 0,
                           borderRadius: 4,
                           background: "#E8E2D9",
                        }}
                     >
                        {/* Photo */}
                        <img
                           src={topic.image}
                           alt={topic.title}
                           draggable={false}
                           className="w-full h-full object-cover object-center"
                           style={{
                              filter: isActive ? "none" : "grayscale(30%)",
                              transition: "filter 0.4s ease",
                           }}
                        />

                        {/* Subtle bottom veil */}
                        <div
                           className="absolute inset-0"
                           style={{
                              background:
                                 "linear-gradient(to top, rgba(15,12,9,0.72) 0%, rgba(15,12,9,0.28) 38%, transparent 65%)",
                           }}
                        />

                        {/* ── Card content ── */}
                        <div className="absolute bottom-0 left-0 right-0 px-6 pb-7 pt-10">

                           {/* Title */}
                           <h3
                              className="text-white leading-tight"
                              style={{
                                 fontFamily: "Georgia, serif",
                                 fontWeight: 300,
                                 fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                              }}
                           >
                              {topic.title}
                           </h3>
                           <p className="text-white mb-4 text-sm leading-tight" style={{ fontFamily: "Georgia, serif", fontWeight: 300, }}>Starting from ₹{topic.price}</p>

                           {/* Bullet points — only active card */}
                           <motion.div
                              animate={{
                                 opacity: isActive ? 1 : 0,
                                 y: isActive ? 0 : 8,
                              }}
                              transition={{ duration: 0.3, delay: isActive ? 0.1 : 0 }}
                           >
                              <ul className="space-y-1.5 mb-5">
                                 {(topic.description || []).slice(0, 3).map((pt, j) => (
                                    <li
                                       key={j}
                                       className="flex items-start gap-2 text-white/65 text-[13px] leading-snug"
                                       style={{ fontFamily: "sans-serif" }}
                                    >
                                       <span
                                          className="mt-1 flex-shrink-0 rounded-full bg-amber-400/80"
                                          style={{ width: 4, height: 4 }}
                                       />
                                       {pt}
                                    </li>
                                 ))}
                              </ul>

                              {/* CTA */}
                              <button
                                 onClick={(e) => {
                                    e.stopPropagation();
                                    onBookAppointment?.();
                                 }}
                                 className="group inline-flex items-center gap-3"
                                 style={{ fontFamily: "sans-serif" }}
                              >
                                 <span
                                    className="text-[11px] uppercase tracking-[0.28em] text-white/90 font-medium"
                                 >
                                    Book Now
                                 </span>
                                 <span
                                    className="h-px bg-amber-400/70 transition-all duration-300 group-hover:bg-amber-300"
                                    style={{ width: 28 }}
                                 />
                              </button>
                           </motion.div>
                        </div>
                     </motion.div>
                  );
               })}
            </motion.div>
         </div>

         {/* ── Progress bar ── */}
         <div className="flex items-center gap-2 px-6 md:px-16 mt-8">
            {topics.map((_, i) => (
               <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="h-px transition-all duration-500 rounded-full"
                  style={{
                     flex: i === current ? 3 : 1,
                     background: i === current ? "#78614a" : "#D5CCC2",
                     height: "1.5px",
                  }}
               />
            ))}
         </div>

         {/* tiny drag hint */}
         <p
            className="text-center text-[10px] uppercase tracking-[0.3em] text-stone-300 mt-4"
            style={{ fontFamily: "sans-serif" }}
         >
            Drag to explore
         </p>
      </section>
   );
}
