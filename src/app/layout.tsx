import type { Metadata } from "next";
import Head from "next/head";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portafoliovhx.netlify.app"),
  other: {
    'preconnect': 'https://embed.tawk.to',
    'dns-prefetch': 'https://embed.tawk.to',
  },
  title: {
    default: "Vhx | Full-Stack Developer",
    template: "%s | Vhx",
  },
  description: "Portafolio profesional de Pablo Benavente (Vhx), Desarrollador Full-Stack especializado en Java, React y aplicaciones escalables.",
  keywords: ["Desarrollador Full-Stack", "Java", "Spring Boot", "React", "TypeScript", "Portafolio", "Pablo Benavente"],
  authors: [{ name: "Pablo Benavente" }],
  creator: "Pablo Benavente",
  publisher: "Pablo Benavente",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Vhx | Full-Stack Developer",
    description: "Portafolio profesional de Pablo Benavente (Vhx), Desarrollador Full-Stack especializado en Java, React y aplicaciones escalables.",
    type: "website",
    locale: "es_AR",
    url: "https://portafoliovhx.netlify.app",
    siteName: "Vhx Portfolio",
    images: [
      {
        url: "/vhxlogo.gif",
        width: 300,
        height: 300,
        alt: "Vhx Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vhx | Full-Stack Developer",
    description: "Portafolio profesional de Pablo Benavente (Vhx), Desarrollador Full-Stack especializado en Java, React y aplicaciones escalables.",
    images: ["/vhxlogo.gif"],
    creator: "@PabloBnv",
  },
  alternates: {
    canonical: "https://portafoliovhx.netlify.app",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable}`}>
      <Head>
        <link rel="preconnect" href="https://embed.tawk.to" />
        <link rel="dns-prefetch" href="https://embed.tawk.to" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}