"use client";
import { useEffect, useRef } from "react";

export default function MapSection() {
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
      id="location"
      className="relative py-32 px-6 z-10"
      style={{
        background:
          "linear-gradient(180deg, #0f0f0f 0%, #1a1209 50%, #0f0f0f 100%)",
      }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center gap-4 justify-center mb-8 reveal">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-gold-500/60" />
          <span className="text-gold-400">✦</span>
          <span
            className="text-xs tracking-[0.3em] uppercase text-gold-400/80"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Localisation
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
          Trouver le{" "}
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
            Lieu
          </em>
        </h2>
        <p
          className="reveal text-ivory/40 max-w-md mx-auto"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1.1rem",
          }}
        >
          Andin Goumet Lounge & Restaurant, Bonabéri
        </p>
      </div>

      {/* Map + Info layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Map embed */}
        <div
          className="lg:col-span-3 reveal rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(201,148,42,0.25)",
            boxShadow:
              "0 20px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,148,42,0.1)",
          }}
        >
          <iframe
            title="Grand Palais Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.727714400063!2d9.674011799999999!3d4.075785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061136400562d8b%3A0xa85542e55a0071ce!2sAndin%20Goumet%20Lounge%20%26%20Restaurant!5e0!3m2!1sfr!2scm!4v1780918380337!5m2!1sfr!2scm"
            width="100%"
            height="420"
            style={{
              border: 0,
              display: "block",
              filter:
                "invert(90%) hue-rotate(180deg) saturate(0.7) brightness(0.85)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info panel */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Address card */}
          <div
            className="reveal p-8 rounded-2xl"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
              border: "1px solid rgba(201,148,42,0.25)",
            }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-4 text-gold-400"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Address
            </p>
            <p
              className="text-ivory/90 mb-1"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.15rem",
              }}
            >
              Andin Goumet Lounge & Restaurant
            </p>
            <p
              className="text-ivory/50 text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              3MGF+8J6, Rue Ec publique
              <br />
              Bonabéri
            </p>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-gold-400/60 text-xs">🤝</span>
                <span
                  className="text-ivory/50 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Partenaire avec{" "}
                  <span
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.05rem",
                      color: "#fff",
                    }}
                  >
                    Market Express cm
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-400/60 text-xs">💎</span>
                <span
                  className="text-ivory/50 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  VIP
                </span>
              </div>
            </div>
          </div>

          {/* Call Us button — prominent CTA */}
          <div className="reveal">
            <a
              href="tel:681961676"
              id="rsvp"
              className="group relative flex items-center justify-center gap-4 w-full px-8 py-5 rounded-2xl overflow-hidden transition-all duration-500"
              style={{
                background:
                  "linear-gradient(135deg, #c9942a 0%, #ebbe3a 50%, #c9942a 100%)",
                backgroundSize: "200% 100%",
                boxShadow:
                  "0 8px 40px rgba(201,148,42,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
                color: "#1a1a1a",
              }}
            >
              {/* Animated shimmer overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s linear infinite",
                }}
              />

              <div className="relative z-10 w-10 h-10 rounded-full bg-black/15 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
              </div>

              <div className="relative z-10 text-left">
                <p
                  className="font-semibold text-base tracking-wide"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Appelez Nous
                </p>
                <p
                  className="text-xs opacity-70 tracking-widest uppercase"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  681961676
                </p>
              </div>
            </a>
          </div>

          {/* RSVP deadline */}
          {/* <div
            className="reveal p-5 rounded-xl text-center"
            style={{
              background: "rgba(201,148,42,0.06)",
              border: "1px solid rgba(201,148,42,0.2)",
            }}
          >
            <p
              className="text-ivory/40 text-xs tracking-widest uppercase mb-1"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              RSVP Deadline
            </p>
            <p
              className="text-gold-300"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.2rem",
              }}
            >
              December 10th, 2025
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
