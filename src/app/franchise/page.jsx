"use client"

import { useEffect, useRef } from "react"
import { FranchiseHero } from "@/components/franchisepage/franchise-hero"
import { WhyPartner } from "@/components/franchisepage/why-partner"
import { InvestmentDetails } from "@/components/franchisepage/investment-details"
import { SupportTraining } from "@/components/franchisepage/support-training"
import { SuccessStories } from "@/components/franchisepage/success-stories"
import { ApplyNow } from "@/components/franchisepage/apply-now"

export default function FranchisePage() {
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
         <FranchiseHero />
         <WhyPartner />
         <InvestmentDetails />
         <SupportTraining />
         <SuccessStories />
         <ApplyNow />
      </div>
   )
}
