import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { BarraLateralApp } from "@/components/layout/barra-lateral-app";
import { BuscaGlobal } from "@/components/layout/busca-global";
import { ThemeProvider } from "@/hooks/use-theme";
import { SeletorTema } from "@/components/layout/seletor-tema";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

import NotFound from "@/pages/nao-encontrado";
import Home from "@/pages/visao-geral";
import Subjects from "@/pages/materias-curso";
import Prerequisites from "@/pages/pre-requisitos";
import Waivers from "@/pages/dispensa-materias";
import Extracurriculars from "@/pages/registro-acg-extensao";
import DCGs from "@/pages/dcgs";
import Coordination from "@/pages/coordenacao";
import StudentUnion from "@/pages/diretorio-academico";
import StudyMaterials from "@/pages/materiais-estudo";
import FAQ from "@/pages/duvidas-frequentes";
import Contribute from "@/pages/como-contribuir";
import Collegiate from "@/pages/colegiado";
import Contributors from "@/pages/contribuidores";
import CareerPaths from "@/pages/trilhas-carreira";
import OfficialResources from "@/pages/links-oficiais-calendario";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/materias" component={Subjects} />
        <Route path="/pre-requisitos" component={Prerequisites} />
        <Route path="/dispensas" component={Waivers} />
        <Route path="/extracurriculares" component={Extracurriculars} />
        <Route path="/dcgs" component={DCGs} />
        <Route path="/trilhas-carreira" component={CareerPaths} />
        <Route path="/coordenacao" component={Coordination} />
        <Route path="/utilidades-oficiais" component={OfficialResources} />
        <Route path="/daspi" component={StudentUnion} />
        <Route path="/materiais" component={StudyMaterials} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contribuir" component={Contribute} />
        <Route path="/colegiado" component={Collegiate} />
        <Route path="/contribuidores" component={Contributors} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  const sidebarStyle = {
    "--sidebar-width": "18rem",
    "--sidebar-width-icon": "4rem",
  } as React.CSSProperties;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="tsi-hub-theme">
        <TooltipProvider>
          <SidebarProvider style={sidebarStyle}>
            <div className="flex min-h-screen w-full bg-background text-foreground selection:bg-primary/20">
              <BarraLateralApp />
              <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
                <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-border/40 bg-background/80 px-4 backdrop-blur-md md:px-6">
                  <SidebarTrigger className="hover-elevate rounded-full border border-border/60 bg-card/70" />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                      Hub de Conhecimento SPI
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      sobrevivencia academica, referencias e materiais do curso
                    </p>
                  </div>
                  <BuscaGlobal />
                  <SeletorTema />
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                  <div className="container mx-auto p-4 pb-20 md:p-6 lg:p-10">
                    <Router />
                  </div>
                </main>
              </div>
            </div>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;

