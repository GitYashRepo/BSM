'use client'

import { useEffect } from 'react'
import { IMAGE_URLS, imageCache, imageLoadState } from '@/lib/getTourImageCache'

export default function PreloadGetTourImages() {
   useEffect(() => {
      if (imageLoadState.started) return
      imageLoadState.started = true

      const startPreload = () => {
         IMAGE_URLS.forEach((src, index) => {
            if (imageCache[index]) return

            const img = new Image()
            img.src = src

            img.onload = img.onerror = () => {
               imageLoadState.loadedCount++
            }

            imageCache[index] = img
         })
      }

      // Start AFTER page is interactive
      if ('requestIdleCallback' in window) {
         requestIdleCallback(startPreload)
      } else {
         setTimeout(startPreload, 1500)
      }
   }, [])

   return null // 👈 renders nothing
}
