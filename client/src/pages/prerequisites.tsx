import { PageTransition } from "@/components/page-transition";
import { prerequisites } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lock, Unlock } from "lucide-react";

export default function Prerequisites() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-display mb-2">Pré-requisitos</h1>
          <p className="text-muted-foreground">Entenda quais matérias você precisa concluir para liberar novas disciplinas.</p>
        </div>

        <div className="grid gap-6">
          {prerequisites.map((item, index) => (
            <Card key={index} className="hover-elevate overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lock className="w-5 h-5 text-red-500" />
                  <span>{item.subject}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex-1 p-4 rounded-xl border border-dashed border-red-200 bg-red-50/50 dark:border-red-900/30 dark:bg-red-950/20 w-full">
                    <p className="text-sm font-medium text-foreground">Concluir esta disciplina...</p>
                  </div>
                  
                  <ArrowRight className="text-muted-foreground hidden md:block w-6 h-6" />
                  
                  <div className="flex-1 w-full space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Unlock className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-bold uppercase tracking-wider text-green-600 dark:text-green-400">Libera:</span>
                    </div>
                    <div className="grid gap-2">
                      {item.releases.map((release, rIndex) => (
                        <div 
                          key={rIndex}
                          className="p-3 rounded-lg border border-green-200 bg-green-50/50 dark:border-green-900/30 dark:bg-green-950/20"
                        >
                          <span className="text-sm font-medium text-foreground">{release}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
