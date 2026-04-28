import { PageTransition } from "@/components/page-transition";
import { subjects } from "@/lib/dados-hub";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BookOpenText } from "lucide-react";

export default function Subjects() {
  const periods = Array.from(new Set(subjects.map((s) => s.period))).sort();

  return (
    <PageTransition className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-800/80" />
        <div className="hero-grid absolute inset-y-0 right-0 hidden w-[36%] opacity-60 lg:block" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
              <BookOpenText className="h-3.5 w-3.5" />
              matriz curricular
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl font-display">
              Matérias do Curso
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              A grade completa do curso organizada por períodos, com leitura mais clara para quem quer se localizar rápido na formação.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        {periods.map((period) => {
          const subjectsInPeriod = subjects.filter((subject) => subject.period === period);

          return (
            <div key={period} className="space-y-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    bloco curricular
                  </p>
                  <h2 className="mt-2 text-2xl font-bold font-display tracking-tight">
                    {period}º Semestre
                  </h2>
                </div>
                <Badge variant="outline" className="w-fit rounded-full px-3 py-1 text-xs">
                  {subjectsInPeriod.length} disciplina(s)
                </Badge>
              </div>

              <div className="glass-card overflow-hidden rounded-[1.5rem] border border-border/60 shadow-sm">
                <Table>
                  <TableHeader className="bg-primary/[0.06]">
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="w-[360px] font-display text-[13px] uppercase tracking-[0.12em] text-primary">
                        Disciplina
                      </TableHead>
                      <TableHead className="font-display text-[13px] uppercase tracking-[0.12em] text-primary">
                        Tipo
                      </TableHead>
                      <TableHead className="font-display text-[13px] uppercase tracking-[0.12em] text-primary">
                        Carga Horária
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subjectsInPeriod.map((subject) => (
                      <TableRow
                        key={subject.id}
                        className="hover:bg-primary/[0.03] transition-colors"
                      >
                        <TableCell className="font-medium leading-6">{subject.name}</TableCell>
                        <TableCell>
                          <Badge
                            variant={subject.type === "Obrigatória" ? "default" : "secondary"}
                            className="font-normal no-default-hover-elevate rounded-full px-3 py-1"
                          >
                            {subject.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{subject.workload}h</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          );
        })}
      </section>
    </PageTransition>
  );
}

