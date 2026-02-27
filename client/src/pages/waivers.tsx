import { PageTransition } from "@/components/page-transition";
import { waivers } from "@/lib/mock-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle, ExternalLink } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function Waivers() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-display mb-2">Como Dispensar Matérias</h1>
            <p className="text-muted-foreground">Processos e regras para aproveitamento de estudos e proficiência.</p>
          </div>
          <Button asChild variant="outline" className="shrink-0 hover-elevate">
            <a 
              href="https://www.ufsm.br/pro-reitorias/prograd/cofre-corem/dispensa-de-disciplinas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Tutorial Oficial UFSM
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <Alert className="bg-blue-50/50 border-blue-200 text-blue-900 dark:bg-blue-950/30 dark:border-blue-900 dark:text-blue-200">
          <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertTitle className="font-bold">Atenção aos Prazos</AlertTitle>
          <AlertDescription>
            Os requerimentos de dispensa só podem ser solicitados no período definido pelo Calendário Acadêmico, 
            geralmente nas duas primeiras semanas do semestre letivo.
          </AlertDescription>
        </Alert>

        <div className="bg-card border rounded-xl shadow-sm p-2">
          <Accordion type="single" collapsible className="w-full">
            {waivers.map((waiver, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="px-4 border-none">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-primary transition-colors py-4">
                  {waiver.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {waiver.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </PageTransition>
  );
}
