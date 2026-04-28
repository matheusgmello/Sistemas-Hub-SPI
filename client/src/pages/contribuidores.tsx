import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { contributors } from "@/lib/dados-hub";
import { Heart, Github, ExternalLink, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Contributors() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary/85 px-7 py-9 text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)] md:px-10 md:py-11">
          <div className="hero-grid absolute inset-y-0 right-0 hidden w-[34%] border-l border-white/10 opacity-30 md:block" />
          <div className="relative max-w-3xl space-y-5">
            <Badge className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary-foreground shadow-none hover:bg-white/10">
              Feito em comunidade
            </Badge>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Contribuidores
              </h1>
              <p className="max-w-2xl text-base leading-8 text-primary-foreground/88 md:text-lg">
                Este projeto existe porque varias pessoas ajudaram com codigo, conteudo, curadoria
                e conhecimento pratico sobre o curso.
              </p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {contributors.map((contributor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="h-full overflow-hidden border-border/50 bg-white/75 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)] transition-colors hover:border-primary/25">
                <CardHeader className="pb-3 text-center">
                  <div className="mb-4 flex justify-center">
                    <Avatar className="h-20 w-20 border-2 border-primary/20 p-1">
                      <AvatarImage
                        src={contributor.image}
                        alt={contributor.name}
                        className="rounded-full object-cover"
                      />
                      <AvatarFallback className="bg-primary/5 text-xl font-bold text-primary">
                        {contributor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl font-bold">{contributor.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 text-center">
                  <div className="flex justify-center gap-3">
                    {contributor.github && contributor.github !== "#" && (
                      <a
                        href={contributor.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-white/80 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {contributor.linkedin && contributor.linkedin !== "#" && (
                      <a
                        href={contributor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-white/80 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="overflow-hidden border-none bg-primary text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)]">
          <CardContent className="space-y-5 p-8 text-center md:p-10">
            <div className="flex justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Heart className="h-6 w-6 fill-current" />
              </span>
            </div>
            <h2 className="text-2xl font-bold md:text-3xl">Quer ver seu nome aqui?</h2>
            <p className="mx-auto max-w-xl text-primary-foreground/82">
              Contribua com conteudo, correcoes ou melhorias tecnicas. O Hub fica melhor quando e
              mantido coletivamente.
            </p>
            <div className="flex justify-center">
              <a
                href="/contribuir"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-primary transition-all hover:bg-white/90"
              >
                Saiba como contribuir
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}

