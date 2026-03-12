"use client";
import { useState, useEffect } from "react";

export default function Page() {
   const [heading, setHeading] = useState("");
   const [desc, setDesc] = useState("");
   const [img, setImg] = useState("");
   const [category, setCategory] = useState("All");
   const [list, setList] = useState([]);

   const [loading, setLoading] = useState(false);

   async function load() {
      const r = await fetch("/api/gallery/image");
      setList(await r.json());
   }

   async function create() {
      if (!img || !heading) return;

      if (img.size > 10 * 1024 * 1024) {
         alert("Image must be smaller than 10MB");
         return;
      }

      setLoading(true);

      try {
         // 1. Upload file to Cloudinary
         const formData = new FormData();
         formData.append("file", img);

         const uploadRes = await fetch("/api/upload", {
            method: "POST",
            body: formData,
         });

         if (!uploadRes.ok) {
            alert("Upload failed.");
            setLoading(false);
            return;
         }

         const uploadData = await uploadRes.json();
         const imageUrl = uploadData.secure_url;

         // 2. Save gallery item with uploaded URL
         await fetch("/api/gallery/image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               heading,
               description: desc,
               src: imageUrl,
               alt: heading,
               category: category
            })
         });

         setHeading("");
         setDesc("");
         setImg("");
         load();
      } catch (err) {
         console.error(err);
         alert("An error occurred");
      } finally {
         setLoading(false);
      }
   }

   async function deleteItem(id) {
      if (!confirm("Are you sure you want to delete this image?")) return;
      try {
         const res = await fetch(`/api/gallery/image/${id}`, { method: "DELETE" });
         if (res.ok) {
            load();
         } else {
            alert("Failed to delete image.");
         }
      } catch (err) {
         console.error(err);
         alert("An error occurred while deleting.");
      }
   }

   useEffect(() => {
      load();
   }, []);

   return (
      <div>
         <h1 className="text-xl font-bold mb-6">Gallery</h1>

         <div className="flex flex-col gap-3 mb-6 max-w-sm">
            <input value={heading} onChange={e => setHeading(e.target.value)} placeholder="Heading" className="border p-2 rounded" />
            <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" className="border p-2 rounded" />
            <select value={category} onChange={e => setCategory(e.target.value)} className="border p-2 rounded">
               <option value="All">All</option>
               <option value="Bridal-MakeUp">Bridal MakeUp</option>
               <option value="Party-MakeUp">Party MakeUp</option>
               <option value="Engagement-MakeUp">Engagement MakeUp</option>
               <option value="Hair-Styling">Hair Styling</option>
               {/* <option value="Hair-Color">Hair Color</option> */}
               {/* <option value="Mehndi">Mehndi</option> */}
               <option value="Nail-Art">Nail Art</option>
               <option value="Skin-Care">Skin Care</option>
               <option value="Eye-MakeUp">Eye MakeUp</option>
               {/* <option value="Mehendi-Bridal">Mehendi Bridal</option> */}
            </select>
            <input type="file" accept="image/*" onChange={e => setImg(e.target.files[0])} className="border p-2 rounded" />

            <button onClick={create} disabled={loading || !img} className="bg-black text-white px-4 py-2 rounded disabled:opacity-50">
               {loading ? "Uploading..." : "Add to Gallery"}
            </button>
         </div>

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {list.map(g => (
               <div key={g._id} className="relative border p-3 rounded shadow-sm text-sm">
                  <button onClick={() => deleteItem(g._id)} className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-md text-xs z-10 shadow transition-colors">
                     Delete
                  </button>
                  {g.src && <img src={g.src} alt={g.alt} className="w-full h-32 object-cover rounded mb-2" />}
                  <h3 className="font-bold">{g.heading}</h3>
                  <p className="text-gray-500 mb-1">{g.description}</p>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">{g.category}</span>
               </div>
            ))}
         </div>
      </div>
   );
}
