import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ProjectResources from "@/components/ProjectResources";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AWS S3",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ProjectResources/>
      </body>
    </html>
  );
}
