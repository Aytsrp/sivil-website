import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";

import { Poppins } from "next/font/google";
import "./globals.css";

const fonts = Poppins ({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "SIVIL",
  description: "SIVIL adalah website digital yang dirancang untuk memfasilitasi konsultasi proyek antara konsultan/kontraktor dengan klien.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="autumn">
      <body className={fonts.className}>
        <div className="min-h-screen">
          <Navbar/>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
