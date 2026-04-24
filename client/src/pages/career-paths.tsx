import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { careerPaths } from "@/lib/mock-data";
import {
  Monitor,
  Server,
  Layers,
  Smartphone,
  BarChart3,
  CheckCircle2,
  Zap,
  TrendingUp,
  Brain,
  Cloud,
  Shield,
  Palette,
  Box,
  ChevronDown,
  Compass,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="h-6 w-6" />,
  Server: <Server className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  Smartphone: <Smartphone className="h-6 w-6" />,
  BarChart3: <BarChart3 className="h-6 w-6" />,
  CheckCircle2: <CheckCircle2 className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
  TrendingUp: <TrendingUp className="h-6 w-6" />,
  Brain: <Brain className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Palette: <Palette className="h-6 w-6" />,
  Box: <Box className="h-6 w-6" />,
};

export default function CareerPaths() {
  const [expandedId, setExpandedId] = useState<string | null>(careerPaths[0]?.id ?? null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <PageTransition>
      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary/85 px-7 py-9 text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)] md:px-10 md:py-11">
          <div className="hero-grid absolute inset-y-0 right-0 hidden w-[36%] border-l border-white/10 opacity-30 md:block" />
          <div className="relative max-w-3xl space-y-5">
            <Badge className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary-foreground shadow-none hover:bg-white/10">
              Direcao profissional
            </Badge>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Trilhas de Carreira em TI
              </h1>
              <p className="max-w-2xl text-base leading-8 text-primary-foreground/88 md:text-lg">
                Explore diferentes areas da tecnologia e veja como cada trilha combina
                responsabilidades, stack, progressao e perfil de atuacao.
              </p>
            </div>
          </div>
        </section>

        <Card className="glass-card border-primary/15 shadow-[0_20px_45px_-38px_rgba(37,99,235,0.55)]">
          <CardContent className="grid gap-4 p-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Compass className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Como usar esta pagina
                </p>
                <p className="text-sm leading-7 text-muted-foreground md:text-[15px]">
                  Abra as trilhas para comparar rotina, conhecimentos mais cobrados e caminhos de
                  crescimento. Em tecnologia, e normal transitar entre areas ou combinar duas
                  frentes ao longo da carreira.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Trilhas mapeadas
              </p>
              <div className="mt-3 flex items-end justify-between gap-3">
                <p className="text-3xl font-bold tracking-tight text-foreground">
                  {careerPaths.length}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  frontend, backend, dados, mobile, produto, seguranca e mais.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {careerPaths.map((path) => (
            <Card
              key={path.id}
              className="overflow-hidden border-border/50 bg-white/70 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)] transition-all"
            >
              <button
                onClick={() => toggleExpand(path.id)}
                className="w-full text-left"
                data-testid={`button-expand-${path.id}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-1 items-start gap-4">
                      <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        {iconMap[path.icon]}
                      </div>
                      <div className="flex-1 space-y-2">
                        <CardTitle className="text-xl leading-tight md:text-2xl">
                          {path.title}
                        </CardTitle>
                        <p className="max-w-3xl text-sm leading-7 text-muted-foreground md:text-[15px]">
                          {path.description}
                        </p>
                      </div>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary">
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          expandedId === path.id ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </div>
                </CardHeader>
              </button>

              {expandedId === path.id && (
                <CardContent className="space-y-6 border-t border-border/40 bg-slate-50/45 px-6 py-6">
                  <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
                    <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-5">
                      <div className="flex items-center gap-2 text-emerald-700">
                        <BriefcaseBusiness className="h-4 w-4" />
                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em]">
                          Faixa salarial estimada
                        </h4>
                      </div>
                      <p className="mt-3 text-2xl font-bold tracking-tight text-emerald-800">
                        {path.salaryRange}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-primary/15 bg-white/75 p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        Progressao de carreira
                      </h4>
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {path.careerProgression.map((level, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                            data-testid={`level-progression-${path.id}-${idx}`}
                          >
                            <span>{level}</span>
                            {idx < path.careerProgression.length - 1 ? (
                              <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      Responsabilidades principais
                    </h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {path.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 rounded-2xl border border-border/60 bg-white/80 p-4 text-sm leading-7"
                          data-testid={`item-responsibility-${path.id}-${idx}`}
                        >
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      Habilidades e tecnologias
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {path.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant={
                            skill.level === "Essencial"
                              ? "default"
                              : skill.level === "Importante"
                                ? "secondary"
                                : "outline"
                          }
                          className="rounded-full px-3 py-1.5 text-xs"
                          data-testid={`badge-skill-${path.id}-${idx}`}
                        >
                          <span>{skill.name}</span>
                          <span className="ml-1 opacity-70">({skill.level})</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden border-none bg-primary text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)]">
          <CardContent className="space-y-4 p-8 text-center md:p-10">
            <h2 className="text-2xl font-bold md:text-3xl">Pronto para escolher seu caminho?</h2>
            <p className="mx-auto max-w-2xl text-primary-foreground/82">
              Nao existe uma trilha unica. O valor dessa pagina e te ajudar a comparar direcoes,
              identificar afinidade e montar uma rotina de estudo mais intencional.
            </p>
            <div className="flex justify-center pt-2">
              <Button size="lg" variant="secondary" className="font-bold hover-elevate" asChild>
                <a href="/materiais">Explorar materiais de estudo</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
