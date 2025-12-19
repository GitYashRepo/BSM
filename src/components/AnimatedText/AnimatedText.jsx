"use client"

import { ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import clsx from "clsx"

export default function AnimatedText({
   as = "p",
   children,
   animation = "fade",
   className,
   delay = 0,
   stagger = 0.05,
   amount = 0.3,
}) {
   const ref = useRef(null)
   const isInView = useInView(ref, { amount, once: false })

   const MotionTag = motion[as]

   /* ===============================
      SIMPLE ANIMATIONS
   =============================== */

   const baseVariants = {
      "fade": {
         hidden: { opacity: 0 },
         visible: { opacity: 1 },
      },
      "slide-up": {
         hidden: { opacity: 0, y: 80 },
         visible: { opacity: 1, y: 0 },
      },
      "slide-left": {
         hidden: { opacity: 0, x: -80 },
         visible: { opacity: 1, x: 0 },
      },
      "scale": {
         hidden: { opacity: 0, scale: 0.6 },
         visible: { opacity: 1, scale: 1 },
      },
   }

   /* ===============================
      WORD / CHAR ANIMATIONS
   =============================== */

   if (animation === "word" || animation === "char") {
      const items =
         animation === "word" ? children.split(" ") : children.split("")

      return (
         <MotionTag
            ref={ref}
            className={clsx(className)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
               visible: {
                  transition: {
                     staggerChildren: stagger,
                     delayChildren: delay,
                  },
               },
            }}
         >
            {items.map((item, index) => (
               <motion.span
                  key={index}
                  className="inline-block mr-2"
                  variants={{
                     hidden: { opacity: 0, y: 40, scale: 0.9 },
                     visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                           duration: 0.6,
                           ease: [0.43, 0.13, 0.23, 0.96],
                        },
                     },
                  }}
               >
                  {item}
               </motion.span>
            ))}
         </MotionTag>
      )
   }

   /* ===============================
      DEFAULT ANIMATION
   =============================== */

   return (
      <MotionTag
         ref={ref}
         className={clsx(className)}
         initial="hidden"
         animate={isInView ? "visible" : "hidden"}
         variants={baseVariants[animation]}
         transition={{
            duration: 1,
            delay,
            ease: "easeOut",
         }}
      >
         {children}
      </MotionTag>
   )
}
