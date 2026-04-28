import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { subjects } from "@/lib/dados-hub";
import { subjectStudyGuidesById, studyTracks } from "@/lib/guias-estudo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowUpRight,
  BookOpenText,
  Filter,
  FolderKanban,
  GraduationCap,
  Layers3,
  Search,
  Sparkles,
} from "lucide-react";

const periodLabels = [
  { value: "all", label: "Todos" },
  { value: "1", label: "1º semestre" },
  { value: "2", label: "2º semestre" },
  { value: "3", label: "3º semestre" },
  { value: "4", label: "4º semestre" },
  { value: "5", label: "5º semestre" },
  { value: "6", label: "6º semestre" },
];

export default function StudyMaterials() {
  const [search, setSearch] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("all");

  const normalizedSearch = search.trim().toLowerCase();

  const enrichedSubjects = subjects.map((subject) => ({
    ...subject,
    guide: subjectStudyGuidesById[subject.id],
  }));

  const filteredSubjects = enrichedSubjects.filter((subject) => {
    const matchesPeriod =
      selectedPeriod === "all" || String(subject.period) === selectedPeriod;
    const matchesSearch =
      normalizedSearch.length === 0 ||
      subject.name.toLowerCase().includes(normalizedSearch) ||
      subject.guide?.label.toLowerCase().includes(normalizedSearch) ||
      subject.guide?.topics.some((topic) => topic.toLowerCase().includes(normalizedSearch));

    return matchesPeriod && matchesSearch;
  });

  const periodsWithContent = periodLabels
    .filter((period) => period.value !== "all")
    .map((period) => ({
      ...period,
      subjects: filteredSubjects.filter((subject) => String(subject.period) === period.value),
    }))
    .filter((period) => period.subjects.length > 0);

  const totalResources = enrichedSubjects.reduce(
    (sum, subject) => sum + (subject.guide?.resources.length ?? 0),
    0,
  );

  return (
    <PageTransition className="space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary/85 px-7 py-9 text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)] md:px-10 md:py-11">
        <div className="hero-grid absolute inset-y-0 right-0 hidden w-[36%] border-l border-white/10 opacity-30 md:block" />
        <div className="relative grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="space-y-5">
            <Badge className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary-foreground shadow-none hover:bg-white/10">
              Guia de estudo por disciplina
            </Badge>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Material para Estudo
              </h1>
              <p className="max-w-2xl text-base leading-8 text-primary-foreground/88 md:text-lg">
                Acompanhe a grade do curso com materiais organizados por materia e por semestre,
                incluindo foco de estudo, topicos-chave e links para comecar.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Panorama rapido
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div>
                <p className="text-3xl font-bold tracking-tight">{subjects.length}</p>
                <p className="text-sm text-primary-foreground/75">disciplinas</p>
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tight">{totalResources}</p>
                <p className="text-sm text-primary-foreground/75">links curados</p>
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tight">6</p>
                <p className="text-sm text-primary-foreground/75">semestres</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {studyTracks.map((track) => (
          <Card
            key={track.title}
            className="glass-card border-border/60 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)]"
          >
            <CardHeader className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <FolderKanban className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em]">rota base</span>
              </div>
              <div>
                <CardTitle className="text-xl">{track.title}</CardTitle>
                <CardDescription className="mt-2 leading-7">{track.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {track.resources.map((resource) => (
                <a
                  key={resource.link}
                  href={resource.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-border/60 bg-white/80 p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="font-medium leading-6 group-hover:text-primary">
                        {resource.title}
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {resource.description}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="glass-card rounded-[1.75rem] border border-border/60 p-4 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)] md:p-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Encontre a disciplina certa
              </h2>
              <p className="text-sm text-muted-foreground">
                Filtre por periodo ou pesquise por nome, tema ou foco de estudo.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/80 px-3 py-1.5 text-xs text-muted-foreground">
              <Filter className="h-3.5 w-3.5" />
              {filteredSubjects.length} disciplina(s) visivel(is)
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="-translate-y-px h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Ex.: banco, java, mobile, engenharia..."
                className="h-11 rounded-xl border-border/60 bg-white/90 pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {periodLabels.map((period) => {
                const isActive = selectedPeriod === period.value;

                return (
                  <Button
                    key={period.value}
                    type="button"
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setSelectedPeriod(period.value)}
                  >
                    {period.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        {periodsWithContent.length === 0 ? (
          <Card className="border-dashed border-border/70 bg-card/60">
            <CardContent className="flex flex-col items-center justify-center gap-3 py-12 text-center">
              <BookOpenText className="h-10 w-10 text-muted-foreground" />
              <div className="space-y-1">
                <p className="font-medium">Nenhuma disciplina encontrada</p>
                <p className="text-sm text-muted-foreground">
                  Tente outro termo de busca ou volte para todos os periodos.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : null}

        {periodsWithContent.map((period) => (
          <div key={period.value} className="space-y-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Layers3 className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                    bloco curricular
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight">{period.label}</h2>
              </div>
              <Badge variant="outline" className="w-fit rounded-full px-3 py-1 text-xs">
                {period.subjects.length} materia(s)
              </Badge>
            </div>

            <div className="grid gap-5 xl:grid-cols-2">
              {period.subjects.map((subject) => {
                const guide = subject.guide;

                if (!guide) {
                  return null;
                }

                return (
                  <Card
                    key={subject.id}
                    className="overflow-hidden rounded-[1.75rem] border-border/60 bg-white/75 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)]"
                  >
                    <CardHeader className="space-y-4 border-b border-border/50 bg-gradient-to-r from-white to-primary/[0.04]">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge className="rounded-full px-3 py-1 text-[11px]">{subject.workload}h</Badge>
                        <Badge variant="outline" className="rounded-full px-3 py-1 text-[11px]">
                          {guide.label}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <CardTitle className="text-xl leading-tight md:text-2xl">
                          {subject.name}
                        </CardTitle>
                        <CardDescription className="text-sm leading-7">
                          {guide.summary}
                        </CardDescription>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {guide.topics.map((topic) => (
                          <Badge
                            key={topic}
                            variant="secondary"
                            className="rounded-full px-3 py-1 text-[11px] font-medium"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3 p-5">
                      {guide.resources.map((resource) => (
                        <a
                          key={`${subject.id}-${resource.link}`}
                          href={resource.link}
                          target="_blank"
                          rel="noreferrer"
                          className="group block rounded-2xl border border-border/60 bg-white/85 p-4 transition-colors hover:border-primary/40"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1">
                              <p className="font-medium leading-6 group-hover:text-primary">
                                {resource.title}
                              </p>
                              <p className="text-sm leading-6 text-muted-foreground">
                                {resource.description}
                              </p>
                            </div>
                            <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                          </div>
                        </a>
                      ))}

                      <div className="flex items-center gap-2 rounded-2xl border border-dashed border-border/70 bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        Use os links como ponto de partida e complemente com materiais do professor
                        e exercicios da disciplina.
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </PageTransition>
  );
}

