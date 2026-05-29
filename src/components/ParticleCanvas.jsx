import { useEffect, useRef } from "react";

export default function ParticleCanvas({ dark = true }) {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const pts = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    let raf;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? "rgba(255,255,255,0.5)"
          : "rgba(232,73,29,0.35)";
        ctx.fill();
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);

          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = dark
              ? `rgba(255,255,255,${0.15 * (1 - d / 130)})`
              : `rgba(232,73,29,${0.2 * (1 - d / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [dark]);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}