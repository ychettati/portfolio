import { C } from "../constants/colors";

export default function SectionTitle({ children, sub, light }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.8rem,4vw,2.6rem)",
          color: light ? "#fff" : C.dark,
          letterSpacing: "-.02em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </h2>

      <div
        style={{
          width: 50,
          height: 4,
          background: C.orange,
          borderRadius: 2,
          margin: "0.8rem auto 0",
        }}
      />

      {sub && (
        <p
          style={{
            marginTop: "1rem",
            color: light ? "rgba(255,255,255,0.75)" : C.muted,
            fontStyle: "italic",
            fontSize: ".95rem",
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}