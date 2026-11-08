import { cn } from "@/lib/utils";

// Four-point star — the graphic signature taken from the ZONE logo.
export const STAR_PATH =
  "M50 0 C53 34 66 47 100 50 C66 53 53 66 50 100 C47 66 34 53 0 50 C34 47 47 34 50 0 Z";

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={cn("fill-current", className)}>
      <path d={STAR_PATH} />
    </svg>
  );
}

// Ring of stars growing in size around the circle, echoing the spiral in the logo.
export function StarRing({ className, count = 30 }: { className?: string; count?: number }) {
  const stars = Array.from({ length: count }, (_, i) => {
    const t = i / count;
    const angle = t * Math.PI * 2;
    const r = 400;
    const size = 18 + Math.pow(t, 1.6) * 70;
    const x = 500 + Math.cos(angle) * r;
    const y = 500 + Math.sin(angle) * r;
    const rot = (angle * 180) / Math.PI;
    return { x, y, size, rot, key: i };
  });

  return (
    <svg viewBox="0 0 1000 1000" aria-hidden="true" className={cn("fill-current", className)}>
      {stars.map((s) => (
        <g
          key={s.key}
          transform={`translate(${s.x - s.size / 2} ${s.y - s.size / 2}) rotate(${s.rot} ${s.size / 2} ${s.size / 2}) scale(${s.size / 100})`}
        >
          <path d={STAR_PATH} />
        </g>
      ))}
    </svg>
  );
}
