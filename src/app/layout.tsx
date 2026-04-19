import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://vhx.suseso.net"),
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
    url: "https://vhx.suseso.net",
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
    canonical: "https://vhx.suseso.net",
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
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}