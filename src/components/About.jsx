import { C } from "../constants/colors";
import ParticleCanvas from "./ParticleCanvas";
import SectionTitle from "./SectionTitle";

export default function About({ t }) {
  return (
    <>
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
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
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {t.about.values.map((v, i) => (
              <div key={i} style={{ padding: "1.5rem 1rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: ".75rem" }}>
                  {v.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "Montserrat,sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: C.dark,
                    marginBottom: ".5rem",
                    textTransform: "uppercase",
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}