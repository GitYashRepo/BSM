"use client";

import { Suspense, useEffect } from "react"
import { Experience } from "@/components/Experience"
import { UI } from "@/components/UI"
import { Canvas } from "@react-three/fiber"



export default function Services() {

   return (
      <div className="relative w-screen h-screen overflow-hidden">
         <UI />
         <Canvas className="absolute inset-0" shadows camera={{
            position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
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
