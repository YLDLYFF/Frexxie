// import { Inter } from "next/font/google";

import "./globals.css";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./providers";
export const metadata = {
  title: "Food App",
  description: "A Simple Food App",
};

export default function RootLayout ( { children } ) {
  return (
    <html lang="en">
      
      <body className='overflow-x-hidden relative tablet:w-full h-dvh max-h-vh antialiased font-sans bg-white text-gray-900 dark:bg-black dark:text-white transition-all transition-duration-[0.9s]'>
        <Providers>
          <main>{children}</main>
        </Providers>

      </body>
    </html>


  );
}
