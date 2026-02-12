"use client";
import { useState, useEffect } from "react";

export default function Page() {
   const [form, setForm] = useState({ type: "daily" });
   const [list, setList] = useState([]);

   async function load() {
      const r = await fetch("/api/offer");
      setList(await r.json());
   }

   async function create() {
      await fetch("/api/offer", {
         method: "POST",
         body: JSON.stringify(form)
      });
      setForm({ type: "daily" });
      load();
   }

   useEffect(load, []);

   return (
      <div>
         <h1 className="text-xl font-bold mb-6">Offers</h1>

         <select onChange={e => setForm({ ...form, type: e.target.value })} className="border p-2 mr-2">
            <option value="daily">Daily</option>
            <option value="seasonal">Seasonal</option>
         </select>

         <input placeholder="Heading" onChange={e => setForm({ ...form, heading: e.target.value })} className="border p-2 mr-2" />
         <input placeholder="Regular Price" onChange={e => setForm({ ...form, regularPrice: e.target.value })} className="border p-2 mr-2" />
         <input placeholder="Discount Price" onChange={e => setForm({ ...form, discountedPrice: e.target.value })} className="border p-2 mr-2" />

         <button onClick={create} className="bg-black text-white px-4">Add</button>

         {list.map(o => (
            <div key={o._id} className="border p-3 mt-3">
               {o.heading}
            </div>
         ))}
      </div>
   );
}
