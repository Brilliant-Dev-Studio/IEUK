import { useEffect, useRef, useState, type HTMLAttributes } from "react";

type ParallaxLayerProps = Omit<HTMLAttributes<HTMLDivElement>, "style"> & {
  /** Max translate in px (positive number). */
  strength?: number;
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function ParallaxLayer({
  strength = 10,
  className,
  children,
  ...rest
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const inViewRef = useRef(true);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setEnabled(false);
      return;
    }
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    el.style.setProperty("--parallax-y", "0px");

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const progress = (center - vh / 2) / vh;
      const y = clamp(-progress * strength * 2.5, -strength, strength);
      el.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
    };

    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              const entry = entries[0];
              inViewRef.current = Boolean(entry?.isIntersecting);
            },
            { root: null, threshold: 0 }
          )
        : null;

    observer?.observe(el);

    const loop = () => {
      rafRef.current = window.requestAnimationFrame(loop);
      if (!inViewRef.current) return;
      update();
    };

    update();
    rafRef.current = window.requestAnimationFrame(loop);
    return () => {
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
      observer?.disconnect();
    };
  }, [enabled, strength]);

  return (
    <div
      ref={ref}
      {...rest}
      className={[
        className,
        enabled
          ? "will-change-transform translate-y-[var(--parallax-y)]"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

