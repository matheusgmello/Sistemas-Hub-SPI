// Shared mock data to populate our static pages

export const courseInfo = {
  name: "Sistemas para Internet",
  abbreviation: "TSI",
  description: "O curso superior de Tecnologia em Sistemas para Internet tem como objetivo formar profissionais capacitados para o desenvolvimento de aplicações web, mobile e integração de sistemas. O foco é prático e voltado para as necessidades reais do mercado de tecnologia.",
  duration: "6 Semestres (3 anos)",
  type: "Tecnólogo",
};

export const subjects = [
  // 1 Período
  { id: "1", period: 1, name: "Algoritmos e Lógica de Programação", type: "Obrigatória", workload: 90, prereq: "-" },
  { id: "2", period: 1, name: "Computadores e Sociedade", type: "Obrigatória", workload: 60, prereq: "-" },
  { id: "3", period: 1, name: "Construção de Sites", type: "Obrigatória", workload: 60, prereq: "-" },
  { id: "4", period: 1, name: "Fundamentos da Computação", type: "Obrigatória", workload: 60, prereq: "-" },
  { id: "5", period: 1, name: "Lógica Matemática", type: "Obrigatória", workload: 60, prereq: "-" },
  // 2 Período
  { id: "6", period: 2, name: "Banco de Dados I", type: "Obrigatória", workload: 60, prereq: "-" },
  { id: "7", period: 2, name: "Estruturas de Dados", type: "Obrigatória", workload: 90, prereq: "Algoritmos e Lógica de Programação" },
  { id: "8", period: 2, name: "Organização e Arquitetura de Computadores", type: "Obrigatória", workload: 60, prereq: "-" },
  { id: "9", period: 2, name: "Programação Orientada a Objetos", type: "Obrigatória", workload: 60, prereq: "Algoritmos e Lógica de Programação" },
  { id: "10", period: 2, name: "Programação Web", type: "Obrigatória", workload: 60, prereq: "Construção de Sites" },
  // 3 Período
  { id: "11", period: 3, name: "Banco de Dados II", type: "Obrigatória", workload: 60, prereq: "Banco de Dados I" },
  { id: "12", period: 3, name: "Design de Interação", type: "Obrigatória", workload: 60, prereq: "-" },
  { id: "13", period: 3, name: "Engenharia de Software I", type: "Obrigatória", workload: 60, prereq: "-" },
  { id: "14", period: 3, name: "Programação Orientada a Objetos para Web I", type: "Obrigatória", workload: 60, prereq: "Programação Orientada a Objetos" },
  { id: "15", period: 3, name: "Sistemas Operacionais", type: "Obrigatória", workload: 60, prereq: "Organização e Arquitetura de Computadores" },
  // 4 Período
  { id: "16", period: 4, name: "Empreendedorismo e Inovação", type: "Obrigatória", workload: 60, prereq: "-" },
  { id: "17", period: 4, name: "Engenharia de Software II", type: "Obrigatória", workload: 60, prereq: "Engenharia de Software I" },
  { id: "18", period: 4, name: "Estatística", type: "Obrigatória", workload: 60, prereq: "-" },
  { id: "19", period: 4, name: "Programação Orientada a Objetos para Web II", type: "Obrigatória", workload: 60, prereq: "Programação Orientada a Objetos para Web I" },
  { id: "20", period: 4, name: "Redes de Computadores", type: "Obrigatória", workload: 60, prereq: "-" },
  // 5 Período
  { id: "21", period: 5, name: "Padrões de Projeto", type: "Obrigatória", workload: 60, prereq: "Programação Orientada a Objetos para Web II" },
  { id: "22", period: 5, name: "Programação para Dispositivos Móveis", type: "Obrigatória", workload: 60, prereq: "Programação Orientada a Objetos para Web II" },
  { id: "23", period: 5, name: "Projeto Integrador", type: "Obrigatória", workload: 180, prereq: "-" },
  { id: "24", period: 5, name: "Trabalho de Conclusão de Curso I", type: "Obrigatória", workload: 0, prereq: "-" },
  // 6 Período
  { id: "25", period: 6, name: "Gerência de Projetos", type: "Obrigatória", workload: 60, prereq: "Engenharia de Software II" },
  { id: "26", period: 6, name: "Tópicos Avançados em Programação Web", type: "Obrigatória", workload: 60, prereq: "-" },
  { id: "27", period: 6, name: "Trabalho de Conclusão de Curso II", type: "Obrigatória", workload: 0, prereq: "Trabalho de Conclusão de Curso I" },
];

export const waivers = [
  {
    title: "Aproveitamento de Estudos (Disciplinas Cursadas)",
    content: "Se você já cursou alguma disciplina equivalente em outra instituição de ensino superior ou em outro curso da mesma instituição, você pode solicitar a dispensa. É necessário apresentar o Histórico Escolar oficial e as Ementas das disciplinas cursadas. A ementa e a carga horária devem corresponder a pelo menos 75% da disciplina que deseja dispensar."
  },
  {
    title: "Certificação de Conhecimentos (Prova de Proficiência)",
    content: "Alunos com notório saber em determinada área podem solicitar uma prova de proficiência. Se aprovado com nota superior à mínima exigida pelo regulamento da instituição, o aluno é dispensado de cursar a disciplina presencialmente."
  },
  {
    title: "Prazos e Procedimentos",
    content: "Os pedidos de dispensa devem ser realizados obrigatoriamente no início de cada semestre letivo, conforme o calendário acadêmico. O processo é feito via portal do aluno, na aba 'Requerimentos > Aproveitamento de Disciplina'."
  }
];

export const extracurriculars = [
  {
    type: "ACG (Atividades Complementares de Graduação)",
    description: "Atividades que complementam a formação do aluno, como palestras, workshops, cursos online extracurriculares (ex: Alura, Udemy) e participação em eventos de tecnologia. Carga horária total exigida: 120h."
  },
  {
    type: "DCG (Disciplinas Complementares de Graduação)",
    description: "Disciplinas optativas ou de outros cursos que o aluno escolhe cursar para enriquecer seu currículo. Geralmente não são obrigatórias na grade padrão, mas somam pontos na formação."
  },
  {
    type: "ACEX / DCEX (Extensão)",
    description: "Atividades de extensão universitária que conectam o curso com a comunidade. Participação em projetos sociais, desenvolvimento de software voluntário para ONGs, ou projetos de pesquisa aplicada."
  }
];

export const faqs = [
  {
    question: "O curso é focado mais em Frontend ou Backend?",
    answer: "O curso é Fullstack. Você verá tanto Frontend (React, Vue, HTML/CSS) quanto Backend (Node.js, Python, Java, PHP), além de Banco de Dados e DevOps."
  },
  {
    question: "Preciso ter computador potente para o curso?",
    answer: "Não necessariamente no início. Um computador com 8GB de RAM e um SSD já é suficiente para 90% das disciplinas. A instituição também possui laboratórios equipados."
  },
  {
    question: "Como funciona o estágio obrigatório?",
    answer: "O estágio geralmente é exigido a partir do 4º período. Você pode estagiar em empresas parceiras ou buscar vagas no mercado. Alunos que já trabalham na área de TI podem solicitar a validação dessas horas como estágio."
  },
  {
    question: "Posso fazer intercâmbio durante o curso?",
    answer: "Sim! A instituição possui programas de mobilidade acadêmica internacional. Fique atento aos editais lançados pela coordenação."
  }
];

export const studyMaterials = [
  { title: "MDN Web Docs", description: "A documentação oficial e mais completa sobre tecnologias web (HTML, CSS, JavaScript).", link: "https://developer.mozilla.org/" },
  { title: "Roadmap.sh", description: "Guias de estudo interativos e trilhas de aprendizado para desenvolvedores (Frontend, Backend, DevOps).", link: "https://roadmap.sh/" },
  { title: "FreeCodeCamp", description: "Plataforma gratuita com milhares de horas de exercícios práticos de programação e certificações.", link: "https://www.freecodecamp.org/" },
  { title: "Repositório do Curso", description: "GitHub não oficial mantido pelos alunos com resumos, provas antigas e projetos.", link: "#" },
];

export const collegiate = {
  description: "O Colegiado de Curso é o órgão responsável pela coordenação didática do curso, decidindo sobre questões acadêmicas, pedagógicas e administrativas específicas do curso de Sistemas para Internet.",
  members: [
    { name: "Prof. Dr. Coordenador Exemplo", role: "Presidente do Colegiado", email: "coordenador@exemplo.edu.br" },
    { name: "Prof. Me. Docente Um", role: "Representante Docente", email: "docente1@exemplo.edu.br" },
    { name: "Prof. Esp. Docente Dois", role: "Representante Docente", email: "docente2@exemplo.edu.br" },
    { name: "Aluno Exemplo", role: "Representante Discente", email: "discente@exemplo.edu.br" },
  ],
  functions: [
    "Deliberar sobre o projeto pedagógico do curso.",
    "Decidir sobre pedidos de aproveitamento de estudos e dispensas.",
    "Analisar e aprovar planos de ensino das disciplinas.",
    "Acompanhar o desempenho acadêmico geral do curso.",
  ]
};

export const contributors = [
  { name: "Desenvolvedor Principal", role: "Idealizador e Desenvolvedor", github: "https://github.com", contribution: "Arquitetura e desenvolvimento base." },
  { name: "Colaborador Design", role: "UI/UX", github: "https://github.com", contribution: "Identidade visual e componentes." },
  { name: "Time de Conteúdo", role: "Pesquisa", github: "#", contribution: "Coleta e organização das informações do curso." },
];
