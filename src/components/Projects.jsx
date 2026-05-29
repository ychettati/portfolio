import { useState } from "react";
import { C } from "../constants/colors";
import SectionTitle from "./SectionTitle";
import Modal from "./Modal";

export default function Projects({ t }) {
  const [active, setActive] = useState(null);
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
        <Modal
          project={project}
          onClose={() => setActive(null)}
          t={t.projects}
        />
      )}

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionTitle sub={t.projects.sub}>{t.projects.title}</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
            gap: "1.75rem",
          }}
        >
          {t.projects.items.map((p, i) => (
            <div
              key={p.id}
              onClick={() => setActive(i)}
              style={{
                background: "#fff",
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                cursor: "pointer",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 2px 12px rgba(0,0,0,0.07)";
              }}
            >
              <div
                style={{
                  height: 180,
                  background: p.imgBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3.5rem",
                }}
              >
                {p.emoji}
              </div>

              <div style={{ padding: "1.4rem" }}>
                <h3
                  style={{
                    fontFamily: "Montserrat,sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: C.dark,
                    marginBottom: ".25rem",
                  }}
                >
                  {p.name}
                </h3>

                <p
                  style={{
                    color: C.muted,
                    fontSize: ".78rem",
                    fontStyle: "italic",
                    marginBottom: ".75rem",
                  }}
                >
                  {p.type}
                </p>

                <p
                  style={{
                    color: C.text,
                    fontSize: ".88rem",
                    lineHeight: 1.6,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}