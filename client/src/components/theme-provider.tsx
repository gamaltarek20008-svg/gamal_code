import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
type AccentColor = "blue" | "green" | "purple" | "red" | "custom";

type ThemeProviderContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  accentColor: AccentColor;
  setAccentColor: (accentColor: AccentColor) => void;
  customAccent: string;
  setCustomAccent: (hex: string) => void;
};

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined);

const accentColorMap: Record<Exclude<AccentColor, "custom">, string> = {
  blue: "217 91% 60%",
  green: "163 72% 40%",
  purple: "272 72% 55%",
  red: "0 84% 60%",
};

function hexToHsl(hex: string) {
  const cleaned = hex.replace("#", "");
  const bigint = parseInt(cleaned, 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

function getInitialAccentColor(): AccentColor {
  if (typeof window === "undefined") return "blue";
  const stored = localStorage.getItem("accentColor") as AccentColor | null;
  return stored && Object.keys(accentColorMap).includes(stored) ? stored : "blue";
}

function getInitialCustomAccent(): string {
  if (typeof window === "undefined") return "#3b82f6";
  return localStorage.getItem("customAccent") || "#3b82f6";
}

function getAccentHsl(accentColor: AccentColor, customAccent: string) {
  return accentColor === "custom" ? hexToHsl(customAccent) : accentColorMap[accentColor];
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") as Theme;
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  const [accentColor, setAccentColor] = useState<AccentColor>(() => getInitialAccentColor());
  const [customAccent, setCustomAccentState] = useState<string>(() => getInitialCustomAccent());
  const [accentHsl, setAccentHsl] = useState<string>(() => getAccentHsl(getInitialAccentColor(), getInitialCustomAccent()));

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.setProperty("--primary", accentHsl);
    localStorage.setItem("theme", theme);
    localStorage.setItem("accentColor", accentColor);
    localStorage.setItem("customAccent", customAccent);
  }, [theme, accentHsl, accentColor, customAccent]);

  useEffect(() => {
    setAccentHsl(getAccentHsl(accentColor, customAccent));
  }, [accentColor, customAccent]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setCustomAccent = (hex: string) => {
    setAccentColor("custom");
    setCustomAccentState(hex);
  };

  return (
    <ThemeProviderContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        accentColor,
        setAccentColor,
        customAccent,
        setCustomAccent,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
