import { useState } from "react";
import { C } from "../constants/colors";
import SectionTitle from "./SectionTitle";
import ParticleCanvas from "./ParticleCanvas";

const EMAILJS_SERVICE = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE = "YOUR_TEMPLATE_ID";
const EMAILJS_KEY = "YOUR_PUBLIC_KEY";

export default function Contact({ t }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE,
          template_id: EMAILJS_TEMPLATE,
          user_id: EMAILJS_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    border: "1.5px solid #ddd",
    borderRadius: 6,
    fontFamily: "Open Sans,sans-serif",
    fontSize: ".92rem",
    color: C.dark,
    background: "#fff",
    outline: "none",
    transition: "border-color .2s",
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          background: C.darker,
          padding: "4rem clamp(1.5rem,8vw,8rem)",
          overflow: "hidden",
        }}
      >
        <ParticleCanvas dark={true} />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Montserrat,sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.2rem,3vw,1.8rem)",
              color: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            {t.contact.cvText}
          </h2>

          <a
            href="mailto:chettatiyasmne17@gmail.com"
            style={{
              display: "inline-block",
              padding: "14px 40px",
              background: "#fff",
              color: C.dark,
              borderRadius: 999,
              fontFamily: "Montserrat,sans-serif",
              fontWeight: 700,
              fontSize: ".85rem",
              textTransform: "uppercase",
              letterSpacing: ".08em",
              transition: "background .2s, color .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.orange;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = C.dark;
            }}
          >
            {t.contact.cvCta}
          </a>
        </div>
      </div>

      <section
        id="contact"
        style={{
          background: C.light,
          padding: "5rem clamp(1.5rem,8vw,8rem)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTitle sub={t.contact.sub}>{t.contact.title}</SectionTitle>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              {[
                {
                  icon: "✉️",
                  label: t.contact.emailLabel,
                  val: "chettatiyasmne17@gmail.com",
                  href: "mailto:chettatiyasmne17@gmail.com",
                },
                {
                  icon: "📱",
                  label: t.contact.phoneLabel,
                  val: "07 49 87 37 73",
                  href: "tel:0749873773",
                },
                {
                  icon: "📍",
                  label: t.contact.locationLabel,
                  val: "Mobile sur toute la France",
                  href: null,
                },
                {
                  icon: "🎓",
                  label: t.contact.availableLabel,
                  val: "Septembre 2026",
                  href: null,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 8,
                    padding: "1.2rem 1.4rem",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>

                  <div>
                    <p
                      style={{
                        fontFamily: "Montserrat,sans-serif",
                        fontWeight: 700,
                        fontSize: ".72rem",
                        color: C.orange,
                        textTransform: "uppercase",
                        letterSpacing: ".06em",
                        marginBottom: ".2rem",
                      }}
                    >
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: ".88rem",
                          color: C.dark,
                          fontWeight: 600,
                          transition: "color .2s",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = C.orange;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = C.dark;
                        }}
                      >
                        {item.val}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontSize: ".88rem",
                          color: C.text,
                        }}
                      >
                        {item.val}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: 8,
                padding: "2rem",
                boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              }}
            >
              <h3
                style={{
                  fontFamily: "Montserrat,sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: C.dark,
                  marginBottom: "1.5rem",
                }}
              >
                {t.contact.formTitle}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div>
                  <label
                    style={{
                      fontFamily: "Montserrat,sans-serif",
                      fontWeight: 700,
                      fontSize: ".75rem",
                      color: C.orange,
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      display: "block",
                      marginBottom: ".4rem",
                    }}
                  >
                    {t.contact.formName} *
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.contact.formNamePh}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = C.orange;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ddd";
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "Montserrat,sans-serif",
                      fontWeight: 700,
                      fontSize: ".75rem",
                      color: C.orange,
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      display: "block",
                      marginBottom: ".4rem",
                    }}
                  >
                    {t.contact.formEmail} *
                  </label>

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.contact.formEmailPh}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = C.orange;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ddd";
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "Montserrat,sans-serif",
                      fontWeight: 700,
                      fontSize: ".75rem",
                      color: C.orange,
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      display: "block",
                      marginBottom: ".4rem",
                    }}
                  >
                    {t.contact.formMessage} *
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.formMessagePh}
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = C.orange;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ddd";
                    }}
                  />
                </div>

                {status === "success" && (
                  <p
                    style={{
                      color: "#2e7d32",
                      fontFamily: "Montserrat,sans-serif",
                      fontWeight: 600,
                      fontSize: ".85rem",
                      background: "#e8f5e9",
                      padding: "10px 14px",
                      borderRadius: 6,
                    }}
                  >
                    ✓ {t.contact.formSuccess}
                  </p>
                )}

                {status === "error" && (
                  <p
                    style={{
                      color: "#c62828",
                      fontFamily: "Montserrat,sans-serif",
                      fontWeight: 600,
                      fontSize: ".85rem",
                      background: "#ffebee",
                      padding: "10px 14px",
                      borderRadius: 6,
                    }}
                  >
                    ✗ {t.contact.formError}
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  style={{
                    padding: "13px 32px",
                    background: status === "sending" ? "#aaa" : C.orange,
                    color: "#fff",
                    border: "none",
                    borderRadius: 999,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    fontFamily: "Montserrat,sans-serif",
                    fontWeight: 700,
                    fontSize: ".85rem",
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    alignSelf: "flex-start",
                    transition: "background .2s, transform .15s",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending") {
                      e.currentTarget.style.background = C.orangeHover;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "sending") {
                      e.currentTarget.style.background = C.orange;
                    }
                  }}
                >
                  {status === "sending"
                    ? t.contact.formSending
                    : t.contact.formSend}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}