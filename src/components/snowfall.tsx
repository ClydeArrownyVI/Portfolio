/**
 * Pixel snowfall overlay. Purely decorative, deterministic flakes so SSR and
 * client markup match. Tune `count` per scene.
 */
export function PixelSnowfall({
  count = 60,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const flakes = Array.from({ length: count }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    const rand2 = ((i * 4211 + 7919) % 10000) / 10000;
    return {
      left: `${(rand * 100).toFixed(2)}%`,
      size: 2 + Math.round(rand2 * 2) * 2,
      duration: `${7 + rand2 * 9}s`,
      delay: `${-(rand * 16).toFixed(2)}s`,
      drift: `${(rand2 * 40 - 20).toFixed(1)}px`,
      opacity: 0.45 + rand2 * 0.5,
    };
  });

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {flakes.map((f, i) => (
        <span
          key={i}
          className="pixel-flake"
          style={
            {
              left: f.left,
              width: `${f.size}px`,
              height: `${f.size}px`,
              opacity: f.opacity,
              animationDuration: f.duration,
              animationDelay: f.delay,
              "--flake-drift": f.drift,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
