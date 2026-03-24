// "use client";

// import { ChevronRight, Sparkles, Phone, Mail, MapPin, Clock } from "lucide-react";
// import { useEffect, useState } from "react";
// import { backgroundColor } from "@/components/webcomp/webcolor/bgcolor";

// const navItems = [
//    {
//       label: "About",
//       items: [
//          { label: "About Me", href: "aboutme" },
//          { label: "About Us", href: "aboutus" },
//          { label: "Our Team", href: "ourteam" }
//       ],
//       featured: {
//          title: "Bridal Special",
//          description: "Complete bridal package with pre-bridal treatments, trials & D-day makeup",
//       },
//    },
//    {
//       label: "Makeup",
//       items: [
//          { label: "Bridal Makeup", href: "#bridal" },
//          { label: "Party Makeup", href: "#party" },
//          { label: "HD Makeup", href: "#hd" },
//          { label: "Airbrush Makeup", href: "#airbrush" },
//          { label: "Engagement Makeup", href: "#engagement" },
//          { label: "Celebrity Makeup", href: "#celebrity" },
//       ],
//       featured: {
//          title: "Bridal Special",
//          description: "Complete bridal package with pre-bridal treatments, trials & D-day makeup",
//       },
//    },
//    {
//       label: "Hair",
//       items: [
//          { label: "Haircuts", href: "#haircuts" },
//          { label: "Hair Color", href: "#color" },
//          { label: "Hair Spa", href: "#spa" },
//          { label: "Keratin Treatment", href: "#keratin" },
//          { label: "Smoothening", href: "#smoothening" },
//          { label: "Hair Extensions", href: "#extensions" },
//          { label: "Bridal Hairstyling", href: "#bridal-hair" },
//       ],
//       featured: {
//          title: "Hair Transformation",
//          description: "Expert stylists for the perfect look you deserve",
//       },
//    },
//    {
//       label: "Skin",
//       items: [
//          { label: "Facial", href: "#facial" },
//          { label: "Cleanup", href: "#cleanup" },
//          { label: "Bleach", href: "#bleach" },
//          { label: "Threading", href: "#threading" },
//          { label: "Waxing", href: "#waxing" },
//          { label: "Manicure", href: "#manicure" },
//          { label: "Pedicure", href: "#pedicure" },
//       ],
//       featured: {
//          title: "Glow Package",
//          description: "Complete beauty treatments for radiant skin",
//       },
//    },
//    {
//       label: "Esthetics",
//       items: [
//          { label: "Skin Treatments", href: "#skin" },
//          { label: "Anti-Aging", href: "#anti-aging" },
//          { label: "Acne Treatment", href: "#acne" },
//          { label: "Pigmentation", href: "#pigmentation" },
//          { label: "Laser Treatment", href: "#laser" },
//          { label: "Chemical Peels", href: "#peels" },
//       ],
//       featured: {
//          title: "Advanced Skincare",
//          description: "Clinical treatments for lasting results",
//       },
//    },
//    {
//       label: "Signature Services",
//       items: [
//          { label: "Bridal Makeovers", href: "#bridal-makeover" },
//          { label: "Pre-Bridal Package", href: "#pre-bridal" },
//          { label: "Groom Makeover", href: "#groom" },
//          { label: "Family Package", href: "#family" },
//          { label: "Celebrity Styling", href: "#celebrity-styling" },
//          { label: "Destination Wedding", href: "#destination" },
//       ],
//       featured: {
//          title: "Complete Bridal Experience",
//          description: "From engagement to reception - we've got you covered",
//       },
//    },
//    {
//       label: "Franchise",
//       items: [
//          { label: "Why Partner With Us", href: "#why-partner" },
//          { label: "Investment Details", href: "#investment" },
//          { label: "Support & Training", href: "#support" },
//          { label: "Success Stories", href: "#success" },
//          { label: "Apply Now", href: "#apply" },
//       ],
//       featured: {
//          title: "Own a BSM Franchise",
//          description: "Contact Nitin (CEO): 946-777-777-3",
//       },
//    },
//    {
//       label: "Contact",
//       items: [
//          { label: "Book Appointment", href: "contact#appointment" },
//          { label: "Our Locations", href: "contact#location" },
//          { label: "Working Hours", href: "#hours" },
//          { label: "Customer Support", href: "contact" },
//          { label: "Complaints", href: "contact" },
//       ],
//       featured: {
//          title: "Get In Touch",
//          description: "We're here to help you look your best",
//       },
//    },
// ];

// const BottomBar = () => {
//    const [activeMenu, setActiveMenu] = useState(null);
//    const [hoverTimer, setHoverTimer] = useState(null);

//    const handleMouseEnter = (label) => {
//       const timer = setTimeout(() => {
//          setActiveMenu(label);
//       }, 300);
//       setHoverTimer(timer);
//    };

//    const handleMouseLeave = () => {
//       clearTimeout(hoverTimer);
//       setActiveMenu(null);
//    };

//    useEffect(() => {
//       if (activeMenu) {
//          document.body.style.overflow = "hidden";
//       } else {
//          document.body.style.overflow = "";
//       }
//    }, [activeMenu]);

//    return (
//       <div className="text-white relative" style={{ backgroundColor: backgroundColor.velvet }}>
//          <div className="container mx-auto px-4">
//             <nav className="flex items-center justify-center gap-1">
//                {navItems.map((item) => (
//                   <div
//                      key={item.label}
//                      className="relative"
//                      onMouseEnter={() => handleMouseEnter(item.label)}
//                      onMouseLeave={handleMouseLeave}
//                   >
//                      <button className="px-4 py-2 text-navbar-bottom-foreground text-sm font-medium tracking-wide hover:bg-[#D99726] transition-colors nav-link-hover flex items-center gap-1">
//                         {item.label}
//                      </button>

//                      {activeMenu === item.label && (
//                         <div className="absolute left-0 w-full">
//                            <div
//                               className="fixed left-0 right-0 bg-card shadow-2xl border-t border-border mega-menu-enter z-50"
//                               style={{ top: "auto" }}
//                            >
//                               <div className="container max-h-[60vh] overflow-y-auto pointer-events-auto mx-auto px-8 py-8">
//                                  <div className="grid grid-cols-12 gap-8">
//                                     <div className="col-span-4">
//                                        <h3 className="text-lg font-display font-semibold text-[#D99276] mb-2 flex items-center gap-2">
//                                           {item.label}
//                                        </h3>
//                                        <ul className="space-y-2">
//                                           {item.items.map((subItem) => (
//                                              <li key={subItem.label}>
//                                                 <a
//                                                    href={subItem.href}
//                                                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
//                                                 >
//                                                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
//                                                    <span>{subItem.label}</span>
//                                                 </a>
//                                              </li>
//                                           ))}
//                                        </ul>
//                                     </div>

//                                     {item.featured && (
//                                        <div className="col-span-4">
//                                           <div className="bg-secondary/50 rounded-xl p-6 h-full">
//                                              <div className="flex items-center gap-2 mb-3">
//                                                 <Sparkles className="w-5 h-5 text-[#D99276]" />
//                                                 <h4 className="font-display font-semibold text-[#D99276]">
//                                                    {item.featured.title}
//                                                 </h4>
//                                              </div>
//                                              <p className="text-muted-foreground text-sm mb-4">
//                                                 {item.featured.description}
//                                              </p>
//                                              <a
//                                                 href="#"
//                                                 className="inline-flex items-center gap-2 text-[#D99276] font-medium text-sm hover:underline"
//                                              >
//                                                 Learn More
//                                                 <ChevronRight className="w-4 h-4" />
//                                              </a>
//                                           </div>
//                                        </div>
//                                     )}

//                                     <div className="col-span-4">
//                                        <div className="bg-muted rounded-xl p-6">
//                                           <h4 className="font-display font-semibold text-[#D99276] mb-4">
//                                              Quick Contact
//                                           </h4>
//                                           <ul className="space-y-3 text-sm">
//                                              <li className="flex items-center gap-3 text-muted-foreground">
//                                                 <Phone className="w-4 h-4 text-primary" />
//                                                 <div>
//                                                    <p className="font-medium text-foreground">90531-02324</p>
//                                                    <p className="text-xs">Bookings</p>
//                                                 </div>
//                                              </li>
//                                              <li className="flex items-center gap-3 text-muted-foreground">
//                                                 <Phone className="w-4 h-4 text-primary" />
//                                                 <div>
//                                                    <p className="font-medium text-foreground">94684-56266</p>
//                                                    <p className="text-xs">Reception (Sakshi Ma'am)</p>
//                                                 </div>
//                                              </li>
//                                              <li className="flex items-center gap-3 text-muted-foreground">
//                                                 <Mail className="w-4 h-4 text-primary" />
//                                                 <p className="font-medium text-foreground">sakshimakeovers@gmail.com</p>
//                                              </li>
//                                              <li className="flex items-center gap-3 text-muted-foreground">
//                                                 <Clock className="w-4 h-4 text-primary" />
//                                                 <p>10:00 AM - 7:00 PM</p>
//                                              </li>
//                                           </ul>
//                                           <div className="mt-4 pt-4 border-t border-border">
//                                              <p className="text-xs text-muted-foreground">
//                                                 For Complaints: Nitin (CEO)
//                                              </p>
//                                              <p className="text-sm font-medium text-foreground">
//                                                 946-777-777-3 <span className="text-xs text-muted-foreground">(WhatsApp only)</span>
//                                              </p>
//                                           </div>
//                                        </div>
//                                     </div>
//                                  </div>
//                               </div>
//                            </div>
//                         </div>
//                      )}
//                   </div>
//                ))}
//             </nav>
//          </div>
//       </div>
//    );
// };

// export default BottomBar;


"use client";

import { ChevronRight, Sparkles, Phone, Mail, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { backgroundColor } from "@/components/webcomp/webcolor/bgcolor";

const navItems = [
   {
      label: "About",
      items: [
         { label: "About Me", href: "aboutme" },
         { label: "About Us", href: "aboutus" },
         { label: "Our Team", href: "ourteam" }
      ],
      featured: {
         title: "Bridal Special",
         description: "Complete bridal package with pre-bridal treatments, trials & D-day makeup",
      },
   },
   {
      label: "Makeup",
      items: [
         { label: "Bridal Makeup", href: "#bridal" },
         { label: "Party Makeup", href: "#party" },
         { label: "HD Makeup", href: "#hd" },
         { label: "Airbrush Makeup", href: "#airbrush" },
         { label: "Engagement Makeup", href: "#engagement" },
         { label: "Celebrity Makeup", href: "#celebrity" },
      ],
      featured: {
         title: "Bridal Special",
         description: "Complete bridal package with pre-bridal treatments, trials & D-day makeup",
      },
   },
   {
      label: "Hair",
      items: [
         { label: "Haircuts", href: "#haircuts" },
         { label: "Hair Color", href: "#color" },
         { label: "Hair Spa", href: "#spa" },
         { label: "Keratin Treatment", href: "#keratin" },
         { label: "Smoothening", href: "#smoothening" },
         { label: "Hair Extensions", href: "#extensions" },
         { label: "Bridal Hairstyling", href: "#bridal-hair" },
      ],
      featured: {
         title: "Hair Transformation",
         description: "Expert stylists for the perfect look you deserve",
      },
   },
   {
      label: "Skin",
      items: [
         { label: "Facial", href: "#facial" },
         { label: "Cleanup", href: "#cleanup" },
         { label: "Bleach", href: "#bleach" },
         { label: "Threading", href: "#threading" },
         { label: "Waxing", href: "#waxing" },
         { label: "Manicure", href: "#manicure" },
         { label: "Pedicure", href: "#pedicure" },
      ],
      featured: {
         title: "Glow Package",
         description: "Complete beauty treatments for radiant skin",
      },
   },
   {
      label: "Esthetics",
      items: [
         { label: "Skin Treatments", href: "#skin" },
         { label: "Anti-Aging", href: "#anti-aging" },
         { label: "Acne Treatment", href: "#acne" },
         { label: "Pigmentation", href: "#pigmentation" },
         { label: "Laser Treatment", href: "#laser" },
         { label: "Chemical Peels", href: "#peels" },
      ],
      featured: {
         title: "Advanced Skincare",
         description: "Clinical treatments for lasting results",
      },
   },
   {
      label: "Signature Services",
      items: [
         { label: "Bridal Makeovers", href: "#bridal-makeover" },
         { label: "Pre-Bridal Package", href: "#pre-bridal" },
         { label: "Groom Makeover", href: "#groom" },
         { label: "Family Package", href: "#family" },
         { label: "Celebrity Styling", href: "#celebrity-styling" },
         { label: "Destination Wedding", href: "#destination" },
      ],
      featured: {
         title: "Complete Bridal Experience",
         description: "From engagement to reception - we've got you covered",
      },
   },
   {
      label: "Franchise",
      items: [
         { label: "Why Partner With Us", href: "#why-partner" },
         { label: "Investment Details", href: "#investment" },
         { label: "Support & Training", href: "#support" },
         { label: "Success Stories", href: "#success" },
         { label: "Apply Now", href: "#apply" },
      ],
      featured: {
         title: "Own a BSM Franchise",
         description: "Contact Nitin (CEO): 946-777-777-3",
      },
   },
   {
      label: "Gallery",
      items: [
         { label: "Bridal Gallery", href: "gallery#bridal" },
         { label: "Party Makeup", href: "gallery#party" },
         { label: "Video Gallery", href: "gallery#video" },
      ],
      featured: {
         title: "Our Gallery",
         description: "We're here to help you look your best",
      },
   },
   {
      label: "Contact",
      items: [
         { label: "Book Appointment", href: "contact#appointment" },
         { label: "Our Locations", href: "contact#location" },
         { label: "Working Hours", href: "#hours" },
         { label: "Customer Support", href: "contact" },
         { label: "Complaints", href: "contact" },
      ],
      featured: {
         title: "Get In Touch",
         description: "We're here to help you look your best",
      },
   },
];

const BottomBar = () => {
   const [activeMenu, setActiveMenu] = useState(null);
   const [hoverTimer, setHoverTimer] = useState(null);

   const handleMouseEnter = (label) => {
      const timer = setTimeout(() => setActiveMenu(label), 200);
      setHoverTimer(timer);
   };

   const handleMouseLeave = () => {
      clearTimeout(hoverTimer);
      setActiveMenu(null);
   };

   useEffect(() => {
      document.body.style.overflow = activeMenu ? "hidden" : "";
   }, [activeMenu]);

   const renderMenu = () => {
      const item = navItems.find((x) => x.label === activeMenu);
      if (!item) return null;

      return (
         <div className="absolute left-0 top-full w-full bg-card shadow-2xl border-t border-border z-50">
            <div className="container mx-auto max-h-[60vh] overflow-y-auto px-8 py-8">
               <div className="grid grid-cols-12 gap-8">

                  {/* LEFT COLUMN */}
                  <div className="col-span-4">
                     <h3 className="text-lg font-display font-semibold text-[#D99276] mb-2">
                        {item.label}
                     </h3>

                     <ul className="space-y-2">
                        {item.items.map((sub) => (
                           <li key={sub.label}>
                              <a
                                 href={sub.href}
                                 className="flex items-center gap-2 text-muted-foreground hover:text-primary group transition-all"
                              >
                                 <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                 {sub.label}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* FEATURED */}
                  <div className="col-span-4">
                     <div className="bg-secondary/50 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-3">
                           <Sparkles className="w-5 h-5 text-[#D99276]" />
                           <h4 className="font-display font-semibold text-[#D99276]">
                              {item.featured.title}
                           </h4>
                        </div>

                        <p className="text-muted-foreground text-sm mb-4">
                           {item.featured.description}
                        </p>

                        <a className="inline-flex items-center gap-2 text-[#D99276] hover:underline">
                           Learn More <ChevronRight className="w-4 h-4" />
                        </a>
                     </div>
                  </div>

                  {/* QUICK CONTACT */}
                  <div className="col-span-4">
                     <div className="bg-muted rounded-xl p-6">
                        <h4 className="font-display font-semibold text-[#D99276] mb-4">
                           Quick Contact
                        </h4>

                        <ul className="space-y-3 text-sm">
                           <li className="flex items-center gap-3 text-muted-foreground">
                              <Phone className="w-4 h-4 text-primary" />
                              <div>
                                 <p className="font-medium text-foreground">90531-02324</p>
                                 <p className="text-xs">Reception</p>
                              </div>
                           </li>
                           <li className="flex items-center gap-3 text-muted-foreground">
                              <Phone className="w-4 h-4 text-primary" />
                              <div>
                                 <p className="font-medium text-foreground">94684-56266</p>
                                 <p className="text-xs">(Sakshi Mukhija - Owner)</p>
                              </div>
                           </li>
                           <li className="flex items-center gap-3 text-muted-foreground">
                              <Mail className="w-4 h-4 text-primary" />
                              sakshimakeovers@gmail.com
                           </li>
                           <li className="flex items-center gap-3 text-muted-foreground">
                              <Clock className="w-4 h-4 text-primary" />
                              10:00 AM - 7:00 PM
                           </li>
                        </ul>

                        <div className="mt-4 pt-4 border-t border-border">
                           <p className="text-xs text-muted-foreground">For Complaints: Mr. Nitin (Brand Steward)</p>
                           <p className="text-sm font-medium text-foreground">
                              946-777-777-3 <span className="text-xs text-muted-foreground">(WhatsApp only)</span>
                           </p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      );
   };

   return (
      <div
         className="text-white relative"
         style={{ backgroundColor: backgroundColor.velvet }}
         onMouseLeave={handleMouseLeave}
      >
         <div className="container mx-auto px-4">

            {/* NAVBAR */}
            <nav className="relative flex items-center justify-center gap-1">
               {navItems.map((item) => (
                  <button
                     key={item.label}
                     onMouseEnter={() => handleMouseEnter(item.label)}
                     className="px-4 py-2 text-navbar-bottom-foreground text-sm font-medium tracking-wide hover:bg-[#D99726] transition-colors nav-link-hover"
                  >
                     {item.label}
                  </button>
               ))}
            </nav>

            {/* FULL-WIDTH MEGA MENU */}
            {activeMenu && renderMenu()}

         </div>
      </div>
   );
};

export default BottomBar;
