import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SM Tech Media | Digital Marketing Agency",
    template: "%s | SM Tech Media",
  },

  description:
    "SM Tech Media is a digital creative agency offering website development, graphic designing, video editing, social media management, YouTube SEO, digital marketing and political campaign services.",

  applicationName: "SM Tech Media",

  authors: [
    {
      name: "SM Tech Media",
    },
  ],

  creator: "SM Tech Media",
  publisher: "SM Tech Media",

  keywords: [
    "SM Tech Media",
    "Digital Marketing Agency",
    "Website Development",
    "Web Design",
    "Graphic Designing",
    "Video Editing",
    "Social Media Management",
    "YouTube SEO",
    "Digital Marketing Services",
    "Political Campaign Services",
    "Creative Agency Andhra Pradesh",
    "Social Media Agency",
  ],

  category: "Digital Marketing",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "SM Tech Media",
    title: "SM Tech Media | Digital Marketing Agency",
    description:
      "Professional website development, graphic designing, video editing, social media management, YouTube SEO and digital marketing services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SM Tech Media Digital Marketing Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SM Tech Media | Digital Marketing Agency",
    description:
      "Website development, graphic designing, video editing, social media management and digital marketing services.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#173652",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}