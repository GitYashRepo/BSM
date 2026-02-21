"use client";
import { useState, useEffect } from "react";
import { Trash2, ChevronUp, ChevronDown } from "lucide-react";

export default function CategoriesPage() {
   const [categories, setCategories] = useState([]);
   const [name, setName] = useState("");
   const [order, setOrder] = useState("");
   const [saving, setSaving] = useState(false);

   async function fetchCategories() {
      const res = await fetch("/api/categories");
      setCategories(await res.json());
   }

   useEffect(() => { fetchCategories(); }, []);

   async function addCategory(e) {
      e.preventDefault();
      if (!name.trim()) return;

      const payload = { name };
      if (order !== "") payload.order = Number(order);

      const res = await fetch("/api/categories", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(payload),
      });
      if (res.ok) { setName(""); setOrder(""); fetchCategories(); }
      else { const d = await res.json(); alert(d.message || "Failed"); }
   }

   async function deleteCategory(id) {
      if (!confirm("Delete this category?")) return;
      await fetch("/api/categories", {
         method: "DELETE",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ id }),
      });
      fetchCategories();
   }

   // Move item up or down in local state
   function moveCategory(index, direction) {
      const arr = [...categories];
      const swapIdx = direction === "up" ? index - 1 : index + 1;
      if (swapIdx < 0 || swapIdx >= arr.length) return;

      // Swap their order values
      const tempOrder = arr[index].order !== undefined ? arr[index].order : index;
      arr[index].order = arr[swapIdx].order !== undefined ? arr[swapIdx].order : swapIdx;
      arr[swapIdx].order = tempOrder;

      // Swap items in the array for UI
      [arr[index], arr[swapIdx]] = [arr[swapIdx], arr[index]];
      setCategories(arr);
   }

   // Update typing sequence
   function updateOrderValue(id, value) {
      setCategories(categories.map(c => c._id === id ? { ...c, order: value } : c));
   }

   // Save the current sequence to the backend
   async function saveOrder() {
      setSaving(true);
      await fetch("/api/categories", {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            reorder: categories.map((c, i) => ({ id: c._id, order: Number(c.order !== undefined && c.order !== "" ? c.order : i) })),
         }),
      });
      setSaving(false);
      fetchCategories();
   }

   return (
      <div className="p-6 max-w-xl">
         <h1 className="text-2xl font-bold mb-6">Categories</h1>

         {/* Add form */}
         <form onSubmit={addCategory} className="flex gap-2 mb-8">
            <input
               value={name}
               onChange={e => setName(e.target.value)}
               placeholder="Category name"
               className="flex-1 border p-2 rounded"
               required
            />
            <input
               type="number"
               value={order}
               onChange={e => setOrder(e.target.value)}
               placeholder="Sequence"
               className="w-24 border p-2 rounded"
            />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Add</button>
         </form>

         {/* Category list */}
         <div className="space-y-2">
            {categories.map((cat, idx) => (
               <div key={cat._id} className="flex items-center gap-2 bg-white border rounded-lg px-4 py-3 shadow-sm">
                  {/* Sequence Input */}
                  <input
                     type="number"
                     value={cat.order !== undefined ? cat.order : idx}
                     onChange={(e) => updateOrderValue(cat._id, e.target.value)}
                     className="w-16 border rounded p-1 text-center text-sm"
                     placeholder="Seq"
                  />

                  {/* Name */}
                  <span className="flex-1 font-medium text-sm">{cat.name}</span>

                  {/* Up / Down */}
                  <div className="flex flex-col">
                     <button
                        onClick={() => moveCategory(idx, "up")}
                        disabled={idx === 0}
                        className="text-gray-400 hover:text-gray-700 disabled:opacity-20 disabled:cursor-not-allowed"
                     ><ChevronUp size={16} /></button>
                     <button
                        onClick={() => moveCategory(idx, "down")}
                        disabled={idx === categories.length - 1}
                        className="text-gray-400 hover:text-gray-700 disabled:opacity-20 disabled:cursor-not-allowed"
                     ><ChevronDown size={16} /></button>
                  </div>

                  {/* Delete */}
                  <button
                     onClick={() => deleteCategory(cat._id)}
                     className="text-gray-300 hover:text-red-500 transition-colors ml-1"
                  ><Trash2 size={15} /></button>
               </div>
            ))}
         </div>

         {/* Save order */}
         {categories.length > 1 && (
            <button
               onClick={saveOrder}
               disabled={saving}
               className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
            >
               {saving ? "Saving…" : "Save Page Order"}
            </button>
         )}
         <p className="text-xs text-gray-400 mt-2 text-center">Use the arrows to reorder, then click <strong>Save Page Order</strong>.</p>
      </div>
   );
}
