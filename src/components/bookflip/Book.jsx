import React, { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

export default function Book() {
   const pageRefs = useRef({});
   const flipSoundRef = useRef(null);
   const [scrollPercent, setScrollPercent] = React.useState({});
   const [bookSize, setBookSize] = React.useState({
      width: 600,
      height: 500,
   });


   useEffect(() => {
      const handleResize = () => {
         const screenWidth = window.innerWidth;

         if (screenWidth < 480) {
            // Mobile
            setBookSize({
               width: Math.min(screenWidth * 0.95, 360),
               height: 420,
            });
         } else if (screenWidth < 768) {
            // Tablet
            setBookSize({
               width: Math.min(screenWidth * 0.9, 480),
               height: 460,
            });
         } else {
            // Desktop
            setBookSize({
               width: 600,
               height: 500,
            });
         }
      };

      handleResize(); // initial
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);


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

   const groupedWorks = worksData.reduce((acc, work) => {
      if (!acc[work.category]) acc[work.category] = [];
      acc[work.category].push(work);
      return acc;
   }, {});


   useEffect(() => {
      flipSoundRef.current = new Audio("/audios/page-flip.mp3");
      flipSoundRef.current.preload = "auto";
   }, []);

   const playFlipSound = () => {
      if (!flipSoundRef.current) return;
      flipSoundRef.current.currentTime = 0;
      flipSoundRef.current.play().catch(() => { });
   };

   return (
      <div
         onMouseDown={playFlipSound}
         onTouchStart={playFlipSound}
         className="w-full justify-items-end"
      >
         <HTMLFlipBook
            width={bookSize.width}
            height={bookSize.height}
            maxShadowOpacity={0.5}
            drawShadow
            showCover
            useMouseEvents={true}
            size="fixed"
            className="mx-auto"
         // onFlip={playFlipSound}
         // onTouchStart={playFlipSound}
         >
            <div className="w-full h-full bg-amber-200 text-foreground overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl opacity-20"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-10"></div>
               </div>
               <div className="relative w-full h-full bg-amber-200 overflow-hidden flex flex-col items-center justify-center px-6 py-8">

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                  <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 w-full h-full">

                     <div className="relative mb-2">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl scale-125"></div>
                        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 border-2 border-primary/30 flex items-center justify-center overflow-hidden shadow-lg">
                           <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                              <img src="/logo/logo.jpg" alt="BLUSH Logo" />
                           </div>
                        </div>
                     </div>

                     <div className="space-y-1">
                        <h1 className="text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
                           BLUSH
                        </h1>

                        <div className="flex items-center justify-center gap-2">
                           <div className="w-8 h-px bg-primary/40"></div>
                           <div className="w-1 h-1 rounded-full bg-primary/60"></div>
                           <div className="w-8 h-px bg-primary/40"></div>
                        </div>
                     </div>

                     <div className="space-y-1 max-w-xs">
                        <h2 className="text-sm font-medium text-foreground/80 uppercase tracking-widest">
                           by Sakshi Makeover
                        </h2>
                        <p className="text-[10px] sm:text-xs md:text-sm text-foreground/60">
                           Professional Beauty Services
                        </p>

                     </div>

                     <p className="text-sm text-foreground/60 font-light tracking-wider max-w-xs leading-relaxed">
                        Price Book
                     </p>

                     <div className="flex justify-center gap-4 mt-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                     </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                  <div className="absolute top-6 right-6 w-8 h-8 border border-primary/20 rounded-full"></div>
                  <div className="absolute bottom-6 left-6 w-10 h-10 border border-primary/10 rounded-full"></div>
               </div>
            </div>

            {Object.entries(groupedWorks).map(([category, items]) => (
               <div
                  key={category}
                  className="relative w-full h-full rounded-md shadow-lg bg-gradient-to-br from-white to-gray-100"
               >

                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">

                     <button
                        className="px-3 py-2 bg-slate-700 text-white text-sm font-medium hover:bg-slate-800"
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onClick={(e) => {
                           e.stopPropagation();
                           pageRefs.current[category]?.scrollBy({
                              top: -150,
                              behavior: "smooth",
                           });
                        }}
                     >
                        ▲
                     </button>

                     <button
                        className="px-3 py-2 bg-slate-700 text-white text-sm font-medium hover:bg-slate-800"
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onClick={(e) => {
                           e.stopPropagation();
                           pageRefs.current[category]?.scrollBy({
                              top: 150,
                              behavior: "smooth",
                           });
                        }}
                     >
                        ▼
                     </button>
                  </div>

                  <div
                     ref={(el) => (pageRefs.current[category] = el)}
                     className="h-full overflow-y-auto custom-scrollbar p-6 pr-14"
                  >
                     <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
                        {category}
                     </h2>


                     <div className="flex justify-between font-semibold text-slate-700 pb-2 border-b">
                        <span>Work</span>
                        <span>Price</span>
                     </div>

                     <div className="mt-2 space-y-2">
                        {items.map((item) => (
                           <div
                              key={item.id}
                              className="flex justify-between py-1 border-b last:border-b-0"
                           >
                              <span className="text-xs sm:text-sm md:text-base">
                                 {item.name}
                              </span>

                              <span className="text-xs sm:text-sm md:text-base font-medium text-green-600">
                                 ₹ {item.price}
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            ))}

            <div className="w-full h-full bg-amber-200 text-foreground overflow-hidden flex items-center justify-center">

               <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-10"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl opacity-20"></div>
               </div>

               <div className="relative w-full h-full bg-amber-200 overflow-hidden flex flex-col items-center justify-center px-8 py-10">

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                  <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-sm">

                     <div className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                     </div>

                     <h2 className="text-2xl font-serif font-semibold tracking-wide text-foreground">
                        The End
                     </h2>

                     <p className="text-sm text-foreground/60 leading-relaxed tracking-wide">
                        Hope you have found the perfect beauty service for you.
                        <br />
                        Stay beautiful!
                     </p>

                     <div className="flex items-center justify-center gap-2">
                        <div className="w-6 h-px bg-primary/30"></div>
                        <div className="w-1 h-1 rounded-full bg-primary/50"></div>
                        <div className="w-6 h-px bg-primary/30"></div>
                     </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                  <div className="absolute top-6 left-6 w-10 h-10 border border-primary/10 rounded-full"></div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 border border-primary/20 rounded-full"></div>
               </div>
            </div>

            <div className="w-full h-full bg-amber-200 text-foreground overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-10"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl opacity-20"></div>
               </div>

               <div className="relative w-full h-full bg-amber-200 overflow-hidden flex flex-col items-center justify-center px-8 py-10">

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                  <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-sm">

                     <div className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                     </div>

                     <h2 className="text-2xl font-serif font-semibold tracking-wide text-foreground">
                        Thank You
                     </h2>

                     <p className="text-sm text-foreground/60 leading-relaxed tracking-wide">
                        We appreciate your trust in our services.
                        <br />
                        Your beauty is our passion.
                     </p>

                     <div className="flex items-center justify-center gap-2">
                        <div className="w-6 h-px bg-primary/30"></div>
                        <div className="w-1 h-1 rounded-full bg-primary/50"></div>
                        <div className="w-6 h-px bg-primary/30"></div>
                     </div>

                     <div className="space-y-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
                           BLUSH
                        </h1>
                        <p className="text-xs uppercase tracking-widest text-foreground/50">
                           by Sakshi Makeover
                        </p>
                     </div>

                     <p className="text-xs text-foreground/40 tracking-wider">
                        Crafted with care
                     </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                  <div className="absolute top-6 left-6 w-10 h-10 border border-primary/10 rounded-full"></div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 border border-primary/20 rounded-full"></div>
               </div>
            </div>
         </HTMLFlipBook>
      </div>
   );
}
