"use client"

import { useState } from "react"
import { Send } from "lucide-react"

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
   const [status, setStatus] = useState("")
   const [loading, setLoading] = useState(false)

   const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      setStatus("")

      try {
         const res = await fetch("/api/franchise", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
         })

         if (res.ok) {
            setStatus("Success! Your application has been submitted.")
            setFormData({
               name: "", email: "", phone: "", location: "",
               experience: "", investment: "", message: "",
            })
         } else {
            setStatus("Something went wrong. Please try again.")
         }
      } catch (err) {
         setStatus("Network error. Please try again.")
      } finally {
         setLoading(false)
      }
   }

   const handleChange = (e) => {
      setFormData((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }))
   }

   return (
      <section id="apply" className="py-32 px-6 lg:px-12 bg-white">
         <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-20 max-w-3xl">
               <p className="text-base tracking-[0.3em] text-[#6E2E35] uppercase font-light mb-6">Begin Your Journey</p>
               <h2 className="text-5xl md:text-6xl font-light text-[#1a1a1a] leading-tight mb-8">
                  Apply
                  <br />
                  <span className="text-[#AC2121] font-serif italic">Today</span>
               </h2>
               <p className="text-base text-[#666] leading-relaxed font-light">
                  Take the first step. Our team will review your application and contact you within 24 hours.
               </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
               <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                     <label htmlFor="name" className="block text-base uppercase tracking-[0.15em] text-[#6E2E35] font-light">
                        Full Name *
                     </label>
                     <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-0 py-3 border-b border-[#6E2E35]/20 bg-transparent text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#6E2E35] transition-colors text-sm"
                     />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                     <label htmlFor="email" className="block text-base uppercase tracking-[0.15em] text-[#6E2E35] font-light">
                        Email *
                     </label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-0 py-3 border-b border-[#6E2E35]/20 bg-transparent text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#6E2E35] transition-colors text-sm"
                     />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                     <label htmlFor="phone" className="block text-base uppercase tracking-[0.15em] text-[#6E2E35] font-light">
                        Phone *
                     </label>
                     <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-0 py-3 border-b border-[#6E2E35]/20 bg-transparent text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#6E2E35] transition-colors text-sm"
                     />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                     <label htmlFor="location" className="block text-base uppercase tracking-[0.15em] text-[#6E2E35] font-light">
                        Location *
                     </label>
                     <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, State"
                        className="w-full px-0 py-3 border-b border-[#6E2E35]/20 bg-transparent text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#6E2E35] transition-colors text-sm"
                     />
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                     <label
                        htmlFor="experience"
                        className="block text-base uppercase tracking-[0.15em] text-[#6E2E35] font-light"
                     >
                        Experience
                     </label>
                     <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-0 py-3 border-b border-[#6E2E35]/20 bg-transparent text-[#1a1a1a] focus:outline-none focus:border-[#6E2E35] transition-colors text-sm appearance-none cursor-pointer"
                     >
                        <option value="">Select experience level</option>
                        <option value="none">No experience</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                     </select>
                  </div>

                  {/* Investment */}
                  <div className="space-y-2">
                     <label
                        htmlFor="investment"
                        className="block text-base uppercase tracking-[0.15em] text-[#6E2E35] font-light"
                     >
                        Investment Capacity
                     </label>
                     <select
                        id="investment"
                        name="investment"
                        value={formData.investment}
                        onChange={handleChange}
                        className="w-full px-0 py-3 border-b border-[#6E2E35]/20 bg-transparent text-[#1a1a1a] focus:outline-none focus:border-[#6E2E35] transition-colors text-sm appearance-none cursor-pointer"
                     >
                        <option value="">Select range</option>
                        <option value="25l">₹25Lakh</option>
                        <option value="25-30">₹25Lakh - ₹30Lakh</option>
                        <option value="30l+">₹30Lakh+</option>
                     </select>
                  </div>
               </div>

               {/* Message */}
               <div className="space-y-2 pt-6">
                  <label htmlFor="message" className="block text-base uppercase tracking-[0.15em] text-[#6E2E35] font-light">
                     Message
                  </label>
                  <textarea
                     id="message"
                     name="message"
                     rows={4}
                     value={formData.message}
                     onChange={handleChange}
                     placeholder="Tell us about yourself and why you're interested..."
                     className="w-full px-0 py-3 border-b border-[#6E2E35]/20 bg-transparent text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#6E2E35] transition-colors text-sm resize-none"
                  />
               </div>

               {/* Submit */}
               <div className="pt-8">
                  <div className="flex items-center gap-6 mb-4">
                     <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-3 px-10 py-4 bg-[#6E2E35] text-white text-base uppercase tracking-[0.15em] font-light hover:bg-[#750851] transition-colors disabled:bg-[#6E2E35]/70"
                     >
                        {loading ? "Submitting..." : "Submit Application"}
                        {!loading && <Send size={16} />}
                     </button>
                     <p className="text-xs text-[#666] font-light hidden sm:block">We'll respond within 24 hours</p>
                  </div>
                  {status && (
                     <p className={`text-sm ${status.includes("Success") ? "text-green-600" : "text-red-500"}`}>
                        {status}
                     </p>
                  )}
               </div>
            </form>
         </div>
      </section>
   )
}
