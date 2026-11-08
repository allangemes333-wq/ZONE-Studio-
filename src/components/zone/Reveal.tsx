import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-shown={shown}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

// Words light up one by one as the block scrolls through the viewport.
export function ScrollWords({
  parts,
  className,
}: {
  parts: { text: string; accent?: boolean }[];
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const words = parts.flatMap((p, pi) =>
    p.text.split(" ").map((w, wi) => ({ w, accent: p.accent, key: `${pi}-${wi}` })),
  );
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh * 0.85 - rect.top) / (rect.height + vh * 0.35);
      const clamped = Math.min(1, Math.max(0, progress));
      setLit(Math.round(clamped * words.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [words.length]);

  return (
    <h2 ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={word.key}
          className={cn(
            "inline-block transition-opacity duration-500",
            word.accent && "font-serif font-normal italic tracking-normal",
            i < lit ? "opacity-100" : "opacity-25",
          )}
        >
          {word.w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </h2>
  );
}
