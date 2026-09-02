import { createFileRoute } from "@tanstack/react-router";

import { PixelHeading, PixelWindow } from "@/components/pixel";
import { contacts, profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Raed Rahman" },
      {
        name: "description",
        content:
          "Get in touch with Raed Rahman — email, GitHub and LinkedIn for collaboration on game development and machine learning projects.",
      },
      { property: "og:title", content: "Contact Raed Rahman" },
      {
        property: "og:description",
        content: "Email, GitHub and LinkedIn links for Raed Rahman, CSE undergraduate at IUT.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-10">
      <PixelHeading>Contact</PixelHeading>

      <PixelWindow title="PARTY INVITE">
        <p className="text-foreground pixel-cursor">
          Open to collaboration on game projects, study groups and ML learning partners.
        </p>
        <ul className="mt-6 space-y-4">
          {contacts.map((c) => (
            <li key={c.label} className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="font-pixel text-[0.55rem] text-accent">{c.label}</span>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-gold underline decoration-dotted"
                >
                  {c.value}
                </a>
              ) : (
                <span className="text-foreground">{c.value}</span>
              )}
            </li>
          ))}
        </ul>
      </PixelWindow>


      <p className="text-muted-foreground">
        {profile.name} · {profile.university}
      </p>
    </div>
  );
}
