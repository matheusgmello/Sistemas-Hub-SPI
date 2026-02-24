import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { collegiate } from "@/lib/mock-data";
import { Gavel, Mail, CheckCircle2 } from "lucide-react";

export default function Collegiate() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Colegiado do Curso</h1>
          <p className="text-muted-foreground text-lg">
            Conheça o órgão responsável pelas decisões acadêmicas do curso de Sistemas para Internet.
          </p>
        </div>

        <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gavel className="w-5 h-5 text-primary" />
              O que é o Colegiado?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {collegiate.description}
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Principais Funções
            </h2>
            <div className="space-y-3">
              {collegiate.functions.map((func, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-secondary/50 border border-border/40"
                >
                  <p className="text-sm font-medium">{func}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Membros Atuais</h2>
            <div className="space-y-3">
              {collegiate.members.map((member, index) => (
                <Card key={index} className="border-border/40 hover-elevate transition-all">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold">{member.name}</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{member.role}</p>
                      </div>
                      <a href={`mailto:${member.email}`} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
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
