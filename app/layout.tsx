import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-JY6Q6NBGKR";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smtechmedia.com"),

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
    url: "https://www.smtechmedia.com",
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
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);
      t.async=1;
      t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xzsck652qj");
  `}
</Script>

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.smtechmedia.com/#organization",

              name: "SM Tech Media",
              url: "https://www.smtechmedia.com",

              logo: "https://www.smtechmedia.com/logo.png",
              image: "https://www.smtechmedia.com/logo.png",

              description:
                "SM Tech Media is a professional digital marketing agency providing website development, graphic designing, video editing, social media management, YouTube SEO and political campaign services.",

              email: "smtechmedia206@gmail.com",
              telephone: "+919908540952",

              address: {
                "@type": "PostalAddress",
                streetAddress: "Gopalapuram",
                addressLocality: "Gopalapuram",
                addressRegion: "Andhra Pradesh",
                postalCode: "534316",
                addressCountry: "IN",
              },

              foundingDate: "2025",

              founder: {
                "@type": "Person",
                name: "Sunil Marapatla",
              },

              sameAs: [
                "https://www.facebook.com/SMTechMediaOfficial",
                "https://www.instagram.com/sm_tech_media",
                "https://www.youtube.com/@SMMovieEvents",
              ],
            }),
          }}
        />

        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.smtechmedia.com/#localbusiness",

              name: "SM Tech Media",
              url: "https://www.smtechmedia.com",

              logo: "https://www.smtechmedia.com/logo.png",
              image: "https://www.smtechmedia.com/logo.png",

              description:
                "SM Tech Media is a digital marketing agency offering website development, graphic designing, video editing, social media management, YouTube SEO, branding and political campaign services.",

              telephone: "+919908540952",
              email: "smtechmedia206@gmail.com",

              address: {
                "@type": "PostalAddress",
                streetAddress: "Gopalapuram",
                addressLocality: "Gopalapuram",
                addressRegion: "Andhra Pradesh",
                postalCode: "534316",
                addressCountry: "IN",
              },

              areaServed: {
                "@type": "Country",
                name: "India",
              },

              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:00",
                  closes: "21:00",
                },
              ],

              priceRange: "₹₹",

              parentOrganization: {
                "@id": "https://www.smtechmedia.com/#organization",
              },

              sameAs: [
                "https://www.facebook.com/SMTechMediaOfficial",
                "https://www.instagram.com/sm_tech_media",
                "https://www.youtube.com/@SMMovieEvents",
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.smtechmedia.com/#website",

              url: "https://www.smtechmedia.com",
              name: "SM Tech Media",

              alternateName: [
                "SM Tech Media Digital Marketing Agency",
                "SM Tech Media Agency",
              ],

              description:
                "Official website of SM Tech Media, a digital marketing and creative agency providing website development, graphic designing, video editing, social media management, YouTube SEO, branding and political campaign services.",

              inLanguage: "en-IN",

              publisher: {
                "@id": "https://www.smtechmedia.com/#organization",
              },
            }),
          }}
        />
      {/* Service Schema */}
<Script
  id="service-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": "https://www.smtechmedia.com/#services",

      name: "SM Tech Media Services",

      itemListElement: [
        {
          "@type": "Service",
          position: 1,
          name: "Website Design & Development",
          description:
            "Professional website design and development services for businesses, organizations and brands.",
          provider: {
            "@id": "https://www.smtechmedia.com/#organization",
          },
          areaServed: "India",
        },
        {
          "@type": "Service",
          position: 2,
          name: "Social Media Management",
          description:
            "Professional social media management, content planning and digital presence management for businesses and organizations.",
          provider: {
            "@id": "https://www.smtechmedia.com/#organization",
          },
          areaServed: "India",
        },
        {
          "@type": "Service",
          position: 3,
          name: "Graphic Designing",
          description:
            "Creative graphic design services including social media creatives, posters, promotional designs and branding materials.",
          provider: {
            "@id": "https://www.smtechmedia.com/#organization",
          },
          areaServed: "India",
        },
        {
          "@type": "Service",
          position: 4,
          name: "Video Editing",
          description:
            "Professional video editing services for promotional videos, social media content, events and digital campaigns.",
          provider: {
            "@id": "https://www.smtechmedia.com/#organization",
          },
          areaServed: "India",
        },
        {
          "@type": "Service",
          position: 5,
          name: "YouTube SEO",
          description:
            "YouTube SEO and channel optimization services designed to improve content discoverability and online reach.",
          provider: {
            "@id": "https://www.smtechmedia.com/#organization",
          },
          areaServed: "India",
        },
        {
          "@type": "Service",
          position: 6,
          name: "Digital Marketing",
          description:
            "Digital marketing solutions for businesses, brands and organizations to strengthen their online presence.",
          provider: {
            "@id": "https://www.smtechmedia.com/#organization",
          },
          areaServed: "India",
        },
        {
          "@type": "Service",
          position: 7,
          name: "Political Campaign Services",
          description:
            "Digital campaign, creative design, video editing and social media support services for political campaigns.",
          provider: {
            "@id": "https://www.smtechmedia.com/#organization",
          },
          areaServed: "India",
        },
      ],
    }),
  }}
/>
      </head>

      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}