import { PageTransition } from "@/components/page-transition";
import { subjects } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Correlations() {
  const subjectsWithPrereqs = subjects.filter(s => s.prereq !== "-");

  return (
    <PageTransition>
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-display mb-2">Correlação de Matérias</h1>
        <p className="text-muted-foreground">Entenda os pré-requisitos para poder cursar disciplinas avançadas.</p>
      </div>

      <div className="grid gap-6">
        {subjectsWithPrereqs.map((subject) => (
          <Card key={subject.id} className="hover-elevate overflow-hidden border-border/50">
            <CardHeader className="bg-muted/30 pb-4">
              <CardTitle className="text-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>{subject.name}</span>
                <span className="text-xs font-normal text-muted-foreground bg-background px-2 py-1 rounded-md border">
                  {subject.period}º Período
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
                <div className="flex-1 p-3 rounded-lg border border-dashed border-red-200 bg-red-50/50 dark:border-red-900 dark:bg-red-950/20">
                  <span className="text-xs font-semibold text-red-600 dark:text-red-400 block mb-1 uppercase tracking-wider">
                    Pré-requisito
                  </span>
                  <span className="font-medium text-foreground">{subject.prereq}</span>
                </div>
                
                <ArrowRight className="text-muted-foreground hidden sm:block w-5 h-5" />
                
                <div className="flex-1 p-3 rounded-lg border border-dashed border-green-200 bg-green-50/50 dark:border-green-900 dark:bg-green-950/20">
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400 block mb-1 uppercase tracking-wider">
                    Libera matrícula em
                  </span>
                  <span className="font-medium text-foreground">{subject.name}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageTransition>
  );
}
