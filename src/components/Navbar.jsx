import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import Container from "./Container";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <Container>
        {" "}
        <nav
          className={`flex items-center justify-between rounded-2xl py-3 px-1 transition-all duration-300 sm:px-6 ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          <a
            href="#top"
            className="font-[var(--font-display)] text-lg font-semibold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            ~/Muhammad<span className="text-gradient"> Ibrahim</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="glass flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-105"
            >
              {theme === "dark" ? (
                <FiSun size={16} style={{ color: "var(--accent-2)" }} />
              ) : (
                <FiMoon size={16} style={{ color: "var(--accent-1)" }} />
              )}
            </button>

            <button
              className="glass flex h-9 w-9 items-center justify-center rounded-full md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </nav>
      </Container>

      {open && (
        <div
          className="mx-4 mt-2 flex flex-col gap-1 rounded-2xl border p-3 backdrop-blur-[30px] backdrop-saturate-150 md:hidden"
          style={{
            background: "rgb(var(--surface) / 0.12)",
            borderColor: "rgb(var(--surface) / 0.14)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium"
              style={{ color: "var(--text)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
