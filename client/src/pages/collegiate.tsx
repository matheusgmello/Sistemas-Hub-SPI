import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { collegiate } from "@/lib/mock-data";
import { Gavel, CheckCircle2, Users2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Collegiate() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary/85 px-7 py-9 text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)] md:px-10 md:py-11">
          <div className="hero-grid absolute inset-y-0 right-0 hidden w-[34%] border-l border-white/10 opacity-30 md:block" />
          <div className="relative max-w-3xl space-y-5">
            <Badge className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary-foreground shadow-none hover:bg-white/10">
              Gestao academica
            </Badge>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Colegiado do Curso
              </h1>
              <p className="max-w-2xl text-base leading-8 text-primary-foreground/88 md:text-lg">
                Entenda quem compoe o colegiado e quais decisoes passam por esse orgao dentro da
                vida academica de Sistemas para Internet.
              </p>
            </div>
          </div>
        </section>

        <Card className="glass-card border-border/60">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-3 text-xl font-bold">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Gavel className="h-5 w-5" />
              </span>
              O que e o Colegiado?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-8 text-muted-foreground md:text-[15px]">
              {collegiate.description}
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Principais Funcoes
            </h2>
            <div className="space-y-3">
              {collegiate.functions.map((func, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl border border-border/60 p-5 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)]"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-medium leading-7 md:text-[15px]">{func}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
              <Users2 className="h-5 w-5 text-primary" />
              Membros Atuais
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {collegiate.members.map((member, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-white/70 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)] transition-all hover:border-primary/20"
                >
                  <CardContent className="p-4 md:p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold leading-7 text-foreground">{member.name}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
