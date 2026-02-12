"use client";
import { useState, useEffect } from "react";

export default function Page() {
   const [cats, setCats] = useState([]);
   const [cat, setCat] = useState("");
   const [name, setName] = useState("");
   const [list, setList] = useState([]);

   useEffect(() => {
      fetch("/api/categories")
         .then(r => r.json())
         .then(setCats);
   }, []);

   async function load(id) {
      const r = await fetch(`/api/subcategory?categoryId=${id}`);
      setList(await r.json());
   }

   async function create() {
      await fetch("/api/subcategory", {
         method: "POST",
         body: JSON.stringify({ name, category: cat })
      });
      setName("");
      load(cat);
   }

   return (
      <div>
         <h1 className="text-xl font-bold mb-6">SubCategories</h1>

         <select
            onChange={e => {
               setCat(e.target.value);
               load(e.target.value);
            }}
            className="border p-2 mb-4"
         >
            <option>Select Category</option>
            {cats.map(c => (
               <option key={c._id} value={c._id}>{c.name}</option>
            ))}
         </select>

         {cat && (
            <div className="flex gap-2 mb-6">
               <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="border p-2"
               />
               <button onClick={create} className="bg-black text-white px-4">
                  Add
               </button>
            </div>
         )}

         {list.map(s => (
            <div key={s._id} className="border p-3 mb-2">
               {s.name}
            </div>
         ))}
      </div>
   );
}
