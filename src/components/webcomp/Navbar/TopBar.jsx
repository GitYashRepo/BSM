import { Sparkles } from "lucide-react";

const TopBar = () => {
   return (
      <div className="py-1 bg-[#D99246]">
         <div className="flex items-center justify-center gap-2 text-sm font-medium animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="px-2">
               Get 20% OFF on First Visit! Use Code: <span className="font-bold text-accent">BLUSH20</span>
            </span>
            <span className="mx-4 text-muted-foreground/50">|</span>
            <span>
               Bridal Package Starting @ ₹25,000
            </span>
            <span className="mx-4 text-muted-foreground/50">|</span>
            <span>
               Now Open for <span className="font-bold text-primary">Franchise</span> Opportunities!
            </span>
            <Sparkles className="w-4 h-4 text-accent" />
         </div>
      </div>
   );
};

export default TopBar;
