import { Laptop, Moon, Palette, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { colorThemeOptions, type ThemeMode, useTheme } from "@/hooks/use-theme";

const modeOptions: Array<{
  value: ThemeMode;
  label: string;
  icon: typeof Sun;
}> = [
  { value: "light", label: "Claro", icon: Sun },
  { value: "dark", label: "Escuro", icon: Moon },
  { value: "system", label: "Sistema", icon: Laptop },
];

export function SeletorTema() {
  const { theme, resolvedTheme, colorTheme, setTheme, setColorTheme } = useTheme();

  const CurrentModeIcon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover-elevate relative" title="Temas">
          <CurrentModeIcon className="h-[1.15rem] w-[1.15rem]" />
          <span
            className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-background"
            style={{
              backgroundColor:
                colorThemeOptions.find((option) => option.value === colorTheme)?.swatch ?? "#2563eb",
            }}
          />
          <span className="sr-only">Abrir configuracoes de tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 rounded-2xl p-2">
        <DropdownMenuLabel className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Modo de exibicao
        </DropdownMenuLabel>
        {modeOptions.map((option) => {
          const Icon = option.icon;
          const isActive = theme === option.value;

          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setTheme(option.value)}
              className="rounded-xl px-3 py-2.5"
            >
              <Icon className="h-4 w-4 text-primary" />
              <span>{option.label}</span>
              {isActive ? (
                <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Ativo
                </span>
              ) : null}
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />

        <DropdownMenuLabel className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Paleta visual
        </DropdownMenuLabel>
        {colorThemeOptions.map((option) => {
          const isActive = colorTheme === option.value;

          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setColorTheme(option.value)}
              className="rounded-xl px-3 py-2.5"
            >
              <span
                className="h-4 w-4 rounded-full border border-black/10 dark:border-white/10"
                style={{ backgroundColor: option.swatch }}
              />
              <span>{option.label}</span>
              {isActive ? (
                <Palette className="ml-auto h-4 w-4 text-primary" />
              ) : null}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
