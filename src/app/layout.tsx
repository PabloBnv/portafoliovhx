import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vhx | Full-Stack Developer",
  description: "Portafolio profesional de Pablo Benavente (Vhx), Desarrollador Full-Stack especializado en Java, React y aplicaciones escalables.",
  keywords: ["Desarrollador Full-Stack", "Java", "Spring Boot", "React", "TypeScript", "Portafolio"],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Vhx | Full-Stack Developer",
    description: "Portafolio profesional de Pablo Benavente (Vhx), Desarrollador Full-Stack especializado en Java, React y aplicaciones escalables.",
    type: "website",
    url: "https://vhx.suseso.net",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
