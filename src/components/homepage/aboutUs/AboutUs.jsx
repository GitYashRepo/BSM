"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SalonSections() {
   const [hovered, setHovered] = useState(null);

   const services = [
      { id: 1, name: "SKIN SERVICES", img: "/skin.jpg", layout: "row-span-2" },
      { id: 2, name: "ACADEMY", img: "/academy.jpg", layout: "" },
      { id: 3, name: "UNISEX", img: "/unisex.jpg", layout: "col-span-2" },
      { id: 4, name: "MAKEUP", img: "/images/img7.jpg", layout: "col-span-2 row-span-2" },
      { id: 5, name: "HAIR SERVICE", img: "/hair.jpg", layout: "col-span-2" },
      { id: 6, name: "MANICURE PEDICURE", img: "/mani.jpg", layout: "col-span-2" }
   ];

   return (
      <div className="w-full flex flex-col items-center">
         {/* Hero Section */}
         <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12"
         >
            <div>
               <motion.h1
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-xl font-serif leading-snug"
               >
                  <span className="text-amber-600 text-2xl">BLUSH by Sakshi Makeover's :</span> <br /> RENOWNED FOR ITS LUXURY, PRECISION, AND EXCEPTIONAL BEAUTY ARTISTRY.
               </motion.h1>
               <div className="mt-4 h-[2px] w-40 bg-amber-600"></div>
            </div>

            <div className="text-gray-600 leading-relaxed">
               <motion.p
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-justify">
                  At Blush Salon & Academy, every service is designed to enhance your natural beauty
                  with a touch of sophistication. From flawless makeup to expert hair styling and
                  relaxing skin therapies, our team blends artistry with comfort to create a truly
                  indulgent experience. Step in and discover why Blush is Rewari’s most trusted
                  destination for beauty and grooming.
               </motion.p>
               <motion.button
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-xl shadow-md"
               >
                  Read More
               </motion.button>
            </div>
         </motion.section>

         {/* Services Section */}

      </div>
   );
}
