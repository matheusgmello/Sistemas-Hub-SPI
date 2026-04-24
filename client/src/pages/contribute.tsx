import { PageTransition } from "@/components/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Github, FileEdit, Heart, GitFork, MessageSquare, GitPullRequest } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Contribute() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary/85 px-7 py-9 text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)] md:px-10 md:py-11">
          <div className="hero-grid absolute inset-y-0 right-0 hidden w-[34%] border-l border-white/10 opacity-30 md:block" />
          <div className="relative max-w-3xl space-y-5">
            <Badge className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary-foreground shadow-none hover:bg-white/10">
              Colaboracao aberta
            </Badge>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Como Contribuir
              </h1>
              <p className="max-w-2xl text-base leading-8 text-primary-foreground/88 md:text-lg">
                O Hub de Conhecimento SPI e um projeto comunitario. Se voce quiser corrigir,
                atualizar ou expandir o conteudo, este e o melhor ponto de partida.
              </p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="glass-card border-border/60">
            <CardContent className="pt-6 text-center">
              <MessageSquare className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="text-lg font-bold">1. Reporte issues</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Encontrou um erro, dado desatualizado ou link quebrado? Abra uma issue no GitHub e
                descreva o problema.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/60">
            <CardContent className="pt-6 text-center">
              <GitFork className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="text-lg font-bold">2. Faca um fork</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Crie uma copia do projeto na sua conta para fazer alteracoes com seguranca e abrir
                sua proposta de mudanca.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/60">
            <CardContent className="pt-6 text-center">
              <GitPullRequest className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="text-lg font-bold">3. Envie um PR</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Depois de concluir a edicao, abra um pull request para revisao e integracao da sua
                contribuicao.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden border-none bg-primary text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)]">
          <CardContent className="space-y-6 p-8 text-center md:p-10">
            <div className="flex justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Heart className="h-6 w-6" />
              </span>
            </div>
            <h2 className="text-2xl font-bold md:text-3xl">Pronto para colocar a mao na massa?</h2>
            <p className="mx-auto max-w-2xl text-primary-foreground/82">
              Grande parte do conteudo vive em arquivos como `client/src/lib/mock-data.ts` e
              `client/src/lib/study-guides.ts`. Para quem esta aprendendo, tambem e uma boa porta
              de entrada para praticar Git, React e manutencao de conteudo real.
            </p>

            <Button size="lg" className="gap-2 bg-white px-8 font-bold text-primary hover:bg-white/90" asChild>
              <a href="https://github.com/matheusgmello/Sistemas-Hub-SPI" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                Acessar repositorio no GitHub
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="glass-card border-primary/15">
          <CardContent className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <FileEdit className="h-5 w-5 text-primary" />
              Fluxo sugerido
            </h3>
            <div className="space-y-2 text-sm leading-7 text-muted-foreground">
              <p>1. `git checkout -b feature/minha-melhoria`</p>
              <p>2. Edite os arquivos necessarios</p>
              <p>3. `git commit -m "Explique sua mudanca"`</p>
              <p>4. `git push origin feature/minha-melhoria`</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
