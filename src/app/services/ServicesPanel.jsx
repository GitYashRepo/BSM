"use client";

import { useMemo, useState } from "react";
import { services } from "@/data/services";

export function ServicesPanel() {
   const [query, setQuery] = useState("");
   const [selected, setSelected] = useState(null);

   const filtered = useMemo(
      () =>
         services.filter((s) =>
            s.title.toLowerCase().includes(query.toLowerCase())
         ),
      [query]
   );

   if (selected) {
      return (
         <div className="max-w-3xl mx-auto p-6">
            <button
               onClick={() => setSelected(null)}
               className="mb-4 text-sm text-blue-500"
            >
               ← Back to services
            </button>

            <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
            <p className="text-gray-600 mb-6">{selected.description}</p>

            <button className="px-4 py-2 bg-black text-white rounded-lg">
               Select this service
            </button>
         </div>
      );
   }

   return (
      <div className="max-w-4xl mx-auto p-6">
         <input
            type="text"
            placeholder="Search services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full mb-6 p-3 border rounded-lg"
         />

         <div className="space-y-4">
            {filtered.map((service) => (
               <div
                  key={service.id}
                  onClick={() => setSelected(service)}
                  className="p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition"
               >
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.short}</p>
               </div>
            ))}
         </div>
      </div>
   );
}
