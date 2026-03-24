"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/aboutpage/hero-section"
import { OwnerSection } from "@/components/aboutpage/owner-section"
import { SalonStory } from "@/components/aboutpage/salon-story"
import { Philosophy } from "@/components/aboutpage/philosophy"
import { Testimonials } from "@/components/aboutpage/testimonials"
import { CallToAction } from "@/components/aboutpage/call-to-action"

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
   const pageRef = useRef(null)

   useEffect(() => {
      const ctx = gsap.context(() => {
         // Animate sections on scroll
         const sections = gsap.utils.toArray(".scroll-section")
         sections.forEach((section) => {
            gsap.from(section, {
               scrollTrigger: {
                  trigger: section,
                  start: "top 80%",
                  end: "top 20%",
                  scrub: false,
                  markers: false,
               },
               opacity: 0,
               y: 100,
               duration: 1,
            })
         })

         // Animate text lines
         const textLines = gsap.utils.toArray(".text-line")
         textLines.forEach((line, index) => {
            gsap.from(line, {
               scrollTrigger: {
                  trigger: line,
                  start: "top 85%",
               },
               opacity: 0,
               x: -50,
               duration: 0.8,
               // delay: index * 0.01,
            })
         })

         // Animate cards
         const cards = gsap.utils.toArray(".scroll-card")
         cards.forEach((card, index) => {
            gsap.from(card, {
               scrollTrigger: {
                  trigger: card,
                  start: "top 75%",
               },
               opacity: 0,
               scale: 0.8,
               duration: 0.8,
               // delay: index * 0.05,
            })
         })

         // Parallax effect for images
         const parallaxElements = gsap.utils.toArray(".parallax-element")
         parallaxElements.forEach((element) => {
            gsap.to(element, {
               scrollTrigger: {
                  trigger: element,
                  scrub: 1,
               },
               y: -100,
               opacity: 0.8,
            })
         })

         // Number counter animation
         const numbers = gsap.utils.toArray(".counter")

         numbers.forEach((number) => {
            const finalValue = parseInt(number.getAttribute("data-value"), 10);

            // FORCE initial state
            gsap.set(number, { textContent: 0 });

            const counter = { value: 0 };

            gsap.to(counter, {
               value: finalValue,
               duration: 2,
               ease: "power1.out",
               scrollTrigger: {
                  trigger: number,
                  start: "top 80%",
                  once: true, // prevents re-running on scroll up
               },
               onUpdate: () => {
                  number.textContent = Math.ceil(counter.value);
               },
            });
         });
      }, pageRef)

      return () => ctx.revert()
   }, [])

   return (
      <main ref={pageRef} className="bg-white">
         <HeroSection />
         <Philosophy />
         <OwnerSection />
         <SalonStory />
         <Testimonials />
         {/* <CallToAction /> */}
      </main>
   )
}
