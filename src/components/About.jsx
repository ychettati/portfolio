import { Layers, Rss, MousePointer, Flame } from "lucide-react";
import { C } from "../constants/colors";
import ParticleCanvas from "./ParticleCanvas";
import SectionTitle from "./SectionTitle";

const ICON_MAP = {
  Layers,
  Rss,
  MousePointer,
  Flame,
};

export default function About({ t }) {
  return (
    <>
      {/* ── Section présentation ── */}
      <section
        id="about"
        style={{
          background: C.orange,
          position: "relative",
          overflow: "hidden",
          padding: "5rem clamp(1.5rem,8vw,8rem)",
        }}
      >
        <ParticleCanvas dark={false} />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem,3.5vw,2.2rem)",
                color: "#fff",
                marginBottom: "1.5rem",
              }}
            >
              {t.about.title}
            </h2>

            <div
              aria-hidden="true"
              style={{
                width: 50,
                height: 4,
                background: "#fff",
                borderRadius: 2,
                marginBottom: "1.5rem",
              }}
            />

            <p
              style={{
                color: "#fff",
                lineHeight: 1.8,
                fontSize: "1rem",
                marginBottom: "1rem",
              }}
            >
              {t.about.p1}
            </p>

            <p
              style={{
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.8,
                fontSize: "1rem",
                marginBottom: "2rem",
                whiteSpace: "pre-line",
              }}
            >
              {t.about.p2}
            </p>

            <a
              href="#projects"
              style={{
                display: "inline-block",
                padding: "12px 36px",
                background: "#fff",
                color: C.dark,
                borderRadius: 999,
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 700,
                fontSize: ".85rem",
                textTransform: "uppercase",
                letterSpacing: ".08em",
                transition: "transform .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
              }}
            >
              {t.about.cta}
            </a>
          </div>

          {t.about.photo && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "min(320px, 80vw)",
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  padding: 8,
                  background: "rgba(255,255,255,0.25)",
                  boxShadow: "0 20px 45px rgba(0,0,0,0.22)",
                }}
              >
                <img
                  src={t.about.photo}
                  alt="Portrait de Yasmine Chettati"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    display: "block",
                    border: "4px solid #fff",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Section valeurs / ce qui me caractérise ── */}
      <section
        style={{
          background: "#fff",
          padding: "5rem clamp(1.5rem,8vw,8rem)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionTitle sub={t.about.skillsSub}>
            {t.about.skillsTitle}
          </SectionTitle>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "1.5rem",
              textAlign: "center",
            }}
          >
            {t.about.values.map((v, i) => {
              const Icon = ICON_MAP[v.icon];
              return (
                <div
                  key={i}
                  style={{
                    padding: "2rem 1.5rem",
                    borderRadius: 12,
                    background: "#fafafa",
                    border: "1px solid #f0f0f0",
                    transition: "box-shadow .25s, transform .25s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 28px rgba(232,73,29,0.12)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {/* Cercle avec icône */}
                  <div
                    aria-hidden="true"
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: "50%",
                      background: C.orange + "15",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.1rem",
                    }}
                  >
                    {Icon && (
                      <Icon size={26} color={C.orange} strokeWidth={1.8} />
                    )}
                  </div>

                  <h3
                    style={{
                      fontFamily: "Montserrat,sans-serif",
                      fontWeight: 700,
                      fontSize: ".92rem",
                      color: C.dark,
                      marginBottom: ".6rem",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                    }}
                  >
                    {v.title}
                  </h3>

                  <p
                    style={{
                      color: C.text,
                      fontSize: ".88rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
