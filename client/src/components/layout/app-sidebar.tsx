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
  Heart
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
      { title: "Correlação de Matérias", url: "/correlacoes", icon: Network },
    ],
  },
  {
    label: "Burocracia & Secretaria",
    items: [
      { title: "Como dispensar Matérias", url: "/dispensas", icon: FileCheck2 },
      { title: "Registro de ACG/Extensão", url: "/extracurriculares", icon: Award },
      { title: "Colegiado", url: "/colegiado", icon: Gavel },
    ],
  },
  {
    label: "Comunidade & Apoio",
    items: [
      { title: "Coordenação", url: "/coordenacao", icon: Contact },
      { title: "Diretório Acadêmico (DAPSI)", url: "/dapsi", icon: Users },
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
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            TSI
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-none">Hub de Conhecimento</span>
            <span className="text-xs text-muted-foreground">Sistemas para Internet</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {navGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = location === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={isActive}
                        tooltip={item.title}
                        className="hover-elevate"
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
