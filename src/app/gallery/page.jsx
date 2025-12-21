"use client"

import { useEffect, useRef, useState } from "react"
import { GalleryHero } from "@/components/gallerypage/gallery-hero"
import { GalleryGrid } from "@/components/gallerypage/gallery-grid"
import { GalleryModal } from "@/components/gallerypage/gallery-modal"

export default function GalleryPage() {
   const pageRef = useRef(null)
   const [selectedImage, setSelectedImage] = useState(null)
   const [images] = useState([
      {
         id: 1,
         src: "/luxury-bridal-makeup-beauty-shot.jpg",
         alt: "Bridal Elegance",
         category: "Bridal-MakeUp",
         description: "Classic bridal makeup with soft glam finish",
      },
      {
         id: 2,
         src: "/modern-hair-styling-salon.jpg",
         alt: "Modern Styling",
         category: "Bridal-MakeUp",
         description: "Contemporary hair styling and treatment",
      },
      {
         id: 3,
         src: "/elegant-makeup-artistry-close-up.jpg",
         alt: "Artistry Details",
         category: "Engagement-MakeUp",
         description: "Detailed makeup application artistry",
      },
      {
         id: 4,
         src: "/luxury-spa-beauty-treatment.jpg",
         alt: "Spa Serenity",
         category: "Bridal-MakeUp",
         description: "Relaxing spa and beauty treatments",
      },
      {
         id: 5,
         src: "/glamorous-evening-makeup-look.jpg",
         alt: "Evening Glam",
         category: "Engagement-MakeUp",
         description: "Sophisticated evening makeup look",
      },
      {
         id: 6,
         src: "/professional-salon-interior-design.jpg",
         alt: "Salon Ambiance",
         category: "Party-MakeUp",
         description: "Our luxurious salon interior",
      },
      {
         id: 7,
         src: "/traditional-indian-bridal-jewelry-makeup.jpg",
         alt: "Traditional Bridal",
         category: "Bridal-MakeUp",
         description: "Traditional bridal makeup with jewelry",
      },
      {
         id: 8,
         src: "/creative-makeup-colorful-artistic.jpg",
         alt: "Creative Expression",
         category: "Engagement-MakeUp",
         description: "Bold and creative makeup artistry",
      },
      {
         id: 9,
         src: "/natural-beauty-makeup-skincare.jpg",
         alt: "Natural Beauty",
         category: "Engagement-MakeUp",
         description: "Fresh, natural makeup with skincare focus",
      },
      {
         id: 10,
         src: "/hair-extensions-luxury-salon.jpg",
         alt: "Hair Extensions",
         category: "Party-MakeUp",
         description: "Premium hair extension services",
      },
      {
         id: 11,
         src: "/wedding-party-makeup-group.jpg",
         alt: "Bridal Party",
         category: "Bridal-MakeUp",
         description: "Complete bridal party transformation",
      },
      {
         id: 12,
         src: "/professional-makeup-products-tools.jpg",
         alt: "Professional Tools",
         category: "Party-MakeUp",
         description: "Premium makeup products and tools",
      },
   ])

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
