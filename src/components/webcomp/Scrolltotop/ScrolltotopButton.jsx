"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
   const [scrollProgress, setScrollProgress] = useState(0);
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      let rafId = null;

      const updateScroll = () => {
         const scrollTop = window.scrollY;
         const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;

         const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
         setScrollProgress(progress);
         setVisible(scrollTop > 100);
         rafId = null;
      };

      const onScroll = () => {
         if (rafId === null) {
            rafId = requestAnimationFrame(updateScroll);
         }
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
         window.removeEventListener("scroll", onScroll);
         if (rafId) cancelAnimationFrame(rafId);
      };
   }, []);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   const radius = 26;
   const circumference = 2 * Math.PI * radius;
   const offset = circumference * (1 - scrollProgress / 100);

   return (
      <div
         className={`fixed bottom-12 -right-1 z-50 transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
      >
         <div className="relative h-16 w-16">
            {/* Circular Progress Ring */}
            <svg
               className="absolute inset-0 -rotate-90"
               width="64"
               height="64"
            >
               <defs>
                  <linearGradient id="scrollGradient" x1="0" y1="0" x2="1" y2="1">
                     <stop offset="0%" stopColor="#6366f1" />
                     <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
               </defs>

               {/* Background ring */}
               <circle
                  cx="32"
                  cy="32"
                  r={radius}
                  stroke="hsl(var(--border))"
                  strokeWidth="4"
                  fill="none"
               />

               {/* Progress ring (NO transition lag) */}
               <circle
                  cx="32"
                  cy="32"
                  r={radius}
                  stroke="url(#scrollGradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
               />
            </svg>

            {/* Center Button */}
            <Button
               onClick={scrollToTop}
               size="icon"
               className="absolute inset-2 rounded-full shadow-lg"
               aria-label="Scroll to top"
            >
               <ArrowUp className="h-5 w-5" />
            </Button>
         </div>
      </div>
   );
}
