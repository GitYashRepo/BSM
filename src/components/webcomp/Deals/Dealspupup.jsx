"use client";

import { useEffect, useState } from "react";

export default function DealsPopup() {
   const [show, setShow] = useState(false);

   function isPageReload() {
      if (typeof performance !== "undefined") {
         const nav = performance.getEntriesByType("navigation")[0];
         return nav?.type === "reload";
      }
      return false;
   }

   useEffect(() => {
      const hasSeen = sessionStorage.getItem("popupShown");
      if (hasSeen) return;

      if (isPageReload()) return;

      if (
         document.referrer &&
         document.referrer.includes(window.location.hostname)
      ) {
         return;
      }

      // Delay popup by 5 seconds
      const timer = setTimeout(() => {
         setShow(true);
         sessionStorage.setItem("popupShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
   }, []);

   if (!show) return null;

   return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
         <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center">
            <h2 className="text-xl font-bold mb-3">🔥 Special Deals Today!</h2>
            <p className="mb-4">Don't miss out on exclusive offers!</p>

            <button
               onClick={() => setShow(false)}
               className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
               Close
            </button>
         </div>
      </div>
   );
}
