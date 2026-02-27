import { PageTransition } from "@/components/page-transition";
import { extracurriculars } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, ExternalLink, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Extracurriculars() {
  const acgGroups = [
    "I – Organização ou participação em eventos.",
    "II – Participação em programas e projetos de ensino, pesquisa, extensão, inovação e desenvolvimento institucional, devidamente registrados.",
    "III – Monitoria.",
    "IV – Estágio não obrigatório.",
    "V – Organização de coletânea ou publicação de trabalho.",
    "VI – Participação em órgãos colegiados.",
    "VII – Participação em Movimento Estudantil.",
    "VIII – Outras atividades a critério do Colegiado."
  ];

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-display mb-2">Registro de ACG, DCG e Extensão</h1>
            <p className="text-muted-foreground">Entenda as horas complementares necessárias para sua formatura.</p>
          </div>
          <Button asChild variant="outline" className="shrink-0 hover-elevate">
            <a 
              href="https://www.ufsm.br/pro-reitorias/prograd/cofre-corem/solicitacao-de-registro-de-acg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Tutorial Oficial ACG
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <ListChecks className="w-5 h-5" />
              Categorias de ACG
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4 italic">
              As ACGs são divididas nas seguintes categorias conforme o regulamento:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {acgGroups.map((group, index) => (
                <div key={index} className="flex gap-2 text-sm text-foreground bg-background/50 p-2 rounded border border-border/40">
                  <span className="font-bold text-primary">{group.split(' – ')[0]}</span>
                  <span>{group.split(' – ')[1] || group}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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

        <div className="bg-muted/40 rounded-2xl p-6 border flex gap-4 items-start text-sm">
          <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Como submeter os certificados?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Os certificados de cursos online, palestras e eventos devem ser salvos em PDF e anexados via 
              Portal do Aluno, na aba "Atividades Complementares". O coordenador avaliará a pertinência 
              do certificado com a área de TI e deferirá as horas correspondentes de acordo com o regulamento.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
