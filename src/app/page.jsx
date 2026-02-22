"use client";

import SalonSlider from "@/components/webcomp/Sliders/HomeBanner";
import SalonSections from "@/components/homepage/aboutUs/AboutUs";
import { ServiceSection } from "@/components/homepage/ourservices/Services";
import { StatsSection } from "@/components/homepage/stats/Stats";
import { InstagramGalleryCard } from "@/components/webcomp/IG/ig";
import FullScreenSlider from "@/components/homepage/bannerSlider/Slider";

export default function Home() {
   return (
      <div>
         <main className="min-h-screen bg-background">
            <FullScreenSlider />
            <SalonSlider />
            <SalonSections />
            <StatsSection />
            <ServiceSection />
            <div className="max-w-7xl mx-auto space-y-8 px-10 py-10">
               <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
               <InstagramGalleryCard />
            </div>
         </main>
      </div>
   );
}
