"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax tilt on mouse move
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      el.style.setProperty("--tx", `${x}px`);
      el.style.setProperty("--ty", `${y}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="event"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dqdyxpcjo/image/upload/Designe_Best_237_hyvvrs.png"
          alt="Elegant venue"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.45) saturate(1.1)" }}
        />
        {/* Multi-layer gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/20" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15" /> */}
      </div>

      {/* 3D animated ring ornament */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        aria-hidden
      >
        <div
          className="w-[600px] h-[600px] rounded-full border border-gold-400/20 animate-spin-slow"
          style={{ boxShadow: "inset 0 0 80px rgba(201,148,42,0.08)" }}
        />
        <div
          className="absolute w-[480px] h-[480px] rounded-full border border-gold-300/10"
          style={{ animation: "spin 20s linear infinite reverse" }}
        />
        <div className="absolute w-[340px] h-[340px] rounded-full border border-gold-400/15 animate-spin-slow" />
      </div>

      {/* Hero content */}
      <div
        ref={containerRef}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        style={{
          transform:
            "perspective(1200px) rotateX(calc(var(--ty, 0) * 0.3deg)) rotateY(calc(var(--tx, 0) * 0.3deg)) translateX(var(--tx, 0)) translateY(var(--ty, 0))",
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Eyebrow */}
        <p
          className="text-xs tracking-[0.35em] uppercase mb-6 text-gold-400 animate-fade-in-up"
          style={{
            fontFamily: "Inter, sans-serif",
            animationDelay: "0.2s",
            opacity: 0,
          }}
        >
          ✦ Vous êtes cordialement invités ✦
        </p>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-display mb-6 animate-fade-in-up"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            background:
              "linear-gradient(135deg, #FAF6EE 30%, #f4d574 60%, #ebbe3a 80%, #FAF6EE 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animationDelay: "0.4s",
            opacity: 0,
          }}
        >
          Ngo Njock Ruth
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 400 }}></em> Viviane
        </h1>

        {/* Date & subtitle */}
        <p
          className="text-white text-2xl md:text-xl mb-3 animate-fade-in-up"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 300,
            letterSpacing: "0.1em",
            animationDelay: "0.6s",
            opacity: 0,
          }}
        >
          12 juin 2026
        </p>
        <p
          className="text-ivory/75 text-sm tracking-widest uppercase mb-12 animate-fade-in-up"
          style={{
            fontFamily: "Inter, sans-serif",
            animationDelay: "0.7s",
            opacity: 0,
          }}
        >
          A 16h — GMT, Douala — Bonabéri
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          {/* Primary */}
          <a
            href="#guests"
            className="group relative px-10 py-4 rounded-full font-medium text-sm tracking-widest uppercase overflow-hidden transition-all duration-500"
            style={{
              background: "linear-gradient(135deg, #c9942a, #ebbe3a, #c9942a)",
              backgroundSize: "200% 100%",
              color: "#1a1a1a",
              fontFamily: "Inter, sans-serif",
              boxShadow: "0 0 40px rgba(201,148,42,0.4)",
            }}
          >
            <span className="relative z-10">
              Consulter la liste des invités
            </span>
          </a>

          {/* Call us */}
          <a
            href="tel:681961676"
            className="group flex items-center justify-center gap-3 px-10 py-4 rounded-full text-sm tracking-widest uppercase font-medium transition-all duration-500 glass border border-gold-400/40 text-ivory hover:bg-gold-400/10"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="w-8 h-8 rounded-full bg-gold-400/20 flex items-center justify-center group-hover:bg-gold-400/40 transition-colors duration-300">
              <svg
                className="w-3.5 h-3.5 text-gold-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            </span>
            <span className="text-gold-300">Appelez Nous</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 animate-float"
          style={{ animationDelay: "1.2s" }}
        >
          <span
            className="text-ivory/30 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Scrollez
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-400/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
