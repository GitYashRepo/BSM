



export default function AdminLayout({ children }) {
   return (
      <div className="flex min-h-screen">

         {/* SIDEBAR */}
         <aside className="w-64 bg-black text-white p-6 space-y-6">
            <h1 className="text-2xl font-bold">Salon Admin</h1>

            <nav className="flex flex-col gap-4 text-sm">
               <a href="/admin/categories">Categories</a>
               <a href="/admin/subcategories">SubCategories</a>
               <a href="/admin/headings">Headings</a>
               <a href="/admin/dashboard">Services</a>
               <a href="/admin/gallery">Gallery</a>
               <a href="/admin/offers">Offers</a>
            </nav>
         </aside>

         {/* CONTENT */}
         <main className="flex-1 p-10 bg-gray-50">
            {children}
         </main>
      </div>
   );
}
