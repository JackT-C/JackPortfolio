import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jack Tilford-Carey | Software Engineer",
  description: "Final-year Computer Science student and Software Engineer with industry experience at Eli Lilly. Specialising in React, Next.js, and AWS cloud solutions.",
  keywords: ["Software Engineer", "Computer Science", "React", "Next.js", "AWS", "Full Stack Developer", "Cloud Computing"],
  authors: [{ name: "Jack Tilford-Carey" }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: '#22c55e',
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
        <link href="https://fonts.googleapis.com/css2?family=Datatype:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
