import { PageTransition } from "@/components/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Clock, User, Phone } from "lucide-react";

export default function Coordination() {
  return (
    <PageTransition>
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-display mb-2">Coordenação do Curso</h1>
        <p className="text-muted-foreground">Contatos e horários de atendimento da coordenação de Sistemas para Internet.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <Card className="border-border/50 shadow-sm relative overflow-hidden group hover-elevate">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <User className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-1 text-primary">Prof. Juçara Salete Gubiani</h2>
            <p className="text-muted-foreground mb-4">Coordenadora do Curso</p>

            <h3 className="text-lg font-bold mb-1">Prof. Rafael Gressler Milbradt</h3>
            <p className="text-muted-foreground mb-6">Coordenador Substituto</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href="mailto:coordenacao.csi@ufsm.br" className="text-primary hover:underline">
                  coordenacao.csi@ufsm.br
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>(55) 99146-5045 (WhatsApp Secretaria)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-sm hover-elevate">
          <CardContent className="p-8 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Horário de Atendimento
            </h3>
            <p className="text-muted-foreground">
              De Segunda a Sexta-feira<br />
              <span className="font-medium text-foreground">13:30 - 17:30</span>
            </p>

            <h3 className="text-xl font-bold flex items-center gap-2 pt-4">
              <MapPin className="w-5 h-5 text-primary" />
              Localização
            </h3>
            <p className="text-muted-foreground">
              Campus UFSM - Prédio 70 F<br />
              Sala F309 A
            </p>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
