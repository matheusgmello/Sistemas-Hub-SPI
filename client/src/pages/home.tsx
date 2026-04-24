import { Link } from "wouter";
import { PageTransition } from "@/components/page-transition";
import { courseInfo } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpenText,
  Code,
  GraduationCap,
  Library,
  Network,
  Server,
  Smartphone,
} from "lucide-react";

const coursePillars = [
  {
    title: "Frontend",
    description: "Interfaces web modernas, responsivas e acessíveis.",
    icon: Code,
  },
  {
    title: "Backend",
    description: "APIs robustas, banco de dados e arquitetura de servidores.",
    icon: Server,
  },
  {
    title: "Mobile",
    description: "Desenvolvimento de aplicativos híbridos e nativos.",
    icon: Smartphone,
  },
  {
    title: "Diploma",
    description: `${courseInfo.type} · ${courseInfo.duration} de formação.`,
    icon: GraduationCap,
  },
];

const quickLinks = [
  {
    title: "Ver matérias do curso",
    description: "Consulte a grade completa e se localize por período.",
    href: "/materias",
    icon: BookOpenText,
  },
  {
    title: "Entender pré-requisitos",
    description: "Planeje melhor o semestre e evite surpresas na matrícula.",
    href: "/pre-requisitos",
    icon: Network,
  },
  {
    title: "Explorar materiais",
    description: "Acesse a trilha de estudo e os links úteis por disciplina.",
    href: "/materiais",
    icon: Library,
  },
];

export default function Home() {
  return (
    <PageTransition className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-800/80" />
        <div className="hero-grid absolute inset-y-0 right-0 hidden w-[38%] opacity-60 lg:block" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[55%] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
              <BookOpenText className="h-3.5 w-3.5" />
              guia de sobrevivência
            </div>
            <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] font-display">
              Guia de Sobrevivência:
              <br />
              <span className="text-blue-200">{courseInfo.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
              {courseInfo.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-white text-primary hover:bg-white/90">
                <Link href="/materiais">
                  Começar pelos materiais
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/25 bg-white/10 text-white hover:bg-white/15"
              >
                <Link href="/materias">Explorar a grade</Link>
              </Button>
            </div>
          </div>

          <div className="glass-card rounded-[1.75rem] border border-white/15 p-5 text-foreground shadow-2xl shadow-blue-950/20">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              atalhos rápidos
            </p>
            <div className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover-elevate block rounded-2xl border border-border/60 bg-white/75 p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-xl bg-primary/10 p-2 text-primary">
                      <link.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-base font-semibold leading-tight">
                        {link.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {coursePillars.map((pillar) => (
          <Card
            key={pillar.title}
            className="glass-card hover-elevate border-border/50 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <CardContent className="pt-6 flex flex-col items-start text-left">
              <div className="p-3 bg-primary/10 rounded-2xl mb-4 text-primary">
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-display">{pillar.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{pillar.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <div className="glass-card rounded-[1.75rem] border p-6 md:p-8 shadow-sm">
          <div className="max-w-4xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              como usar este guia
            </p>
            <p className="mt-3 text-muted-foreground leading-8">
              Navegue pelo menu lateral para acessar informações cruciais sobre a matriz curricular do curso,
              entender as burocracias acadêmicas como dispensas e horas complementares, e encontrar materiais
              úteis para seus estudos. Este projeto continua sendo mantido por alunos, para alunos.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
