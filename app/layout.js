import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";


const inter = Inter({ subsets: ["latin"] });

import Navbar, { SciFiNavbar } from "@/components/Navbar";
import { SciFiFooter } from "@/components/Footer";
import getSession from "./utils/session";
import { SessionProvider } from "@/components/SessionContext";

export const metadata = {
  title: "Levizr Image Generator - Just imagine, we'll create it!",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getSession(); // Fetch session data
  
  return (
    <html lang="en">
      <body className="text-white">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
         {/* Background Stars */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70 twinklestar"
            style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
          />
        ))}
      </div>
      <NextTopLoader showSpinner={false} speed={2000}/>
      <SessionProvider session={session}>
        <SciFiNavbar session={session}/>
        {children}                                                                                                                        
        {/* <script src="/vendor/php-email-form/validate.js"></script> */}
        {/* <script src="/js/utils.js"></script> */}
        <SciFiFooter/>
      </SessionProvider>
      </body>
    </html>
  );
}