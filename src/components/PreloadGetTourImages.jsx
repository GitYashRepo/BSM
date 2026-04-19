'use client'

import { useEffect } from 'react'
import { IMAGE_URLS, imageCache, imageLoadState } from '@/lib/getTourImageCache'

export default function PreloadGetTourImages() {
   useEffect(() => {
      // Function to re-sync the loaded count based on what's currently in the cache
      const syncLoadedCount = () => {
         let count = 0;
         for (let i = 0; i < IMAGE_URLS.length; i++) {
            if (imageCache[i] && (imageCache[i].complete || imageCache[i].naturalWidth > 0)) {
               count++;
            }
         }
         imageLoadState.loadedCount = count;
      };

      syncLoadedCount();

      if (imageLoadState.isActive) return;
      imageLoadState.isActive = true;

      let currentIndex = 0;
      const CONCURRENCY = 10; // Batch size

      const loadBatch = () => {
         if (currentIndex >= IMAGE_URLS.length) {
            imageLoadState.isActive = false;
            return;
         }

         const end = Math.min(currentIndex + CONCURRENCY, IMAGE_URLS.length);
         const promises = [];

         for (let i = currentIndex; i < end; i++) {
            const src = IMAGE_URLS[i];
            
            if (!imageCache[i]) {
               const img = new Image();
               img.src = src;
               const promise = new Promise((resolve) => {
                  img.onload = img.onerror = () => {
                     // Check if this image actually loaded or if we just want to count it anyway
                     if (img.complete && img.naturalWidth > 0) {
                        // Success
                     }
                     // Always increment loadedCount to avoid getting stuck
                     imageLoadState.loadedCount++;
                     resolve();
                  };
               });
               imageCache[i] = img;
               promises.push(promise);
            } else if (!imageCache[i].complete) {
               // Already exists but not finished
               const promise = new Promise((resolve) => {
                  imageCache[i].onload = imageCache[i].onerror = () => {
                     imageLoadState.loadedCount++;
                     resolve();
                  };
               });
               promises.push(promise);
            } else {
               // Already finished, no need to wait
            }
         }

         currentIndex = end;

         if (promises.length === 0) {
            loadBatch();
         } else {
            Promise.all(promises).then(() => {
               // Use setImmediate-like behavior with setTimeout 0 for the first few batches 
               // to quickly satisfy the 12-frame requirement
               const delay = currentIndex <= 50 ? 0 : 50;
               setTimeout(loadBatch, delay);
            });
         }
      };

      loadBatch();

      return () => {
         // We let the background loading continue
      };
   }, []);

   return null;
}
