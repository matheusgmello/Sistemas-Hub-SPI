import { PageTransition } from "@/components/page-transition";
import { waivers } from "@/lib/dados-hub";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle, ExternalLink, FileCheck2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function Waivers() {
  return (
    <PageTransition className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-800/80" />
        <div className="hero-grid absolute inset-y-0 right-0 hidden w-[34%] opacity-60 lg:block" />
        <div className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
              <FileCheck2 className="h-3.5 w-3.5" />
              aproveitamento de estudos
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl font-display">
              Como Dispensar Matérias
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              Veja os caminhos mais comuns para pedir dispensa, entender as regras do processo e não perder o prazo do semestre.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="shrink-0 rounded-full border-white/25 bg-white/10 text-white hover:bg-white/15"
          >
            <a
              href="https://www.ufsm.br/pro-reitorias/prograd/cofre-corem/dispensa-de-disciplinas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Tutorial Oficial UFSM
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <Alert className="glass-card border-blue-200/70 bg-blue-50/70 text-blue-900 shadow-sm dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-200">
        <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <AlertTitle className="font-display text-base font-bold">
          Atenção aos prazos
        </AlertTitle>
        <AlertDescription className="leading-7">
          Os requerimentos de dispensa só podem ser solicitados no período definido pelo Calendário Acadêmico, geralmente nas duas primeiras semanas do semestre letivo.
        </AlertDescription>
      </Alert>

      <section className="glass-card rounded-[1.75rem] border p-3 shadow-sm md:p-4">
        <Accordion type="single" collapsible className="w-full space-y-2">
          {waivers.map((waiver, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="overflow-hidden rounded-2xl border border-border/60 bg-white/65 px-4"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold leading-7 hover:no-underline hover:text-primary">
                {waiver.title}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-8 text-muted-foreground">
                {waiver.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </PageTransition>
  );
}

