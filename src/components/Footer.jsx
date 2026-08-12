import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative py-8">
      <div
        className="mx-auto max-w-6xl px-6 text-center font-[var(--font-mono)] text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        © {new Date().getFullYear()} {profile.name}. Built with React, Vite
        & Tailwind.
      </div>
    </footer>
  );
}
