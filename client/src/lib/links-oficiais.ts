export type OfficialLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: "sistemas" | "academico" | "curso" | "suporte";
  keywords: string[];
};

export const officialLinks: OfficialLink[] = [
  {
    id: "portal-estudantil",
    title: "Portal Estudantil",
    description: "Acesso a matricula, trancamento, relatorios e servicos academicos.",
    href: "https://portal.ufsm.br/estudantil",
    category: "sistemas",
    keywords: ["portal", "matricula", "atestado", "relatorio", "estudantil"],
  },
  {
    id: "calendario-ufsm-2026",
    title: "Calendario Academico UFSM 2026",
    description: "Calendario oficial da UFSM com prazos, periodos letivos e datas importantes.",
    href: "https://www.ufsm.br/calendario/2026-71069",
    category: "academico",
    keywords: ["calendario", "prazos", "datas", "ufsm", "2026"],
  },
  {
    id: "pagina-estudantes-ufsm",
    title: "Pagina de Estudantes UFSM",
    description: "Central de utilidades com portal estudantil, calendario, biblioteca e guias.",
    href: "https://www.ufsm.br/estudantes/",
    category: "suporte",
    keywords: ["estudantes", "biblioteca", "guia", "utilidades", "ufsm"],
  },
  {
    id: "alunos-politecnico",
    title: "Alunos do Politecnico",
    description: "Pagina institucional com informacoes e utilidades para estudantes do Politecnico.",
    href: "https://www.ufsm.br/unidades-universitarias/politecnico/alunos",
    category: "suporte",
    keywords: ["politecnico", "alunos", "utilidades", "horarios", "moodle"],
  },
  {
    id: "curso-spi",
    title: "Pagina Oficial do Curso SPI",
    description: "Pagina principal do curso com noticias, estrutura, documentos e orientacoes.",
    href: "https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet",
    category: "curso",
    keywords: ["curso", "spi", "sistemas para internet", "noticias", "oficial"],
  },
  {
    id: "contato-spi",
    title: "Contato do Curso SPI",
    description: "Coordenacao, secretaria integrada, telefones, sala e email oficial do curso.",
    href: "https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet/contato",
    category: "curso",
    keywords: ["contato", "coordenacao", "secretaria", "whatsapp", "email"],
  },
  {
    id: "matricula-spi",
    title: "Orientacoes de Matricula do Curso",
    description: "Informacoes oficiais sobre matricula, horarios, pre-requisitos e ajustes.",
    href: "https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet/matricula",
    category: "curso",
    keywords: ["matricula", "horarios", "ajuste", "extracurricular", "spi"],
  },
  {
    id: "pre-requisitos-spi",
    title: "Pre-requisitos Oficiais do Curso",
    description: "Lista oficial de pre-requisitos no site institucional do curso.",
    href: "https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet/pre-requisitos",
    category: "curso",
    keywords: ["pre-requisitos", "pre requisitos", "matriculas", "disciplinas"],
  },
  {
    id: "comunidade-academica-prograd",
    title: "Comunidade Academica PROGRAD",
    description: "Atalhos oficiais para calendario, disciplinas ofertadas, plano de ensino e mais.",
    href: "https://www.ufsm.br/pro-reitorias/prograd/comunidade-academica",
    category: "academico",
    keywords: ["prograd", "plano de ensino", "disciplinas ofertadas", "academico"],
  },
  {
    id: "orientacoes-matricula-2026-1",
    title: "Orientacoes de Matricula 2026/1 do SPI",
    description: "Datas e orientacoes publicadas oficialmente para matricula no primeiro semestre de 2026.",
    href: "https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet/2026/02/05/orientacoes-sobre-matriculas-para-o-1o-semestre-de-2026",
    category: "academico",
    keywords: ["2026", "matricula", "spi", "ajuste", "trancamento", "extracurricular"],
  },
];

export const officialLinkCategoryLabels: Record<OfficialLink["category"], string> = {
  sistemas: "Sistemas academicos",
  academico: "Rotinas e prazos",
  curso: "Curso e secretaria",
  suporte: "Apoio ao estudante",
};
