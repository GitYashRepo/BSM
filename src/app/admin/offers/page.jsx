"use client";
import { useState, useEffect } from "react";
import { Trash2, Plus } from "lucide-react";

export default function OffersPage() {
   const [form, setForm] = useState({
      type: "daily",
      heading: "",
      regularPrice: "",
      discountedPrice: "",
      description: ""
   });
   const [list, setList] = useState([]);
   const [loading, setLoading] = useState(false);

   async function load() {
      const r = await fetch("/api/offer");
      setList(await r.json());
   }

   useEffect(() => {
      load();
   }, []);

   async function create(e) {
      e.preventDefault();
      setLoading(true);
      try {
         const res = await fetch("/api/offer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
         });
         if (res.ok) {
            setForm({ type: "daily", heading: "", regularPrice: "", discountedPrice: "", description: "" });
            load();
         }
      } catch (err) {
         console.error(err);
      } finally {
         setLoading(false);
      }
   }

   async function del(id) {
      if (!confirm("Are you sure?")) return;
      await fetch("/api/offer", {
         method: "DELETE",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ id }),
      });
      load();
   }

   return (
      <div className="p-6 max-w-4xl mx-auto">
         <h1 className="text-3xl font-serif font-bold mb-8">Offer Management</h1>

         <form onSubmit={create} className="bg-white p-6 rounded-xl shadow-sm border mb-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Offer Title / Heading</label>
                  <input
                     required
                     value={form.heading}
                     onChange={e => setForm({ ...form, heading: e.target.value })}
                     placeholder="e.g. Special Weekend Facial"
                     className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                     value={form.type}
                     onChange={e => setForm({ ...form, type: e.target.value })}
                     className="w-full border p-2.5 rounded-lg outline-none"
                  >
                     <option value="daily">Daily Offer</option>
                     <option value="seasonal">Seasonal Offer</option>
                  </select>
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Regular Price</label>
                  <input
                     type="number"
                     value={form.regularPrice}
                     onChange={e => setForm({ ...form, regularPrice: e.target.value })}
                     placeholder="₹ Regular"
                     className="w-full border p-2.5 rounded-lg outline-none"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Discount Price</label>
                  <input
                     type="number"
                     value={form.discountedPrice}
                     onChange={e => setForm({ ...form, discountedPrice: e.target.value })}
                     placeholder="₹ Discounted"
                     className="w-full border p-2.5 rounded-lg outline-none"
                  />
               </div>

               <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Short Description (Optional)</label>
                  <textarea
                     value={form.description}
                     onChange={e => setForm({ ...form, description: e.target.value })}
                     placeholder="Describe the offer..."
                     className="w-full border p-2.5 rounded-lg outline-none h-24"
                  />
               </div>
            </div>

            <button
               disabled={loading}
               type="submit"
               className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2"
            >
               {loading ? "Creating..." : <><Plus size={18} /> Create Offer</>}
            </button>
         </form>

         <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Existing Offers</h2>
            {list.length === 0 && <p className="text-gray-500 italic">No offers found.</p>}
            {list.map(o => (
               <div key={o._id} className="bg-white p-5 rounded-xl border shadow-sm flex justify-between items-center group hover:border-amber-200 transition">
                  <div className="space-y-1">
                     <div className="flex items-center gap-2">
                        <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ${o.type === 'daily' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                           {o.type}
                        </span>
                        <h3 className="font-bold text-gray-900">{o.heading}</h3>
                     </div>
                     <p className="text-sm text-gray-500">
                        Price: <span className="line-through">₹{o.regularPrice}</span> <span className="text-green-600 font-bold ml-1">₹{o.discountedPrice}</span>
                     </p>
                  </div>
                  <button
                     onClick={() => del(o._id)}
                     className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                     <Trash2 size={20} />
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
}
