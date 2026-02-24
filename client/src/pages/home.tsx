import { PageTransition } from "@/components/page-transition";
import { courseInfo } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Smartphone, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-800/80 z-0" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-3xl rounded-full z-0" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 font-display">
            Guia de Sobrevivência: <br />
            <span className="text-blue-200">{courseInfo.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
            {courseInfo.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover-elevate border-border/50 shadow-sm transition-all duration-300 hover:shadow-md">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="p-3 bg-primary/10 rounded-2xl mb-4">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Frontend</h3>
            <p className="text-sm text-muted-foreground">Interfaces web modernas, responsivas e acessíveis.</p>
          </CardContent>
        </Card>
        
        <Card className="hover-elevate border-border/50 shadow-sm transition-all duration-300 hover:shadow-md">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="p-3 bg-primary/10 rounded-2xl mb-4">
              <Server className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Backend</h3>
            <p className="text-sm text-muted-foreground">APIs robustas, banco de dados e arquitetura de servidores.</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-border/50 shadow-sm transition-all duration-300 hover:shadow-md">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="p-3 bg-primary/10 rounded-2xl mb-4">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Mobile</h3>
            <p className="text-sm text-muted-foreground">Desenvolvimento de aplicativos híbridos e nativos.</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-border/50 shadow-sm transition-all duration-300 hover:shadow-md">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="p-3 bg-primary/10 rounded-2xl mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Diploma</h3>
            <p className="text-sm text-muted-foreground">{courseInfo.type} - {courseInfo.duration} de formação.</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 bg-card rounded-2xl p-8 border shadow-sm">
        <h2 className="text-2xl font-bold mb-4 font-display">Como usar este guia?</h2>
        <p className="text-muted-foreground mb-6">
          Navegue pelo menu lateral para acessar informações cruciais sobre a matriz curricular do curso, 
          entender as burocracias acadêmicas (dispensas, horas complementares) e acessar links úteis para 
          seus estudos. Este projeto é mantido por alunos, para alunos.
        </p>
      </div>
    </PageTransition>
  );
}
