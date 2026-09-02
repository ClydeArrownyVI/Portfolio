import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** FF-style dialogue/menu window. */
export function PixelWindow({
  title,
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("pixel-window", className)}>
      {title ? <h2 className="pixel-window-title">{title}</h2> : null}
      <div className="pixel-window-body">{children}</div>
    </section>
  );
}

export function PixelBadge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "gold" | "magic";
}) {
  return <span className={cn("pixel-badge", `pixel-badge-${tone}`)}>{children}</span>;
}

export function PixelHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h1 className={cn("pixel-heading", className)}>{children}</h1>;
}

export function PixelScene({
  src,
  alt,
  eager = false,
  className,
}: {
  src: string;
  alt: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("pixel-scene", className)}>
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
    </div>
  );
}
