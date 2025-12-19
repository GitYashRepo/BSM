"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

export default function Animation() {
   return (
      <main className="bg-background">
         <Hero />
         <FadeInSection />
         <SlideUpSection />
         <StaggerSection />
         <WordRevealSection />
         <CharacterRevealSection />
         <ScaleSection />
         <ParallaxSection />
         <FinalSection />
      </main>
   )
}

function Hero() {
   return (
      <section className="flex min-h-screen items-center justify-center px-6">
         <div className="text-center">
            <motion.h1
               className="mb-6 text-6xl font-bold text-foreground md:text-8xl"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               Scroll Animations
            </motion.h1>
            <motion.p
               className="text-xl text-muted-foreground md:text-2xl"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.3 }}
            >
               Powered by Framer Motion
            </motion.p>
            <motion.div
               className="mt-12"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.6 }}
            >
               <p className="text-sm text-muted-foreground">Scroll down to see the magic</p>
               <motion.div
                  className="mx-auto mt-4 h-6 w-6 rounded-full border-2 border-foreground"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
               />
            </motion.div>
         </div>
      </section>
   )
}

function FadeInSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { amount: 0.3 })

   return (
      <section ref={ref} className="flex min-h-screen items-center justify-center px-6">
         <motion.div
            className="max-w-4xl text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
         >
            <h2 className="mb-6 text-5xl font-bold text-foreground md:text-7xl">Fade In Animation</h2>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
               This section smoothly fades into view as you scroll. The animation triggers when the element enters the
               viewport with a smooth opacity transition.
            </p>
         </motion.div>
      </section>
   )
}

function SlideUpSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { amount: 0.3 })

   return (
      <section ref={ref} className="flex min-h-screen items-center justify-center px-6">
         <div className="max-w-4xl space-y-8">
            <motion.h2
               className="text-5xl font-bold text-foreground md:text-7xl"
               initial={{ opacity: 0, y: 80 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
               transition={{ duration: 1, ease: "easeOut" }}
            >
               Slide Up Animation
            </motion.h2>
            <motion.p
               className="text-lg leading-relaxed text-muted-foreground md:text-xl"
               initial={{ opacity: 0, y: 80 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
               transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
               Elements slide up from below with a smooth easing function. This creates a sense of depth and direction as
               content enters the viewport.
            </motion.p>
         </div>
      </section>
   )
}

function StaggerSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { amount: 0.3 })

   const items = ["First item appears", "Then the second", "Followed by the third", "Creating a cascading effect"]

   return (
      <section ref={ref} className="flex min-h-screen items-center justify-center px-6">
         <div className="max-w-4xl">
            <motion.h2
               className="mb-12 text-5xl font-bold text-foreground md:text-7xl"
               initial={{ opacity: 0, y: 80 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
               transition={{ duration: 1, ease: "easeOut" }}
            >
               Stagger Animation
            </motion.h2>
            <div className="space-y-6">
               {items.map((item, index) => (
                  <motion.div
                     key={index}
                     className="rounded-lg bg-secondary p-6"
                     initial={{ opacity: 0, x: -80 }}
                     animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
                     transition={{ duration: 0.8, delay: index * 0.25, ease: "easeOut" }}
                  >
                     <p className="text-xl text-secondary-foreground">{item}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}

function WordRevealSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { amount: 0.3 })

   const text = "Each word reveals one by one creating rhythm"
   const words = text.split(" ")

   return (
      <section ref={ref} className="flex min-h-screen items-center justify-center px-6">
         <div className="max-w-4xl">
            <h2 className="mb-12 text-center text-5xl font-bold leading-tight text-foreground md:text-7xl">
               {words.map((word, index) => (
                  <motion.span
                     key={index}
                     className="inline-block mr-4"
                     initial={{ opacity: 0, y: 40 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                     transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                  >
                     {word}
                  </motion.span>
               ))}
            </h2>
            <motion.p
               className="text-center text-lg text-muted-foreground"
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
               transition={{ duration: 0.8, delay: words.length * 0.15 }}
            >
               Word-by-word animation adds dramatic emphasis to your message
            </motion.p>
         </div>
      </section>
   )
}

function CharacterRevealSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { amount: 0.3 })

   const text = "IMMERSIVE"
   const characters = text.split("")

   return (
      <section ref={ref} className="flex min-h-screen items-center justify-center px-6">
         <div className="max-w-4xl text-center">
            <h2 className="mb-12 text-6xl font-bold text-foreground md:text-9xl">
               {characters.map((char, index) => (
                  <motion.span
                     key={index}
                     className="inline-block"
                     initial={{ opacity: 0, y: 80, scale: 0.5 }}
                     animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.5 }}
                     transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: [0.43, 0.13, 0.23, 0.96],
                     }}
                  >
                     {char}
                  </motion.span>
               ))}
            </h2>
            <motion.p
               className="text-lg text-muted-foreground"
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
               transition={{ duration: 0.8, delay: characters.length * 0.08 + 0.3 }}
            >
               Character-level animations for maximum impact
            </motion.p>
         </div>
      </section>
   )
}

function ScaleSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { amount: 0.3 })

   return (
      <section ref={ref} className="flex min-h-screen items-center justify-center px-6">
         <motion.div
            className="max-w-4xl text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
         >
            <h2 className="mb-6 text-5xl font-bold text-foreground md:text-7xl">Scale Animation</h2>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
               Elements smoothly scale up as they enter view, creating a sense of depth and drawing attention to important
               content.
            </p>
         </motion.div>
      </section>
   )
}

function ParallaxSection() {
   const ref = useRef(null)
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
   })

   const y = useTransform(scrollYProgress, [0, 1], [150, -150])
   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

   return (
      <section ref={ref} className="relative flex min-h-screen items-center justify-center px-6">
         <motion.div className="max-w-4xl text-center" style={{ y, opacity }}>
            <h2 className="mb-6 text-5xl font-bold text-foreground md:text-7xl">Parallax Effect</h2>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
               This text moves at a different speed than the scroll, creating a parallax effect with dynamic opacity changes.
            </p>
         </motion.div>
      </section>
   )
}

function FinalSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { amount: 0.3 })

   return (
      <section ref={ref} className="flex min-h-screen items-center justify-center px-6">
         <div className="max-w-4xl text-center">
            <motion.h2
               className="mb-6 text-5xl font-bold text-foreground md:text-7xl"
               initial={{ opacity: 0, y: 80 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
               transition={{ duration: 1, ease: "easeOut" }}
            >
               The End
            </motion.h2>
            <motion.p
               className="text-lg text-muted-foreground md:text-xl"
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
            >
               Scroll back up to see the animations again
            </motion.p>
         </div>
      </section>
   )
}

