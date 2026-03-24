"use client"

import { useEffect, useRef, useState } from "react"
import { GalleryHero } from "@/components/gallerypage/gallery-hero"
import { GalleryGrid } from "@/components/gallerypage/gallery-grid"
import { GalleryModal } from "@/components/gallerypage/gallery-modal"

export default function GalleryPage() {
   const pageRef = useRef(null)
   const [selectedImage, setSelectedImage] = useState(null)
   const [images, setImages] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      async function fetchGallery() {
         try {
            const res = await fetch("/api/gallery/image")
            const data = await res.json()
            setImages(data)
         } catch (error) {
            console.error("Failed to fetch gallery images:", error)
         } finally {
            setLoading(false)
         }
      }
      fetchGallery()
   }, [])

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("animate-in")
               }
            })
         },
         { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
      )

      const elements = pageRef.current?.querySelectorAll(".fade-in-section")
      elements?.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
   }, [])

   const handleNext = () => {
      if (selectedImage !== null) {
         setSelectedImage((selectedImage + 1) % images.length)
      }
   }

   const handlePrev = () => {
      if (selectedImage !== null) {
         setSelectedImage((selectedImage - 1 + images.length) % images.length)
      }
   }

   const handleClose = () => {
      setSelectedImage(null)
   }

   return (
      <div ref={pageRef} className="min-h-screen bg-background">
         <GalleryHero />
         <GalleryGrid images={images} onImageClick={setSelectedImage} />

         {selectedImage !== null && (
            <GalleryModal
               image={images[selectedImage]}
               onClose={handleClose}
               onNext={handleNext}
               onPrev={handlePrev}
               currentIndex={selectedImage}
               totalImages={images.length}
            />
         )}
      </div>
   )
}
