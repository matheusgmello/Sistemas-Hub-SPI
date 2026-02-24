import { PageTransition } from "@/components/page-transition";
import { extracurriculars } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export default function Extracurriculars() {
  return (
    <PageTransition>
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-display mb-2">Registro de ACG, DCG e Extensão</h1>
        <p className="text-muted-foreground">Entenda as horas complementares necessárias para sua formatura.</p>
      </div>

      <div className="grid gap-6">
        {extracurriculars.map((item, i) => (
          <Card key={i} className="hover-elevate overflow-hidden border-l-4" style={{ borderLeftColor: `hsl(var(--primary))` }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">{item.type}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 bg-muted/40 rounded-2xl p-6 border flex gap-4 items-start">
        <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-lg mb-2">Como submeter os certificados?</h3>
          <p className="text-muted-foreground">
            Os certificados de cursos online, palestras e eventos devem ser salvos em PDF e anexados via 
            Portal do Aluno, na aba "Atividades Complementares". O coordenador avaliará a pertinência 
            do certificado com a área de TI e deferirá as horas correspondentes de acordo com o regulamento.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
