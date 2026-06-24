import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { C } from "../constants/colors";
import SectionTitle from "./SectionTitle";
import Modal from "./Modal";

export default function Projects({ t }) {
  const [active, setActive] = useState(null);
  const [pressed, setPressed] = useState(null);
  const project = active !== null ? t.projects.items[active] : null;

  return (
    <section
      id="projects"
      style={{
        background: C.light,
        padding: "5rem clamp(1.5rem,8vw,8rem)",
      }}
    >
      {project && (
        <Modal project={project} onClose={() => setActive(null)} t={t.projects} />
      )}

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionTitle sub={t.projects.sub}>{t.projects.title}</SectionTitle>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: "1.75rem",
        }}>
          {t.projects.items.map((p, i) => (
            <div
              key={p.id}
              role="button"
              tabIndex={0}
              aria-label={`Voir le projet ${p.name}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => e.key === "Enter" && setActive(i)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.14)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)";
              }}
              onTouchStart={() => setPressed(i)}
              onTouchEnd={() => setPressed(null)}
              style={{
                background: "#fff",
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                cursor: "pointer",
                transition: "transform .22s, box-shadow .22s",
                outline: "none",
                transform: pressed === i ? "scale(0.97)" : "none",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {/* Image / emoji */}
              <div style={{
                height: 180,
                background: p.imgBg,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`Illustration du projet ${p.name}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: p.imageFit || "cover",
                      padding: p.imageFit === "contain" ? "1.5rem" : 0,
                      display: "block",
                      boxSizing: "border-box",
                    }}
                  />
                ) : (
                  <span style={{ fontSize: "3.5rem" }}>{p.emoji}</span>
                )}

                {/* Overlay "Voir" au hover — toujours visible sur mobile */}
                <div className="card-overlay" style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(232,73,29,0.88) 0%, transparent 60%)",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  paddingBottom: "1rem",
                  opacity: 0,
                  transition: "opacity .22s",
                }}>
                  <span style={{
                    color: "#fff",
                    fontFamily: "Montserrat,sans-serif",
                    fontWeight: 700,
                    fontSize: ".78rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}>
                    Voir le projet <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Contenu carte */}
              <div style={{ padding: "1.4rem" }}>
                <h3 style={{
                  fontFamily: "Montserrat,sans-serif",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: C.dark,
                  marginBottom: ".25rem",
                }}>
                  {p.name}
                </h3>

                <p style={{
                  color: C.muted,
                  fontSize: ".78rem",
                  fontStyle: "italic",
                  marginBottom: "1rem",
                }}>
                  {p.type}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: ".75rem" }}>
                  {p.tech.slice(0, 4).map((tech) => (
                    <span key={tech} style={{
                      background: "#f5f5f5",
                      border: "1px solid #e0e0e0",
                      borderRadius: 999,
                      padding: "4px 9px",
                      fontSize: ".68rem",
                      fontFamily: "Montserrat,sans-serif",
                      fontWeight: 600,
                      color: C.dark,
                    }}>
                      {tech}
                    </span>
                  ))}
                  {p.tech.length > 4 && (
                    <span style={{
                      background: C.orange,
                      borderRadius: 999,
                      padding: "4px 9px",
                      fontSize: ".68rem",
                      fontFamily: "Montserrat,sans-serif",
                      fontWeight: 700,
                      color: "#fff",
                    }}>
                      +{p.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
