import { PageTransition } from "@/components/page-transition";
import { studyMaterials } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookMarked } from "lucide-react";

export default function StudyMaterials() {
  return (
    <PageTransition>
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-display mb-2">Material para Estudo</h1>
        <p className="text-muted-foreground">Links úteis, documentações e plataformas recomendadas para impulsionar seu aprendizado.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {studyMaterials.map((item, idx) => (
          <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="block outline-none">
            <Card className="h-full hover-elevate transition-all border-border/50 group hover:border-primary/50 cursor-pointer">
              <CardHeader className="pb-3 flex flex-row items-start justify-between space-y-0">
                <div className="flex gap-3">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                    <BookMarked className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>

      <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold font-display mb-3 text-foreground">Acesso ao GitHub do Curso</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Nós mantemos um repositório comunitário onde alunos compartilham anotações, 
          códigos de aulas, exercícios resolvidos e projetos. É um ótimo lugar para 
          buscar referências, mas lembre-se: não copie, estude!
        </p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 py-2 hover-elevate">
          Acessar Repositório
        </a>
      </div>
    </PageTransition>
  );
}
