'use client'
import { useEffect, useState } from 'react'
import CircularProgressBar from './CircularProgressBar'

export default function ScrollToTopButton() {
   const [progress, setProgress] = useState(0)
   const [visible, setVisible] = useState(false)

   useEffect(() => {
      let rafId = null

      const updateProgress = () => {
         const scrollTop = window.scrollY
         const docHeight =
            document.documentElement.scrollHeight - window.innerHeight

         const value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

         setProgress(value)
         setVisible(scrollTop > 120)

         rafId = null
      }

      const onScroll = () => {
         if (rafId === null) {
            rafId = requestAnimationFrame(updateProgress)
         }
      }

      window.addEventListener('scroll', onScroll, { passive: true })

      return () => {
         window.removeEventListener('scroll', onScroll)
         if (rafId !== null) cancelAnimationFrame(rafId)
      }
   }, [])


   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }

   if (!visible) return null

   return (
      <div className="fixed bottom-15 right-3 z-50">
         <CircularProgressBar
            sqSize={40}
            strokeWidth={2}
            percentage={progress}
            onClick={scrollToTop}
         />
      </div>
   )
}
