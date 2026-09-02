import { createFileRoute, Link } from "@tanstack/react-router";

import heroSnowfield from "@/assets/snowfield.jpg";
import { PixelBadge, PixelHeading, PixelWindow } from "@/components/pixel";
import { PixelSnowfall } from "@/components/snowfall";
import { interests, profile, projects, skills } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raed Rahman — CSE Student, Game Dev & ML" },
      {
        name: "description",
        content:
          "Raed Rahman, Computer Science and Engineering undergraduate at IUT Gazipur. Game development with Godot, machine learning, and coursework projects.",
      },
      { property: "og:title", content: "Raed Rahman — CSE Student, Game Dev & ML" },
      {
        property: "og:description",
        content:
          "Game development, machine learning and university projects by Raed Rahman, CSE undergraduate at IUT Gazipur.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="relative">
        <img
          src={heroSnowfield}
          alt="Pixel-art starlit snowfield at night with dark rocky ridges"
          width={1200}
          height={896}
          className="h-[62vh] min-h-[380px] w-full object-cover"
        />
        <div className="pixel-veil absolute inset-0" />
        <PixelSnowfall count={70} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-5xl px-4 pb-8">
            <PixelHeading className="mt-4">{profile.name}</PixelHeading>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/projects" className="pixel-cta">
                View Projects
              </Link>
              <Link to="/contact" className="pixel-cta pixel-cta-ghost">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 md:grid-cols-2">
        <PixelWindow title="STATUS">
          <dl className="space-y-2">
            <Row label="Name" value={profile.name} />
            <Row label="Class" value={profile.title} />
            <Row label="Guild" value={profile.university} />
            <Row label="Discipline" value={profile.department} />
            <Row label="Progress" value={profile.semester} />
          </dl>
        </PixelWindow>

        <PixelWindow title="EQUIPMENT">
          <ul className="space-y-4">
            {skills.map((s) => (
              <li key={s.group}>
                <p className="font-pixel text-[0.55rem] text-accent">{s.group}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <PixelBadge key={i}>{i}</PixelBadge>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </PixelWindow>

        <PixelWindow title="ABILITIES / INTERESTS" className="md:col-span-2">
          <ul className="grid gap-5 md:grid-cols-3">
            {interests.map((i) => (
              <li key={i.name}>
                <p className="font-pixel text-[0.6rem] text-gold">{i.name}</p>
                <p className="mt-2 text-muted-foreground">{i.blurb}</p>
                <div className="mt-2">
                  <PixelBadge tone="magic">{i.status}</PixelBadge>
                </div>
              </li>
            ))}
          </ul>
        </PixelWindow>

        <PixelWindow title="FEATURED QUESTS" className="md:col-span-2">
          <ul className="space-y-4">
            {featured.map((p) => (
              <li key={p.slug} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-pixel text-[0.6rem] text-gold">{p.title}</p>
                  <PixelBadge>{p.kind}</PixelBadge>
                </div>
                <p className="mt-2 text-muted-foreground">{p.summary}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link to="/projects" className="pixel-cta pixel-cta-ghost">
              All Projects
            </Link>
          </div>
        </PixelWindow>
      </div>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap gap-x-3">
      <dt className="font-pixel text-[0.55rem] text-accent">{label}</dt>
      <dd className="text-foreground">{value}</dd>
    </div>
  );
}
