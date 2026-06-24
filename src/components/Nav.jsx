import { useEffect, useState } from "react";
import { C } from "../constants/colors";

export default function Nav({ lang, setLang, t }) {
  const [sc, setSc] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setSc(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Fermer le menu si on redimensionne vers desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { href: "#about",    label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#parcours", label: t.nav.parcours },
    { href: "#contact",  label: t.nav.contact },
  ];

  const navBg = sc || menuOpen
    ? "rgba(255,255,255,0.97)"
    : "transparent";

  const textColor = sc || menuOpen ? C.dark : "#fff";
  const logoColor = sc || menuOpen ? C.orange : "#fff";

  return (
    <>
      <nav
        role="navigation"
        aria-label="Navigation principale"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1rem,5vw,4rem)",
          background: navBg,
          backdropFilter: sc ? "blur(10px)" : "none",
          borderBottom: sc || menuOpen ? "1px solid #eee" : "none",
          transition: "background .3s, border .3s",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="Retour en haut de page"
          style={{
            fontFamily: "Montserrat,sans-serif",
            fontWeight: 800,
            fontSize: "clamp(.85rem, 2.5vw, 1.1rem)",
            color: logoColor,
            letterSpacing: "-.01em",
            transition: "color .3s",
            whiteSpace: "nowrap",
          }}
        >
          YASMINE CHETTATI
        </a>

        {/* Liens desktop */}
        <div
          className="nav-desktop"
          style={{ gap: "2rem", alignItems: "center" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 700,
                fontSize: ".8rem",
                color: textColor,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                transition: "color .2s",
              }}
              onMouseEnter={(e) => { e.target.style.color = C.orange; }}
              onMouseLeave={(e) => { e.target.style.color = textColor; }}
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
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

        {/* Bouton hamburger mobile */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            padding: 8,
            width: 40,
            height: 40,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: sc || menuOpen ? C.dark : "#fff",
                borderRadius: 2,
                transition: "transform .3s, opacity .3s",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : i === 2
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : "scaleX(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 60,
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid #eee",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            padding: "1rem 2rem 1.5rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 700,
                fontSize: ".95rem",
                color: C.dark,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                padding: ".85rem 0",
                borderBottom: "1px solid #f0f0f0",
                transition: "color .2s",
              }}
              onMouseEnter={(e) => { e.target.style.color = C.orange; }}
              onMouseLeave={(e) => { e.target.style.color = C.dark; }}
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={() => {
              setLang(lang === "fr" ? "en" : "fr");
              setMenuOpen(false);
            }}
            style={{
              fontFamily: "Montserrat,sans-serif",
              fontWeight: 800,
              fontSize: ".8rem",
              background: C.orange,
              color: "#fff",
              border: "none",
              borderRadius: 4,
              padding: "10px 20px",
              cursor: "pointer",
              alignSelf: "flex-start",
              marginTop: "1rem",
              letterSpacing: ".08em",
            }}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>
      )}
    </>
  );
}
