import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { careerPaths } from "@/lib/mock-data";
import {
  Monitor,
  Server,
  Layers,
  Smartphone,
  BarChart3,
  CheckCircle2,
  Zap,
  TrendingUp,
  Brain,
  Cloud,
  Shield,
  Palette,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Box: <Box className="w-6 h-6" />,
};

export default function CareerPaths() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-display mb-2">
            Trilhas de Carreira em TI
          </h1>
          <p className="text-muted-foreground">
            Explore as diferentes áreas de atuação em Tecnologia da Informação e descubra qual caminho faz mais sentido para você. Cada trilha inclui responsabilidades, habilidades essenciais e perspectivas salariais.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Dica:</strong> Clique em qualquer trilha para explorar detalhes. Lembre-se que caminhos em tecnologia são fluidos — você pode combinar conhecimentos de várias áreas!
          </p>
        </div>

        <div className="grid gap-4">
          {careerPaths.map((path) => (
            <div key={path.id}>
              <Card className="border-border/50 cursor-pointer hover-elevate transition-all overflow-hidden">
                <button
                  onClick={() => toggleExpand(path.id)}
                  className="w-full text-left"
                  data-testid={`button-expand-${path.id}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="text-primary mt-1 flex-shrink-0">
                          {iconMap[path.icon]}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1">
                            {path.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {path.description}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                          expandedId === path.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                </button>

                {expandedId === path.id && (
                  <CardContent className="space-y-6 border-t border-border/30 pt-6">
                    {/* Salary Range */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="text-primary">💰</span> Faixa Salarial Estimada
                      </h4>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {path.salaryRange}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold mb-3">Responsabilidades Principais</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {path.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                            data-testid={`item-responsibility-${path.id}-${idx}`}
                          >
                            <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold mb-3">Habilidades & Tecnologias</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant={
                              skill.level === "Essencial"
                                ? "default"
                                : skill.level === "Importante"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                            data-testid={`badge-skill-${path.id}-${idx}`}
                          >
                            <span>{skill.name}</span>
                            <span className="ml-1 opacity-70">({skill.level})</span>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Career Progression */}
                    <div>
                      <h4 className="font-semibold mb-3">Progressão de Carreira</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.careerProgression.map((level, idx) => (
                          <div
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            data-testid={`level-progression-${path.id}-${idx}`}
                          >
                            {level}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground border-none shadow-xl">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">Pronto para escolher seu caminho?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Lembre-se: não há uma trilha "certa" ou "errada". O mercado de TI valoriza profissionais versáteis. Comece com uma área que te interessa e continue aprendendo!
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="font-bold hover-elevate"
                asChild
              >
                <a href="/materiais">Explore Materiais de Estudo</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
