import Link from "next/link";
import { calculators } from "@/lib/calculators";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-card/50">
      <div className="mx-auto max-w-content px-5 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-teal font-mono text-xs font-bold text-paper">
                %
              </span>
              <span className="font-display text-base font-semibold text-ink">
                Calcento
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Free, instant calculators for pay, raises, and the everyday math of
              work. No sign-up, no spreadsheets.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-sm sm:grid-cols-3">
            <nav className="flex flex-col gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted/70">
                Calculators
              </span>
              {calculators.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="text-muted transition-colors hover:text-teal"
                >
                  {c.name}
                  {c.status === "soon" && (
                    <span className="ml-1 text-[10px] uppercase tracking-wide text-brass">
                      soon
                    </span>
                  )}
                </Link>
              ))}
              <Link
                href="/blog"
                className="text-muted transition-colors hover:text-teal"
              >
                Blog
              </Link>
            </nav>

            <nav className="flex flex-col gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted/70">
                Company
              </span>
              <Link href="/about" className="text-muted transition-colors hover:text-teal">
                About
              </Link>
              <Link href="/contact" className="text-muted transition-colors hover:text-teal">
                Contact
              </Link>
            </nav>

            <nav className="flex flex-col gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted/70">
                Legal
              </span>
              <Link href="/privacy-policy" className="text-muted transition-colors hover:text-teal">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted transition-colors hover:text-teal">
                Terms of Use
              </Link>
              <Link href="/disclaimer" className="text-muted transition-colors hover:text-teal">
                Disclaimer
              </Link>
              <Link href="/cookie-policy" className="text-muted transition-colors hover:text-teal">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Calcento. For guidance only, not financial advice.</p>
          <p className="font-mono">www.calcento.com</p>
        </div>
      </div>
    </footer>
  );
}
