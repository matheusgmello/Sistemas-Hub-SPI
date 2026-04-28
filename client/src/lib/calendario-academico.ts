import { compareAsc, isAfter, isWithinInterval, parseISO, startOfDay } from "date-fns";

export type AcademicCalendarEvent = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  category: "matricula" | "ajuste" | "trancamento" | "aulas" | "processo";
  href: string;
  source: string;
};

export const academicCalendarEvents: AcademicCalendarEvent[] = [
  {
    id: "matricula-2026-1",
    title: "Solicitacao de matricula via Portal Estudantil",
    description: "Periodo oficial para veteranos da graduacao solicitarem matricula no 1o semestre letivo de 2026.",
    startDate: "2026-02-09",
    endDate: "2026-02-12",
    category: "matricula",
    href: "https://www.ufsm.br/calendario/2026-71069",
    source: "Calendario Academico UFSM 2026",
  },
  {
    id: "trancamento-total-2026-1",
    title: "Trancamento total do semestre",
    description: "Periodo para solicitar trancamento total do semestre via Portal Estudantil.",
    startDate: "2026-02-09",
    endDate: "2026-04-02",
    category: "trancamento",
    href: "https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet/2026/02/05/orientacoes-sobre-matriculas-para-o-1o-semestre-de-2026",
    source: "Orientacoes de matricula 2026/1 do SPI",
  },
  {
    id: "autodidatismo-2026-1",
    title: "Dispensa de disciplina por autodidatismo",
    description: "Periodo para abrir processo de dispensa por autodidatismo no Portal de Documentos (PEN-SIE).",
    startDate: "2026-02-09",
    endDate: "2026-04-02",
    category: "processo",
    href: "https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet/2026/02/05/orientacoes-sobre-matriculas-para-o-1o-semestre-de-2026",
    source: "Orientacoes de matricula 2026/1 do SPI",
  },
  {
    id: "ajuste-matricula-fevereiro-2026-1",
    title: "Primeiro ajuste de matricula",
    description: "Janela inicial para incluir ou excluir disciplinas, se necessario.",
    startDate: "2026-02-20",
    endDate: "2026-02-23",
    category: "ajuste",
    href: "https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet/2026/02/05/orientacoes-sobre-matriculas-para-o-1o-semestre-de-2026",
    source: "Orientacoes de matricula 2026/1 do SPI",
  },
  {
    id: "inicio-aulas-2026-1",
    title: "Inicio das aulas",
    description: "Inicio das aulas e demais atividades academicas do semestre.",
    startDate: "2026-03-02",
    category: "aulas",
    href: "https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet/2026/02/05/orientacoes-sobre-matriculas-para-o-1o-semestre-de-2026",
    source: "Orientacoes de matricula 2026/1 do SPI",
  },
  {
    id: "ajuste-matricula-marco-2026-1",
    title: "Segundo ajuste de matricula",
    description: "Nova janela de ajuste para incluir ou excluir disciplinas no inicio do semestre.",
    startDate: "2026-03-02",
    endDate: "2026-03-06",
    category: "ajuste",
    href: "https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet/2026/02/05/orientacoes-sobre-matriculas-para-o-1o-semestre-de-2026",
    source: "Orientacoes de matricula 2026/1 do SPI",
  },
  {
    id: "matricula-extracurricular-2026-1",
    title: "Matricula em disciplinas ofertadas por outros cursos",
    description: "Periodo para solicitar matricula extracurricular pelo Portal Estudantil.",
    startDate: "2026-03-09",
    endDate: "2026-03-12",
    category: "matricula",
    href: "https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet/2026/02/05/orientacoes-sobre-matriculas-para-o-1o-semestre-de-2026",
    source: "Orientacoes de matricula 2026/1 do SPI",
  },
];

export const academicCalendarCategoryLabels: Record<AcademicCalendarEvent["category"], string> = {
  matricula: "Matricula",
  ajuste: "Ajuste",
  trancamento: "Trancamento",
  aulas: "Aulas",
  processo: "Processos",
};

export function getSortedAcademicCalendarEvents() {
  return [...academicCalendarEvents].sort((a, b) =>
    compareAsc(parseISO(a.startDate), parseISO(b.startDate)),
  );
}

export function getUpcomingAcademicCalendarEvents(referenceDate = new Date()) {
  const today = startOfDay(referenceDate);

  return getSortedAcademicCalendarEvents().filter((event) => {
    const start = parseISO(event.startDate);
    const end = parseISO(event.endDate ?? event.startDate);

    return isAfter(start, today) || isWithinInterval(today, { start, end });
  });
}
