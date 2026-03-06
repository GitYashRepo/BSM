"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HeroAboutBSM } from "@/components/bsm/hero-about-bsm"
import { StoryAboutBSM } from "@/components/bsm/story-about-bsm"
import { TeamAboutBSM } from "@/components/bsm/team-about-bsm"
import { SalonShowcaseBSM } from "@/components/bsm/salon-showcase-bsm"
import { ValueAboutBSM } from "@/components/bsm/value-about-bsm"
import { CTAAboutBSM } from "@/components/bsm/cta-about-bsm"

gsap.registerPlugin(ScrollTrigger)

export default function AboutBSMPage() {
   const pageRef = useRef(null)

   useEffect(() => {
      const ctx = gsap.context(() => {
         // Section animations
         const sections = gsap.utils.toArray(".bsm-section")
         sections.forEach((section, index) => {
            gsap.from(section, {
               scrollTrigger: {
                  trigger: section,
                  start: "top 90%",
               },
               opacity: 0,
               y: 80,
               duration: 1,
               // delay: index * 0.1,
            })
         })

         // Text line animations with stagger
         const textLines = gsap.utils.toArray(".bsm-text-line")
         textLines.forEach((line, index) => {
            gsap.from(line, {
               scrollTrigger: {
                  trigger: line,
                  start: "top 90%",
               },
               opacity: 0,
               x: -40,
               duration: 0.8,
               // delay: index * 0.08,
            })
         })

         // Gallery image animations
         const galleryImages = gsap.utils.toArray(".bsm-gallery-image")
         galleryImages.forEach((image, index) => {
            gsap.from(image, {
               scrollTrigger: {
                  trigger: image,
                  start: "top 90%",
               },
               opacity: 0,
               scale: 0.85,
               rotation: Math.random() * 5 - 2.5,
               duration: 0.9,
               // delay: index * 0.12,
            })
         })

         // Parallax for header elements
         const parallaxElements = gsap.utils.toArray(".bsm-parallax")
         parallaxElements.forEach((element) => {
            gsap.to(element, {
               scrollTrigger: {
                  trigger: element,
                  scrub: 1.5,
               },
               y: -50,
            })
         })

         // Counter animations
         const counters = gsap.utils.toArray(".bsm-counter");

         counters.forEach((el) => {
            const finalValue = parseInt(el.getAttribute("data-value"), 10);

            // Force initial value
            gsap.set(el, { textContent: 0 });

            const counter = { value: 0 };

            gsap.to(counter, {
               value: finalValue,
               duration: 2.5,
               ease: "power1.out",
               scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
               },
               onUpdate: () => {
                  el.textContent = Math.ceil(counter.value);
               },
            });
         });

      }, pageRef)

      return () => ctx.revert()
   }, [])

   return (
      <main ref={pageRef} className="bg-white overflow-hidden">
         <HeroAboutBSM />
         <StoryAboutBSM />
         <TeamAboutBSM />
         <SalonShowcaseBSM />
         <ValueAboutBSM />
         <CTAAboutBSM />
      </main>
   )
}
