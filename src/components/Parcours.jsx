import { C } from "../constants/colors";
import SectionTitle from "./SectionTitle";

export default function Parcours({ t }) {
  return (
    <section
      id="parcours"
      style={{
        background: "#fff",
        padding: "5rem clamp(1.5rem,8vw,8rem)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionTitle sub={t.parcours.sub}>{t.parcours.title}</SectionTitle>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background: "#eee",
              transform: "translateX(-50%)",
            }}
          />

          {t.parcours.items.map((item, i) => {
            const left = i % 2 === 0;

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: left ? "flex-start" : "flex-end",
                  marginBottom: "2.5rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "1.5rem",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: C.orange,
                    border: "3px solid #fff",
                    boxShadow: "0 0 0 3px " + C.orange + "44",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                  }}
                />

                <div
                  style={{
                    width: "43%",
                    background: C.light,
                    borderRadius: 10,
                    padding: "1.25rem 1.5rem",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                    textAlign: left ? "right" : "left",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Montserrat,sans-serif",
                      fontWeight: 800,
                      fontSize: ".78rem",
                      color: C.orange,
                      marginBottom: ".3rem",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                    }}
                  >
                    {item.year}
                  </p>

                  <h3
                    style={{
                      fontFamily: "Montserrat,sans-serif",
                      fontWeight: 700,
                      fontSize: ".98rem",
                      color: C.dark,
                      marginBottom: item.location
                        ? ".2rem"
                        : item.desc
                        ? ".45rem"
                        : 0,
                    }}
                  >
                    {item.title}
                  </h3>

                  {item.location && (
                    <p
                      style={{
                        color: C.muted,
                        fontSize: ".78rem",
                        fontStyle: "italic",
                        marginBottom: item.desc ? ".45rem" : 0,
                      }}
                    >
                      {item.location}
                    </p>
                  )}

                  {item.desc && (
                    <p
                      style={{
                        color: C.text,
                        fontSize: ".82rem",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}