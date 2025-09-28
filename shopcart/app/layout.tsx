import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: {
    template:"%s - Shopcart online store" ,
    default: "Shopcart online store",
  },
  description: "Shopcart online store , your one sstop shop for all your shopping needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className= "font-poppins antialiased">
        {children} 
      </body>
    </html>
  );
}
