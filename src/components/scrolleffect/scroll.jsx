'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { IMAGE_URLS, imageCache, imageLoadState } from '@/lib/getTourImageCache'


gsap.registerPlugin(ScrollTrigger)


const BOOT_FRAMES = 12



export function ScrollCanvas() {
   const canvasRef = useRef(null)
   const containerRef = useRef(null)
   const imagesRef = useRef([])
   const currentFrameRef = useRef(0)
   const [imagesLoaded, setImagesLoaded] = useState(false)

   // ✅ ADD THIS
   useEffect(() => {
      const waitForBootFrames = () => {
         if (imageLoadState.loadedCount >= BOOT_FRAMES) {
            imagesRef.current = imageCache
            setImagesLoaded(true)
         } else {
            requestAnimationFrame(waitForBootFrames)
         }
      }

      waitForBootFrames()
   }, [])


   useEffect(() => {
      if (!imagesLoaded || !canvasRef.current || !containerRef.current) return

      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const drawFrame = (frameIndex) => {
         const frame = Math.min(frameIndex, imagesRef.current.length - 1)
         const img = imagesRef.current[frame]
         if (!img || !img.complete || img.naturalWidth === 0) return

         ctx.clearRect(0, 0, canvas.width, canvas.height)

         const imgAspect = img.naturalWidth / img.naturalHeight
         const canvasAspect = canvas.width / canvas.height

         let drawWidth, drawHeight, offsetX, offsetY

         if (imgAspect > canvasAspect) {
            drawHeight = canvas.height
            drawWidth = drawHeight * imgAspect
            offsetX = (canvas.width - drawWidth) / 2
            offsetY = 0
         } else {
            drawWidth = canvas.width
            drawHeight = drawWidth / imgAspect
            offsetX = 0
            offsetY = (canvas.height - drawHeight) / 2
         }

         ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
      }

      const updateCanvasSize = () => {
         canvas.width = window.innerWidth
         canvas.height = window.innerHeight
         drawFrame(currentFrameRef.current)
      }

      window.addEventListener('resize', updateCanvasSize)
      updateCanvasSize()

      const frameObj = { frame: 0 }

      const tween = gsap.to(frameObj, {
         frame: imagesRef.current.length - 1,
         ease: 'none',
         scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: `+=${window.innerHeight * 16}`,
            scrub: 2.2,
            pin: true,
            anticipatePin: 1,
         },
         onUpdate: () => {
            const frame = Math.floor(frameObj.frame)
            if (frame !== currentFrameRef.current) {
               currentFrameRef.current = frame
               drawFrame(frame)
            }
         },
      })

      drawFrame(0)

      return () => {
         tween.scrollTrigger?.kill()
         tween.kill()
         window.removeEventListener('resize', updateCanvasSize)
      }
   }, [imagesLoaded])


   return (
      <>
         {/* Animation Section */}
         <div
            ref={containerRef}
            className="relative w-screen bg-black"
         >
            <div className="relative w-screen h-screen overflow-hidden bg-black">

               {/* CANVAS */}
               <canvas
                  ref={canvasRef}
                  className="w-full h-full block"
               />
            </div>
         </div>
      </>
   )
}
