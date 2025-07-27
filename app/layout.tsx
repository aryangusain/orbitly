import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--font-roboto"
});

export const metadata: Metadata = {
  title: "Orbitly",
  description: "Launch your startup to the stars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-background [&::-webkit-scrollbar-thumb]:bg-background">
      <body
        className={`${poppins.className}`}
      >
          {children}
      </body>
    </html>
  );
}
