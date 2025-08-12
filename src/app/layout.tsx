

import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import QuoteCard from "@/components/Quota";






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"className="scroll-smoth">
      <body className="flex flex-col min-h-screen bg-gray-100 text-gray-900" >

        <Header/>  
         
        <main className="flex-grow container mx-auto px-4 py-6 md:px-8">
         {children}
        </main>

        <Footer />
        
        
       
      </body>
    </html>
  );
}
