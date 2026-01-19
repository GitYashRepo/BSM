'use client';

import React from 'react';
import { useRef, useEffect, useState } from 'react';

export function InfiniteLogoScroller({
   logos,
   speed = 30,
   className = '',
}) {
   const containerRef = useRef(null);
   const [isDragging, setIsDragging] = useState(false);
   const [rotation, setRotation] = useState(0);
   const [dragRotation, setDragRotation] = useState(0);
   const [startX, setStartX] = useState(0);
   const [velocity, setVelocity] = useState(0);
   const [hoveredIndex, setHoveredIndex] = useState(null);
   const [isMobile, setIsMobile] = useState(false);
   const animationRef = useRef();
   const lastXRef = useRef(0);
   const momentumRef = useRef(0);

   // Detect mobile viewport
   useEffect(() => {
      const checkMobile = () => {
         setIsMobile(window.innerWidth < 768);
      };

      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   // Auto-rotation animation with momentum
   useEffect(() => {
      const animate = () => {
         setRotation((prev) => {
            let newRotation = prev + speed / 100 + momentumRef.current;
            momentumRef.current *= 0.96; // Friction

            if (newRotation >= 360) {
               newRotation -= 360;
            }
            return newRotation;
         });
         animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
         if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
   }, [speed]);

   // Drag handlers for mouse
   const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.clientX);
      lastXRef.current = e.clientX;
      momentumRef.current = 0;
   };

   const handleMouseMove = (e) => {
      if (!isDragging) return;

      const delta = e.clientX - lastXRef.current;
      const rotationDelta = delta * 0.5;

      setDragRotation((prev) => {
         let newRotation = prev + rotationDelta;
         if (newRotation >= 360) newRotation -= 360;
         if (newRotation < 0) newRotation += 360;
         return newRotation;
      });

      setRotation((prev) => {
         let newRotation = prev + rotationDelta;
         if (newRotation >= 360) newRotation -= 360;
         if (newRotation < 0) newRotation += 360;
         return newRotation;
      });

      momentumRef.current = rotationDelta * 0.3;
      lastXRef.current = e.clientX;
   };

   const handleMouseUp = () => {
      setIsDragging(false);
      setDragRotation(0);
   };

   // Drag handlers for touch
   const handleTouchStart = (e) => {
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
      lastXRef.current = e.touches[0].clientX;
      momentumRef.current = 0;
   };


   const handleTouchMove = (e) => {
      if (!isDragging) return;

      const delta = e.touches[0].clientX - lastXRef.current;
      const rotationDelta = delta * 0.5;

      setDragRotation((prev) => {
         let newRotation = prev + rotationDelta;
         if (newRotation >= 360) newRotation -= 360;
         if (newRotation < 0) newRotation += 360;
         return newRotation;
      });

      setRotation((prev) => {
         let newRotation = prev + rotationDelta;
         if (newRotation >= 360) newRotation -= 360;
         if (newRotation < 0) newRotation += 360;
         return newRotation;
      });

      momentumRef.current = rotationDelta * 0.3;
      lastXRef.current = e.touches[0].clientX;
   };

   const handleTouchEnd = () => {
      setIsDragging(false);
      setDragRotation(0);
   };

   return (
      <div
         ref={containerRef}
         className={`relative w-full h-auto flex mb-10 flex-col items-center justify-center py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden cursor-grab active:cursor-grabbing ${className}`}
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onMouseLeave={handleMouseUp}
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}
      >
         {/* Animated background orbs */}
         <div className="absolute -top-40 -left-40 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full blur-3xl animate-pulse" />
         <div className="absolute -bottom-40 -right-40 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tl from-indigo-300/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

         {/* Outer ring */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 md:w-[500px] md:h-[500px] rounded-full border-2 border-slate-200/40 shadow-lg shadow-blue-200/20" />
            <div className="absolute w-80 h-80 md:w-[600px] md:h-[600px] rounded-full border border-slate-300/20" />
         </div>

         <div className='w-full md:w-[100vh] flex flex-col items-center mb-10'>
            <p className="text-xs tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-2">Products We Use</p>
            <h2 className="text-2xl text-center md:text-6xl font-light text-[#1a1a1a] leading-0.7 mb-2">
               Professional Grade {" "}
               <span className="text-[#AC2121] font-serif italic">Excellence</span>
            </h2>
            <p className="text-sm md:text-xl text-center text-slate-600 mx-auto px-2">
               We use industry-leading products from trusted brands to deliver premium results and exceptional care for every client
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
               <div className="w-1 h-1 rounded-full bg-slate-400" />
               <span>Explore the brands we trust</span>
               <div className="w-1 h-1 rounded-full bg-slate-400" />
            </div>
         </div>

         {/* Rotating circle container */}
         <div
            className="relative w-64 h-64 md:w-96 md:h-96"
            style={{
               transform: `rotate(${rotation + dragRotation}deg)`,
               transition: isDragging ? 'none' : 'none',
            }}
         >
            {logos.map((logo, idx) => {
               const angle = (idx / logos.length) * 360;
               const radius = isMobile ? 90 : 180;
               const x = Math.cos((angle * Math.PI) / 180) * radius;
               const y = Math.sin((angle * Math.PI) / 180) * radius;
               const isHovered = hoveredIndex === idx;

               return (
                  <div
                     key={idx}
                     className="absolute transform -translate-x-1/2 -translate-y-1/2"
                     style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        perspective: '1000px',
                     }}
                     onMouseEnter={() => setHoveredIndex(idx)}
                     onMouseLeave={() => setHoveredIndex(null)}
                  >
                     <div
                        className={`h-20 w-20 md:h-32 md:w-32 rounded-lg md:rounded-2xl bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 flex items-center justify-center shadow-lg md:shadow-xl transition-all duration-300 ${isHovered
                           ? 'shadow-2xl shadow-blue-300/50 border-blue-300 scale-110'
                           : 'shadow-lg shadow-slate-200/50'
                           }`}
                        style={{
                           transform: `rotateZ(-${rotation + dragRotation}deg)`,
                           backdropFilter: 'blur(10px)',
                        }}
                     >
                        <img
                           src={logo}
                           alt={`Logo ${idx}`}
                           className="max-h-16 max-w-16 md:max-h-24 md:max-w-24 object-contain filter drop-shadow-md transition-transform duration-300"
                        />
                     </div>
                  </div>
               );
            })}
         </div>

         {/* Interactive instructions */}
         <div className="absolute bottom-0 md:bottom-0 left-1/2 -translate-x-1/2 text-center pointer-events-none px-4">
            <p className="text-slate-700 text-sm md:text-lg font-semibold tracking-wider">DRAG TO ROTATE</p>
         </div>
      </div>
   );
}
