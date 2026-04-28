import { subjects, prerequisites, faqs, dcgs } from "@/lib/dados-hub";
import { subjectStudyGuidesById, studyTracks } from "@/lib/guias-estudo";
import { officialLinks } from "@/lib/links-oficiais";
import { academicCalendarEvents } from "@/lib/calendario-academico";

export type SearchIndexItem = {
  id: string;
  title: string;
  description: string;
  type:
    | "Pagina"
    | "Materia"
    | "Pre-requisito"
    | "FAQ"
    | "Material"
    | "DCG"
    | "Link oficial"
    | "Calendario";
  href: string;
  keywords: string[];
  external?: boolean;
};

const pageItems: SearchIndexItem[] = [
  {
    id: "page-home",
    title: "Visao Geral",
    description: "Pagina inicial com panorama do curso e atalhos do hub.",
    type: "Pagina",
    href: "/",
    keywords: ["home", "inicio", "visao geral", "curso"],
  },
  {
    id: "page-subjects",
    title: "Materias do Curso",
    description: "Grade curricular organizada por semestre.",
    type: "Pagina",
    href: "/materias",
    keywords: ["materias", "grade", "curriculo", "disciplinas"],
  },
  {
    id: "page-prerequisites",
    title: "Pre-requisitos",
    description: "Encadeamento entre disciplinas e liberacoes.",
    type: "Pagina",
    href: "/pre-requisitos",
    keywords: ["pre-requisitos", "pre requisitos", "libera", "trava"],
  },
  {
    id: "page-waivers",
    title: "Como dispensar Materias",
    description: "Orientacoes sobre aproveitamento e dispensa.",
    type: "Pagina",
    href: "/dispensas",
    keywords: ["dispensa", "aproveitamento", "autodidatismo"],
  },
  {
    id: "page-extracurriculars",
    title: "Registro de ACG/Extensao",
    description: "Informacoes sobre ACG, DCG e extensao.",
    type: "Pagina",
    href: "/extracurriculares",
    keywords: ["acg", "extensao", "dcg", "registro"],
  },
  {
    id: "page-dcgs",
    title: "DCGs",
    description: "Disciplinas complementares de graduacao.",
    type: "Pagina",
    href: "/dcgs",
    keywords: ["dcg", "disciplinas complementares"],
  },
  {
    id: "page-career-paths",
    title: "Trilhas de Carreira",
    description: "Areas de atuacao e caminhos em tecnologia.",
    type: "Pagina",
    href: "/trilhas-carreira",
    keywords: ["carreira", "frontend", "backend", "dados", "mobile"],
  },
  {
    id: "page-coordination",
    title: "Coordenacao",
    description: "Contatos e atendimento da coordenacao.",
    type: "Pagina",
    href: "/coordenacao",
    keywords: ["coordenacao", "contato", "secretaria"],
  },
  {
    id: "page-student-union",
    title: "Diretorio Academico",
    description: "Informacoes sobre o DASPI.",
    type: "Pagina",
    href: "/daspi",
    keywords: ["daspi", "diretorio academico", "estudantes"],
  },
  {
    id: "page-study-materials",
    title: "Material para Estudo",
    description: "Guias por disciplina, trilhas base e links curados.",
    type: "Pagina",
    href: "/materiais",
    keywords: ["estudo", "materiais", "guias", "recursos"],
  },
  {
    id: "page-faq",
    title: "Duvidas Frequentes",
    description: "Perguntas comuns sobre o curso.",
    type: "Pagina",
    href: "/faq",
    keywords: ["faq", "duvidas", "perguntas"],
  },
  {
    id: "page-collegiate",
    title: "Colegiado",
    description: "Estrutura e membros do colegiado do curso.",
    type: "Pagina",
    href: "/colegiado",
    keywords: ["colegiado", "membros", "funcoes"],
  },
  {
    id: "page-contributors",
    title: "Contribuidores",
    description: "Pessoas que ajudaram a construir o projeto.",
    type: "Pagina",
    href: "/contribuidores",
    keywords: ["contribuidores", "colaboradores"],
  },
  {
    id: "page-contribute",
    title: "Como contribuir",
    description: "Guia para abrir issues e pull requests.",
    type: "Pagina",
    href: "/contribuir",
    keywords: ["contribuir", "pull request", "issue"],
  },
  {
    id: "page-official-resources",
    title: "Links Oficiais e Calendario",
    description: "Atalhos oficiais da UFSM e principais datas do semestre.",
    type: "Pagina",
    href: "/utilidades-oficiais",
    keywords: ["links oficiais", "calendario", "portal estudantil", "ufsm"],
  },
];

const subjectItems: SearchIndexItem[] = subjects.map((subject) => ({
  id: `subject-${subject.id}`,
  title: subject.name,
  description: `${subject.period}o semestre • ${subject.workload}h • ${subject.type}`,
  type: "Materia",
  href: "/materias",
  keywords: [subject.type, `semestre ${subject.period}`, subject.prereq],
}));

const prerequisiteItems: SearchIndexItem[] = prerequisites.map((item, index) => ({
  id: `prerequisite-${index}`,
  title: item.subject,
  description: `Libera: ${item.releases.join(", ")}`,
  type: "Pre-requisito",
  href: "/pre-requisitos",
  keywords: item.releases,
}));

const faqItems: SearchIndexItem[] = faqs.map((faq, index) => ({
  id: `faq-${index}`,
  title: faq.question,
  description: faq.answer,
  type: "FAQ",
  href: "/faq",
  keywords: faq.answer.split(" ").slice(0, 20),
}));

const studyTrackItems: SearchIndexItem[] = studyTracks.map((track, index) => ({
  id: `study-track-${index}`,
  title: track.title,
  description: track.description,
  type: "Material",
  href: "/materiais",
  keywords: track.resources.map((resource) => resource.title),
}));

const studyGuideItems: SearchIndexItem[] = subjects.flatMap((subject) => {
  const guide = subjectStudyGuidesById[subject.id];

  if (!guide) {
    return [];
  }

  return guide.resources.map((resource, index) => ({
    id: `study-resource-${subject.id}-${index}`,
    title: `${subject.name}: ${resource.title}`,
    description: resource.description,
    type: "Material" as const,
    href: resource.link,
    external: true,
    keywords: [...guide.topics, guide.label, subject.name],
  }));
});

const dcgItems: SearchIndexItem[] = [
  ...dcgs.internal.map((item, index) => ({
    id: `dcg-internal-${index}`,
    title: item.name,
    description: `DCG ofertada em SPI • ${item.workload}h`,
    type: "DCG" as const,
    href: "/dcgs",
    keywords: ["dcg", "spi", String(item.workload)],
  })),
  ...dcgs.external.flatMap((group, groupIndex) =>
    group.items.map((item, itemIndex) => ({
      id: `dcg-external-${groupIndex}-${itemIndex}`,
      title: item.name,
      description: `${group.category} • ${item.provider} • ${item.workload}h`,
      type: "DCG" as const,
      href: "/dcgs",
      keywords: ["dcg", group.category, item.provider],
    })),
  ),
];

const officialLinkItems: SearchIndexItem[] = officialLinks.map((link) => ({
  id: `official-link-${link.id}`,
  title: link.title,
  description: link.description,
  type: "Link oficial",
  href: link.href,
  external: true,
  keywords: link.keywords,
}));

const calendarItems: SearchIndexItem[] = academicCalendarEvents.map((event) => ({
  id: `calendar-${event.id}`,
  title: event.title,
  description: event.description,
  type: "Calendario",
  href: event.href,
  external: true,
  keywords: [event.category, event.source, event.startDate, event.endDate ?? event.startDate],
}));

export const globalSearchIndex: SearchIndexItem[] = [
  ...pageItems,
  ...subjectItems,
  ...prerequisiteItems,
  ...faqItems,
  ...studyTrackItems,
  ...studyGuideItems,
  ...dcgItems,
  ...officialLinkItems,
  ...calendarItems,
];

