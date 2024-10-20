import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Semahegn Adugna | Android & Full Stack Developer",
  description: "Experienced Android and Full Stack Developer specializing in Kotlin, React, and Next.js. Explore my portfolio of innovative mobile and web applications.",
  keywords: ["Android Developer", "Full Stack Developer", "Kotlin Developer","Kotlin", "Jepack Compose", "React", "Next.js", "Mobile Apps", "Web Development"],
  authors: [{ name: "Semahegn Adugna" }],
  creator: "Semahegn Adugna",
  publisher: "Semahegn Adugna",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Semahegn Adugna Portfolio",
    title: "Semahegn Adugna | Android & Full Stack Developer",
    description: "Innovative Android and Full Stack Developer crafting cutting-edge mobile and web solutions.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  themeColor: "#7F52FF",
};

import { Montserrat } from 'next/font/google'

const poppins = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
