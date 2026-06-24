import { C } from "../constants/colors";
import ParticleCanvas from "./ParticleCanvas";

export default function Hero({ t }) {
  return (
    <section
      aria-label="Introduction"
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
          padding: "80px clamp(1.2rem, 6vw, 4rem) 2rem",
          animation: "fadeUp .9s ease both",
          maxWidth: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Montserrat,sans-serif",
            fontWeight: 900,
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "-.02em",
            fontSize: "clamp(1.3rem, 5vw, 3.5rem)",
            lineHeight: 1.15,
            marginBottom: "1rem",
            whiteSpace: "pre-line",
            maxWidth: 900,
          }}
        >
          {t.hero.headline}
        </h1>

        <div
          aria-hidden="true"
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
            color: "rgba(255,255,255,0.72)",
            fontSize: "clamp(.88rem, 1.3vw, 1.05rem)",
            lineHeight: 1.8,
            maxWidth: 780,
            margin: "0 auto 2.5rem",
            whiteSpace: "pre-line",
            textAlign: "center",
          }}
        >
          {t.hero.sub}
        </p>

        <a
          href="#about"
          aria-label="Découvrir la suite"
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
            flexShrink: 0,
          }}
        >
          ↓
        </a>
      </div>
    </section>
  );
}
