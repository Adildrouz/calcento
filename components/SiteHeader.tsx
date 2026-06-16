import Link from "next/link";
import { liveCalculators } from "@/lib/calculators";

export default function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70 sticky top-0 z-30">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3.5">
        <Link href="/" className="group flex items-center gap-2" aria-label="Calcento home">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-teal font-mono text-sm font-bold text-paper transition-colors group-hover:bg-teal-deep">
            %
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Calcento
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          {liveCalculators.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="hidden text-muted transition-colors hover:text-ink sm:inline"
            >
              {c.name}
            </Link>
          ))}
          <Link
            href="/blog"
            className="hidden text-muted transition-colors hover:text-ink sm:inline"
          >
            Blog
          </Link>
          <Link
            href="/#calculators"
            className="rounded-md border border-line px-3 py-1.5 text-ink transition-colors hover:border-teal hover:text-teal"
          >
            All calculators
          </Link>
        </nav>
      </div>
    </header>
  );
}
