"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Send, Bookmark, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"


export function InstagramGalleryCard({
   username,
   userAvatar,
   images,
   likes,
   caption,
   timestamp,
   location,
}) {
   const [currentImageIndex, setCurrentImageIndex] = useState(0)
   const [isLiked, setIsLiked] = useState(false)
   const [isSaved, setIsSaved] = useState(false)

   const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
   }

   const previousImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
   }

   return (
      <Card className="w-full max-w-lg mx-auto border-border overflow-hidden">
         {/* Header */}
         <CardHeader className="flex flex-row items-center gap-3 px-3">
            <Avatar className="w-9 h-9">
               <AvatarImage src={userAvatar || "/placeholder.svg"} alt={username} />
               <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1">
               <p className="text-sm font-semibold leading-none">{username}</p>
               {location && <p className="text-xs text-muted-foreground mt-1">{location}</p>}
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                  <circle cx="12" cy="5" r="1" fill="currentColor" />
                  <circle cx="12" cy="19" r="1" fill="currentColor" />
               </svg>
            </Button>
         </CardHeader>

         {/* Image Gallery */}
         <CardContent className="p-0 relative">
            <div className="relative aspect-square bg-muted">
               <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
               />

               {/* Navigation Buttons */}
               {images.length > 1 && (
                  <>
                     {currentImageIndex > 0 && (
                        <Button
                           variant="ghost"
                           size="icon"
                           onClick={previousImage}
                           className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                        >
                           <ChevronLeft className="h-5 w-5" />
                        </Button>
                     )}
                     {currentImageIndex < images.length - 1 && (
                        <Button
                           variant="ghost"
                           size="icon"
                           onClick={nextImage}
                           className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                        >
                           <ChevronRight className="h-5 w-5" />
                        </Button>
                     )}
                  </>
               )}

               {/* Dots Indicator */}
               {images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                     {images.map((_, index) => (
                        <button
                           key={index}
                           onClick={() => setCurrentImageIndex(index)}
                           className={cn(
                              "w-1.5 h-1.5 rounded-full transition-all",
                              index === currentImageIndex ? "bg-white w-2 h-2" : "bg-white/60",
                           )}
                           aria-label={`Go to image ${index + 1}`}
                        />
                     ))}
                  </div>
               )}
            </div>
         </CardContent>

         {/* Actions */}
         <CardFooter className="flex flex-col items-start p-0">
            <div className="flex items-center justify-between w-full px-3">
               <div className="flex items-center gap-3">
                  <Button
                     variant="ghost"
                     size="icon"
                     className="h-9 w-9 p-0 hover:bg-transparent"
                     onClick={() => setIsLiked(!isLiked)}
                  >
                     <Heart
                        className={cn(
                           "h-6 w-6 transition-all",
                           isLiked
                              ? "fill-red-500 text-red-500 animate-in zoom-in-50 duration-200"
                              : "hover:text-muted-foreground",
                        )}
                     />
                  </Button>
                  <Button
                     variant="ghost"
                     size="icon"
                     className="h-9 w-9 p-0 hover:bg-transparent hover:text-muted-foreground"
                  >
                     <MessageCircle className="h-6 w-6" />
                  </Button>
                  <Button
                     variant="ghost"
                     size="icon"
                     className="h-9 w-9 p-0 hover:bg-transparent hover:text-muted-foreground"
                  >
                     <Send className="h-6 w-6" />
                  </Button>
               </div>
               <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 p-0 hover:bg-transparent hover:text-muted-foreground"
                  onClick={() => setIsSaved(!isSaved)}
               >
                  <Bookmark className={cn("h-6 w-6 transition-colors", isSaved && "fill-current")} />
               </Button>
            </div>

            {/* Likes Count */}
            <div className="px-3 pb-1">
               <p className="text-sm font-semibold">{isLiked ? likes + 1 : likes} likes</p>
            </div>

            {/* Caption */}
            <div className="px-3 pb-2">
               <p className="text-sm">
                  <span className="font-semibold mr-2">{username}</span>
                  {caption}
               </p>
            </div>

            {/* Timestamp */}
            <div className="px-3 pb-3">
               <p className="text-xs text-muted-foreground uppercase">{timestamp}</p>
            </div>
         </CardFooter>
      </Card>
   )
}
