"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const guests = [
  " Leatitia",
  "Inès",
  "Merveilles",
  "Yannick",
  "Jessie",
  "Richarda",
  "Vanessa",
  "Raïssa",
  "Audrey",
  "Dorice",
];

// Duplicate for seamless loop
const guestsLoop = [...guests, ...guests];

export default function GuestMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".marquee-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: { trigger: ".marquee-heading", start: "top 85%" },
      },
    );

    // Continuous vertical marquee — col 1 goes up, col 2 goes down
    const speed = 60; // seconds per full cycle
    gsap.to(track1Ref.current, {
      y: "-50%",
      duration: speed,
      ease: "none",
      repeat: -1,
    });
    gsap.to(track2Ref.current, {
      y: "0%",
      duration: speed,
      ease: "none",
      repeat: -1,
      // Start at halfway so it descends
    });
    // Init track2 at -50%
    gsap.set(track2Ref.current, { y: "-50%" });
    gsap.to(track2Ref.current, {
      y: "0%",
      duration: speed,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const GuestItem = ({ name, index }: { name: string; index: number }) => (
    <div
      className={`group flex items-center gap-4 py-4 px-2 border-b border-[#fff2ca] hover:border-gold/40 transition-colors duration-300 cursor-default ${index % 3 === 0 ? "bg-gold/[0.02]" : ""}`}
    >
      <span className="text-gold/30 font-serif text-xs">
        {String((index % guests.length) + 1).padStart(2, "0")}
      </span>
      <span className="font-serif text-xl bg-clip-text text-transparent bg-[linear-gradient(135deg,#FAF6EE_30%,#f4d574_60%,#ebbe3a_80%,#FAF6EE_100%)]  italic group-hover:text-charcoal transition-colors duration-300">
        {name}
      </span>
      <span className="ml-auto text-gold-300 group-hover:text-gold/40 text-xs transition-all duration-300">
        ✦
      </span>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="guests"
      className="bg-charcoal py-24 md:py-36 px-6 overflow-hidden"
    >
      <div className="flex items-center gap-4 justify-center mb-16">
        <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-gold-500/60" />
        <span className="text-gold-400 text-lg">✦</span>
        <span
          className="text-xs tracking-[0.3em] uppercase text-gold-400/80"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Mes invités
        </span>
        <span className="text-gold-400 text-lg">✦</span>
        <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-gold-500/60" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="marquee-heading text-center mb-16">
          <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4 font-light">
            Chers invités
          </p>
          <h2 className="font-script text-5xl md:text-7xl text-white mb-6">
            Liste des invités
          </h2>

          {/* <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gold-400" />
            <span className="text-white text-lg">✦</span>
            <div className="w-16 h-px bg-gold-400" />
          </div> */}
          {/* <p className="text-white/30 text-sm mt-6 font-light italic font-serif">
            Those who make our celebration complete
          </p> */}
        </div>

        {/* Two-column marquee */}
        <div className="flex gap-6 md:gap-10 h-[500px] overflow-hidden relative">
          {/* Fade top */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-charcoal to-transparent z-10 pointer-events-none" />
          {/* Fade bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-charcoal to-transparent z-10 pointer-events-none" />

          {/* Column 1 — scrolls up */}
          <div className="flex-1 overflow-hidden">
            <div ref={track1Ref}>
              {guestsLoop.map((name, i) => (
                <GuestItem key={i} name={name} index={i} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent self-stretch" />

          {/* Column 2 — scrolls down */}
          <div className="flex-1 overflow-hidden">
            <div ref={track2Ref}>
              {[...guestsLoop].reverse().map((name, i) => (
                <GuestItem key={i} name={name} index={i} />
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-white/20 text-xs tracking-wider mt-8 uppercase font-light">
          ✦ &nbsp; {guests.length}&nbsp; invités &nbsp; ✦
        </p>
      </div>
    </section>
  );
}
