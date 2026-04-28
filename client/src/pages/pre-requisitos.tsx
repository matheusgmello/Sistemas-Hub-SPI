import { PageTransition } from "@/components/page-transition";
import { prerequisites } from "@/lib/dados-hub";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, GitBranch, Lock, Unlock } from "lucide-react";

export default function Prerequisites() {
  return (
    <PageTransition className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-800/80" />
        <div className="hero-grid absolute inset-y-0 right-0 hidden w-[34%] opacity-60 lg:block" />
        <div className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
              <GitBranch className="h-3.5 w-3.5" />
              fluxo acadêmico
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl font-display">
              Pré-requisitos
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              Entenda quais disciplinas destravam novas matérias e enxergue melhor o encadeamento do curso antes de montar o próximo semestre.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        {prerequisites.map((item, index) => (
          <Card
            key={index}
            className="glass-card hover-elevate overflow-hidden rounded-[1.5rem] border-border/60 shadow-sm"
          >
            <CardHeader className="border-b border-border/50 bg-primary/[0.03] pb-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="rounded-full px-3 py-1 text-[11px]">
                  Pré-requisito
                </Badge>
                <CardTitle className="flex items-center gap-2 text-lg font-display md:text-xl">
                  <Lock className="h-5 w-5 text-red-500" />
                  <span>{item.subject}</span>
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-5 md:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-6">
                <div className="flex-1 rounded-2xl border border-dashed border-red-200 bg-red-50/70 p-4 dark:border-red-900/30 dark:bg-red-950/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
                    concluir antes
                  </p>
                  <p className="mt-2 text-base font-medium leading-7 text-foreground">
                    Finalize <span className="font-semibold">{item.subject}</span> para abrir a próxima etapa do fluxo.
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card text-muted-foreground shadow-sm">
                    <ArrowRight className="h-5 w-5 lg:block" />
                  </div>
                </div>

                <div className="flex-1 rounded-2xl border border-sky-200 bg-sky-50/70 p-4 dark:border-sky-900/30 dark:bg-sky-950/20">
                  <div className="mb-3 flex items-center gap-2">
                    <Unlock className="h-4 w-4 text-sky-500" />
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
                      libera
                    </span>
                  </div>

                  <div className="grid gap-2">
                    {item.releases.map((release, releaseIndex) => (
                      <div
                        key={releaseIndex}
                        className="rounded-xl border border-sky-200/80 bg-white/80 px-4 py-3 dark:border-sky-900/30 dark:bg-sky-950/10"
                      >
                        <span className="text-sm font-medium leading-6 text-foreground">
                          {release}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </PageTransition>
  );
}

