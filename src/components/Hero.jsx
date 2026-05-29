import { C } from "../constants/colors";
import ParticleCanvas from "./ParticleCanvas";

export default function Hero({ t }) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: C.darker,
        overflow: "hidden",
      }}
    >
      <ParticleCanvas dark={true} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 1.5rem",
          animation: "fadeUp .9s ease both",
        }}
      >
        <h1
          style={{
            fontFamily: "Montserrat,sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem,6vw,4rem)",
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "-.02em",
            lineHeight: 1.1,
            marginBottom: "1rem",
            whiteSpace: "pre-line",
          }}
        >
          {t.hero.headline}
        </h1>

        <div
          style={{
            width: 60,
            height: 4,
            background: C.orange,
            borderRadius: 2,
            margin: "0 auto 1.5rem",
          }}
        />

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(.95rem,1.5vw,1.1rem)",
            maxWidth: 600,
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          {t.hero.sub}
        </p>

        <a
          href="#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: C.orange,
            color: "#fff",
            fontSize: "1.4rem",
            animation: "pulse 2s ease-in-out infinite",
            boxShadow: "0 4px 20px rgba(232,73,29,0.4)",
          }}
        >
          ↓
        </a>
      </div>
    </section>
  );
}