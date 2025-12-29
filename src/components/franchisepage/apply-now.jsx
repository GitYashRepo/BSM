"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ApplyNow() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      investment: "",
      message: "",
   })

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log("Form submitted:", formData)
      // Handle form submission
   }

   const handleChange = (e) => {
      setFormData((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }))
   }

   return (
      <section id="apply" className="py-32 px-6 lg:px-12 bg-gradient-to-br from-[#faf8f6] via-[#f5f1ed] to-[#ede6df]">
         <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 fade-in-section">
               <span className="text-sm tracking-[0.3em] text-[#b8936d] uppercase font-light mb-4 block">
                  Start Your Journey
               </span>
               <h2 className="text-5xl md:text-7xl font-serif font-light text-[#2c2420] leading-tight mb-6">
                  Apply
                  <br />
                  <span className="italic text-[#b8936d]">Now</span>
               </h2>
               <p className="text-lg text-[#6b5d54] max-w-2xl mx-auto leading-relaxed">
                  Take the first step towards owning your own Blush franchise. Fill out the form below and our team will
                  contact you within 24 hours.
               </p>
            </div>

            {/* Application Form */}
            <div className="fade-in-section" style={{ transitionDelay: "200ms" }}>
               <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-lg p-8 md:p-12 shadow-2xl border border-[#b8936d]/10"
               >
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                     {/* Name */}
                     <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#2c2420] mb-2 tracking-wide">
                           Full Name *
                        </label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           required
                           value={formData.name}
                           onChange={handleChange}
                           className="w-full px-4 py-3 border border-[#b8936d]/20 rounded-lg focus:outline-none focus:border-[#b8936d] focus:ring-1 focus:ring-[#b8936d] transition-colors"
                           placeholder="Your full name"
                        />
                     </div>

                     {/* Email */}
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#2c2420] mb-2 tracking-wide">
                           Email Address *
                        </label>
                        <input
                           type="email"
                           id="email"
                           name="email"
                           required
                           value={formData.email}
                           onChange={handleChange}
                           className="w-full px-4 py-3 border border-[#b8936d]/20 rounded-lg focus:outline-none focus:border-[#b8936d] focus:ring-1 focus:ring-[#b8936d] transition-colors"
                           placeholder="your.email@example.com"
                        />
                     </div>

                     {/* Phone */}
                     <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#2c2420] mb-2 tracking-wide">
                           Phone Number *
                        </label>
                        <input
                           type="tel"
                           id="phone"
                           name="phone"
                           required
                           value={formData.phone}
                           onChange={handleChange}
                           className="w-full px-4 py-3 border border-[#b8936d]/20 rounded-lg focus:outline-none focus:border-[#b8936d] focus:ring-1 focus:ring-[#b8936d] transition-colors"
                           placeholder="+91 12345 67890"
                        />
                     </div>

                     {/* Preferred Location */}
                     <div>
                        <label htmlFor="location" className="block text-sm font-medium text-[#2c2420] mb-2 tracking-wide">
                           Preferred Location *
                        </label>
                        <input
                           type="text"
                           id="location"
                           name="location"
                           required
                           value={formData.location}
                           onChange={handleChange}
                           className="w-full px-4 py-3 border border-[#b8936d]/20 rounded-lg focus:outline-none focus:border-[#b8936d] focus:ring-1 focus:ring-[#b8936d] transition-colors"
                           placeholder="City, State"
                        />
                     </div>

                     {/* Experience */}
                     <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-[#2c2420] mb-2 tracking-wide">
                           Industry Experience
                        </label>
                        <select
                           id="experience"
                           name="experience"
                           value={formData.experience}
                           onChange={handleChange}
                           className="w-full px-4 py-3 border border-[#b8936d]/20 rounded-lg focus:outline-none focus:border-[#b8936d] focus:ring-1 focus:ring-[#b8936d] transition-colors bg-white"
                        >
                           <option value="">Select experience</option>
                           <option value="none">No experience</option>
                           <option value="1-3">1-3 years</option>
                           <option value="3-5">3-5 years</option>
                           <option value="5+">5+ years</option>
                        </select>
                     </div>

                     {/* Investment Capacity */}
                     <div>
                        <label htmlFor="investment" className="block text-sm font-medium text-[#2c2420] mb-2 tracking-wide">
                           Investment Capacity
                        </label>
                        <select
                           id="investment"
                           name="investment"
                           value={formData.investment}
                           onChange={handleChange}
                           className="w-full px-4 py-3 border border-[#b8936d]/20 rounded-lg focus:outline-none focus:border-[#b8936d] focus:ring-1 focus:ring-[#b8936d] transition-colors bg-white"
                        >
                           <option value="">Select range</option>
                           <option value="150k">Rs. 150,000</option>
                           <option value="150-200k">Rs. 150,000 - Rs. 200,000</option>
                           <option value="200k+">Rs. 200,000+</option>
                        </select>
                     </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                     <label htmlFor="message" className="block text-sm font-medium text-[#2c2420] mb-2 tracking-wide">
                        Tell Us About Yourself
                     </label>
                     <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#b8936d]/20 rounded-lg focus:outline-none focus:border-[#b8936d] focus:ring-1 focus:ring-[#b8936d] transition-colors resize-none"
                        placeholder="Why are you interested in opening a Blush franchise? What makes you a great fit?"
                     />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                     <Button
                        type="submit"
                        className="w-full sm:w-auto px-12 py-6 bg-[#b8936d] hover:bg-[#a67d5a] text-white font-medium tracking-wide transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                     >
                        Submit Application
                     </Button>
                     <p className="text-sm text-[#6b5d54]">We'll respond within 24 hours</p>
                  </div>
               </form>
            </div>
         </div>
      </section>
   )
}
