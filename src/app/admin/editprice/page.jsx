"use client";

import { useEffect, useState } from "react";

export default function AdminEditPricePage() {
   const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(false);

   // Category form
   const [categoryName, setCategoryName] = useState("");

   // Service form
   const [selectedCategory, setSelectedCategory] = useState("");
   const [workName, setWorkName] = useState("");
   const [price, setPrice] = useState("");
   const [offerPercentage, setOfferPercentage] = useState("");
   const [offerPrice, setOfferPrice] = useState("");

   // ======================
   // Fetch Categories
   // ======================
   const fetchCategories = async () => {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
   };

   useEffect(() => {
      fetchCategories();
   }, []);

   // ======================
   // Create Category
   // ======================
   const handleCreateCategory = async (e) => {
      e.preventDefault();
      if (!categoryName.trim()) return;

      setLoading(true);
      await fetch("/api/categories", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ name: categoryName }),
      });

      setCategoryName("");
      setLoading(false);
      fetchCategories();
   };

   // ======================
   // Auto calculate offer price
   // ======================
   useEffect(() => {
      if (price && offerPercentage) {
         const discounted =
            price - (price * offerPercentage) / 100;
         setOfferPrice(Math.round(discounted));
      }
   }, [price, offerPercentage]);

   // ======================
   // Create Service
   // ======================
   const handleCreateService = async (e) => {
      e.preventDefault();

      if (!selectedCategory || !workName || !price) {
         alert("Category, Work Name and Price are required");
         return;
      }

      await fetch("/api/services", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            category: selectedCategory,
            workName,
            price: Number(price),
            offerPercentage: offerPercentage
               ? Number(offerPercentage)
               : 0,
            offerPrice: offerPrice
               ? Number(offerPrice)
               : Number(price),
         }),
      });

      setWorkName("");
      setPrice("");
      setOfferPercentage("");
      setOfferPrice("");
      alert("Service added successfully");
   };

   return (
      <div className="max-w-3xl mx-auto p-6 space-y-10">
         {/* =====================
          CATEGORY MANAGEMENT
      ====================== */}
         <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">
               Manage Categories
            </h2>

            {/* Create Category */}
            <form
               onSubmit={handleCreateCategory}
               className="flex gap-3 mb-6"
            >
               <input
                  type="text"
                  placeholder="Category name (e.g. Hair, Skin)"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="flex-1 border rounded-lg px-4 py-2"
               />

               <button
                  disabled={loading}
                  className="bg-black text-white px-5 py-2 rounded-lg"
               >
                  Add
               </button>
            </form>

            {/* Category List */}
            <div className="space-y-3">
               {categories.length === 0 && (
                  <p className="text-sm text-gray-500">
                     No categories created yet.
                  </p>
               )}

               {categories.map((cat) => (
                  <CategoryRow
                     key={cat._id}
                     category={cat}
                     refresh={fetchCategories}
                  />
               ))}
            </div>
         </div>

         {/* =====================
          CREATE SERVICE
      ====================== */}
         <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-6">
               Add Work & Pricing
            </h2>

            <form
               onSubmit={handleCreateService}
               className="grid grid-cols-1 gap-4"
            >
               {/* Category Select */}
               <select
                  value={selectedCategory}
                  onChange={(e) =>
                     setSelectedCategory(e.target.value)
                  }
                  className="border rounded-lg px-4 py-2"
               >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                     <option key={cat._id} value={cat._id}>
                        {cat.name}
                     </option>
                  ))}
               </select>

               {/* Work Name */}
               <input
                  type="text"
                  placeholder="Work name (e.g. Hair Spa)"
                  value={workName}
                  onChange={(e) => setWorkName(e.target.value)}
                  className="border rounded-lg px-4 py-2"
               />

               {/* Price */}
               <input
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="border rounded-lg px-4 py-2"
               />

               {/* Offer Percentage */}
               <input
                  type="number"
                  placeholder="Discount % (optional)"
                  value={offerPercentage}
                  onChange={(e) =>
                     setOfferPercentage(e.target.value)
                  }
                  className="border rounded-lg px-4 py-2"
               />

               {/* Offer Price */}
               <input
                  type="number"
                  placeholder="Offer Price"
                  value={offerPrice}
                  onChange={(e) => setOfferPrice(e.target.value)}
                  className="border rounded-lg px-4 py-2"
               />

               <button className="bg-black text-white py-3 rounded-lg">
                  Save Work
               </button>
            </form>
         </div>
      </div>
   );
}

/* =====================
   CATEGORY ROW COMPONENT
===================== */
function CategoryRow({ category, refresh }) {
   const [editing, setEditing] = useState(false);
   const [name, setName] = useState(category.name);
   const [saving, setSaving] = useState(false);

   const updateCategory = async () => {
      if (!name.trim()) return;

      setSaving(true);
      await fetch("/api/categories", {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            id: category._id,
            name,
         }),
      });

      setSaving(false);
      setEditing(false);
      refresh();
   };

   const deleteCategory = async () => {
      const confirmDelete = confirm(
         "Are you sure you want to delete this category?"
      );
      if (!confirmDelete) return;

      await fetch("/api/categories", {
         method: "DELETE",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            id: category._id,
         }),
      });

      refresh();
   };

   return (
      <div className="flex items-center gap-3 border rounded-lg p-3">
         {editing ? (
            <input
               value={name}
               onChange={(e) => setName(e.target.value)}
               className="flex-1 border rounded px-3 py-1"
            />
         ) : (
            <span className="flex-1 font-medium">
               {category.name}
            </span>
         )}

         {editing ? (
            <button
               onClick={updateCategory}
               disabled={saving}
               className="text-green-600 text-sm"
            >
               Save
            </button>
         ) : (
            <button
               onClick={() => setEditing(true)}
               className="text-blue-600 text-sm"
            >
               Edit
            </button>
         )}

         <button
            onClick={deleteCategory}
            className="text-red-600 text-sm"
         >
            Delete
         </button>
      </div>
   );
}
