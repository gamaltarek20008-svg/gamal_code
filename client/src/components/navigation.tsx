import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Menu, X, Sun, Moon, Droplet } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, accentColor, setAccentColor, customAccent, setCustomAccent } = useTheme();
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="header-navigation"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-serif text-xl md:text-2xl font-bold text-foreground"
            data-testid="link-logo"
          >
            Gamal<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1 flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-md"
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
              <div className="relative">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsColorMenuOpen((prev) => !prev)}
                data-testid="button-color-toggle"
              >
                <Droplet className="h-5 w-5" />
              </Button>

              {isColorMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-3xl border border-border bg-background p-4 shadow-xl">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    Accent Color
                  </div>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {[
                      { name: "blue", value: "#3b82f6" },
                      { name: "green", value: "#22c55e" },
                      { name: "purple", value: "#8b5cf6" },
                      { name: "red", value: "#ef4444" },
                    ].map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setAccentColor(color.name as any)}
                        className="h-10 w-10 rounded-full border border-border transition-all hover:scale-110"
                        style={{ backgroundColor: color.value }}
                        aria-label={`Set accent ${color.name}`}
                      />
                    ))}
                  </div>
                  <label className="flex items-center justify-between gap-3 rounded-2xl border border-border px-3 py-2">
                    <span className="text-sm text-foreground">Custom</span>
                    <input
                      type="color"
                      value={customAccent}
                      onChange={(e) => setCustomAccent(e.target.value)}
                      className="h-10 w-10 cursor-pointer rounded-full border-0 p-0"
                      aria-label="Choose custom accent color"
                    />
                  </label>
                </div>
              )}
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-left text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-md"
                  data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
