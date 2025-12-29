"use client";

import { Suspense, useEffect, useState } from "react"
import { Experience } from "@/components/Experience"
import { UI } from "@/components/UI"
import { Canvas } from "@react-three/fiber"
import { ServicesPanel } from "./ServicesPanel";


const ToggleSwitch = ({ checked, onChange }) => {
   return (
      <button
         onClick={onChange}
         className={`group relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background
        ${checked ? "bg-foreground" : "bg-border hover:bg-muted-foreground/20"}`}
         aria-label="Toggle view"
      >
         <span
            className={`inline-block h-6 w-6 rounded-full bg-background shadow-lg transition-all duration-500 ease-out group-hover:scale-110
          ${checked ? "translate-x-9" : "translate-x-1"}`}
         />
         {/* Decorative inner circle */}
         <span
            className={`absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-foreground/30 transition-all duration-500
          ${checked ? "left-2 opacity-0" : "left-10 opacity-100"}`}
         />
      </button>
   )
}



export default function Services() {
   const [cameraZ, setCameraZ] = useState(9);
   const [showCanvas, setShowCanvas] = useState(true);

   useEffect(() => {
      const updateCamera = () => {
         setCameraZ(window.innerWidth > 800 ? 4 : 9);
      };

      updateCamera();
      window.addEventListener("resize", updateCamera);
      return () => window.removeEventListener("resize", updateCamera);
   }, []);

   return (
      <div className="relative w-screen h-[80vh] overflow-hidden">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4 w-full py-1 px-6 md:px-10 border-b border-border/50">
            {/* <div className="flex-1">
               <h1 className="text-xl md:text-xl lg:text-xl font-bold tracking-tight uppercase text-balance leading-none">
                  {showCanvas ? "Interactive Experience" : "Explore Our Services"}
               </h1>
               <p className="text-sm md:text-base text-muted-foreground mt-2 tracking-wide">
                  {showCanvas ? "Click on the pages to flip through" : "Discover what we offer"}
               </p>
            </div>

            <div className="flex items-center gap-4 self-end md:self-auto">
               <div className="text-right">
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-medium">View</span>
                  <span className="block text-sm font-semibold mt-0.5">{showCanvas ? "Services List" : "3D Book"}</span>
               </div>

               <ToggleSwitch checked={showCanvas} onChange={() => setShowCanvas((v) => !v)} />
            </div> */}
         </div>
         {/* {showCanvas ? ( */}
         <>
            <UI />
            <Canvas className="absolute inset-0 mb-10 " shadows camera={{
               position: [-0.5, 1, cameraZ],
               fov: 45,
            }}>
               <group position-y={0}>
                  <Suspense fallback={null}>
                     <Experience />
                  </Suspense>
               </group>
            </Canvas>
         </>
         {/* ) : (
            <ServicesPanel />
         )} */}
      </div>
   )
}
