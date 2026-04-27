import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { GlobalSearch } from "@/components/layout/global-search";
import { ThemeProvider } from "@/hooks/use-theme";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Subjects from "@/pages/subjects";
import Prerequisites from "@/pages/prerequisites";
import Waivers from "@/pages/waivers";
import Extracurriculars from "@/pages/extracurriculars";
import DCGs from "@/pages/dcgs";
import Coordination from "@/pages/coordination";
import StudentUnion from "@/pages/student-union";
import StudyMaterials from "@/pages/study-materials";
import FAQ from "@/pages/faq";
import Contribute from "@/pages/contribute";
import Collegiate from "@/pages/collegiate";
import Contributors from "@/pages/contributors";
import CareerPaths from "@/pages/career-paths";
import OfficialResources from "@/pages/official-resources";

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
              <AppSidebar />
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
                  <GlobalSearch />
                  <ThemeToggle />
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
