import { useEffect, useRef, type CSSProperties } from "react";

// Geometry in SVG units (viewBox 0 0 100 100, centered on 50,50).
const rings = [
  { r: 47, count: 64, size: 0.42, opacity: 0.28 },
  { r: 39, count: 48, size: 0.55, opacity: 0.4 },
  { r: 31, count: 36, size: 0.7, opacity: 0.55 },
];

const NODE_RING = 39;
const nodes = [
  { label: "Family", angle: -120 },
  { label: "DSP", angle: -20 },
  { label: "Coordinator", angle: 80 },
  { label: "Community", angle: 170 },
];

const polar = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return { x: 50 + r * Math.cos(a), y: 50 + r * Math.sin(a) };
};

/**
 * "Circle of support" hero graphic: rings of dots around the person, with the
 * people who support them orbiting as labelled nodes. Rotates into place on
 * load, then turns gently with scroll; labels counter-rotate to stay upright.
 */
const CircleOfSupport = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const deg = Math.min(window.scrollY, 1400) * 0.035;
      el.style.setProperty("--ring-scroll", `${deg}deg`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  let dotIndex = 0;

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-square w-full max-w-[540px]"
      role="img"
      aria-label="A circle of support: the person at the center, surrounded by family, their Direct Support Professional, their Support Coordinator and their community."
    >
      {/* Scroll rotation (individual `rotate` property) */}
      <div className="absolute inset-0 [rotate:var(--ring-scroll,0deg)]">
        {/* Entrance rotation (transform) */}
        <div className="motion-ring-in absolute inset-0">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            {nodes.map((n) => {
              const p = polar(NODE_RING, n.angle);
              return (
                <line
                  key={n.label}
                  x1="50"
                  y1="50"
                  x2={p.x}
                  y2={p.y}
                  stroke="var(--color-leaf)"
                  strokeOpacity="0.18"
                  strokeWidth="0.25"
                  strokeDasharray="0.6 1"
                />
              );
            })}
            {rings.map((ring) =>
              Array.from({ length: ring.count }, (_, i) => {
                const p = polar(ring.r, (360 / ring.count) * i);
                const delay = 0.4 + (dotIndex++ % 48) * 0.012;
                return (
                  <circle
                    key={`${ring.r}-${i}`}
                    cx={p.x}
                    cy={p.y}
                    r={ring.size}
                    fill="var(--color-leaf)"
                    opacity={ring.opacity}
                    className="motion-pop-in"
                    style={{ animationDelay: `${delay}s` }}
                  />
                );
              }),
            )}
            {nodes.map((n) => {
              const p = polar(NODE_RING, n.angle);
              return (
                <g key={n.label}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="3.2"
                    fill="var(--color-mint)"
                    opacity="0.25"
                  />
                  <circle cx={p.x} cy={p.y} r="1.7" fill="var(--color-leaf)" />
                </g>
              );
            })}
          </svg>

          {nodes.map((n, i) => {
            const p = polar(NODE_RING + 8.5, n.angle);
            return (
              <span
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span
                  className="motion-fade-in border-fg/10 text-fg block [rotate:calc(var(--ring-scroll,0deg)*-1)] rounded-full border bg-white/90 px-3 py-1.5 text-xs font-medium whitespace-nowrap shadow-[0_6px_20px_-10px_rgb(22_33_26/0.35)] backdrop-blur-sm"
                  style={{ "--delay": `${1.5 + i * 0.12}s` } as CSSProperties}
                >
                  {n.label}
                </span>
              </span>
            );
          })}
        </div>
      </div>

      {/* The person, at the center */}
      <div className="absolute top-1/2 left-1/2 aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2">
        <span
          className="motion-breathe bg-mint/25 absolute -inset-[14%] rounded-full"
          aria-hidden="true"
        />
        <div className="motion-pop-in bg-forest text-bg relative grid h-full w-full place-items-center rounded-full text-center shadow-[0_20px_50px_-20px_rgb(24_56_35/0.6)]">
          <span className="font-serif text-[clamp(16px,2.2vw,24px)] leading-tight font-light tracking-[-0.02em]">
            The person
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircleOfSupport;
