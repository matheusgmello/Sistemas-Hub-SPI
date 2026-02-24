import { PageTransition } from "@/components/page-transition";
import { subjects } from "@/lib/mock-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Subjects() {
  const periods = Array.from(new Set(subjects.map((s) => s.period))).sort();

  return (
    <PageTransition>
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-display mb-2">Matérias do Curso</h1>
        <p className="text-muted-foreground">A matriz curricular completa dividida por períodos.</p>
      </div>

      <div className="space-y-12">
        {periods.map((period) => (
          <div key={period} className="space-y-4">
            <h2 className="text-xl font-bold font-display border-b pb-2">
              {period}º Período
            </h2>
            <div className="rounded-xl border bg-card overflow-hidden shadow-sm">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[300px]">Disciplina</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Carga Horária</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subjects
                    .filter((s) => s.period === period)
                    .map((subject) => (
                      <TableRow key={subject.id} className="hover:bg-muted/30 transition-colors">
                        <TableCell className="font-medium">{subject.name}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={subject.type === "Obrigatória" ? "default" : "secondary"}
                            className="font-normal no-default-hover-elevate"
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
        ))}
      </div>
    </PageTransition>
  );
}
