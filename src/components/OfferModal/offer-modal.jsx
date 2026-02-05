"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function OfferModal() {
   const [open, setOpen] = useState(false)
   const [showButton, setShowButton] = useState(false)

   // Show modal after 4 seconds (only once per session)
   useEffect(() => {
      const isClosed = sessionStorage.getItem("offerClosed")

      if (!isClosed) {
         const timer = setTimeout(() => {
            setOpen(true)
         }, 4000)

         return () => clearTimeout(timer)
      } else {
         setShowButton(true)
      }
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
            <div className="space-y-2 px-4 py-4 text-sm">
               <p>🔥 Get <strong>30% OFF</strong> on your first purchase</p>
               <p>⏰ Limited time deal</p>
            </div>
         </div>
      </>
   )
}
