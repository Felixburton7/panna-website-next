// src/app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Import Navbar and Footer components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Panna - Social Betting",
  description: "Join Panna for an innovative social betting experience.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {/* Include Navbar at the top */}
        <Navbar />

        {/* Main Content */}
        <main className="main-content">{children}</main>

        {/* Include Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
