import type { Metadata, Viewport } from "next";
import "./globals.css";
import { VT323, Share_Tech_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
})

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://semahegn.com'),
  title: {
    default: "Semahegn Adugna | Android & Full Stack Developer",
    template: "%s | Semahegn Adugna"
  },
  description: "Android and Full Stack Developer. Building open-source tools for Ethiopian languages. Kotlin, React, Next.js.",
  keywords: ["Android Developer", "Full Stack Developer", "Kotlin", "Jetpack Compose", "React", "Next.js", "FidelDoc", "Ethiopian OCR", "Open Source"],
  authors: [{ name: "Semahegn Adugna", url: "https://semahegn.com" }],
  creator: "Semahegn Adugna",
  publisher: "Semahegn Adugna",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://semahegn.com",
    siteName: "Semahegn Adugna",
    title: "Semahegn Adugna | Android & Full Stack Developer",
    description: "Android and Full Stack Developer. Building open-source tools for Ethiopian languages.",
    images: [{
      url: "https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/profile.png?alt=media&token=962d9be2-7ac3-4834-ad5a-2c4cb21ca010",
      width: 1200, height: 630,
      alt: "Semahegn Adugna",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semahegn Adugna | Android & Full Stack Developer",
    description: "Android and Full Stack Developer. Building open-source tools for Ethiopian languages.",
    images: ["https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/profile.png?alt=media&token=962d9be2-7ac3-4834-ad5a-2c4cb21ca010"],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', shortcut: '/favicon.ico', apple: '/favicon.ico' },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: [{ color: '#000000' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Semahegn Adugna',
    url: 'https://semahegn.com',
    jobTitle: 'Android & Full Stack Developer',
    sameAs: [
      'https://github.com/Seme30',
      'https://www.linkedin.com/in/semahegn-adugna/'
    ],
    knowsAbout: ['Android Development', 'Kotlin', 'Jetpack Compose', 'React', 'Next.js', 'OCR', 'Ethiopian Languages']
  }

  return (
    <html lang="en" className={`${vt323.variable} ${shareTechMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
