import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://semahegnadugna.vercel.app'),
  title: {
    default: "Semahegn Adugna | Android & Full Stack Developer",
    template: "%s | Semahegn Adugna"
  },
  description: "Experienced Android and Full Stack Developer specializing in Kotlin, React, and Next.js. Explore my portfolio of innovative mobile and web applications.",
  keywords: ["Android Developer", "Full Stack Developer", "Kotlin Developer","Kotlin", "Jetpack Compose", "React", "Next.js", "Mobile Apps", "Web Development", "Portfolio", "Software Engineer"],
  authors: [{ name: "Semahegn Adugna", url: "https://semahegnadugna.vercel.app" }],
  creator: "Semahegn Adugna",
  publisher: "Semahegn Adugna",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://semahegnadugna.vercel.app",
    siteName: "Semahegn Adugna Portfolio",
    title: "Semahegn Adugna | Android & Full Stack Developer",
    description: "Innovative Android and Full Stack Developer crafting cutting-edge mobile and web solutions.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/profile.png?alt=media&token=962d9be2-7ac3-4834-ad5a-2c4cb21ca010",
        width: 1200,
        height: 630,
        alt: "Semahegn Adugna - Android & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semahegn Adugna | Android & Full Stack Developer",
    description: "Innovative Android and Full Stack Developer crafting cutting-edge mobile and web solutions.",
    images: ["https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/profile.png?alt=media&token=962d9be2-7ac3-4834-ad5a-2c4cb21ca010"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#7F52FF' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' }
  ],
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Semahegn Adugna',
    url: 'https://semahegnadugna.vercel.app',
    image: 'https://firebasestorage.googleapis.com/v0/b/todoapp-6e4de.appspot.com/o/profile.png?alt=media&token=962d9be2-7ac3-4834-ad5a-2c4cb21ca010',
    jobTitle: 'Android & Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Uhlman & Zacher'
    },
    sameAs: [
      'https://github.com/Seme30',
      'https://www.linkedin.com/in/semahegn-adugna/'
    ],
    knowsAbout: ['Android Development', 'Kotlin', 'Jetpack Compose', 'React', 'Next.js', 'Full Stack Development']
  }

  return (
      <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
