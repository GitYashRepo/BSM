"use client";

import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
   "img1",
   "img2",
   "img3",
   "img4",
   "img5",
   "img6",
   "img7",
   "img8",
   "img9",
   "img10",
   "img11",
   "img12",
   "img13",
   "img14",
   "img15",
   "img16",
];

export const pageAtom = atom(0);
export const pages = [
   {
      front: "img5",
      back: pictures[0],
   },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
   pages.push({
      front: pictures[i % pictures.length],
      back: pictures[(i + 1) % pictures.length],
   });
}

pages.push({
   front: pictures[pictures.length - 1],
   back: "img5",
});

export const UI = () => {
   const [page, setPage] = useAtom(pageAtom);

   useEffect(() => {
      const audio = new Audio("/audios/page-flip-01a.mp3");
      audio.play();
   }, [page]);

   return (
      <>
         <main className="pointer-events-none select-none z-10 inset-0 flex justify-between flex-col">
            <div className="w-full overflow-auto pointer-events-auto flex justify-center">
            </div>
         </main>
      </>
   );
};
