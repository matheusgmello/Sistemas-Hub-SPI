import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { globalSearchIndex } from "@/lib/indice-busca";
import {
  CalendarDays,
  FileText,
  HelpCircle,
  Layers3,
  Link2,
  Network,
  Search,
} from "lucide-react";

const typeMeta = {
  Pagina: { label: "Paginas", icon: FileText },
  Materia: { label: "Materias", icon: Layers3 },
  "Pre-requisito": { label: "Pre-requisitos", icon: Network },
  FAQ: { label: "FAQ", icon: HelpCircle },
  Material: { label: "Materiais", icon: Search },
  DCG: { label: "DCGs", icon: Layers3 },
  "Link oficial": { label: "Links oficiais", icon: Link2 },
  Calendario: { label: "Calendario", icon: CalendarDays },
} as const;

export function BuscaGlobal() {
  const [open, setOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  const groupedItems = useMemo(() => {
    return Object.entries(typeMeta)
      .map(([type, meta]) => ({
        type,
        label: meta.label,
        icon: meta.icon,
        items: globalSearchIndex.filter((item) => item.type === type),
      }))
      .filter((group) => group.items.length > 0);
  }, []);

  const handleSelect = (href: string, external?: boolean) => {
    setOpen(false);

    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    setLocation(href);
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        className="hidden min-w-[220px] justify-between rounded-full px-4 md:inline-flex"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center gap-2 text-muted-foreground">
          <Search className="h-4 w-4" />
          Buscar no hub
        </span>
        <span className="rounded-full border border-border/70 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Ctrl K
        </span>
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="rounded-full md:hidden"
        onClick={() => setOpen(true)}
        title="Buscar"
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Buscar no hub</span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscar paginas, materias, links, FAQs e prazos..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          {groupedItems.map((group) => {
            const Icon = group.icon;

            return (
              <CommandGroup key={group.type} heading={group.label}>
                {group.items.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={`${item.title} ${item.description} ${item.keywords.join(" ")}`}
                    onSelect={() => handleSelect(item.href, item.external)}
                    className="items-start rounded-xl py-3"
                  >
                    <Icon className="mt-0.5 h-4 w-4 text-primary" />
                    <div className="min-w-0 space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate font-medium leading-5">{item.title}</p>
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-primary">
                          {item.type}
                        </span>
                      </div>
                      <p className="line-clamp-2 text-xs leading-5 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <CommandShortcut>{item.external ? "Link" : "Abrir"}</CommandShortcut>
                  </CommandItem>
                ))}
              </CommandGroup>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
}

