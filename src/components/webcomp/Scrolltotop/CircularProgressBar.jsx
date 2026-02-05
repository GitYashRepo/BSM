'use client'
import { ArrowUp } from 'lucide-react'


const CircularProgressBar = ({
   strokeWidth = 2,
   sqSize = 100,
   percentage,
   onClick,
}) => {
   const radius = (sqSize - strokeWidth) / 2
   const viewBox = `0 0 ${sqSize} ${sqSize}`
   const dashArray = radius * Math.PI * 2
   const dashOffset = dashArray - (dashArray * percentage) / 100

   return (
      <svg
         width={sqSize}
         height={sqSize}
         viewBox={viewBox}
         className="cursor-pointer"
         onClick={onClick}
      >
         {/* Background ring */}
         <circle
            className="fill-none stroke-[#1c1c1c]"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={strokeWidth}
         />

         {/* Progress ring */}
         <circle
            className="fill-none stroke-white"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
            style={{
               strokeDasharray: dashArray,
               strokeDashoffset: dashOffset,
            }}
         />


         {/* Center button */}
         <foreignObject
            x={strokeWidth}
            y={strokeWidth}
            width={sqSize - strokeWidth * 2}
            height={sqSize - strokeWidth * 2}
         >
            <div className="flex h-full w-full items-center justify-center">
               <button
                  aria-label="Scroll to top"
                  className="flex w-full h-full items-center justify-center rounded-full bg-[#1c1c1c] shadow-lg"
               >
                  <ArrowUp className="h-5 w-5 text-[#ffffff]" />
               </button>
            </div>
         </foreignObject>
      </svg>
   )
}

export default CircularProgressBar
