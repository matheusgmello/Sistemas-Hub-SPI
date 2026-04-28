import { PageTransition } from "@/components/page-transition";
import { dcgs } from "@/lib/dados-hub";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, BookOpen, Layers, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DCGs() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl space-y-10">
        <section className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary/85 px-7 py-9 text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)] md:px-10 md:py-11">
          <div className="hero-grid absolute inset-y-0 right-0 hidden w-[36%] border-l border-white/10 opacity-30 md:block" />
          <div className="relative max-w-3xl space-y-5">
            <Badge className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary-foreground shadow-none hover:bg-white/10">
              Disciplinas Complementares
            </Badge>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                DCGs
              </h1>
              <p className="max-w-2xl text-base leading-8 text-primary-foreground/88 md:text-lg">
                Entenda como funcionam as disciplinas complementares, quanto precisa integralizar
                e quais caminhos podem fazer sentido dentro e fora do curso.
              </p>
            </div>
          </div>
        </section>

        <Card className="glass-card border-primary/15 shadow-[0_20px_45px_-38px_rgba(37,99,235,0.55)]">
          <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Info className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Como funciona
                </p>
                <p className="text-sm leading-7 text-muted-foreground md:text-[15px]">
                  {dcgs.description}
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4 md:min-w-[170px]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Carga obrigatoria
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">360h</p>
            </div>
          </CardContent>
        </Card>

        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Ofertadas por Sistemas para Internet
              </h2>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Opcoes mais proximas da trilha do curso para quem quer complementar a formacao sem
              sair muito do ecossistema de SPI.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dcgs.internal.map((dcg, index) => (
              <Card
                key={index}
                className="hover-elevate border-border/50 bg-white/70 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.25)]"
              >
                <CardHeader className="space-y-4 pb-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-lg font-bold leading-tight">{dcg.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
                    {dcg.workload} Horas
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Ofertadas por outros cursos
              </h2>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              Uma leitura por area para facilitar a escolha conforme o tema que voce quer explorar.
            </p>
          </div>

          <div className="space-y-10">
            {dcgs.external.map((group, gIndex) => (
              <div
                key={gIndex}
                className="glass-card space-y-5 rounded-[1.75rem] border border-border/60 p-5 md:p-6"
              >
                <h3 className="border-l-4 border-primary pl-3 text-xl font-bold text-primary/80">
                  Area de {group.category}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((item, iIndex) => (
                    <Card
                      key={iIndex}
                      className="border-border/50 bg-white/70 transition-colors hover:border-primary/20"
                    >
                      <CardContent className="flex items-start justify-between gap-4 p-4 md:p-5">
                        <div className="space-y-2">
                          <p className="text-sm font-semibold leading-7 text-foreground">
                            {item.name}
                          </p>
                          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                            {item.provider}
                          </p>
                        </div>
                        <Badge variant="outline" className="shrink-0 rounded-full px-3 py-1">
                          {item.workload}H
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

