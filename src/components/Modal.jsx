import { useEffect } from "react";
import { C } from "../constants/colors";

export default function Modal({ project, onClose, t }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 8,
          maxWidth: 660,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "2.5rem",
          position: "relative",
          animation: "fadeUp .3s ease",
        }}
      >
        <h2
          style={{
            fontFamily: "Montserrat,sans-serif",
            fontWeight: 800,
            fontSize: "1.5rem",
            color: C.dark,
            marginBottom: ".25rem",
          }}
        >
          {project.name}
        </h2>

        <p
          style={{
            color: C.muted,
            fontSize: ".85rem",
            marginBottom: "1.25rem",
            fontStyle: "italic",
          }}
        >
          {project.type}
        </p>

        <div
          style={{
            width: 50,
            height: 3,
            background: C.orange,
            borderRadius: 2,
            marginBottom: "1.5rem",
          }}
        />

        <div
          style={{
            width: "100%",
            height: 200,
            borderRadius: 6,
            marginBottom: "1.5rem",
            overflow: "hidden",
            background: project.imgBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "4rem" }}>{project.emoji}</span>
        </div>

        <p
          style={{
            color: C.text,
            lineHeight: 1.75,
            marginBottom: "1.25rem",
          }}
        >
          {project.desc}
        </p>

        <div
          style={{
            width: 50,
            height: 3,
            background: C.orange,
            borderRadius: 2,
            margin: "1.25rem 0",
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          {project.tech.map((tech) => (
            <span
              key={tech}
              style={{
                background: "#f5f5f5",
                border: "1px solid #e0e0e0",
                borderRadius: 4,
                padding: "3px 10px",
                fontSize: ".75rem",
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 600,
                color: C.dark,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <p
          style={{
            fontSize: ".8rem",
            color: C.muted,
            marginBottom: "1.5rem",
          }}
        >
          <strong style={{ color: C.dark }}>Rôle :</strong> {project.role}
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 24px",
                background: C.orange,
                color: "#fff",
                borderRadius: 999,
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 700,
                fontSize: ".8rem",
                textTransform: "uppercase",
                letterSpacing: ".06em",
              }}
            >
              {t.seeRepo}
            </a>
          ) : (
            <span />
          )}

          <button
            onClick={onClose}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 20px",
              background: C.dark,
              color: "#fff",
              border: "none",
              borderRadius: 999,
              fontFamily: "Montserrat,sans-serif",
              fontWeight: 700,
              fontSize: ".8rem",
              textTransform: "uppercase",
              letterSpacing: ".06em",
              cursor: "pointer",
            }}
          >
            ✕ {t.back}
          </button>
        </div>
      </div>
    </div>
  );
}