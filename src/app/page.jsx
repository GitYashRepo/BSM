import SalonSlider from "@/components/webcomp/Sliders/HomeBanner";
import SalonSections from "@/components/homepage/aboutUs/AboutUs";
import { ServiceSection } from "@/components/homepage/ourservices/Services";
import { StatsSection } from "@/components/homepage/stats/Stats";
import { InstagramGalleryCard } from "@/components/webcomp/IG/ig";


export default function Home() {
   return (
      <div>
         <main className="min-h-screen bg-background">
            <SalonSlider />
            <SalonSections />
            <StatsSection />
            <ServiceSection />
            <div className="max-w-7xl mx-auto space-y-8 px-10 py-10">
               <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <InstagramGalleryCard
                     username="travel_explorer"
                     userAvatar="/travel-avatar.jpg"
                     images={["/tropical-beach-sunset.png", "/majestic-mountain-vista.png", "/city-skyline-night.png"]}
                     likes={1248}
                     caption="Three amazing destinations from this year's adventures! 🌍✨ Which one would you visit first?"
                     timestamp="2 hours ago"
                     location="Worldwide"
                  />

                  <InstagramGalleryCard
                     username="food_enthusiast"
                     userAvatar="/chef-avatar.png"
                     images={[
                        "/gourmet-pasta.png",
                        "/dessert-platter.jpg",
                        "/coffee-latte-art.jpg",
                        "/fresh-salad-bowl.jpg",
                     ]}
                     likes={892}
                     caption="Sunday brunch series! Swipe to see the full menu 🍝☕️🥗"
                     timestamp="5 hours ago"
                     location="Downtown Bistro"
                  />

                  <InstagramGalleryCard
                     username="design_studio"
                     userAvatar="/diverse-designer-avatars.png"
                     images={["/modern-interior.png", "/minimalist-workspace.png"]}
                     likes={2156}
                     caption="Before and after transformation of our latest project. Love how the natural light brings everything together 💫"
                     timestamp="1 day ago"
                     location="Brooklyn, NY"
                  />

                  <InstagramGalleryCard
                     username="fitness_journey"
                     userAvatar="/fitness-avatar.jpg"
                     images={["/gym-workout-weights.jpg", "/yoga-pose-outdoor.jpg", "/healthy-meal-prep.png"]}
                     likes={645}
                     caption="Week 12 progress! Consistency is key 💪 #FitnessMotivation"
                     timestamp="3 days ago"
                  />
               </div>
            </div>
         </main>
      </div>
   );
}
