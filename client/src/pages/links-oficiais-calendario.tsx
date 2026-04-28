import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PageTransition } from "@/components/page-transition";
import { officialLinks, officialLinkCategoryLabels } from "@/lib/links-oficiais";
import {
  academicCalendarCategoryLabels,
  getSortedAcademicCalendarEvents,
  getUpcomingAcademicCalendarEvents,
} from "@/lib/calendario-academico";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
  FolderKanban,
  Link2,
  TimerReset,
} from "lucide-react";

function formatEventDate(startDate: string, endDate?: string) {
  const start = parseISO(startDate);

  if (!endDate || endDate === startDate) {
    return format(start, "dd 'de' MMMM", { locale: ptBR });
  }

  const end = parseISO(endDate);

  if (format(start, "MM", { locale: ptBR }) === format(end, "MM", { locale: ptBR })) {
    return `${format(start, "dd", { locale: ptBR })} a ${format(end, "dd 'de' MMMM", {
      locale: ptBR,
    })}`;
  }

  return `${format(start, "dd 'de' MMM", { locale: ptBR })} a ${format(end, "dd 'de' MMM", {
    locale: ptBR,
  })}`;
}

const groupedOfficialLinks = Object.entries(officialLinkCategoryLabels).map(([category, label]) => ({
  category,
  label,
  items: officialLinks.filter((link) => link.category === category),
}));

export default function OfficialResources() {
  const calendarEvents = getSortedAcademicCalendarEvents();
  const upcomingEvents = getUpcomingAcademicCalendarEvents().slice(0, 3);
  const featuredEvents =
    upcomingEvents.length > 0 ? upcomingEvents : calendarEvents.slice(Math.max(calendarEvents.length - 3, 0));

  return (
    <PageTransition>
      <section className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary/85 px-7 py-9 text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)] md:px-10 md:py-11">
        <div className="hero-grid absolute inset-y-0 right-0 hidden w-[34%] border-l border-white/10 opacity-30 md:block" />
        <div className="relative grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-5">
            <Badge className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary-foreground shadow-none hover:bg-white/10">
              Utilidades institucionais
            </Badge>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Links Oficiais e Calendario
              </h1>
              <p className="max-w-2xl text-base leading-8 text-primary-foreground/88 md:text-lg">
                Um ponto unico para acessar sistemas oficiais da UFSM, paginas do curso e as datas
                academicas mais relevantes para o fluxo do semestre.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Resumo rapido
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div>
                <p className="text-3xl font-bold tracking-tight">{officialLinks.length}</p>
                <p className="text-sm text-primary-foreground/75">links oficiais</p>
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tight">{calendarEvents.length}</p>
                <p className="text-sm text-primary-foreground/75">eventos mapeados</p>
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tight">UFSM</p>
                <p className="text-sm text-primary-foreground/75">fonte principal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Tabs defaultValue="links" className="space-y-5">
        <TabsList className="h-auto flex-wrap gap-2 rounded-2xl border border-border/60 bg-card/80 p-2">
          <TabsTrigger value="links" className="rounded-xl px-4 py-2">
            Links oficiais
          </TabsTrigger>
          <TabsTrigger value="calendar" className="rounded-xl px-4 py-2">
            Calendario academico
          </TabsTrigger>
        </TabsList>

        <TabsContent value="links" className="space-y-6">
          {groupedOfficialLinks.map((group) => (
            <section key={group.category} className="space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Link2 className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                    atalho oficial
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight">{group.label}</h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {group.items.map((link) => (
                  <Card
                    key={link.id}
                    className="glass-card border-border/60 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)]"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl leading-tight">{link.title}</CardTitle>
                      <CardDescription className="leading-7">{link.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button asChild className="rounded-full">
                        <a href={link.href} target="_blank" rel="noreferrer">
                          Abrir link oficial
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </TabsContent>

        <TabsContent value="calendar" className="space-y-6">
          <section className="grid gap-4 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <Card
                key={event.id}
                className="glass-card border-border/60 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)]"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <TimerReset className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                      {upcomingEvents.length > 0 ? "proximos prazos" : "destaques do recorte"}
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                    <CardDescription className="mt-2 text-sm leading-6">
                      {formatEventDate(event.startDate, event.endDate)}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </section>

          <section className="glass-card rounded-[1.75rem] border border-border/60 p-5 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)] md:p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <CalendarDays className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                    recorte 2026/1
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  Datas academicas mapeadas
                </h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  Lista inicial baseada no calendario academico da UFSM e nas orientacoes oficiais
                  de matricula do curso de Sistemas para Internet.
                </p>
              </div>
              <Button asChild variant="outline" className="rounded-full">
                <a href="https://www.ufsm.br/calendario/2026-71069" target="_blank" rel="noreferrer">
                  Abrir calendario completo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-6 grid gap-4">
              {calendarEvents.map((event) => (
                <Card
                  key={event.id}
                  className="border-border/60 bg-card/75 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.18)]"
                >
                  <CardContent className="flex flex-col gap-4 p-5 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="rounded-full px-3 py-1 text-[11px]">
                          {academicCalendarCategoryLabels[event.category]}
                        </Badge>
                        <Badge variant="secondary" className="rounded-full px-3 py-1 text-[11px]">
                          {formatEventDate(event.startDate, event.endDate)}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold leading-tight">{event.title}</h3>
                      <p className="text-sm leading-7 text-muted-foreground">{event.description}</p>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Fonte: {event.source}
                      </p>
                    </div>

                    <Button asChild variant="outline" className="w-fit rounded-full">
                      <a href={event.href} target="_blank" rel="noreferrer">
                        Ver origem
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Card className="glass-card border-border/60">
            <CardContent className="flex items-start gap-4 p-5">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <FolderKanban className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Observacao importante
                </p>
                <p className="text-sm leading-7 text-muted-foreground">
                  O calendario desta pagina e um atalho curado. Para conferir todos os detalhes,
                  excecoes e atualizacoes, o ideal e sempre validar no calendario oficial da UFSM e
                  nos avisos publicados pela pagina institucional do curso.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageTransition>
  );
}

