"use client"

import { Star } from "lucide-react"

const testimonials = [
   {
      name: "Priya Sharma",
      role: "Bride",
      content:
         "Sakshi made me feel like the most beautiful version of myself on my wedding day. Her attention to detail and warm personality made the entire experience magical.",
      rating: 5,
   },
   {
      name: "Anjali Kapoor",
      role: "Fashion Influencer",
      content:
         "Professional, creative, and absolutely talented. Blush is my go-to for every important event. The team understands exactly what I need.",
      rating: 5,
   },
   {
      name: "Riya Malhotra",
      role: "Working Professional",
      content:
         "From my engagement to reception, Sakshi and her team were there for every function. Each look was unique, beautiful, and lasted perfectly through the celebrations.",
      rating: 5,
   },
]

export function Testimonials() {
   return (
      <section className="fade-in-section py-24 md:py-32 transition-all duration-1000">
         <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-16">
                  <span className="text-sm tracking-[0.3em] text-accent uppercase font-light">Client Love</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 text-pretty">What Our Clients Say</h2>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                     <div
                        key={index}
                        className="p-8 bg-card border border-border hover:border-accent transition-colors duration-300"
                     >
                        <div className="flex gap-1 mb-4">
                           {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} size={16} className="fill-accent text-accent" />
                           ))}
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6 italic">{`"${testimonial.content}"`}</p>
                        <div>
                           <p className="font-serif text-foreground">{testimonial.name}</p>
                           <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
