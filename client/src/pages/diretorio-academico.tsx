import { PageTransition } from "@/components/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, CalendarDays, Users2, UserCircle, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { studentUnionMembers } from "@/lib/dados-hub";

export default function StudentUnion() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary/85 px-7 py-9 text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)] md:px-10 md:py-11">
          <div className="hero-grid absolute inset-y-0 right-0 hidden w-[34%] border-l border-white/10 opacity-30 md:block" />
          <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-5">
              <Badge className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary-foreground shadow-none hover:bg-white/10">
                Representacao estudantil
              </Badge>
              <div className="space-y-3">
                <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                  Diretorio Academico (DASPI)
                </h1>
                <p className="max-w-2xl text-base leading-8 text-primary-foreground/88 md:text-lg">
                  Conheca o diretorio academico de Sistemas para Internet, quem faz parte da
                  equipe e em quais frentes o DASPI atua dentro da vida estudantil.
                </p>
              </div>
              <Button
                className="w-fit border-0 bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="https://www.instagram.com/daspi.ufsm/" rel="noreferrer" target="_blank">
                  <Instagram className="mr-2 h-4 w-4" />
                  Siga no Instagram
                </a>
              </Button>
            </div>

            <div className="relative hidden justify-end lg:flex">
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur">
                <img
                  src="/logoDaspi.png"
                  alt="Logo do DASPI"
                  className="h-40 w-40 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-bold tracking-tight">Membros Atuais</h2>
            <p className="text-sm text-muted-foreground">
              Quem compoe a equipe responsavel pelo diretorio academico no momento.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {studentUnionMembers.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 bg-white/70 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)]"
              >
                <CardContent className="flex items-center gap-3 p-4 md:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <UserCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block font-medium leading-6">{member.name}</span>
                    <span className="text-sm text-muted-foreground">{member.role}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-bold tracking-tight">Frentes de Atuacao</h2>
            <p className="text-sm text-muted-foreground">
              O que o DASPI costuma movimentar para fortalecer a experiencia dos estudantes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="glass-card border-border/60">
              <CardContent className="pt-6">
                <Megaphone className="mb-4 h-10 w-10 text-primary" />
                <h3 className="text-lg font-bold">Representacao</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Participacao ativa nas conversas com coordenacao e gestao, levando demandas,
                  duvidas e necessidades dos alunos.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/60">
              <CardContent className="pt-6">
                <CalendarDays className="mb-4 h-10 w-10 text-primary" />
                <h3 className="text-lg font-bold">Eventos</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Organizacao de encontros, semanas academicas, acoes de integracao, campeonatos e
                  atividades voltadas ao curso.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/60">
              <CardContent className="pt-6">
                <Users2 className="mb-4 h-10 w-10 text-primary" />
                <h3 className="text-lg font-bold">Integracao</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Apoio para aproximar calouros e veteranos, fortalecer comunidade e tornar o curso
                  mais acolhedor no dia a dia.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

