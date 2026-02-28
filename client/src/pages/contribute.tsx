import { PageTransition } from "@/components/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Github, FileEdit, Code2, Heart, GitFork, MessageSquare, GitPullRequest } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contribute() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-display text-primary">Como Contribuir</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O Hub de Conhecimento TSI é um projeto comunitário. Sua ajuda é fundamental para manter as 
            informações precisas e atualizadas!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-border/50 shadow-sm hover-elevate">
            <CardContent className="pt-6 text-center">
              <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">1. Reporte Issues</h3>
              <p className="text-sm text-muted-foreground">
                Encontrou um erro ou link quebrado? Abra uma "Issue" no GitHub descrevendo o problema.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover-elevate">
            <CardContent className="pt-6 text-center">
              <GitFork className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">2. Faça um Fork</h3>
              <p className="text-sm text-muted-foreground">
                Crie uma cópia do projeto na sua conta do GitHub para fazer suas alterações com segurança.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover-elevate">
            <CardContent className="pt-6 text-center">
              <GitPullRequest className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">3. Pull Request</h3>
              <p className="text-sm text-muted-foreground">
                Após terminar suas edições, envie um "Pull Request" para que possamos revisar e mesclar.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/30 border rounded-3xl p-8 md:p-12 text-center space-y-6">
          <Heart className="w-12 h-12 text-destructive mx-auto mb-2" />
          <h2 className="text-2xl md:text-3xl font-bold font-display">
            Pronto para colocar a mão na massa?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A maioria das informações está no arquivo <code>client/src/lib/mock-data.ts</code>. 
            Se você é calouro, esta é uma ótima oportunidade de praticar Git e React!
          </p>
          
          <Button size="lg" className="gap-2 font-bold hover-elevate px-8" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              Acessar Repositório no GitHub
            </a>
          </Button>
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <FileEdit className="w-5 h-5" />
              Dica Técnica
            </h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>1. <code>git checkout -b feature/minha-melhoria</code></p>
              <p>2. Edite os arquivos necessários</p>
              <p>3. <code>git commit -m 'Explique sua mudança'</code></p>
              <p>4. <code>git push origin feature/minha-melhoria</code></p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
