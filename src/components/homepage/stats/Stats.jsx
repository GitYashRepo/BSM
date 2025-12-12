"use client"

import { useEffect, useRef, useState } from "react"

export function StatsSection() {
   const stats = [
      { number: 15, suffix: "+", label: "Years", subtext: "of Excellence" },
      { number: 25, suffix: "", label: "Expert", subtext: "Artists" },
      { number: 98, suffix: "%", label: "Success", subtext: "Rate" },
      { number: 1200, suffix: "+", label: "Happy", subtext: "Clients" },
   ]

   return (
      <section className="relative bg-neutral-50 overflow-hidden px-10 pt-6">
         <div className="max-w-6xl mx-auto px-4">
            <p className="text-xl tracking-[0.4em] uppercase text-neutral-400 mb-6">
               By the Numbers
            </p>

            <div className="flex flex-row justify-between">
               {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
               ))}
            </div>

            <div className="mt-10">
               <div className="h-px bg-neutral-200" />
            </div>
         </div>
      </section>
   )
}

function StatCard({ stat, index }) {
   const [count, setCount] = useState(0)
   const [hasAnimated, setHasAnimated] = useState(false)
   const ref = useRef(null)

   // Detect visibility of EACH stat card
   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
               setHasAnimated(true)
            }
         },
         { threshold: 0.3 }
      )

      if (ref.current) observer.observe(ref.current)

      return () => observer.disconnect()
   }, [hasAnimated])

   // Run number animation when visible
   useEffect(() => {
      if (!hasAnimated) return

      const duration = 2000
      const steps = 60
      const increment = stat.number / steps
      let current = 0

      const timer = setInterval(() => {
         current += increment

         if (current >= stat.number) {
            setCount(stat.number)
            clearInterval(timer)
         } else {
            setCount(Math.floor(current))
         }
      }, duration / steps)

      return () => clearInterval(timer)
   }, [hasAnimated, stat.number])

   return (
      <div
         ref={ref}
         className="group relative"
         style={{
            opacity: hasAnimated ? 1 : 0,
            transform: hasAnimated ? "translateY(0)" : "translateY(30px)",
            transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
         }}
      >
         <div className="space-y-4">

            {/* Number */}
            <div className="flex items-baseline gap-2">
               <span className="text-4xl md:text-4xl lg:text-6xl font-light tracking-tight text-neutral-900 tabular-nums leading-none">
                  {count.toLocaleString()}
               </span>
               <span className="text-4xl md:text-5xl font-light text-neutral-400 leading-none">
                  {stat.suffix}
               </span>
            </div>

            {/* Label */}
            <div className="space-y-1 transition-all duration-300 group-hover:translate-x-2">
               <h3 className="text-lg md:text-xl font-medium text-neutral-900 tracking-tight">
                  {stat.label}
               </h3>
               <p className="text-sm text-neutral-400 tracking-wide">
                  {stat.subtext}
               </p>
            </div>

            {/* Line */}
            <div className="h-px w-12 bg-neutral-900 transition-all duration-700 group-hover:w-20" />
         </div>
      </div>
   )
}
