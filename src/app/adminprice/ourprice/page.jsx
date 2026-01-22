"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
   const [services, setServices] = useState([]);

   useEffect(() => {
      fetch("/api/services")
         .then((res) => res.json())
         .then(setServices);
   }, []);

   return (
      <div className="p-10">
         <h1 className="text-3xl mb-6">Salon Services</h1>
         {services.map((s) => (
            <div key={s._id} className="border p-4 mb-3">
               <h2 className="text-xl">{s.name}</h2>
               <p>₹ {s.price}</p>
            </div>
         ))}
      </div>
   );
}
