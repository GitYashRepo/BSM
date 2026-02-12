"use client";

import { useState, useEffect } from "react";

export default function Page() {
   const [cats, setCats] = useState([]);
   const [subs, setSubs] = useState([]);
   const [heads, setHeads] = useState([]);

   const [cat, setCat] = useState("");
   const [sub, setSub] = useState("");
   const [head, setHead] = useState("");

   const [name, setName] = useState("");
   const [price, setPrice] = useState("");

   const [list, setList] = useState([]);

   useEffect(() => {
      fetch("/api/categories").then(r => r.json()).then(setCats);
      load();
   }, []);

   async function load() {
      const r = await fetch("/api/services");
      setList(await r.json());
   }

   async function loadSubs(id) {
      const r = await fetch(`/api/subcategory?categoryId=${id}`);
      setSubs(await r.json());
   }

   async function loadHeads(id) {
      const r = await fetch(`/api/heading?subCategoryId=${id}`);
      setHeads(await r.json());
   }

   async function create() {
      await fetch("/api/services", {
         method: "POST",
         body: JSON.stringify({
            category: cat,
            subCategory: sub,
            workHeading: head,
            workName: name,
            price: Number(price)
         })
      });
      setName("");
      setPrice("");
      load();
   }

   return (
      <div>
         <h1 className="text-xl font-bold mb-6">Services</h1>

         <div className="flex gap-2 flex-wrap mb-6">
            <select onChange={e => { setCat(e.target.value); loadSubs(e.target.value); }} className="border p-2">
               <option>Category</option>
               {cats.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
            </select>

            <select onChange={e => { setSub(e.target.value); loadHeads(e.target.value); }} className="border p-2">
               <option>SubCategory</option>
               {subs.map(s => <option key={s._id} value={s._id}>{s.name}</option>)}
            </select>

            <select onChange={e => setHead(e.target.value)} className="border p-2">
               <option>Heading</option>
               {heads.map(h => <option key={h._id} value={h._id}>{h.title}</option>)}
            </select>

            <input value={name} onChange={e => setName(e.target.value)} placeholder="Service name" className="border p-2" />
            <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" className="border p-2" />

            <button onClick={create} className="bg-black text-white px-4">Add</button>
         </div>

         {list.map(s => (
            <div key={s._id} className="border p-3 mb-2">
               {s.workName} — ₹{s.price}
            </div>
         ))}
      </div>
   );
}
