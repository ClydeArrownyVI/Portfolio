import { createFileRoute } from "@tanstack/react-router";

import { PixelBadge, PixelHeading, PixelWindow } from "@/components/pixel";
import { achievements, profile, semesters } from "@/data/portfolio";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Raed Rahman, CSE at IUT" },
      {
        name: "description",
        content:
          "Coursework, semester progress and academic achievements from the B.Sc. in Computer Science and Engineering programme at IUT Gazipur.",
      },
      { property: "og:title", content: "Academics — Raed Rahman, CSE at IUT" },
      {
        property: "og:description",
        content:
          "Semester-by-semester coursework and achievements in the B.Sc. CSE programme at Islamic University of Technology.",
      },
    ],
  }),
  component: Academics,
});

function Academics() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-10">
      <PixelHeading>Academics</PixelHeading>

      <PixelWindow title="ENROLMENT">
        <p className="text-foreground">
          {profile.department} — {profile.university}
        </p>
        <p className="mt-2 text-muted-foreground">
          B.Sc. Engg. (CSE), curriculum 2023-24 onwards. Currently {profile.semester}.
        </p>
      </PixelWindow>

      <PixelWindow title="ACHIEVEMENTS & MILESTONES">
        <ul className="space-y-4">
          {achievements.map((a) => (
            <li key={a.title}>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-pixel text-[0.6rem] text-gold">{a.title}</p>
                <PixelBadge>{a.year}</PixelBadge>
              </div>
              <p className="mt-2 text-muted-foreground">{a.detail}</p>
            </li>
          ))}
        </ul>
      </PixelWindow>

      <div className="grid gap-6 md:grid-cols-2">
        {semesters.map((s) => (
          <PixelWindow key={s.name} title={s.name.toUpperCase()}>
            <PixelBadge tone={s.status === "Ongoing" ? "gold" : "magic"}>{s.status}</PixelBadge>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              {s.courses.map((c) => (
                <li key={c}>▸ {c}</li>
              ))}
            </ul>
          </PixelWindow>
        ))}
      </div>
    </div>
  );
}
