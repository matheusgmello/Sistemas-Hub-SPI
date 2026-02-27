import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { contributors } from "@/lib/mock-data";
import { Heart, Github, ExternalLink, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Contributors() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-2">
            <Heart className="w-8 h-8 fill-current" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary font-display">Contribuidores</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Este projeto é fruto do esforço coletivo de alunos e entusiastas que acreditam na democratização da informação acadêmica.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributors.map((contributor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border/40 hover:border-primary/40 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {contributor.github && (
                    <a href={contributor.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {contributor.linkedin && (
                    <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-20 h-20 border-2 border-primary/20 p-1">
                      <AvatarImage src={contributor.image} alt={contributor.name} className="rounded-full object-cover" />
                      <AvatarFallback className="bg-primary/5 text-primary text-xl font-bold">
                        {contributor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl font-bold">{contributor.name}</CardTitle>
                  <p className="text-xs font-medium text-primary uppercase tracking-widest">{contributor.role}</p>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground italic">
                    "{contributor.contribution}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="bg-primary text-primary-foreground border-none shadow-xl">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-2xl font-bold">Quer ver seu nome aqui?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">
              Contribua com conteúdo, correções ou melhorias técnicas. O Hub é de todos nós!
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="/contribuir" 
                className="px-6 py-3 rounded-full bg-white text-primary font-bold hover:bg-opacity-90 transition-all flex items-center gap-2"
              >
                Saiba como contribuir
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
