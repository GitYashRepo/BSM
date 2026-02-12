"use client";
import { useState, useEffect } from "react";

export default function Page() {
   const [name, setName] = useState("");
   const [list, setList] = useState([]);

   async function load() {
      const res = await fetch("/api/category");
      setList(await res.json());
   }

   async function create() {
      await fetch("/api/category", {
         method: "POST",
         body: JSON.stringify({ name }),
      });
      setName("");
      load();
   }

   async function del(id) {
      await fetch("/api/category", {
         method: "DELETE",
         body: JSON.stringify({ id }),
      });
      load();
   }

   useEffect(() => { load(); }, []);

   return (
      <div>
         <h1 className="text-2xl font-bold mb-6">Categories</h1>

         <div className="flex gap-2 mb-6">
            <input
               value={name}
               onChange={e => setName(e.target.value)}
               className="border p-2"
               placeholder="Category name"
            />
            <button onClick={create} className="bg-black text-white px-4">
               Add
            </button>
         </div>

         {list.map(c => (
            <div key={c._id} className="border p-3 flex justify-between mb-2">
               {c.name}
               <button onClick={() => del(c._id)} className="text-red-500">
                  Delete
               </button>
            </div>
         ))}
      </div>
   );
}
