import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

export default function Book() {
   const flipSoundRef = useRef(null);

   const worksData = [
      // THREAD WORK
      { id: "TW-01", category: "Thread Work", name: "Threading", price: 50 },
      { id: "TW-02", category: "Thread Work", name: "Upperlips thread", price: 30 },
      { id: "TW-03", category: "Thread Work", name: "Forhead thread", price: 30 },
      { id: "TW-04", category: "Thread Work", name: "Chin thread", price: 30 },
      { id: "TW-05", category: "Thread Work", name: "Face thread", price: 200 },
      { id: "TW-06", category: "Thread Work", name: "Chin wax", price: 50 },
      { id: "TW-07", category: "Thread Work", name: "Nose wax", price: 50 },
      { id: "TW-08", category: "Thread Work", name: "Side lock wax", price: 80 },
      { id: "TW-09", category: "Thread Work", name: "Forhead brazilian wax", price: 80 },
      { id: "TW-10", category: "Thread Work", name: "Upperlips brazilian wax", price: 80 },
      { id: "TW-11", category: "Thread Work", name: "Full face wax", price: 280 },

      // CLEAN UP / FACIALS
      { id: "CF-01", category: "Clean Up / Facials", name: "Face Dtan", price: 350 },
      { id: "CF-02", category: "Clean Up / Facials", name: "Face bleach", price: 350 },
      { id: "CF-03", category: "Clean Up / Facials", name: "Cleanup", price: 800 },
      { id: "CF-04", category: "Clean Up / Facials", name: "Cleanup o3", price: 900 },
      { id: "CF-05", category: "Clean Up / Facials", name: "Facial Kanpeki", price: 1300 },
      { id: "CF-06", category: "Clean Up / Facials", name: "Facial o3", price: 1500 },
      { id: "CF-07", category: "Clean Up / Facials", name: "O3 bridal facial", price: 3000 },
      { id: "CF-08", category: "Clean Up / Facials", name: "Dermasyl / Papaya facial", price: 3000 },
      { id: "CF-09", category: "Clean Up / Facials", name: "O3 shine facial", price: 2000 },
      { id: "CF-10", category: "Clean Up / Facials", name: "Casmara facial", price: 3500 },
      { id: "CF-11", category: "Clean Up / Facials", name: "Casmara Gold", price: 4000 },

      // WAX SERVICES (NORMAL)
      { id: "WX-01", category: "Wax Service", name: "Normal Underarms", price: 70 },
      { id: "WX-02", category: "Wax Service", name: "Normal Half legs", price: 250 },
      { id: "WX-03", category: "Wax Service", name: "Normal Arms wax", price: 300 },
      { id: "WX-04", category: "Wax Service", name: "Normal front wax", price: 200 },
      { id: "WX-05", category: "Wax Service", name: "Normal back wax", price: 200 },
      { id: "WX-06", category: "Wax Service", name: "Normal full legs", price: 500 },
      { id: "WX-07", category: "Wax Service", name: "Normal full body wax", price: 1500 },
      { id: "WX-08", category: "Wax Service", name: "Normal bikini wax", price: 1000 },

      // FOOT CARE
      { id: "FC-01", category: "Foot Care", name: "Normal nail paint", price: 80 },
      { id: "FC-02", category: "Foot Care", name: "Foot Massage", price: 300 },
      { id: "FC-03", category: "Foot Care", name: "Hand Massage", price: 300 },
      { id: "FC-04", category: "Foot Care", name: "Foot Nail clean / Massage", price: 450 },
      { id: "FC-05", category: "Foot Care", name: "Pedicures", price: 200 },
      { id: "FC-06", category: "Foot Care", name: "Pedicure Equisite Spa", price: 1000 },
      { id: "FC-07", category: "Foot Care", name: "Pedicure Pedilogix", price: 1100 },
      { id: "FC-08", category: "Foot Care", name: "Pedicure Alga", price: 2000 },

      // HAIR CUTS & DRYER
      { id: "HC-01", category: "Hair Cuts & Dryer", name: "Hair wash with dryer", price: 300 },
      { id: "HC-02", category: "Hair Cuts & Dryer", name: "Hair wash with blow dryer", price: 400 },
      { id: "HC-03", category: "Hair Cuts & Dryer", name: "Hair trimming", price: 250 },
      { id: "HC-04", category: "Hair Cuts & Dryer", name: "Hair dryer only", price: 250 },
      { id: "HC-05", category: "Hair Cuts & Dryer", name: "Hair massage", price: 300 },
      { id: "HC-06", category: "Hair Cuts & Dryer", name: "Hair cut for kids", price: 300 },
      { id: "HC-07", category: "Hair Cuts & Dryer", name: "Hair cut with wash", price: 500 },
      { id: "HC-08", category: "Hair Cuts & Dryer", name: "Hair fillik only", price: 100 }
   ];


   const typeStyles = {
      electric: "bg-yellow-400",
      fire: "bg-red-500",
      flying: "bg-sky-500",
      water: "bg-blue-600",
      dark: "bg-slate-700",
      fighting: "bg-orange-600",
      steel: "bg-gray-500",
      rock: "bg-yellow-800"
   };

   const playFlipSound = () => {
      if (!flipSoundRef.current) {
         flipSoundRef.current = new Audio("/audios/page-flip.mp3");
      }

      flipSoundRef.current.currentTime = 0;
      flipSoundRef.current.play().catch(() => { });
   };

   return (
      <HTMLFlipBook
         width={600}
         height={500}
         maxShadowOpacity={0.5}
         drawShadow
         showCover
         size="fixed"
         onFlip={playFlipSound}
      >
         {/* Cover Page */}
         <div className="rounded-md shadow-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center h-full w-full p-6">
               <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
                  alt="Pokémon Logo"
                  className="w-4/5 max-w-xs drop-shadow-md"
               />
            </div>
         </div>

         {/* Pokémon Pages */}
         {worksData.map((work) => (
            <div
               key={work.id}
               className="rounded-md shadow-lg bg-gradient-to-br from-white to-gray-100"
            >
               <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                     {work.name}
                  </h2>

                  <span className="px-4 py-1 mb-3 rounded-full text-sm font-medium text-white bg-slate-700">
                     {work.category}
                  </span>

                  <p className="text-3xl font-bold text-green-600 mt-4">
                     ₹ {work.price}
                  </p>
               </div>
            </div>
         ))}
      </HTMLFlipBook>
   );
}
