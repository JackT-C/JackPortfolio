import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jack Tilford-Carey | Software Engineer",
  description: "Final-year Computer Science student and Software Engineer with industry experience at Eli Lilly. Specialising in React, Next.js, and AWS cloud solutions.",
  keywords: ["Software Engineer", "Computer Science", "React", "Next.js", "AWS", "Full Stack Developer", "Cloud Computing"],
  authors: [{ name: "Jack Tilford-Carey" }],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
