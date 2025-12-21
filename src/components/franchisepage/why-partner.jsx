"use client"

export function WhyPartner() {
   const benefits = [
      {
         number: "01",
         title: "Proven Business Model",
         description:
            "A tested and refined system that has generated consistent success across multiple locations with documented results.",
         icon: "📊",
      },
      {
         number: "02",
         title: "Brand Recognition",
         description:
            "Leverage the established reputation and trust of Blush by Sakshi Makeovers to attract clients from day one.",
         icon: "⭐",
      },
      {
         number: "03",
         title: "Complete Training",
         description:
            "Comprehensive onboarding program covering operations, marketing, customer service, and advanced beauty techniques.",
         icon: "🎓",
      },
      {
         number: "04",
         title: "Marketing Support",
         description:
            "Access to professional marketing materials, social media strategies, and ongoing promotional campaigns.",
         icon: "📱",
      },
      {
         number: "05",
         title: "Ongoing Support",
         description:
            "Dedicated franchise support team available to help you navigate challenges and optimize your business.",
         icon: "🤝",
      },
      {
         number: "06",
         title: "Quality Products",
         description:
            "Exclusive access to premium beauty products and tools at wholesale prices through our supplier network.",
         icon: "✨",
      },
   ]

   return (
      <section className="py-32 px-6 lg:px-12 bg-[#2c2420] text-[#faf8f6]">
         <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-20 fade-in-section">
               <span className="text-sm tracking-[0.3em] text-[#d4af8c] uppercase font-light mb-4 block">
                  Partnership Benefits
               </span>
               <h2 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-6">
                  Why Partner
                  <br />
                  <span className="italic text-[#d4af8c]">With Us</span>
               </h2>
               <p className="text-lg text-[#c4b5a8] max-w-2xl leading-relaxed">
                  We provide everything you need to build a successful beauty business, from initial setup to ongoing growth
                  support.
               </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {benefits.map((benefit, index) => (
                  <div key={index} className="group fade-in-section" style={{ transitionDelay: `${index * 100}ms` }}>
                     <div className="relative p-8 bg-[#3a302a]/40 backdrop-blur-sm border border-[#d4af8c]/10 rounded-lg transition-all duration-500 hover:bg-[#3a302a]/60 hover:border-[#d4af8c]/30 hover:-translate-y-2">
                        {/* Number */}
                        <div className="text-6xl font-serif text-[#d4af8c]/20 mb-4 group-hover:text-[#d4af8c]/30 transition-colors">
                           {benefit.number}
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-serif text-[#faf8f6] mb-4 group-hover:text-[#d4af8c] transition-colors">
                           {benefit.title}
                        </h3>
                        <p className="text-[#c4b5a8] leading-relaxed">{benefit.description}</p>

                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#d4af8c]/20 rounded-tr-lg" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
