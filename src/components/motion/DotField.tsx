import { useEffect, useRef } from "react";

interface DotFieldProps {
  /** CSS color for the dots. */
  color?: string;
  /** Distance between dot centers, in CSS pixels. */
  spacing?: number;
  /** Largest dot radius, in CSS pixels. */
  maxRadius?: number;
  /** Where dots are visible: fades out toward the opposite side. */
  fadeFrom?: "right" | "bottom" | "none";
  className?: string;
}

/**
 * Animated halftone dot field drawn on a canvas. A slow diagonal wave swells
 * and shrinks the dots. Pauses offscreen and renders a single still frame
 * when the visitor prefers reduced motion.
 */
const DotField = ({
  color = "#80ed99",
  spacing = 18,
  maxRadius = 2.4,
  fadeFrom = "right",
  className = "",
}: DotFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = color;
    };

    const draw = (time: number) => {
      const t = time / 2600;
      ctx.clearRect(0, 0, width, height);
      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          const fade =
            fadeFrom === "right"
              ? x / width
              : fadeFrom === "bottom"
                ? y / height
                : 1;
          if (fade < 0.08) continue;
          const wave = 0.5 + 0.5 * Math.sin(x * 0.012 + y * 0.018 - t);
          const r = maxRadius * (0.25 + 0.75 * wave) * Math.min(1, fade * 1.4);
          ctx.globalAlpha = 0.25 + 0.55 * wave * fade;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (time: number) => {
      draw(time);
      if (visible) frame = requestAnimationFrame(loop);
    };

    resize();
    draw(0);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !reduceMotion;
      cancelAnimationFrame(frame);
      if (visible) frame = requestAnimationFrame(loop);
    });
    intersectionObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [color, spacing, maxRadius, fadeFrom]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none block h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
};

export default DotField;
