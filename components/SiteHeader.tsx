import Link from "next/link";
import NavDropdown from "@/components/NavDropdown";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <div className="relative mx-auto flex max-w-content items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2" aria-label="Calcento home">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-teal font-mono text-sm font-bold text-paper transition-colors group-hover:bg-teal-deep">
            %
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Calcento
          </span>
        </Link>

        {/* Nav — client component handles dropdown + mobile menu */}
        <NavDropdown />
      </div>
    </header>
  );
}
