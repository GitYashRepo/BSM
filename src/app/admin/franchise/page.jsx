"use client";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

export default function FranchiseAdminPage() {
   const [forms, setForms] = useState([]);
   const [loading, setLoading] = useState(true);

   async function fetchForms() {
      try {
         const res = await fetch("/api/franchise");
         if (res.ok) setForms(await res.json());
      } catch (err) {
         console.error(err);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      fetchForms();
   }, []);

   async function handleDelete(id) {
      if (!confirm("Are you sure you want to delete this submission?")) return;
      await fetch("/api/franchise", {
         method: "DELETE",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ id }),
      });
      fetchForms();
   }

   if (loading) return <div className="p-6">Loading submissions...</div>;

   return (
      <div className="max-w-6xl mx-auto">
         <h1 className="text-3xl font-serif font-bold mb-8">Franchise Applications</h1>

         {forms.length === 0 ? (
            <p className="text-gray-500 italic">No franchise applications found.</p>
         ) : (
            <div className="overflow-x-auto bg-white rounded-xl shadow border">
               <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-gray-50 border-b text-gray-900 font-medium">
                     <tr>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Contact</th>
                        <th className="px-4 py-3">Location</th>
                        <th className="px-4 py-3">Experience</th>
                        <th className="px-4 py-3">Investment</th>
                        <th className="px-4 py-3 w-1/3">Message</th>
                        <th className="px-4 py-3 text-right">Delete</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y">
                     {forms.map(form => (
                        <tr key={form._id} className="hover:bg-gray-50 transition">
                           <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                              {new Date(form.createdAt).toLocaleDateString()}
                           </td>
                           <td className="px-4 py-3 font-medium text-gray-900">{form.name}</td>
                           <td className="px-4 py-3">
                              <p>{form.email}</p>
                              <p className="text-xs text-gray-500">{form.phone}</p>
                           </td>
                           <td className="px-4 py-3">{form.location}</td>
                           <td className="px-4 py-3 capitalize">{form.experience || "N/A"}</td>
                           <td className="px-4 py-3">{form.investment || "N/A"}</td>
                           <td className="px-4 py-3 text-xs leading-relaxed max-w-xs truncate" title={form.message}>
                              {form.message || "-"}
                           </td>
                           <td className="px-4 py-3 text-right">
                              <button
                                 onClick={() => handleDelete(form._id)}
                                 className="text-gray-400 hover:text-red-500 transition"
                              >
                                 <Trash2 size={18} />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         )}
      </div>
   );
}
