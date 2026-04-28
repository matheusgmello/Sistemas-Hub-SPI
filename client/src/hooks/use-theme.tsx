import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type ThemeMode = "dark" | "light" | "system";
export type ColorTheme = "blue" | "emerald" | "amber" | "rose" | "pink" | "violet";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  defaultColorTheme?: ColorTheme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: ThemeMode;
  resolvedTheme: Exclude<ThemeMode, "system">;
  colorTheme: ColorTheme;
  setTheme: (theme: ThemeMode) => void;
  setColorTheme: (colorTheme: ColorTheme) => void;
};

export const colorThemeOptions: Array<{
  value: ColorTheme;
  label: string;
  swatch: string;
}> = [
  { value: "blue", label: "Azul SPI", swatch: "#2563eb" },
  { value: "emerald", label: "Esmeralda", swatch: "#059669" },
  { value: "amber", label: "Ambar", swatch: "#d97706" },
  { value: "rose", label: "Rose", swatch: "#e11d48" },
  { value: "pink", label: "Pink", swatch: "#db2777" },
  { value: "violet", label: "Violeta", swatch: "#7c3aed" },
];

const initialState: ThemeProviderState = {
  theme: "system",
  resolvedTheme: "light",
  colorTheme: "blue",
  setTheme: () => null,
  setColorTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

function getSystemTheme(): Exclude<ThemeMode, "system"> {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultColorTheme = "blue",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>(
    () => (localStorage.getItem(`${storageKey}-mode`) as ThemeMode) || defaultTheme,
  );
  const [colorTheme, setColorTheme] = useState<ColorTheme>(
    () =>
      (localStorage.getItem(`${storageKey}-color`) as ColorTheme) || defaultColorTheme,
  );
  const [resolvedTheme, setResolvedTheme] = useState<Exclude<ThemeMode, "system">>(() =>
    theme === "system" ? getSystemTheme() : theme,
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (nextTheme: ThemeMode) => {
      const mode = nextTheme === "system" ? getSystemTheme() : nextTheme;

      root.classList.remove("light", "dark");
      root.classList.add(mode);
      root.dataset.colorTheme = colorTheme;
      setResolvedTheme(mode);
    };

    applyTheme(theme);

    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, colorTheme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      colorTheme,
      setTheme: (nextTheme: ThemeMode) => {
        localStorage.setItem(`${storageKey}-mode`, nextTheme);
        setTheme(nextTheme);
      },
      setColorTheme: (nextColorTheme: ColorTheme) => {
        localStorage.setItem(`${storageKey}-color`, nextColorTheme);
        setColorTheme(nextColorTheme);
      },
    }),
    [colorTheme, resolvedTheme, storageKey, theme],
  );

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
