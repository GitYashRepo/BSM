"use client";

// import { useScrollHide } from "@/hooks/use-scroll-hide";
import BottomBar from "./Bottom";
import MiddleBar from "./Middle";
import TopBar from "./TopBar";


const Navbar = () => {
   // const isVisible = useScrollHide()
   return (
      // <header className="sticky top-0 z-50 w-full shadow-lg bg-white">
      <header className="w-full shadow-lg bg-white">
         {/* <div
            className={`transition-all duration-300 ease-in-out ${isVisible ? "opacity-100 max-h-[200px]" : "opacity-0 max-h-0"
               } overflow-hidden`}
         > */}
         <div
            className={`transition-all duration-300 ease-in-out"
               } overflow-hidden`}
         >
            <TopBar />
            <MiddleBar />
         </div>

         <div className="transition-all duration-300 ease-in-out">
            <BottomBar />
         </div>
      </header>
   );
};

export default Navbar;
