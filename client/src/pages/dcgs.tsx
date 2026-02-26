import { PageTransition } from "@/components/page-transition";
import { dcgs } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, BookOpen, Layers, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DCGs() {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary font-display">DCGs</h1>
          <p className="text-muted-foreground text-lg">
            Entenda o que são as Disciplinas Complementares de Graduação e explore as opções ofertadas.
          </p>
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6 flex gap-4 items-start">
            <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div className="space-y-2">
              <p className="font-medium text-primary">Carga Horária Obrigatória: 360 Horas</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {dcgs.description}
              </p>
            </div>
          </CardContent>
        </Card>

        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold font-display">Ofertadas por Sistemas para Internet</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dcgs.internal.map((dcg, index) => (
              <Card key={index} className="hover-elevate border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold leading-tight">{dcg.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-xs">
                    {dcg.workload} Horas
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold font-display">Ofertadas por outros cursos (Por Área)</h2>
          </div>
          
          <div className="space-y-10">
            {dcgs.external.map((group, gIndex) => (
              <div key={gIndex} className="space-y-4">
                <h3 className="text-xl font-bold text-primary/80 border-l-4 border-primary pl-3">
                  Área de {group.category}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((item, iIndex) => (
                    <Card key={iIndex} className="border-border/40 hover:border-primary/20 transition-colors">
                      <CardContent className="p-4 flex justify-between items-start gap-4">
                        <div className="space-y-1">
                          <p className="font-semibold text-sm leading-snug">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.provider}</p>
                        </div>
                        <Badge variant="outline" className="shrink-0">
                          {item.workload}H
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
