"use client"

import { useEffect, useRef } from "react"
import { HeroSection } from "@/components/aboutpage/hero-section"
import { OwnerSection } from "@/components/aboutpage/owner-section"
import { SalonStory } from "@/components/aboutpage/salon-story"
import { Philosophy } from "@/components/aboutpage/philosophy"
import { Testimonials } from "@/components/aboutpage/testimonials"
import { CallToAction } from "@/components/aboutpage/call-to-action"

export default function AboutPage() {
   const pageRef = useRef(null)

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

   return (
      <div ref={pageRef} className="min-h-screen bg-background">
         <HeroSection />
         <OwnerSection />
         <SalonStory />
         <Philosophy />
         {/* <ServicesGrid /> */}
         <Testimonials />
         <CallToAction />
      </div>
   )
}
