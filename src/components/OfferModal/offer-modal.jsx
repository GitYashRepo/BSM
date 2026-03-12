"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function OfferModal() {
   const [open, setOpen] = useState(false)
   const [showButton, setShowButton] = useState(false)
   const [offers, setOffers] = useState([])

   // Show modal after 4 seconds (only once per session, if offers exist)
   useEffect(() => {
      async function fetchOffers() {
         try {
            const res = await fetch("/api/offer");
            const data = await res.json();
            // Filter only active offers if needed (though API can also be updated to only return active)
            const activeOffers = data.filter(o => o.isActive !== false);
            setOffers(activeOffers);

            if (activeOffers.length > 0) {
               const isClosed = sessionStorage.getItem("offerClosed")

               if (!isClosed) {
                  setTimeout(() => {
                     setOpen(true)
                  }, 4000)
               } else {
                  setShowButton(true)
               }
            }
         } catch (error) {
            console.error("Failed to fetch offers", error);
         }
      }
      fetchOffers();
   }, [])

   const closeModal = () => {
      setOpen(false)
      setShowButton(true)
      sessionStorage.setItem("offerClosed", "true")
   }

   const openModal = () => {
      setOpen(true)
      setShowButton(false)
   }

   return (
      <>
         {/* Sticky Offer Button (ONLY after modal is closed) */}
         {showButton && !open && (
            <Button
               onClick={openModal}
               className="fixed bottom-20 -left-7 z-[999] h-10 px-2 rotate-90 bg-[#300708] border border-white text-lg text-white shadow-lg hover:bg-[#300708]/98 hover:cursor-pointer"
            >
               Offers 🔥
            </Button>
         )}

         {/* Offer Modal */}
         <div
            className={`fixed left-2 z-[9999] w-[280px] md:w-[500px] h-auto rounded-xl bg-[#300708] text-white shadow-2xl transition-transform duration-500 ${open ? "bottom-2 translate-y-0 border border-white" : "-bottom-full translate-y-full"
               }`}
         >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/20 px-4 py-3">
               <span className="font-semibold">Special Offers 🎉</span>
               <button onClick={closeModal} className="hover:cursor-pointer">
                  <X className="h-5 w-5 text-white" />
               </button>
            </div>

            {/* Body */}
            <div className="space-y-4 px-4 py-4 text-sm max-h-[60vh] overflow-y-scroll custom-scrollbar">
               {offers.length === 0 ? (
                  <p>Check back later for exciting offers!</p>
               ) : (
                  offers.map((offer) => (
                     <div key={offer._id} className="bg-white/10 p-4 rounded-lg border border-white/20">
                        {/* Only render header if heading or type exists */}
                        {(offer.heading || offer.type) && (
                           <div className="flex justify-between items-start mb-2">
                              {offer.heading && <h3 className="font-bold text-lg text-amber-300 m-0 leading-tight">{offer.heading}</h3>}
                              {offer.type && (
                                 <span className="text-[10px] uppercase tracking-wider bg-white/20 px-2 py-1 rounded">
                                    {offer.type}
                                 </span>
                              )}
                           </div>
                        )}

                        {offer.description && (
                           <p className="text-gray-300 text-xs mb-3">{offer.description}</p>
                        )}

                        {/* Only render price block if any price exists */}
                        {(offer.discountedPrice || offer.regularPrice) && (
                           <div className="flex items-center gap-2 mt-2">
                              {offer.discountedPrice && <span className="font-bold text-xl text-green-400 leading-none">₹{offer.discountedPrice}</span>}
                              {offer.regularPrice && <span className="text-gray-400 line-through text-xs leading-none">₹{offer.regularPrice}</span>}
                           </div>
                        )}
                     </div>
                  ))
               )}
            </div>
         </div>
      </>
   )
}
