import { useState } from "react";

import { C } from "./constants/colors";
import { T } from "./data/translations";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Parcours from "./components/Parcours";
import Contact from "./components/Contact";

export default function App() {
  const [lang, setLang] = useState("fr");
  const t = T[lang];

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Projects t={t} />
      <Parcours t={t} />
      <Contact t={t} />

      <footer
        style={{
          textAlign: "center",
          padding: "1.5rem",
          background: C.darker,
          fontFamily: "Montserrat,sans-serif",
          fontSize: ".72rem",
          color: "rgba(255,255,255,0.4)",
          letterSpacing: ".06em",
          textTransform: "uppercase",
        }}
      >
        © 2026 Yasmine Chettati
      </footer>
    </div>
  );
}