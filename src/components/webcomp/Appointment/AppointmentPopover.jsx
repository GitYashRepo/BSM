"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";

const AppointmentPopover = () => {
   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button className="bg-[#D99726] hover:bg-primary/90 text-primary-foreground font-medium px-6 rounded-full gap-2 shadow-md">
               <Calendar className="w-4 h-4" />
               <span className="hidden sm:inline">Book Appointment</span>
            </Button>
         </PopoverTrigger>

         <PopoverContent
            side="bottom"
            align="end"
            className="w-56 md:w-72 p-5 rounded-xl shadow-xl"
         >
            <div className="mb-4 text-center">
               <h4 className="text-base font-semibold text-gray-900">
                  Book Your Appointment
               </h4>
               <p className="text-xs text-muted-foreground mt-1">
                  Blush by Sakshi Makeovers
               </p>
            </div>
            <p className="text-sm text-gray-600 text-center mb-4">
               Connect with us directly to schedule your beauty session at your
               convenience.
            </p>
            <div className="space-y-3">
               <a
                  href="tel:9053102324"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition"
               >
                  <Phone className="w-5 h-5 text-[#D99726]" />
                  <div className="flex flex-col text-sm">
                     <span className="font-medium text-gray-900">
                        Call for Appointment
                     </span>
                     <span className="text-xs text-muted-foreground">
                        90531-02324
                     </span>
                  </div>
               </a>
               <a
                  href="https://wa.me/9467777773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition"
               >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <div className="flex flex-col text-sm">
                     <span className="font-medium text-gray-900">
                        Chat on WhatsApp
                     </span>
                     <span className="text-xs text-muted-foreground">
                        Quick response & availability
                     </span>
                  </div>
               </a>
            </div>
            <p className="text-[11px] text-muted-foreground text-center mt-4">
               We recommend booking in advance for weekends & bridal services.
            </p>
         </PopoverContent>
      </Popover>
   );
};

export default AppointmentPopover;
