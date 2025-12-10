import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
   return (
      <div>
         <div className="flex h-[500vh] items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-primary text-4xl font-bold mt-6">
               This should change color
            </h1>

            <Button className="bg-primary text-primary-foreground mt-4">
               Themed Button
            </Button>
         </div>
      </div>
   );
}
