import { Geist, Geist_Mono } from "next/font/google";
import LenisProvider from "./providers/LenisProvider";
import "./globals.css";
// import { ColorThemeProvider } from "@/components/color-theme-provider";
import Navbar from "@/components/webcomp/Navbar/Navbar";
import Footer from "@/components/webcomp/Footer/Footer";
import DealsPopup from "@/components/webcomp/Deals/Dealspupup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blush By Shakshi Makeover's",
  description: "Professional Makeup Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <LenisProvider>
            {/* <ColorThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
               <DealsPopup />
               <Navbar />
               {children}
               <Footer />
            {/* </ColorThemeProvider> */}
         </LenisProvider>
      </body>
    </html>
  );
}
