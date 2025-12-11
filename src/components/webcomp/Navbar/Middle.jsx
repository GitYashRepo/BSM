import { Phone, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MiddleBar = () => {
   return (
      <div className="bg-navbar-middle border-b border-border">
         <div className="container mx-auto px-4 py-1">
            <div className="flex items-center justify-between gap-6">
               {/* Logo */}
               <div className="flex-shrink-0">
                  <a href="/" className="flex items-center gap-2 md:gap-3">
                     <img
                        src="/logo/logo.jpg"
                        alt="BSM Logo"
                        className="w-10 md:w-12 rounded-full"
                     />

                     <div className="flex flex-col">
                        <div
                           className="flex flex-row text-[#D99726] font-bold whitespace-nowrap justify-between text-xl"
                        >
                           <span>B</span>
                           <span>L</span>
                           <span>U</span>
                           <span>S</span>
                           <span>H</span>
                        </div>

                        {/* Subtitle */}
                        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-700">
                           By Sakshi Makeovers
                        </span>
                     </div>
                  </a>
               </div>


               {/* Contact & Actions */}
               <div className="flex items-center gap-6">
                  {/* Contact Info */}
                  <div className="hidden lg:flex items-center gap-6 text-sm">
                     <a
                        href="tel:9053102324"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                     >
                        <Phone className="w-4 h-4" />
                        <span>90531-02324</span>
                     </a>
                     <a
                        href="https://wa.me/9467777773"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                     >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp</span>
                     </a>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                     <Link href="/contact#appointment">
                        <Button className="bg-[#D99726] hover:cursor-pointer hover:bg-primary/90 text-primary-foreground font-medium px-6 rounded-full gap-2">
                           <Calendar className="w-4 h-4" />
                           <span className="hidden sm:inline">Book Appointment</span>
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MiddleBar;
