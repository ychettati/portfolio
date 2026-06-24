import { useState } from "react";
import { Mail, Phone, MapPin, CalendarCheck } from "lucide-react";
import { C } from "../constants/colors";
import SectionTitle from "./SectionTitle";
import ParticleCanvas from "./ParticleCanvas";

const EMAILJS_SERVICE  = "service_u119x4a";
const EMAILJS_TEMPLATE = "template_by68smf";
const EMAILJS_KEY      = "KJrFstw4NPrXJtsEB";

export default function Contact({ t }) {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setStatus("idle");
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    const name    = form.name.trim();
    const email   = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message || !isValidEmail(email)) {
      setStatus("missing");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id:      EMAILJS_SERVICE,
          template_id:     EMAILJS_TEMPLATE,
          user_id:         EMAILJS_KEY,
          template_params: { from_name: name, from_email: email, message },
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

  const infoItems = [
    { Icon: Mail,          label: t.contact.emailLabel,    val: "chettatiyasmne17@gmail.com", href: "mailto:chettatiyasmne17@gmail.com" },
    { Icon: Phone,         label: t.contact.phoneLabel,    val: "07 49 87 37 73",              href: "tel:0749873773" },
    { Icon: MapPin,        label: t.contact.locationLabel, val: t.contact.locationValue,       href: null },
    { Icon: CalendarCheck, label: t.contact.availableLabel,val: t.contact.availableValue,      href: null },
  ];

  return (
    <>
      {/* Bandeau CV */}
      <div
        style={{
          position: "relative",
          background: C.darker,
          padding: "4rem clamp(1.5rem,8vw,8rem)",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <ParticleCanvas dark={true} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "Montserrat,sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.1rem,3vw,1.8rem)",
              color: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            {t.contact.cvText}
          </h2>

          <a
            href={`${import.meta.env.BASE_URL}cv/cv-yasmine-chettati.pdf`}
            download
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

      {/* Section contact */}
      <section
        id="contact"
        style={{
          background: C.light,
          padding: "5rem clamp(1.5rem,8vw,8rem)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTitle sub={t.contact.sub}>{t.contact.title}</SectionTitle>

          {/* Grille responsive via classe CSS */}
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            {/* Infos */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {infoItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 8,
                    padding: "1.1rem 1.2rem",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: C.orange + "18",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.Icon size={20} color={C.orange} strokeWidth={2.2} />
                  </div>

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
                          wordBreak: "break-all",
                        }}
                        onMouseEnter={(e) => { e.target.style.color = C.orange; }}
                        onMouseLeave={(e) => { e.target.style.color = C.dark; }}
                      >
                        {item.val}
                      </a>
                    ) : (
                      <p style={{ fontSize: ".88rem", color: C.text }}>
                        {item.val}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Formulaire */}
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

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { name: "name",    label: t.contact.formName,    ph: t.contact.formNamePh,    type: "text" },
                  { name: "email",   label: t.contact.formEmail,   ph: t.contact.formEmailPh,   type: "email" },
                ].map(({ name, label, ph, type }) => (
                  <div key={name}>
                    <label
                      htmlFor={`contact-${name}`}
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
                      {label} *
                    </label>
                    <input
                      id={`contact-${name}`}
                      name={name}
                      type={type}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={ph}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = C.orange; }}
                      onBlur={(e)  => { e.target.style.borderColor = "#ddd"; }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="contact-message"
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
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.formMessagePh}
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => { e.target.style.borderColor = C.orange; }}
                    onBlur={(e)  => { e.target.style.borderColor = "#ddd"; }}
                  />
                </div>

                {status === "success" && (
                  <p style={{
                    color: "#2e7d32", fontFamily: "Montserrat,sans-serif",
                    fontWeight: 600, fontSize: ".85rem",
                    background: "#e8f5e9", padding: "10px 14px", borderRadius: 6,
                  }}>
                    ✓ {t.contact.formSuccess}
                  </p>
                )}

                {status === "missing" && (
                  <p style={{
                    color: "#c62828", fontFamily: "Montserrat,sans-serif",
                    fontWeight: 600, fontSize: ".85rem",
                    background: "#ffebee", padding: "10px 14px", borderRadius: 6,
                  }}>
                    ✗ {t.contact.formError}
                  </p>
                )}

                {status === "error" && (
                  <p style={{
                    color: "#c62828", fontFamily: "Montserrat,sans-serif",
                    fontWeight: 600, fontSize: ".85rem",
                    background: "#ffebee", padding: "10px 14px", borderRadius: 6,
                  }}>
                    ✗ Le message n'a pas pu être envoyé. Vérifiez la configuration EmailJS.
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  aria-busy={status === "sending"}
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
                    transition: "background .2s",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending") e.currentTarget.style.background = C.orangeHover;
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "sending") e.currentTarget.style.background = C.orange;
                  }}
                >
                  {status === "sending" ? t.contact.formSending : t.contact.formSend}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
