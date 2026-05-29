import { useEffect, useState } from "react";
import { C } from "../constants/colors";

export default function Nav({ lang, setLang, t }) {
  const [sc, setSc] = useState(false);

  useEffect(() => {
    const h = () => setSc(window.scrollY > 60);
    window.addEventListener("scroll", h);

    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#parcours", label: t.nav.parcours },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(1rem,5vw,4rem)",
        background: sc ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: sc ? "blur(10px)" : "none",
        borderBottom: sc ? "1px solid #eee" : "none",
        transition: "all .3s",
      }}
    >
      <span
        style={{
          fontFamily: "Montserrat,sans-serif",
          fontWeight: 800,
          fontSize: "1.1rem",
          color: sc ? C.orange : "#fff",
          letterSpacing: "-.01em",
        }}
      >
        YASMINE CHETTATI
      </span>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontFamily: "Montserrat,sans-serif",
              fontWeight: 700,
              fontSize: ".8rem",
              color: sc ? C.dark : "#fff",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = C.orange;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = sc ? C.dark : "#fff";
            }}
          >
            {l.label}
          </a>
        ))}

        <button
          onClick={() => setLang(lang === "fr" ? "en" : "fr")}
          style={{
            fontFamily: "Montserrat,sans-serif",
            fontWeight: 800,
            fontSize: ".75rem",
            background: C.orange,
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "5px 12px",
            cursor: "pointer",
            letterSpacing: ".08em",
          }}
        >
          {lang === "fr" ? "EN" : "FR"}
        </button>
      </div>
    </nav>
  );
}