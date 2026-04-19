"use client";

import { useState, useEffect } from "react";

export const useScrollHide = () => {
   const [isVisible, setIsVisible] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [ticking, setTicking] = useState(false);

   useEffect(() => {
      let lastScrollYVal = 0;
      let tickingVal = false;

      const updateScroll = () => {
         const currentScrollY = window.scrollY;

         if (currentScrollY > lastScrollYVal && currentScrollY > 50) {
            setIsVisible(false);
         } else if (currentScrollY < lastScrollYVal) {
            setIsVisible(true);
         }

         lastScrollYVal = currentScrollY;
         tickingVal = false;
      };

      const handleScroll = () => {
         if (!tickingVal) {
            window.requestAnimationFrame(updateScroll);
            tickingVal = true;
         }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return isVisible;
};
