"use client";
import { useState, useEffect } from "react";

export default function Page() {
   const [heading, setHeading] = useState("");
   const [desc, setDesc] = useState("");
   const [img, setImg] = useState("");
   const [list, setList] = useState([]);

   async function load() {
      const r = await fetch("/api/gallery");
      setList(await r.json());
   }

   async function create() {
      await fetch("/api/gallery", {
         method: "POST",
         body: JSON.stringify({
            heading,
            description: desc,
            image: img
         })
      });
      setHeading("");
      setDesc("");
      setImg("");
      load();
   }

   useEffect(load, []);

   return (
      <div>
         <h1 className="text-xl font-bold mb-6">Gallery</h1>

         <input value={heading} onChange={e => setHeading(e.target.value)} placeholder="Heading" className="border p-2 mr-2" />
         <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" className="border p-2 mr-2" />
         <input value={img} onChange={e => setImg(e.target.value)} placeholder="Image URL" className="border p-2 mr-2" />

         <button onClick={create} className="bg-black text-white px-4">Add</button>

         {list.map(g => (
            <div key={g._id} className="border p-3 mt-3">{g.heading}</div>
         ))}
      </div>
   );
}
