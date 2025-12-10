"use client";
import { useState, useEffect } from "react";

export const useScrollHide = () => {
   const [isVisible, setIsVisible] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [ticking, setTicking] = useState(false);

   useEffect(() => {
      const updateScroll = () => {
         const currentScrollY = window.scrollY;

         // If scrolling down → hide
         if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsVisible(false);
         }
         // If scrolling up → show
         else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
         }

         setLastScrollY(currentScrollY);
         setTicking(false);
      };

      const handleScroll = () => {
         if (!ticking) {
            window.requestAnimationFrame(updateScroll);
            setTicking(true);
         }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, [lastScrollY, ticking]);

   return isVisible;
};
