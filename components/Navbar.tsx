"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-dark py-3 shadow-lg" : "py-6 bg-transparent"
      }`}
    >
      <div className=" flex items-center justify-center">
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo mark */}
          <div className="flex items-center gap-2">
            <Image
              className=" md:w-9 h-9"
              src="/Logo.png"
              alt="Logo Image"
              height={30}
              width={30}
              priority
            />
            {/* <div className="w-8 h-8 rounded-full border border-gold-400 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold-400">
              <path d="M12 2L14.09 8.26L21 9.27L16.5 13.64L17.82 20.5L12 17.27L6.18 20.5L7.5 13.64L3 9.27L9.91 8.26L12 2Z" />
            </svg>
          </div> */}
            <span
              className="font-display text-sm md:text-lg tracking-widest uppercase font-bold"
              style={{ color: "#fff", fontFamily: "inter, serif" }}
            >
              Market Express cm Event
            </span>
          </div>

          {/* Nav links */}

          {/* <ul className="hidden md:flex items-center gap-8">
            {["Event", "Guests", "Location", "RSVP"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-body tracking-widest uppercase text-ivory/80 hover:text-gold-400 transition-colors duration-300"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.15em",
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul> */}

          {/* CTA */}

          {/* <a
            href="tel:681961676"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #c9942a, #ebbe3a)",
              color: "#1a1a1a",
            }}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Appelez Nous
          </a> */}
        </nav>
      </div>
    </header>
  );
}
