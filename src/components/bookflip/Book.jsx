import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

export default function Book() {
   const pageRefs = useRef({});
   const flipSoundRef = useRef(null);
   const bookRef = useRef(null);
   const [currentPage, setCurrentPage] = useState(0);
   const [totalPages, setTotalPages] = useState(0);
   const [bookSize, setBookSize] = useState({
      width: 400,
      height: 500,
   });
   const [groupedWorks, setGroupedWorks] = useState([]);
   const [allWorks, setAllWorks] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const handleResize = () => {
         const screenWidth = window.innerWidth;
         if (screenWidth < 480) {
            setBookSize({
               width: Math.min(screenWidth * 0.95, 360),
               height: 420,
            });
         } else if (screenWidth < 768) {
            setBookSize({
               width: Math.min(screenWidth * 0.9, 480),
               height: 460,
            });
         } else {
            setBookSize({
               width: 600,
               height: 500,
            });
         }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   useEffect(() => {
      async function fetchData() {
         try {
            const res = await fetch("/api/services");
            const data = await res.json();

            const groupedMap = new Map();
            data.forEach((service) => {
               const catName = service.category?.name || "Uncategorized";
               const order = service.category?.order ?? 9999;
               if (!groupedMap.has(catName)) {
                  groupedMap.set(catName, { category: catName, items: [], order });
               }
               groupedMap.get(catName).items.push(service);
            });

            const sortedGrouped = Array.from(groupedMap.values()).sort((a, b) => a.order - b.order);
            setGroupedWorks(sortedGrouped);
            setAllWorks(data);
         } catch (error) {
            console.error("Error fetching services:", error);
         } finally {
            setLoading(false);
         }
      }
      fetchData();
   }, []);

   useEffect(() => {
      flipSoundRef.current = new Audio("/audios/page-flip.mp3");
      flipSoundRef.current.preload = "auto";
   }, []);

   const playFlipSound = () => {
      if (!flipSoundRef.current) return;
      flipSoundRef.current.currentTime = 0;
      flipSoundRef.current.play().catch(() => { });
   };

   if (loading) {
      return (
         <div className="flex items-center justify-center p-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
         </div>
      );
   }

   const flipNext = () => {
      playFlipSound();
      bookRef.current?.pageFlip().flipNext();
   };

   const flipPrev = () => {
      playFlipSound();
      bookRef.current?.pageFlip().flipPrev();
   };

   return (
      <div className="w-full flex flex-col items-center gap-4">
         <div
            onMouseDown={playFlipSound}
            onTouchStart={playFlipSound}
            className="relative w-full justify-items-end"
         >
            <HTMLFlipBook
               ref={bookRef}
               width={bookSize.width}
               height={bookSize.height}
               maxShadowOpacity={0.5}
               drawShadow
               showCover
               useMouseEvents={true}
               size="fixed"
               className="mx-auto"
               onFlip={(e) => setCurrentPage(e.data)}
               onInit={(e) => setTotalPages(e.object.getPageCount())}
            >
               {/* Front Cover */}
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
                           <h1 className="text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">BLUSH</h1>
                           <div className="flex items-center justify-center gap-2">
                              <div className="w-8 h-px bg-primary/40"></div>
                              <div className="w-1 h-1 rounded-full bg-primary/60"></div>
                              <div className="w-8 h-px bg-primary/40"></div>
                           </div>
                        </div>
                        <div className="space-y-1 max-w-xs">
                           <h2 className="text-sm font-medium text-foreground/80 uppercase tracking-widest">by Sakshi Makeover</h2>
                           <p className="text-[10px] sm:text-xs md:text-sm text-foreground/60">Professional Beauty Services</p>
                        </div>
                        <p className="text-sm text-foreground/60 font-light tracking-wider max-w-xs leading-relaxed">Price Book</p>
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  </div>
               </div>

               {/* Content Pages */}
               {groupedWorks.map(({ category, items }) => (
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
                              pageRefs.current[category]?.scrollBy({ top: -150, behavior: "smooth" });
                           }}
                        >▲</button>
                        <button
                           className="px-3 py-2 bg-slate-700 text-white text-sm font-medium hover:bg-slate-800"
                           onMouseDown={(e) => e.stopPropagation()}
                           onTouchStart={(e) => e.stopPropagation()}
                           onClick={(e) => {
                              e.stopPropagation();
                              pageRefs.current[category]?.scrollBy({ top: 150, behavior: "smooth" });
                           }}
                        >▼</button>
                     </div>

                     <div
                        ref={(el) => (pageRefs.current[category] = el)}
                        className="h-full overflow-y-auto custom-scrollbar p-6 pr-14"
                     >
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4">{category}</h2>
                        <div className="flex justify-between font-semibold text-slate-700 pb-2 border-b text-sm">
                           <span>Work</span>
                           <span>Price</span>
                        </div>
                        <div className="mt-2 space-y-2">
                           {items.map((item) => (
                              <div key={item._id} className="flex justify-between py-2 border-b last:border-b-0">
                                 <div className="flex flex-col">
                                    <span className="text-xs sm:text-sm font-medium">{item.workName}</span>
                                 </div>
                                 <div className="flex flex-col items-end">
                                    {item.offerPrice ? (
                                       <>
                                          <span className="text-xs sm:text-sm font-medium text-green-600">₹{item.offerPrice}</span>
                                          <span className="text-[10px] text-gray-400 line-through">₹{item.price}</span>
                                       </>
                                    ) : (
                                       <span className="text-xs sm:text-sm font-medium text-slate-700">₹{item.price}</span>
                                    )}
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}

               {/* End Pages */}
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
                        <h2 className="text-2xl font-serif font-semibold tracking-wide text-foreground">The End</h2>
                        <p className="text-sm text-foreground/60 leading-relaxed tracking-wide">
                           Hope you have found the perfect beauty service for you. Stay beautiful!
                        </p>
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  </div>
               </div>

               <div className="w-full h-full bg-amber-200 text-foreground overflow-hidden flex items-center justify-center">
                  <div className="relative w-full h-full bg-amber-200 overflow-hidden flex flex-col items-center justify-center px-8 py-10">
                     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                     <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-sm">
                        <h2 className="text-2xl font-serif font-semibold tracking-wide text-foreground">Thank You</h2>
                        <p className="text-sm text-foreground/60 leading-relaxed tracking-wide">We appreciate your trust in our services.</p>
                        <div className="space-y-1">
                           <h1 className="text-3xl sm:text-4xl font-serif font-bold">BLUSH</h1>
                           <p className="text-xs uppercase tracking-widest text-foreground/50">by Sakshi Makeover</p>
                        </div>
                     </div>
                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  </div>
               </div>
            </HTMLFlipBook>

            {/* Prev arrow */}
            <button
               onMouseDown={(e) => e.stopPropagation()}
               onTouchStart={(e) => e.stopPropagation()}
               onClick={(e) => { e.stopPropagation(); flipPrev(); }}
               disabled={currentPage === 0}
               className="absolute bottom-2 left-5 z-20 text-4xl text-green-400 hover:text-green-600 transition-all disabled:opacity-0 disabled:pointer-events-none select-none tracking-tighter"
               style={{ animation: currentPage > 0 ? "slideLeft 1s ease-in-out infinite" : "none" }}
            >‹‹</button>

            {/* Next arrow */}
            <button
               onMouseDown={(e) => e.stopPropagation()}
               onTouchStart={(e) => e.stopPropagation()}
               onClick={(e) => { e.stopPropagation(); flipNext(); }}
               disabled={totalPages > 0 && currentPage >= totalPages - 1}
               className="absolute bottom-2 right-5 z-20 text-4xl text-green-400 hover:text-green-600 transition-all disabled:opacity-0 disabled:pointer-events-none select-none tracking-tighter"
               style={{ animation: "slideRight 1s ease-in-out infinite" }}
            >››</button>

            <style>{`
               @keyframes slideRight {
                  0%, 100% { transform: translateX(0); opacity: 0.5; }
                  50% { transform: translateX(4px); opacity: 1; }
               }
               @keyframes slideLeft {
                  0%, 100% { transform: translateX(0); opacity: 0.5; }
                  50% { transform: translateX(-4px); opacity: 1; }
               }
            `}</style>
         </div>

         {/* Search Filter Section */}
         <div className="w-full max-w-lg mt-8 px-4 flex flex-col items-center">
            <input
               type="text"
               placeholder="Search for a service..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full border-2 border-slate-200 rounded-lg p-3 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400 mb-6 transition-all"
            />

            {searchTerm.trim() !== "" && (
               <div className="w-full bg-white rounded-lg shadow-md border p-4 max-h-80 overflow-y-auto custom-scrollbar">
                  <h3 className="text-lg font-semibold mb-3">Search Results</h3>
                  <div className="space-y-3">
                     {allWorks
                        .filter(item =>
                           item.workName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category?.name?.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((item) => (
                           <div key={item._id} className="flex flex-col sm:flex-row justify-between border-b pb-2 last:border-b-0 last:pb-0">
                              <div className="flex flex-col">
                                 <span className="text-sm font-medium">{item.workName}</span>
                                 <span className="text-[10px] text-gray-500">{item.category?.name || "Uncategorized"}</span>
                              </div>
                              <div className="flex flex-col items-start sm:items-end mt-1 sm:mt-0">
                                 {item.offerPrice ? (
                                    <>
                                       <span className="text-sm font-medium text-green-600">₹{item.offerPrice}</span>
                                       <span className="text-xs text-gray-400 line-through">₹{item.price}</span>
                                    </>
                                 ) : (
                                    <span className="text-sm font-medium text-slate-700">₹{item.price}</span>
                                 )}
                              </div>
                           </div>
                        ))}
                     {allWorks.filter(item =>
                        item.workName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.category?.name?.toLowerCase().includes(searchTerm.toLowerCase())
                     ).length === 0 && (
                           <p className="text-sm text-gray-500 text-center py-4">No services found matching "{searchTerm}"</p>
                        )}
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
