import { PageTransition } from "@/components/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Github, FileEdit, Code2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contribute() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight font-display mb-4">Como Contribuir</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Este guia é feito de alunos para alunos. Sua ajuda é fundamental para manter as 
          informações precisas e atualizadas.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <Card className="border-border/50 shadow-sm hover-elevate">
            <CardContent className="pt-6">
              <FileEdit className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2">Corrigir Informações</h3>
              <p className="text-muted-foreground mb-4">
                Encontrou um erro em uma ementa, horário de coordenação ou link quebrado? 
                Você pode sugerir a correção abrindo uma Issue.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover-elevate">
            <CardContent className="pt-6">
              <Code2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2">Adicionar Funcionalidades</h3>
              <p className="text-muted-foreground mb-4">
                Quer melhorar o design ou adicionar uma nova ferramenta útil para os alunos? 
                O projeto é open source. Faça um Fork e mande seu Pull Request!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/30 border rounded-3xl p-8 md:p-12 text-center">
          <Heart className="w-12 h-12 text-destructive mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
            Pronto para colocar a mão na massa?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Todo o código fonte deste guia está disponível no GitHub. Se você é calouro, 
            esta é uma ótima oportunidade de praticar Git, React e TailwindCSS em um projeto real!
          </p>
          
          <Button size="lg" className="gap-2 font-bold hover-elevate">
            <Github className="w-5 h-5" />
            Acessar Repositório no GitHub
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
