import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
import { MOUSE } from "three";
export const Experience = () => {
   return (
      <>
         {/* <Float
            rotation-x={-Math.PI / 4}
            floatIntensity={1}
            speed={2}
            rotationIntensity={2}
         > */}
         <Book />
         {/* </Float> */}
         <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            mouseButtons={{
               LEFT: MOUSE.ROTATE,
               MIDDLE: MOUSE.PAN,
               RIGHT: MOUSE.DOLLY, // intentional zoom
            }}
            enableDamping
         />
         <Environment preset="studio"></Environment>
         <directionalLight
            position={[2, 5, 2]}
            intensity={2.5}
            // castShadow
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
