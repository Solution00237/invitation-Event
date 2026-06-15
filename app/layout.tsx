import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Market Express cm Event",
  description:
    "Join us for an unforgettable evening of celebration, elegance and joy.",
  openGraph: {
    title: "Vous êtes invités",
    description: "Une invitation exclusive à une soirée inoubliable.",
    type: "website",

    // images: [
    //   {
    //     url: "/Logo.png", // Looks in the public/ folder
    //     width: 100,
    //     height: 100,
    //     alt: "Aperçu de l'image pour « Ma super page ",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
