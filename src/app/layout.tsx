import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jack Tilford-Carey | Software Engineer",
  description: "Final-year Computer Science student and Software Engineer with industry experience at Eli Lilly. Specializing in React, Next.js, and AWS cloud solutions.",
  keywords: ["Software Engineer", "Computer Science", "React", "Next.js", "AWS", "Full Stack Developer", "Cloud Computing"],
  authors: [{ name: "Jack Tilford-Carey" }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "Jack Tilford-Carey | Software Engineer",
    description: "Software Engineer building scalable, cloud-ready applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
