"use client";
import { useState, useEffect } from "react";
import { Trash2, Plus } from "lucide-react";

export default function OffersPage() {
   const [form, setForm] = useState({
      type: "daily",
      heading: "",
      regularPrice: "",
      discountedPrice: "",
      description: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: ""
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
         const payload = {
            ...form,
            regularPrice: form.regularPrice === "" ? null : Number(form.regularPrice),
            discountedPrice: form.discountedPrice === "" ? null : Number(form.discountedPrice),
            startDate: form.startDate === "" ? null : form.startDate,
            endDate: form.endDate === "" ? null : form.endDate,
            startTime: form.startTime === "" ? null : form.startTime,
            endTime: form.endTime === "" ? null : form.endTime,
         };

         const res = await fetch("/api/offer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
         });
         if (res.ok) {
            setForm({
               type: "daily",
               heading: "",
               regularPrice: "",
               discountedPrice: "",
               description: "",
               startDate: "",
               endDate: "",
               startTime: "",
               endTime: ""
            });
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
      <div className="max-w-4xl mx-auto">
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

               <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1">
                     <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                     <input
                        type="date"
                        value={form.startDate}
                        onChange={e => setForm({ ...form, startDate: e.target.value })}
                        className="w-full border p-2.5 rounded-lg outline-none text-sm"
                     />
                  </div>
                  <div className="md:col-span-1">
                     <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                     <input
                        type="date"
                        value={form.endDate}
                        onChange={e => setForm({ ...form, endDate: e.target.value })}
                        className="w-full border p-2.5 rounded-lg outline-none text-sm"
                     />
                  </div>
                  <div className="md:col-span-1">
                     <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                     <input
                        type="time"
                        value={form.startTime}
                        onChange={e => setForm({ ...form, startTime: e.target.value })}
                        className="w-full border p-2.5 rounded-lg outline-none text-sm"
                     />
                  </div>
                  <div className="md:col-span-1">
                     <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                     <input
                        type="time"
                        value={form.endTime}
                        onChange={e => setForm({ ...form, endTime: e.target.value })}
                        className="w-full border p-2.5 rounded-lg outline-none text-sm"
                     />
                  </div>
                  <p className="md:col-span-4 text-[11px] text-gray-500 italic">Leaves blank for continuous visibility.</p>
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
               <div key={o._id} className="bg-white p-5 rounded-xl border shadow-sm flex justify-between items-center group hover:border-amber-200 transition text-sm">
                  <div className="space-y-1">
                     <div className="flex items-center gap-2">
                        <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ${o.type === 'daily' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                           {o.type}
                        </span>
                        {(() => {
                           const now = new Date();
                           const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                           
                           if (o.startDate) {
                              const start = new Date(o.startDate);
                              const offerStart = new Date(start.getFullYear(), start.getMonth(), start.getDate());
                              if (offerStart > today) return <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">Upcoming</span>;
                           }
                           
                           if (o.endDate) {
                              const end = new Date(o.endDate);
                              const offerEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate());
                              if (offerEnd < today) return <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-red-100 text-red-600">Expired</span>;
                           }
                           
                           return <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-green-100 text-green-600">Active Now</span>;
                        })()}
                        <h3 className="font-bold text-gray-900">{o.heading}</h3>
                     </div>
                     {((o.discountedPrice && Number(o.discountedPrice) > 0) || (o.regularPrice && Number(o.regularPrice) > 0)) ? (
                        <p className="text-sm text-gray-500">
                           Price: {o.regularPrice && Number(o.regularPrice) > 0 && <span className="line-through mr-1">₹{o.regularPrice}</span>}
                           {o.discountedPrice && Number(o.discountedPrice) > 0 && <span className="text-green-600 font-bold">₹{o.discountedPrice}</span>}
                        </p>
                     ) : (
                        <p className="text-sm text-gray-400 italic">No price set (Optional display)</p>
                     )}
                     {(o.startDate || o.endDate || o.startTime || o.endTime) && (
                        <p className="text-[11px] text-amber-600 font-medium">
                           Timing: {o.startDate ? new Date(o.startDate).toLocaleDateString() : 'Always'} - {o.endDate ? new Date(o.endDate).toLocaleDateString() : 'Forever'}
                           {(o.startTime || o.endTime) && ` | ${o.startTime || '00:00'} to ${o.endTime || '23:59'}`}
                        </p>
                     )}
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
