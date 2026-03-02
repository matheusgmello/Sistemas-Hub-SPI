import { PageTransition } from "@/components/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, CalendarDays, Users2, ExternalLink, UserCircle } from "lucide-react";
import { studentUnionMembers } from "@/lib/mock-data";

export default function StudentUnion() {
  return (
    <PageTransition>
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-display mb-2">Diretório Acadêmico (DAPSI)</h1>
        <p className="text-muted-foreground">Conheça o Diretório Acadêmico de Profissionais de Sistemas para Internet.</p>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden mt-6">
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            A voz dos estudantes.
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mb-8 leading-relaxed">
            O DAPSI representa os estudantes perante a coordenação e diretoria da instituição. 
            Nós organizamos eventos, hackathons, campeonatos de e-sports e lutamos por melhorias 
            na infraestrutura dos laboratórios.
          </p>
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white border-0 hover-elevate"
          >
            <a
              href="https://instagram.com/dapsi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Siga no Instagram
            </a>
          </Button>
        </div>
        <Users2 className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 z-0" />
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-6 font-display">Membros Atuais</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {studentUnionMembers.map((member, index) => (
          <Card key={index} className="border-border/50 hover-elevate group">
            <CardContent className="flex items-center gap-3 p-4">
              <UserCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-medium">{member}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-6 font-display">Nossas Frentes de Atuação</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover-elevate border-border/50">
          <CardContent className="pt-6">
            <Megaphone className="w-10 h-10 text-primary mb-4" />
            <h4 className="font-bold text-lg mb-2">Representação</h4>
            <p className="text-muted-foreground text-sm">
              Participação ativa nos conselhos de classe, levando as demandas e reclamações dos alunos diretamente aos gestores.
            </p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-border/50">
          <CardContent className="pt-6">
            <CalendarDays className="w-10 h-10 text-primary mb-4" />
            <h4 className="font-bold text-lg mb-2">Eventos</h4>
            <p className="text-muted-foreground text-sm">
              Organização da Semana Acadêmica de TI, palestras com empresas do mercado, minicursos práticos e hackathons.
            </p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-border/50">
          <CardContent className="pt-6">
            <Users2 className="w-10 h-10 text-primary mb-4" />
            <h4 className="font-bold text-lg mb-2">Integração</h4>
            <p className="text-muted-foreground text-sm">
              Recepção de calouros, festas de integração e campeonatos de jogos (LoL, Valorant, CS2) para aliviar a tensão.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
