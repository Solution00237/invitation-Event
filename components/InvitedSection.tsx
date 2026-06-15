"use client";
import { useEffect, useRef } from "react";

const GUESTS = [
  "Alexandra Beaumont",
  "Théodore Laurent",
  "Isabelle Marchetti",
  "Sebastian Blackwood",
  "Clémentine Fontaine",
  "Raphael da Silva",
  "Vivienne Harrington",
  "Matteo Romano",
  "Élise Beausoleil",
  "James Whitmore",
  "Nadia Al-Rashid",
  "François Dupont",
  "Constance Villeneuve",
  "Lucas Ferrara",
  "Amara Diallo",
  "Henri Lecomte",
  "Sophia Chen",
  "Olivier Leblanc",
  "Valentina Rossi",
  "Charles Moreau",
  "Camille Bertrand",
  "Adrian Kowalski",
  "Margot Thierry",
  "Gabriel Vidal",
  "Estelle Renard",
  "Thomas Delacroix",
  "Inès Moreau",
  "Antoine Leclerc",
  "Florentine Rousseau",
  "Nicolas Petit",
];

// Split into 3 columns with slight offsets
const col1 = GUESTS.slice(0, 10);
const col2 = GUESTS.slice(10, 20);
const col3 = GUESTS.slice(20, 30);

function MarqueeColumn({
  names,
  duration,
  reverse = false,
  highlightIndex = -1,
}: {
  names: string[];
  duration: string;
  reverse?: boolean;
  highlightIndex?: number;
}) {
  // Duplicate for seamless loop
  const doubled = [...names, ...names];

  return (
    <div className="relative overflow-hidden h-[520px] flex-1">
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #0f0f0f, transparent)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0f0f0f, transparent)",
        }}
      />

      <div
        className="flex flex-col gap-3"
        style={{
          animation: `marqueeUp ${duration} linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {doubled.map((name, i) => {
          const isHighlight = i % names.length === highlightIndex;
          return (
            <div
              key={`${name}-${i}`}
              className={`
                relative px-6 py-3.5 rounded-xl text-center transition-all duration-300
                ${isHighlight
                  ? "bg-gold-500/15 border border-gold-400/60 scale-105"
                  : "border border-white/5 hover:border-gold-400/30 hover:bg-white/5"
                }
              `}
              style={{
                background: isHighlight
                  ? "linear-gradient(135deg, rgba(201,148,42,0.18), rgba(235,190,58,0.08))"
                  : undefined,
              }}
            >
              {isHighlight && (
                <span className="absolute -left-1 top-1/2 -translate-y-1/2 text-gold-400 text-xs">
                  ✦
                </span>
              )}
              <p
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1rem",
                  fontWeight: isHighlight ? 400 : 300,
                  letterSpacing: "0.05em",
                  color: isHighlight ? "#f4d574" : "rgba(250,246,238,0.65)",
                  fontStyle: isHighlight ? "italic" : "normal",
                }}
              >
                {name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function InvitedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="guests"
      className="relative py-32 px-6 z-10 overflow-hidden"
      style={{ background: "#0f0f0f" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,148,42,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <div className="flex items-center gap-4 justify-center mb-8 reveal">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-gold-500/60" />
          <span className="text-gold-400">✦</span>
          <span
            className="text-xs tracking-[0.3em] uppercase text-gold-400/80"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Guest List
          </span>
          <span className="text-gold-400">✦</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-gold-500/60" />
        </div>

        <h2
          className="reveal mb-4"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 600,
            color: "#FAF6EE",
          }}
        >
          Those{" "}
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
            Invited
          </em>
        </h2>
        <p
          className="reveal text-ivory/40 text-sm tracking-wider max-w-md mx-auto"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}
        >
          A curated selection of distinguished guests joining us for the evening.
        </p>
      </div>

      {/* Marquee columns */}
      <div className="relative z-10 max-w-3xl mx-auto flex gap-4 reveal">
        <MarqueeColumn names={col1} duration="28s" highlightIndex={2} />
        <MarqueeColumn names={col2} duration="36s" reverse highlightIndex={5} />
        <MarqueeColumn names={col3} duration="32s" highlightIndex={1} />
      </div>

      {/* Count badge */}
      <div className="relative z-10 flex justify-center mt-12 reveal">
        <div
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(201,148,42,0.15), rgba(235,190,58,0.08))",
            border: "1px solid rgba(201,148,42,0.35)",
          }}
        >
          <span className="text-gold-400 text-lg">✦</span>
          <span
            className="text-ivory/70 text-sm tracking-wider"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {GUESTS.length} distinguished guests invited
          </span>
          <span className="text-gold-400 text-lg">✦</span>
        </div>
      </div>
    </section>
  );
}
