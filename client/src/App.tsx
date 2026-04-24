import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { ThemeProvider } from "@/hooks/use-theme";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

// Pages
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
              <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <header className="h-16 flex items-center gap-4 px-4 md:px-6 border-b border-border/40 bg-background/80 backdrop-blur-md z-20 sticky top-0">
                  <SidebarTrigger className="hover-elevate rounded-full border border-border/60 bg-card/70" />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                      Hub de Conhecimento SPI
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      sobrevivência acadêmica, referências e materiais do curso
                    </p>
                  </div>
                  <ThemeToggle />
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                  <div className="container mx-auto p-4 md:p-6 lg:p-10 pb-20">
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
