"use client";

import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
import { MOUSE } from "three";
export const Experience = () => {
   return (
      <>
         <Book />
         <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            mouseButtons={{
               LEFT: MOUSE.ROTATE,
               MIDDLE: MOUSE.PAN,
               RIGHT: MOUSE.DOLLY,
            }}
            enableDamping
         />
         <Environment preset="warehouse"></Environment>
         <directionalLight
            position={[2, 5, 2]}
            intensity={1.1}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
         />
         <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <shadowMaterial transparent opacity={0.2} />
         </mesh>
      </>
   );
};
