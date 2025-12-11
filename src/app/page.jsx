import SalonSlider from "@/components/webcomp/Sliders/HomeBanner";
import SalonSections from "@/components/homepage/ourservices/ServiceSection";


export default function Home() {
   return (
      <div>
         <main className="min-h-screen bg-background">
            <SalonSlider />
            <SalonSections />
         </main>
      </div>
   );
}
