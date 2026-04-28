import { PageTransition } from "@/components/page-transition";
import { extracurriculars } from "@/lib/dados-hub";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileBadge2, Info, ListChecks } from "lucide-react";

export default function Extracurriculars() {
  const acgGroups = [
    "I – Organização ou participação em eventos.",
    "II – Participação em programas e projetos de ensino, pesquisa, extensão, inovação e desenvolvimento institucional, devidamente registrados.",
    "III – Monitoria.",
    "IV – Estágio não obrigatório.",
    "V – Organização de coletânea ou publicação de trabalho.",
    "VI – Participação em órgãos colegiados.",
    "VII – Participação em Movimento Estudantil.",
    "VIII – Outras atividades a critério do Colegiado.",
  ];

  return (
    <PageTransition className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-800/80" />
        <div className="hero-grid absolute inset-y-0 right-0 hidden w-[34%] opacity-60 lg:block" />
        <div className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
              <FileBadge2 className="h-3.5 w-3.5" />
              horas complementares
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl font-display">
              Registro de ACG, DCG e Extensão
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              Entenda como funcionam as horas complementares exigidas no curso e quais tipos de atividade entram em cada categoria.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="shrink-0 rounded-full border-white/25 bg-white/10 text-white hover:bg-white/15"
          >
            <a
              href="https://www.ufsm.br/pro-reitorias/prograd/cofre-corem/solicitacao-de-registro-de-acg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Tutorial Oficial ACG
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <section className="glass-card rounded-[1.75rem] border p-6 shadow-sm md:p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-primary/10 p-3 text-primary">
            <ListChecks className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              categorias de ACG
            </p>
            <p className="mt-3 text-muted-foreground leading-8">
              As ACGs são organizadas em grupos definidos no regulamento. Isso ajuda a entender melhor que tipo de participação pode contar para a integralização das horas.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {acgGroups.map((group, index) => {
            const [label, ...rest] = group.split(" – ");
            const content = rest.join(" – ");

            return (
              <div
                key={index}
                className="rounded-2xl border border-border/60 bg-white/65 p-4 shadow-sm md:min-h-[118px]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  {label}
                </p>
                <p className="mt-3 text-[15px] leading-8 text-foreground">{content}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6">
        {extracurriculars.map((item, index) => (
          <Card
            key={index}
            className="glass-card hover-elevate overflow-hidden rounded-[1.5rem] border-border/60 shadow-sm"
          >
            <CardHeader className="border-b border-border/50 bg-primary/[0.03] pb-4">
              <CardTitle className="text-xl font-display">{item.type}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-8">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="glass-card rounded-[1.75rem] border p-6 shadow-sm md:p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-primary/10 p-3 text-primary">
            <Info className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Como submeter os certificados?
            </h2>
            <p className="mt-3 text-muted-foreground leading-8">
              Os certificados de cursos online, palestras e eventos devem ser salvos em PDF e anexados via Portal do Aluno, na aba "Atividades Complementares". O coordenador avaliará a pertinência do certificado com o colegiado e deferirá as horas correspondentes de acordo com o regulamento.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

