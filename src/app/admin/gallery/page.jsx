"use client";
import { useState, useEffect } from "react";

export default function Page() {
   const [heading, setHeading] = useState("");
   const [desc, setDesc] = useState("");
   const [img, setImg] = useState("");
   const [list, setList] = useState([]);

   const [loading, setLoading] = useState(false);

   async function load() {
      const r = await fetch("/api/gallery/image");
      setList(await r.json());
   }

   async function create() {
      if (!img || !heading) return;
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
               category: "All" // default category just for scaffolding
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

   useEffect(() => {
      load();
   }, []);

   return (
      <div>
         <h1 className="text-xl font-bold mb-6">Gallery</h1>

         <div className="flex flex-col gap-3 mb-6 max-w-sm">
            <input value={heading} onChange={e => setHeading(e.target.value)} placeholder="Heading" className="border p-2 rounded" />
            <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" className="border p-2 rounded" />
            <input type="file" accept="image/*" onChange={e => setImg(e.target.files[0])} className="border p-2 rounded" />

            <button onClick={create} disabled={loading || !img} className="bg-black text-white px-4 py-2 rounded disabled:opacity-50">
               {loading ? "Uploading..." : "Add to Gallery"}
            </button>
         </div>

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {list.map(g => (
               <div key={g._id} className="border p-3 rounded shadow-sm text-sm">
                  {g.src && <img src={g.src} alt={g.alt} className="w-full h-32 object-cover rounded mb-2" />}
                  <h3 className="font-bold">{g.heading}</h3>
                  <p className="text-gray-500">{g.description}</p>
               </div>
            ))}
         </div>
      </div>
   );
}
