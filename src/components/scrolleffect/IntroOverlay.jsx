'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const WORDS = [
   'DESIGN',
   'MOTION',
   'INNOVATION',
   'EXPERIENCE',
   'FUTURE',
   'CRAFT',
]

export default function IntroOverlay({ onFinish }) {
   const rootRef = useRef(null)
   const rowsRef = useRef([])
   const logoRef = useRef(null)
   const finishedRef = useRef(false)

   useEffect(() => {
      const tl = gsap.timeline({
         defaults: { ease: 'none' },
         onComplete: () => {
            if (finishedRef.current) return
            finishedRef.current = true
            onFinish()
         },
      })

      /* ---------- INITIAL ---------- */
      gsap.set(rowsRef.current, { xPercent: -50 })
      gsap.set(logoRef.current, { opacity: 0, scale: 0.6 })

      /* ---------- TEXT CAROUSEL (≈10s) ---------- */
      rowsRef.current.forEach((row, i) => {
         tl.to(
            row,
            {
               xPercent: i % 2 === 0 ? 50 : -50,
               duration: 10,
            },
            0
         )
      })

      /* ---------- SLOW DOWN ---------- */
      tl.to(rowsRef.current, {
         opacity: 0,
         duration: 2,
      })

      /* ---------- LOGO IN ---------- */
      tl.to(
         logoRef.current,
         {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: 'power3.out',
         },
         '-=1'
      )

      /* ---------- HOLD ---------- */
      tl.to({}, { duration: 2 })

      /* ---------- LOGO OUT ---------- */
      tl.to(logoRef.current, {
         opacity: 0,
         scale: 1.2,
         duration: 2,
         ease: 'power3.in',
      })

      /* ---------- FADE OVERLAY ---------- */
      tl.to(rootRef.current, {
         opacity: 0,
         duration: 1,
      })

      return () => {
         finishedRef.current = true
         tl.kill()
      }
   }, [onFinish])

   return (
      <div
         ref={rootRef}
         className="fixed inset-0 z-[9999] bg-black text-white overflow-hidden flex items-center justify-center"
      >
         {/* TEXT CAROUSEL */}
         <div className="absolute inset-0 flex flex-col justify-center gap-8">
            {[0, 1, 2].map((row, i) => (
               <div
                  key={i}
                  ref={(el) => (rowsRef.current[i] = el)}
                  className="whitespace-nowrap text-6xl md:text-8xl font-bold opacity-30"
               >
                  {WORDS.map((w, j) => (
                     <span key={j} className="mx-8">
                        {w}
                     </span>
                  ))}
               </div>
            ))}
         </div>

         {/* LOGO */}
         <div
            ref={logoRef}
            className="absolute text-5xl md:text-7xl font-extrabold tracking-widest"
         >
            BSM
         </div>
      </div>
   )
}
