import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavDeck } from "@/components/shared/nav-deck";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Alexandr Stencuk",
  description:
    "Portfolio Alexandra Stencuk, vývojářské portfolio zaměřené na ukázku projektů, uvedení kontaktů a mého příběhu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full min-h-screen relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="w-full h-16" />
          {children}
          <div className="w-full h-16" />
          <Footer />
        </main>
        <NavDeck />
      </body>
    </html>
  );
}
