// import { Inter } from "next/font/google";
import "./globals.css";
// import { Html } from "next/document";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden antialiased font-sans h-dvh tablet:h-svh'>
        
        <main>{children}</main>
      </body>
    </html>


  );
}
