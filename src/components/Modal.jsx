import { useEffect, useState } from "react";
import { ZoomIn, X, ArrowLeft, ExternalLink } from "lucide-react";
import { C } from "../constants/colors";

export default function Modal({ project, onClose, t }) {
  const [zoomed, setZoomed] = useState(false);
  const displayedImage = project.modalImage || project.image;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Fermer avec Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") zoomed ? setZoomed(false) : onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [zoomed, onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.75)",
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
          borderRadius: 12,
          maxWidth: 760,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "2rem clamp(1.2rem, 5vw, 2.5rem)",
          position: "relative",
          animation: "fadeUp .3s ease",
        }}
      >
        {/* Bouton fermer en haut à droite */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{
            position: "sticky",
            top: 0,
            float: "right",
            marginLeft: "1rem",
            marginBottom: ".5rem",
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "none",
            background: "#f0f0f0",
            color: C.dark,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            zIndex: 10,
            transition: "background .2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = C.orange; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#f0f0f0"; e.currentTarget.style.color = C.dark; }}
        >
          <X size={16} strokeWidth={2.5} />
        </button>

        <h2 style={{
          fontFamily: "Montserrat,sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
          color: C.dark,
          marginBottom: ".25rem",
          paddingRight: "2.5rem",
        }}>
          {project.name}
        </h2>

        <p style={{ color: C.muted, fontSize: ".85rem", marginBottom: "1.25rem", fontStyle: "italic" }}>
          {project.type}
        </p>

        <div style={{ width: 50, height: 3, background: C.orange, borderRadius: 2, marginBottom: "1.5rem" }} />

        {/* Image avec indication zoom claire */}
        {displayedImage ? (
          <div style={{ position: "relative", marginBottom: "1.5rem" }}>
            <button
              type="button"
              onClick={() => setZoomed(true)}
              aria-label="Agrandir l'image"
              style={{
                width: "100%",
                height: "clamp(160px, 35vw, 280px)",
                border: "none",
                outline: "none",
                borderRadius: 10,
                padding: 0,
                background: "transparent",
                cursor: "zoom-in",
                overflow: "hidden",
                display: "block",
                position: "relative",
              }}
            >
              <img
                src={displayedImage}
                alt={`Aperçu du projet ${project.name}`}
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
              />

              {/* Badge "Agrandir" toujours visible */}
              <div style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                background: "rgba(0,0,0,0.65)",
                color: "#fff",
                borderRadius: 999,
                padding: "5px 12px 5px 8px",
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: ".72rem",
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 700,
                letterSpacing: ".04em",
                backdropFilter: "blur(4px)",
                pointerEvents: "none",
              }}>
                <ZoomIn size={13} />
                Agrandir
              </div>
            </button>
          </div>
        ) : (
          <div style={{
            height: 160, borderRadius: 10, marginBottom: "1.5rem",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "#fafafa", border: "2px solid #f0f0f0",
          }}>
            <span style={{ fontSize: "4rem" }}>{project.emoji}</span>
          </div>
        )}

        <p style={{ color: C.text, lineHeight: 1.75, marginBottom: "1.25rem", whiteSpace: "pre-line" }}>
          {project.desc}
        </p>

        <div style={{ width: 50, height: 3, background: C.orange, borderRadius: 2, margin: "1.25rem 0" }} />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
          {project.tech.map((tech) => (
            <span key={tech} style={{
              background: "#f5f5f5",
              border: "1px solid #e0e0e0",
              borderRadius: 4,
              padding: "3px 10px",
              fontSize: ".75rem",
              fontFamily: "Montserrat,sans-serif",
              fontWeight: 600,
              color: C.dark,
            }}>
              {tech}
            </span>
          ))}
        </div>

        <p style={{ fontSize: ".8rem", color: C.muted, marginBottom: "1.5rem" }}>
          <strong style={{ color: C.dark }}>Rôle :</strong> {project.role}
        </p>

        {/* Boutons égaux en grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: project.repo ? "1fr 1fr" : "1fr",
          gap: "0.75rem",
        }}>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 7,
                padding: "13px 16px",
                background: C.orange,
                color: "#fff",
                borderRadius: 999,
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 700,
                fontSize: ".8rem",
                textTransform: "uppercase",
                letterSpacing: ".06em",
                minHeight: 48,
                transition: "background .2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.orangeHover; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = C.orange; }}
            >
              <ExternalLink size={15} />
              {t.seeRepo}
            </a>
          )}

          <button
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              padding: "13px 16px",
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
              minHeight: 48,
              transition: "background .2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#444"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = C.dark; }}
          >
            <ArrowLeft size={15} />
            {t.back}
          </button>
        </div>
      </div>

      {/* ── Zoom plein écran ── */}
      {zoomed && displayedImage && (
        <div
          onClick={() => setZoomed(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 300,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            cursor: "zoom-out",
          }}
        >
          {/* Instructions mobile */}
          <div style={{
            position: "absolute",
            top: 16,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.8)",
            borderRadius: 999,
            padding: "6px 16px",
            fontSize: ".72rem",
            fontFamily: "Montserrat,sans-serif",
            fontWeight: 600,
            letterSpacing: ".04em",
            backdropFilter: "blur(4px)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}>
            Appuyez n'importe où pour fermer
          </div>

          <img
            src={displayedImage}
            alt={`Aperçu agrandi du projet ${project.name}`}
            style={{
              maxWidth: "95vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: 8,
              boxShadow: "0 0 60px rgba(0,0,0,0.5)",
            }}
          />

          {/* Bouton fermer zoom */}
          <button
            onClick={(e) => { e.stopPropagation(); setZoomed(false); }}
            aria-label="Fermer le zoom"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "none",
              background: "#fff",
              color: C.dark,
              fontSize: "1rem",
              fontWeight: 800,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
            }}
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </div>
  );
}
