import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { subjects } from "@/lib/mock-data";
import { subjectStudyGuidesById, studyTracks } from "@/lib/study-guides";
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
  { value: "1", label: "1o periodo" },
  { value: "2", label: "2o periodo" },
  { value: "3", label: "3o periodo" },
  { value: "4", label: "4o periodo" },
  { value: "5", label: "5o periodo" },
  { value: "6", label: "6o periodo" },
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
      subject.guide?.topics.some((topic) =>
        topic.toLowerCase().includes(normalizedSearch),
      );

    return matchesPeriod && matchesSearch;
  });

  const periodsWithContent = periodLabels
    .filter((period) => period.value !== "all")
    .map((period) => ({
      ...period,
      subjects: filteredSubjects.filter(
        (subject) => String(subject.period) === period.value,
      ),
    }))
    .filter((period) => period.subjects.length > 0);

  const totalResources = enrichedSubjects.reduce(
    (sum, subject) => sum + (subject.guide?.resources.length ?? 0),
    0,
  );

  return (
    <PageTransition className="space-y-10">
      <section className="relative overflow-hidden rounded-[28px] border border-border/60 bg-gradient-to-br from-primary/[0.14] via-background to-emerald-500/[0.10] p-6 md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.20),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_25%)]" />
        <div className="relative space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Guia de estudo por disciplina
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.6fr_0.9fr] lg:items-end">
            <div className="space-y-3">
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Material para estudo organizado por materia e por periodo
              </h1>
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
                A pagina agora acompanha a grade do curso: cada disciplina ganhou
                uma trilha curta com foco de estudo e recursos para voce sair do
                conteudo geral e ir direto para o que importa.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <Card className="border-white/40 bg-background/80 shadow-sm backdrop-blur">
                <CardHeader className="pb-2">
                  <CardDescription>Disciplinas</CardDescription>
                  <CardTitle className="text-2xl">{subjects.length}</CardTitle>
                </CardHeader>
              </Card>
              <Card className="border-white/40 bg-background/80 shadow-sm backdrop-blur">
                <CardHeader className="pb-2">
                  <CardDescription>Links curados</CardDescription>
                  <CardTitle className="text-2xl">{totalResources}</CardTitle>
                </CardHeader>
              </Card>
              <Card className="border-white/40 bg-background/80 shadow-sm backdrop-blur">
                <CardHeader className="pb-2">
                  <CardDescription>Periodos cobertos</CardDescription>
                  <CardTitle className="text-2xl">6</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {studyTracks.map((track) => (
          <Card
            key={track.title}
            className="border-border/60 bg-card/70 shadow-sm backdrop-blur"
          >
            <CardHeader className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <FolderKanban className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                  rota base
                </span>
              </div>
              <div>
                <CardTitle className="text-xl">{track.title}</CardTitle>
                <CardDescription className="mt-2 leading-6">
                  {track.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {track.resources.map((resource) => (
                <a
                  key={resource.link}
                  href={resource.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-border/60 bg-background/80 p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="font-medium leading-5 group-hover:text-primary">
                        {resource.title}
                      </p>
                      <p className="text-sm leading-5 text-muted-foreground">
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

      <section className="rounded-[24px] border border-border/60 bg-card/70 p-4 shadow-sm backdrop-blur md:p-5">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-xs text-muted-foreground">
              <Filter className="h-3.5 w-3.5" />
              {filteredSubjects.length} disciplina(s) visivel(is)
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Ex.: banco, java, mobile, engenharia..."
                className="h-11 rounded-xl border-border/60 bg-background/90 pl-10"
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
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  {period.label}
                </h2>
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
                    className="overflow-hidden rounded-[24px] border-border/60 bg-card/80 shadow-sm backdrop-blur"
                  >
                    <CardHeader className="space-y-4 border-b border-border/50 bg-gradient-to-r from-background to-primary/[0.04]">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge className="rounded-full px-3 py-1 text-[11px]">
                          {subject.workload}h
                        </Badge>
                        <Badge variant="outline" className="rounded-full px-3 py-1 text-[11px]">
                          {guide.label}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <CardTitle className="text-xl leading-tight md:text-2xl">
                          {subject.name}
                        </CardTitle>
                        <CardDescription className="text-sm leading-6">
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
                          className="group block rounded-2xl border border-border/60 bg-background/80 p-4 transition-colors hover:border-primary/40"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1">
                              <p className="font-medium leading-5 group-hover:text-primary">
                                {resource.title}
                              </p>
                              <p className="text-sm leading-5 text-muted-foreground">
                                {resource.description}
                              </p>
                            </div>
                            <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                          </div>
                        </a>
                      ))}

                      <div className="flex items-center gap-2 rounded-2xl border border-dashed border-border/70 bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        Use os links como ponto de partida e complemente com materiais do professor e exercicios da disciplina.
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
