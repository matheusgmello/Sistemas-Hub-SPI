import {
  BookOpen,
  Network,
  FileCheck2,
  Award,
  Contact,
  Users,
  Library,
  HelpCircle,
  Github,
  Home,
  Gavel,
  Heart,
  Compass,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navGroups = [
  {
    label: "Guia do Curso",
    items: [
      { title: "Visão Geral", url: "/", icon: Home },
      { title: "Matérias do Curso", url: "/materias", icon: BookOpen },
      { title: "Pré-requisitos", url: "/pre-requisitos", icon: Network },
    ],
  },
  {
    label: "Burocracia & Secretaria",
    items: [
      { title: "Como dispensar Matérias", url: "/dispensas", icon: FileCheck2 },
      {
        title: "Registro de ACG/Extensão",
        url: "/extracurriculares",
        icon: Award,
      },
      { title: "DCGs", url: "/dcgs", icon: BookOpen },
      { title: "Colegiado", url: "/colegiado", icon: Gavel },
    ],
  },
  {
    label: "Carreira & Desenvolvimento",
    items: [
      { title: "Trilhas de Carreira", url: "/trilhas-carreira", icon: Compass },
    ],
  },
  {
    label: "Comunidade & Apoio",
    items: [
      { title: "Coordenação", url: "/coordenacao", icon: Contact },
      { title: "Diretório Acadêmico (DASPI)", url: "/daspi", icon: Users },
      { title: "Material para Estudo", url: "/materiais", icon: Library },
      { title: "Dúvidas Frequentes", url: "/faq", icon: HelpCircle },
      { title: "Contribuidores", url: "/contribuidores", icon: Heart },
      { title: "Como contribuir", url: "/contribuir", icon: Github },
    ],
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="p-3">
        <div className="glass-card rounded-2xl border border-border/70 p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display text-sm font-extrabold tracking-[0.18em] shadow-lg shadow-primary/20">
              SPI
            </div>
            <div className="min-w-0 flex flex-col">
              <span className="truncate text-sm font-bold leading-none">
                Hub de Conhecimento
              </span>
              <span className="truncate text-xs text-muted-foreground">
                Sistemas para Internet
              </span>
            </div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2 pb-3">
        {navGroups.map((group) => (
          <SidebarGroup key={group.label} className="mb-1.5 rounded-2xl border border-border/60 bg-card/70 p-1.5">
            <SidebarGroupLabel className="px-3 pt-2 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1 px-1.5 pb-1.5">
                {group.items.map((item) => {
                  const isActive = location === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.title}
                        className="hover-elevate rounded-xl px-3 py-2 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:shadow-lg data-[active=true]:shadow-primary/20"
                      >
                        <Link href={item.url}>
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
