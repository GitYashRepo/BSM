"use client";
import { useState, useEffect } from "react";
import { Trash2, Tag } from "lucide-react";

export default function ServicesDashboard() {
   const [categories, setCategories] = useState([]);
   const [services, setServices] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState("");
   const [workName, setWorkName] = useState("");
   const [price, setPrice] = useState("");
   const [offerPrice, setOfferPrice] = useState("");
   const [editingOffer, setEditingOffer] = useState(null);

   async function fetchCategories() {
      const res = await fetch("/api/categories");
      setCategories(await res.json());
   }

   async function fetchServices() {
      const res = await fetch("/api/services");
      setServices(await res.json());
   }

   useEffect(() => {
      fetchCategories();
      fetchServices();
   }, []);

   async function createService(e) {
      e.preventDefault();
      if (!selectedCategory || !workName || !price) {
         alert("Please fill all required fields");
         return;
      }
      const res = await fetch("/api/services", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ category: selectedCategory, workName, price, offerPrice }),
      });
      if (res.ok) {
         setWorkName(""); setPrice(""); setOfferPrice("");
         fetchServices();
      } else {
         const data = await res.json();
         alert(data.message || "Failed to create service");
      }
   }

   async function deleteService(id) {
      if (!confirm("Delete this service?")) return;
      await fetch("/api/services", {
         method: "DELETE",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ id }),
      });
      fetchServices();
   }

   async function updateOfferPrice(id, val) {
      const res = await fetch("/api/services", {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ id, offerPrice: val }),
      });
      if (res.ok) { setEditingOffer(null); fetchServices(); }
      else alert("Failed to update");
   }

   return (
      <div className="p-6">
         <h1 className="text-2xl font-bold mb-6">Services Dashboard</h1>

         <form onSubmit={createService} className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
               <label className="block text-sm font-medium mb-1">Category *</label>
               <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="w-full border p-2 rounded">
                  <option value="">Select Category</option>
                  {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
               </select>
            </div>
            <div>
               <label className="block text-sm font-medium mb-1">Work Name *</label>
               <input value={workName} onChange={e => setWorkName(e.target.value)} placeholder="e.g. Loreal Hairspa" className="w-full border p-2 rounded" />
            </div>
            <div>
               <label className="block text-sm font-medium mb-1">Price *</label>
               <input
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  placeholder="e.g.  500  or  1000/1100/1200"
                  className="w-full border p-2 rounded font-mono"
               />
               <p className="text-xs text-gray-400 mt-1">Use <code>/</code> to separate multiple prices: <code>1000/1100/1200</code></p>
            </div>
            <div>
               <label className="block text-sm font-medium mb-1">Offer Price — Optional</label>
               <input
                  value={offerPrice}
                  onChange={e => setOfferPrice(e.target.value)}
                  placeholder="e.g.  800  or  900/1000/1100"
                  className="w-full border p-2 rounded font-mono"
               />
            </div>
            <div className="md:col-span-2 flex justify-end">
               <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Add Service</button>
            </div>
         </form>

         <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="w-full text-left text-sm">
               <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                  <tr>
                     <th className="p-4 border-b">Work Name</th>
                     <th className="p-4 border-b">Category</th>
                     <th className="p-4 border-b">Price</th>
                     <th className="p-4 border-b">Offer Price</th>
                     <th className="p-4 border-b text-right">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {services.length === 0 && (
                     <tr><td colSpan={5} className="p-6 text-center text-gray-400 italic">No services yet.</td></tr>
                  )}
                  {services.map(s => (
                     <tr key={s._id} className="hover:bg-gray-50">
                        <td className="p-4 border-b font-medium">{s.workName}</td>
                        <td className="p-4 border-b text-gray-500">{s.category?.name}</td>
                        <td className="p-4 border-b font-mono">₹ {s.price}</td>
                        <td className="p-4 border-b">
                           {editingOffer?.id === s._id ? (
                              <div className="flex items-center gap-1">
                                 <input value={editingOffer.value} onChange={e => setEditingOffer({ ...editingOffer, value: e.target.value })} className="w-32 border p-1 rounded text-sm font-mono" placeholder="e.g. 900/1000" />
                                 <button onClick={() => updateOfferPrice(s._id, editingOffer.value)} className="text-xs bg-green-600 text-white px-2 py-1 rounded">Save</button>
                                 <button onClick={() => setEditingOffer(null)} className="text-xs text-gray-400">✕</button>
                              </div>
                           ) : (
                              <span onClick={() => setEditingOffer({ id: s._id, value: s.offerPrice ?? "" })} className="cursor-pointer text-green-600 hover:underline font-mono" title="Click to edit">
                                 {s.offerPrice ? `₹ ${s.offerPrice}` : <span className="text-gray-300 text-xs">— click to set</span>}
                              </span>
                           )}
                        </td>
                        <td className="p-4 border-b text-right">
                           <div className="flex items-center justify-end gap-3">
                              <button onClick={() => setEditingOffer({ id: s._id, value: s.offerPrice ?? "" })} className="text-gray-400 hover:text-amber-500" title="Edit offer price"><Tag size={15} /></button>
                              <button onClick={() => deleteService(s._id)} className="text-gray-400 hover:text-red-500" title="Delete"><Trash2 size={15} /></button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
