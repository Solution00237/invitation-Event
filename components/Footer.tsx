import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-16 px-6 text-center"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(201,148,42,0.15)",
      }}
    >
      {/* Logo */}
      <div className=" flex flex-col items-center justify-center mb-6">
        <Image
          src="/Logo.png"
          alt="Logo Image"
          height={40}
          width={40}
          priority
        />
        <span
          className="text-white text-base tracking-widest uppercase font-bold mt-2"
          style={{ fontFamily: "inter, serif" }}
        >
          Market Express cm Event
        </span>
      </div>

      {/* Tagline */}
      <p
        className="text-ivory/30 text-sm mb-10 max-w-sm mx-auto"
        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
      >
        Une soirée placée sous le signe de l'élégance, du partage et de la fête
        — conçue pour ceux qui méritent l'exceptionnel.
      </p>

      {/* Divider */}
      <div className="flex items-center gap-4 justify-center mb-8">
        <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-gold-500/30" />
        <span className="text-gold-400/40 text-xs">✦</span>
        <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-gold-500/30" />
      </div>

      {/* Nav links */}
      <nav className="flex flex-wrap justify-center gap-8 mb-10">
        {["Événement", "Invités", "Localisation"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-ivory/30 hover:text-gold-400 text-xs tracking-widest uppercase transition-colors duration-300"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {link}
          </a>
        ))}
      </nav>

      <p
        className="text-ivory/20 text-xs tracking-wider"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        © 2026 Market Express cm. Tous droits réservés.
      </p>
    </footer>
  );
}
