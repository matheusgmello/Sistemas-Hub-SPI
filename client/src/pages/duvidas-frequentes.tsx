import { PageTransition } from "@/components/page-transition";
import { faqs } from "@/lib/dados-hub";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FAQ() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl space-y-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary/85 px-7 py-9 text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)] md:px-10 md:py-11">
          <div className="hero-grid absolute inset-y-0 right-0 hidden w-[34%] border-l border-white/10 opacity-30 md:block" />
          <div className="relative max-w-3xl space-y-5">
            <Badge className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary-foreground shadow-none hover:bg-white/10">
              Perguntas comuns
            </Badge>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Duvidas Frequentes
              </h1>
              <p className="max-w-2xl text-base leading-8 text-primary-foreground/88 md:text-lg">
                Reunimos as perguntas mais recorrentes para ajudar quem esta chegando ao curso a se
                localizar mais rapido.
              </p>
            </div>
          </div>
        </section>

        <div className="glass-card rounded-[1.75rem] border border-border/60 p-4 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)] md:p-5">
          <div className="mb-3 flex items-center gap-3 px-2 py-1 text-primary">
            <MessageCircleQuestion className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">FAQ do curso</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-b-border/40 px-4 last:border-0"
              >
                <AccordionTrigger className="text-left text-[1.05rem] font-semibold leading-7 hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-8 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </PageTransition>
  );
}

