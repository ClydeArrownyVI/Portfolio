import { createFileRoute } from "@tanstack/react-router";

import { PixelBadge, PixelHeading, PixelWindow } from "@/components/pixel";
import { interests, profile } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Raed Rahman — CSE Undergraduate at IUT" },
      {
        name: "description",
        content:
          "Who I am: a CSE undergraduate at Islamic University of Technology, Gazipur, interested in game development, machine learning and microprocessors.",
      },
      { property: "og:title", content: "About Raed Rahman — CSE Undergraduate at IUT" },
      {
        property: "og:description",
        content: "Background and interests of Raed Rahman, CSE student at IUT Gazipur.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-10">
      <PixelHeading>About</PixelHeading>

      <PixelWindow title="PROFILE">
        <div className="space-y-4">
          {profile.bio.map((p) => (
            <p key={p} className="text-foreground">
              {p}
            </p>
          ))}
        </div>
      </PixelWindow>

      <PixelWindow title="FOCUS">
        <ul className="grid gap-5 md:grid-cols-2">
          {interests.map((i) => (
            <li key={i.name}>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-pixel text-[0.6rem] text-gold">{i.name}</p>
                <PixelBadge tone="magic">{i.status}</PixelBadge>
              </div>
              <p className="mt-2 text-muted-foreground">{i.blurb}</p>
            </li>
          ))}
        </ul>
      </PixelWindow>
    </div>
  );
}

