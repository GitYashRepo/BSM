"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"

export function InstagramGalleryCard() {
   const [posts, setPosts] = useState([])
   const [likedPosts, setLikedPosts] = useState({})
   const [savedPosts, setSavedPosts] = useState({})

   useEffect(() => {
      async function fetchImages() {
         try {
            const res = await fetch("/api/gallery/image")
            const data = await res.json()
            setPosts(data)
         } catch (error) {
            console.error("Failed to fetch images:", error)
         }
      }

      fetchImages()
   }, [])

   if (!posts.length) {
      return (
         <div className="text-center py-10 text-muted-foreground">
            No images found.
         </div>
      )
   }

   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
         {posts.map((post) => {
            const isLiked = likedPosts[post._id]
            const isSaved = savedPosts[post._id]

            return (
               <Card
                  key={post._id}
                  className="w-full max-w-lg mx-auto border-border overflow-hidden"
               >
                  {/* Header */}
                  <CardHeader className="flex flex-row items-center gap-3 px-3">
                     <Avatar className="w-9 h-9">
                        <AvatarImage src="/logo/logo.png" />
                        <AvatarFallback>G</AvatarFallback>
                     </Avatar>
                     <div className="flex flex-col flex-1">
                        <p className="text-sm font-semibold leading-none">
                           BLUSH by Sakshi
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                           {post.category || "Gallery"}
                        </p>
                     </div>
                  </CardHeader>

                  {/* Image */}
                  <CardContent className="p-0 relative">
                     <div className="relative aspect-square bg-muted">
                        <img
                           src={post.src}
                           alt={post.alt || "gallery"}
                           className="w-full h-full object-cover"
                        />
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
                              onClick={() =>
                                 setLikedPosts((prev) => ({
                                    ...prev,
                                    [post._id]: !prev[post._id],
                                 }))
                              }
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
                           onClick={() =>
                              setSavedPosts((prev) => ({
                                 ...prev,
                                 [post._id]: !prev[post._id],
                              }))
                           }
                        >
                           <Bookmark
                              className={cn(
                                 "h-6 w-6 transition-colors",
                                 isSaved && "fill-current",
                              )}
                           />
                        </Button>
                     </div>

                     {/* Caption */}
                     {post.description && (
                        <div className="px-3 pb-2">
                           <p className="text-sm">
                              <span className="font-semibold mr-2">
                                 Gallery
                              </span>
                              {post.description}
                           </p>
                        </div>
                     )}

                     {/* Timestamp */}
                     <div className="px-3 pb-3">
                        <p className="text-xs text-muted-foreground uppercase">
                           {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                     </div>
                  </CardFooter>
               </Card>
            )
         })}
      </div>
   )
}
