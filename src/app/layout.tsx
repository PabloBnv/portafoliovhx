import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vhx | Full-Stack Developer",
  description: "Portafolio profesional de Pablo Benavente (Vhx), Desarrollador Full-Stack especializado en Java, React y aplicaciones escalables.",
  keywords: ["Desarrollador Full-Stack", "Java", "Spring Boot", "React", "TypeScript", "Portafolio"],
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
