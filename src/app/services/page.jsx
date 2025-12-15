"use client";

import { Suspense, useEffect, useState } from "react"
import { Experience } from "@/components/Experience"
import { UI } from "@/components/UI"
import { Canvas } from "@react-three/fiber"



export default function Services() {
   const [cameraZ, setCameraZ] = useState(9);

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
         <h1 className="text-center text-2xl">Click on the Pages to flip it !</h1>
         <UI />
         <Canvas className="absolute inset-0" shadows camera={{
            position: [-0.5, 1, cameraZ],
            fov: 45,
         }}>
            <group position-y={0}>
               <Suspense fallback={null}>
                  <Experience />
               </Suspense>
            </group>
         </Canvas>
      </div>
   )
}
