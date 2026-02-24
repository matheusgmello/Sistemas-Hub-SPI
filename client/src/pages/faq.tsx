import { PageTransition } from "@/components/page-transition";
import { faqs } from "@/lib/mock-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion } from "lucide-react";

export default function FAQ() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
        <div className="bg-primary/10 p-4 rounded-full mb-6">
          <MessageCircleQuestion className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-display mb-4">Dúvidas Frequentes</h1>
        <p className="text-muted-foreground text-lg">
          Compilamos as perguntas mais comuns dos calouros para ajudar você a se situar mais rápido no curso.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-card border rounded-2xl shadow-sm p-4">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="px-4 border-b-border/40 last:border-0">
              <AccordionTrigger className="text-left font-semibold text-[1.1rem] py-6 hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageTransition>
  );
}
