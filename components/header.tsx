import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/home"
          className="text-lg font-semibold tracking-tight transition-colors hover:text-foreground/80"
        >
          Articles
        </Link>

        <nav className="flex items-center gap-2">
          <Link href="/articles/new">
            <Button variant="ghost" size="sm">
              Write
            </Button>
          </Link>
          <Button variant="outline" size="sm">
            Log out
          </Button>
        </nav>
      </div>
    </header>
  );
}
