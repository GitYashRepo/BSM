"use client";

import { useState, useEffect } from "react";

export default function Page() {
   const [cats, setCats] = useState([]);
   const [subs, setSubs] = useState([]);
   const [sub, setSub] = useState("");
   const [title, setTitle] = useState("");
   const [list, setList] = useState([]);

   useEffect(() => {
      fetch("/api/categories").then(r => r.json()).then(setCats);
   }, []);

   async function loadSubs(id) {
      const r = await fetch(`/api/subcategory?categoryId=${id}`);
      setSubs(await r.json());
   }

   async function loadHeads(id) {
      const r = await fetch(`/api/heading?subCategoryId=${id}`);
      setList(await r.json());
   }

   async function create() {
      await fetch("/api/heading", {
         method: "POST",
         body: JSON.stringify({ title, subCategory: sub })
      });
      setTitle("");
      loadHeads(sub);
   }

   return (
      <div>
         <h1 className="text-xl font-bold mb-6">Work Headings</h1>

         <select onChange={e => loadSubs(e.target.value)} className="border p-2 mr-2">
            <option>Select Category</option>
            {cats.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
         </select>

         <select onChange={e => { setSub(e.target.value); loadHeads(e.target.value); }} className="border p-2">
            <option>Select SubCategory</option>
            {subs.map(s => <option key={s._id} value={s._id}>{s.name}</option>)}
         </select>

         {sub && (
            <div className="flex gap-2 my-6">
               <input value={title} onChange={e => setTitle(e.target.value)} className="border p-2" />
               <button onClick={create} className="bg-black text-white px-4">Add</button>
            </div>
         )}

         {list.map(h => (
            <div key={h._id} className="border p-3 mb-2">{h.title}</div>
         ))}
      </div>
   );
}
