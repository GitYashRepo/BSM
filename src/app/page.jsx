import SalonSlider from "@/components/webcomp/Sliders/HomeBanner";
import SalonSections from "@/components/homepage/aboutUs/AboutUs";
import { ServiceSection } from "@/components/homepage/ourservices/Services";
import { StatsSection } from "@/components/homepage/stats/Stats";


export default function Home() {
   return (
      <div>
         <main className="min-h-screen bg-background">
            <SalonSlider />
            <SalonSections />
            <StatsSection />
            <ServiceSection />
         </main>
      </div>
   );
}
