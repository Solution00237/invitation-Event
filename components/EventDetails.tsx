"use client";
import { useEffect, useRef } from "react";

const details = [
  {
    icon: "📆",
    label: "Date",
    value: "12 Juin, 2026",
    sub: "Vendredis",
  },
  {
    icon: "🕗",
    label: "Heure",
    value: "16h:00",
    sub: "Cérémonie",
  },
  {
    icon: "📍",
    label: "Lieu",
    value: "Andin Gourmet",
    sub: "Bonabéri",
  },
  // {
  //   icon: "👔",
  //   label: "Dress Code",
  //   value: "Black Tie",
  //   sub: "Formal attire required",
  // },
];

export default function EventDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="details"
      className="relative py-32 px-6 z-10"
      style={{
        background:
          "linear-gradient(180deg, #1a1a1a 0%, #2d1a0a 50%, #1a1a1a 100%)",
      }}
    >
      {/* Ornament top */}
      <div className="flex items-center gap-4 justify-center mb-16 reveal">
        <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-gold-500/60" />
        <span className="text-gold-400 text-lg">✦</span>
        <span
          className="text-xs tracking-[0.3em] uppercase text-gold-400/80"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          l'événement
        </span>
        <span className="text-gold-400 text-lg">✦</span>
        <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-gold-500/60" />
      </div>

      {/* Title */}
      <h2
        className="text-center mb-20 reveal"
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 600,
          color: "#FAF6EE",
          letterSpacing: "-0.01em",
        }}
      >
        Une soirée{" "}
        <em
          style={{
            fontStyle: "italic",
            fontWeight: 400,
            background: "linear-gradient(135deg, #c9942a, #f4d574, #ebbe3a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          d'Élégance
        </em>
      </h2>

      {/* Detail cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {details.map((d, i) => (
          <div
            key={d.label}
            className="reveal perspective-1000"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div
              className="card-3d relative p-8 rounded-2xl text-center cursor-default"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                border: "1px solid rgba(201,148,42,0.25)",
                boxShadow:
                  "0 4px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Glow top */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #ebbe3a, transparent)",
                }}
              />

              <div className="text-4xl mb-4">{d.icon}</div>
              <p
                className="text-xs tracking-widest uppercase mb-2"
                style={{ fontFamily: "Inter, sans-serif", color: "#c9942a" }}
              >
                {d.label}
              </p>
              <p
                className="text-ivory font-medium mb-1"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.1rem",
                }}
              >
                {d.value}
              </p>
              <p
                className="text-ivory/40 text-xs"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {d.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
