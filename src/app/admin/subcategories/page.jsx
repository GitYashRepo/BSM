"use client";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

export default function SubCategoriesPage() {
   const [cats, setCats] = useState([]);
   const [cat, setCat] = useState("");
   const [name, setName] = useState("");
   const [list, setList] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      fetch("/api/categories")
         .then(r => r.json())
         .then(setCats);
   }, []);

   async function load(id) {
      if (!id) return;
      const r = await fetch(`/api/subcategory?categoryId=${id}`);
      setList(await r.json());
   }

   async function create(e) {
      e.preventDefault();
      if (!cat || !name.trim()) return;
      setLoading(true);
      const res = await fetch("/api/subcategory", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ name, category: cat }),
      });
      if (res.ok) {
         setName("");
         load(cat);
      } else {
         alert("Failed to create");
      }
      setLoading(false);
   }

   async function del(id) {
      if (!confirm("Delete this sub-category?")) return;
      const res = await fetch("/api/subcategory", {
         method: "DELETE",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ id }),
      });
      if (res.ok) load(cat);
      else alert("Failed to delete");
   }

   return (
      <div className="p-6 max-w-2xl mx-auto">
         <h1 className="text-2xl font-bold mb-6">Sub-Categories</h1>

         <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Select Category</label>
            <select
               onChange={e => {
                  setCat(e.target.value);
                  load(e.target.value);
               }}
               className="w-full border p-2.5 rounded-lg outline-none"
            >
               <option value="">— Select Category —</option>
               {cats.map(c => (
                  <option key={c._id} value={c._id}>{c.name}</option>
               ))}
            </select>
         </div>

         {cat && (
            <form onSubmit={create} className="flex gap-2 mb-6">
               <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="flex-1 border p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Sub-category name (e.g. Normal Wax, Brazilian Wax)"
               />
               <button
                  disabled={loading}
                  className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
               >
                  {loading ? "Adding..." : "Add"}
               </button>
            </form>
         )}

         <div className="space-y-2">
            {cat && list.length === 0 && (
               <p className="text-gray-400 italic text-sm">No sub-categories for this category yet.</p>
            )}
            {list.map(s => (
               <div key={s._id} className="flex justify-between items-center border p-3.5 rounded-lg bg-white hover:shadow-sm transition">
                  <div>
                     <span className="font-medium">{s.name}</span>
                     {s.category?.name && (
                        <span className="ml-2 text-xs text-gray-400">({s.category.name})</span>
                     )}
                  </div>
                  <button
                     onClick={() => del(s._id)}
                     className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                     title="Delete sub-category"
                  >
                     <Trash2 size={16} />
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
}
