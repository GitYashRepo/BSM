// Updated Contact Page with full salon appointment booking fields
"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Calendar, Clock, User, Scissors, StickyNote } from "lucide-react"
import Link from "next/link"

const contactData = [
   {
      title: "General Inquiries",
      description: "Reach out to us for any questions",
      details: ["90531-02324"],
      icon: <Phone className="w-6 h-6" />,
   },
   {
      title: "Reception",
      description: "Book appointments & service info",
      details: ["94684-56266", "Sakshi Ma'am"],
      icon: <Phone className="w-6 h-6" />,
   },
   {
      title: "Complaints & Support",
      description: "For any concerns or feedback",
      details: ["Nitin (CEO)", "946-777-777-3", "WhatsApp Only"],
      icon: <Mail className="w-6 h-6" />,
   },
   {
      title: "Email",
      description: "Send us your message anytime",
      details: ["sakshimakeovers@gmail.com"],
      icon: <Mail className="w-6 h-6" />,
   },
   {
      title: "Franchise Opportunities",
      description: "Interested in partnership?",
      details: ["Nitin (CEO)", "946-777-777-3"],
      icon: <Phone className="w-6 h-6" />,
   },
   {
      title: "Visit Us",
      description: "Located in Rewari, India",
      details: ["See map below"],
      icon: <MapPin className="w-6 h-6" />,
   },
]

export default function ContactPage() {
   const [hoveredIndex, setHoveredIndex] = useState(null)

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      contactMethod: "",
      services: [],
      staff: "",
      date: "",
      time: "",
      // altDate: "",
      // altTime: "",
      occasion: "",
      notes: "",
   })

   const serviceOptions = [
      "Haircut",
      "Facial",
      "Makeup",
      "Hair Color",
      "Nails",
      "Bridal Makeup",
      "Body Spa",
   ]

   const staffOptions = ["Any Available", "Sakshi", "Priya", "Nitin"]

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
   }

   const handleMultiSelect = (value) => {
      setFormData((prev) => {
         const exists = prev.services.includes(value)
         return {
            ...prev,
            services: exists
               ? prev.services.filter((s) => s !== value)
               : [...prev.services, value],
         }
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log("Appointment Booked:", formData)
      alert("Appointment request submitted!")
   }

   return (
      <div className="min-h-screen bg-background text-foreground">
         <section className="pt-12 pb-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
               <div className="w-full h-[50vh] pb-12">
                  <img className="w-full h-full object-cover" src="/images/banner.jpg" alt="Contact Banner" />
               </div>
               <div className="mb-16">
                  <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-[#D99726]">Let's Connect</h1>
                  <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                     Have questions or want to book an appointment? Fill out the form and we'll reach out shortly.
                  </p>
               </div>

               {/* Contact Cards */}
               <div id="contact" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                  {contactData.map((item, index) => (
                     <div
                        key={index}
                        className="group relative p-8 border border-border rounded-lg bg-card hover:bg-secondary transition-all duration-300"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                     >
                        <div className="mb-4 text-[#D99726] transition-transform duration-300 group-hover:scale-105">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                        {item.details.map((d, i) => (
                           <p key={i} className="text-sm font-medium">{d}</p>
                        ))}
                     </div>
                  ))}
               </div>

               {/* Appointment Form */}
               <div id="appointment" className="appointment grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                  <div>
                     <h2 className="text-4xl text-[#D99726] font-serif font-light mb-4">Book an Appointment</h2>
                     <p className="text-muted-foreground mb-8">
                        Provide your details and preferred slot. We will confirm your appointment shortly.
                     </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                     <input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-border py-3"
                        required
                     />

                     {/* <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-border py-3"
                        required
                     /> */}

                     <input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-border py-3"
                        required
                     />

                     {/* <select
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-border py-3"
                        required
                     >
                        <option value="">Preferred Contact Method</option>
                        <option value="Call">Call</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Email">Email</option>
                     </select> */}

                     {/* Services Multi Select */}
                     <div>
                        <p className="mb-2 font-medium">Select Services</p>
                        <div className="grid grid-cols-2 gap-2">
                           {serviceOptions.map((service) => (
                              <label key={service} className="flex items-center gap-2 text-sm">
                                 <input
                                    type="checkbox"
                                    checked={formData.services.includes(service)}
                                    onChange={() => handleMultiSelect(service)}
                                 />
                                 {service}
                              </label>
                           ))}
                        </div>
                     </div>

                     {/* <select
                        name="staff"
                        value={formData.staff}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-border py-3"
                        required
                     >
                        <option value="">Preferred Staff</option>
                        {staffOptions.map((s) => (
                           <option key={s} value={s}>{s}</option>
                        ))}
                     </select> */}

                     {/* <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full bg-transparent border-b border-border py-3" required />
                     <input type="time" name="time" value={formData.time} onChange={handleInputChange} className="w-full bg-transparent border-b border-border py-3" required /> */}

                     {/* <input type="date" name="altDate" value={formData.altDate} onChange={handleInputChange} className="w-full bg-transparent border-b border-border py-3" />
                     <input type="time" name="altTime" value={formData.altTime} onChange={handleInputChange} className="w-full bg-transparent border-b border-border py-3" /> */}

                     {/* <select
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-border py-3"
                     >
                        <option value="">Occasion Type</option>
                        <option value="Casual">Casual</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Party">Party</option>
                        <option value="Shoot">Photoshoot</option>
                     </select> */}

                     <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Any special requests? [ OPTIONAL ]"
                        className="w-full bg-transparent border-b border-border py-3 resize-none"
                     />

                     <button type="submit" className="inline-flex items-center gap-2 px-8 py-3 bg-[#D99726] text-white rounded-full">Book Appointment</button>
                  </form>
               </div>

               {/* Map */}
               <div id="location" className="mb-20">
                  <h2 className="text-4xl text-[#750851] font-serif font-light mb-8">Our Location</h2>
                  <div className="rounded-lg overflow-hidden border h-96">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.6433845018673!2d76.61679521342992!3d28.18775900023444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d6f146b07bd6b%3A0x77bac241d712f26d!2z8J2XlfCdl7nwnZiC8J2YgPCdl7Ug8J2XlfCdmIYg8J2XpvCdl67wnZe48J2YgPCdl7XwnZe2IPCdl6DwnZeu8J2XuPCdl7LwnZe88J2Yg_Cdl7LwnZe_8J2YgCAtIEJlc3QgTWFrZXVwIEFydGlzdCB8IEJyaWRhbCBNYWtldXAgfCBCZWF1dHkgUGFybG91ciBpbiBSZXdhcmk!5e0!3m2!1sen!2sin!4v1765473278030!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                     ></iframe>
                  </div>
               </div>

               {/* WhatsApp CTA */}
               <div className="bg-[#D99726]/40 border rounded-lg p-12 text-center">
                  <h3 className="text-2xl font-semibold mb-4">Quick Response?</h3>
                  <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Message us on WhatsApp for instant help.</p>
                  <a
                     href="https://wa.me/919467777773"
                     target="_blank"
                     className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-full"
                  >
                     Chat on WhatsApp
                  </a>
               </div>
            </div>
         </section>
      </div>
   )
}
