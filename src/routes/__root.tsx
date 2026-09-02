import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { profile } from "../data/portfolio";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/academics", label: "Academics" },
  { to: "/contact", label: "Contact" },
] as const;

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="pixel-heading">404</h1>
        <p className="mt-4 text-muted-foreground">
          This area is not on the world map yet.
        </p>
        <div className="mt-6">
          <Link to="/" className="pixel-cta">
            Return to Airship
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="pixel-heading">Encounter failed</h1>
        <p className="mt-4 text-muted-foreground">
          Something went wrong. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="pixel-cta"
          >
            Try again
          </button>
          <a href="/" className="pixel-cta pixel-cta-ghost">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Raed Rahman — CSE Student Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Raed Rahman, CSE undergraduate at IUT Gazipur — game development, machine learning and coursework projects.",
      },
      { name: "author", content: "Raed Rahman" },
      { property: "og:title", content: "Raed Rahman — CSE Student Portfolio" },
      {
        property: "og:description",
        content:
          "Game development and machine learning projects by Raed Rahman, CSE undergraduate at IUT Gazipur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-20 border-b-2 border-border bg-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
            <Link to="/" className="font-pixel text-[0.7rem] text-gold">
              {profile.name}
            </Link>
            <nav className="flex flex-wrap items-center gap-x-5">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="pixel-link"
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "pixel-link pixel-link-active" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>

        <footer className="border-t-2 border-border">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
            <p className="font-pixel text-[0.55rem]">
              {profile.name} · {profile.department} · IUT
            </p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
