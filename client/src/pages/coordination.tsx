import { PageTransition } from "@/components/page-transition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Clock, User, Phone, CalendarClock } from "lucide-react";

export default function Coordination() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary/85 px-7 py-9 text-primary-foreground shadow-[0_24px_60px_-32px_rgba(37,99,235,0.65)] md:px-10 md:py-11">
          <div className="hero-grid absolute inset-y-0 right-0 hidden w-[34%] border-l border-white/10 opacity-30 md:block" />
          <div className="relative max-w-3xl space-y-5">
            <Badge className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary-foreground shadow-none hover:bg-white/10">
              Atendimento do curso
            </Badge>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Coordenacao do Curso
              </h1>
              <p className="max-w-2xl text-base leading-8 text-primary-foreground/88 md:text-lg">
                Consulte rapidamente os contatos, a equipe responsavel, o horario de atendimento e
                onde encontrar a coordenacao de Sistemas para Internet.
              </p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="glass-card border-border/60 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)]">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <User className="h-7 w-7" />
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Responsaveis
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                      Profa. Jucara Salete Gubiani
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Coordenadora do curso
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-white/75 p-4">
                    <h3 className="text-lg font-bold text-foreground">
                      Prof. Rafael Gressler Milbradt
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Coordenador substituto
                    </p>
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white/75 p-4 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <a
                        href="mailto:coordenacao.csi@ufsm.br"
                        className="text-primary hover:underline"
                      >
                        coordenacao.csi@ufsm.br
                      </a>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white/75 p-4 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>(55) 99146-5045 (WhatsApp Secretaria)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="glass-card border-border/60 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <CalendarClock className="h-5 w-5" />
                  </span>
                  Horario de atendimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-4 w-4 text-primary" />
                  <div>
                    <p>De segunda a sexta-feira</p>
                    <p className="font-semibold text-foreground">13:30 - 17:30</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/60 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.22)]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  Localizacao
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-7 text-muted-foreground">
                <p>Campus UFSM - Predio 70 F</p>
                <p className="font-semibold text-foreground">Sala F309 A</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
