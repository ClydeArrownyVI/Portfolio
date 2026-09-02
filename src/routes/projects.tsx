import { createFileRoute } from "@tanstack/react-router";

import { PixelBadge, PixelHeading, PixelWindow } from "@/components/pixel";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Raed Rahman" },
      {
        name: "description",
        content:
          "Game and software projects by Raed Rahman: a two-player Plague Inc. inspired game, a Java horror game, a Minecraft redstone computer and Godot prototypes.",
      },
      { property: "og:title", content: "Projects — Raed Rahman" },
      {
        property: "og:description",
        content:
          "Academic and personal projects: two-player simulation game, Java horror game, redstone computer, Godot prototypes.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  const academic = projects.filter((p) => p.kind === "Academic");
  const personal = projects.filter((p) => p.kind === "Personal");

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-10">
      <PixelHeading>Projects</PixelHeading>

      <Group title="ACADEMIC PROJECTS" items={academic} />
      <Group title="PERSONAL PROJECTS" items={personal} />
    </div>
  );
}

function Group({ title, items }: { title: string; items: typeof projects }) {
  if (items.length === 0) return null;

  return (
    <PixelWindow title={title}>
      <ul className="space-y-8">
        {items.map((p) => (
          <li key={p.slug} className="border-b border-border pb-8 last:border-0 last:pb-0">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-[0.7rem] text-gold">{p.title}</h3>
              <PixelBadge tone="magic">{p.status}</PixelBadge>
              <PixelBadge>{p.year}</PixelBadge>
            </div>
            <p className="mt-3 text-foreground">{p.summary}</p>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              {p.details.map((d) => (
                <li key={d}>▸ {d}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <PixelBadge key={s} tone="gold">
                  {s}
                </PixelBadge>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </PixelWindow>
  );
}
