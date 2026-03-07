// Shared mock data to populate our static pages

export const courseInfo = {
  name: "Sistemas para Internet",
  abbreviation: "SPI",
  description:
    "O Hub de Conhecimento SPI (Sistemas para Internet) é uma iniciativa comunitária dos alunos para centralizar informações, materiais e guias essenciais para os estudantes do curso no Politécnico da UFSM.",
  duration: "6 Semestres (3 anos)",
  type: "Tecnólogo",
};

export const subjects = [
  // 1 Período
  {
    id: "1",
    period: 1,
    name: "Algoritmos e Lógica de Programação",
    type: "Obrigatória",
    workload: 90,
    prereq: "-",
  },
  {
    id: "2",
    period: 1,
    name: "Computadores e Sociedade",
    type: "Obrigatória",
    workload: 60,
    prereq: "-",
  },
  {
    id: "3",
    period: 1,
    name: "Construção de Sites",
    type: "Obrigatória",
    workload: 60,
    prereq: "-",
  },
  {
    id: "4",
    period: 1,
    name: "Fundamentos da Computação",
    type: "Obrigatória",
    workload: 60,
    prereq: "-",
  },
  {
    id: "5",
    period: 1,
    name: "Lógica Matemática",
    type: "Obrigatória",
    workload: 60,
    prereq: "-",
  },
  // 2 Período
  {
    id: "6",
    period: 2,
    name: "Banco de Dados I",
    type: "Obrigatória",
    workload: 60,
    prereq: "-",
  },
  {
    id: "7",
    period: 2,
    name: "Estruturas de Dados",
    type: "Obrigatória",
    workload: 90,
    prereq: "Algoritmos e Lógica de Programação",
  },
  {
    id: "8",
    period: 2,
    name: "Organização e Arquitetura de Computadores",
    type: "Obrigatória",
    workload: 60,
    prereq: "-",
  },
  {
    id: "9",
    period: 2,
    name: "Programação Orientada a Objetos",
    type: "Obrigatória",
    workload: 60,
    prereq: "Algoritmos e Lógica de Programação",
  },
  {
    id: "10",
    period: 2,
    name: "Programação Web",
    type: "Obrigatória",
    workload: 60,
    prereq: "Construção de Sites",
  },
  // 3 Período
  {
    id: "11",
    period: 3,
    name: "Banco de Dados II",
    type: "Obrigatória",
    workload: 60,
    prereq: "Banco de Dados I",
  },
  {
    id: "12",
    period: 3,
    name: "Design de Interação",
    type: "Obrigatória",
    workload: 60,
    prereq: "-",
  },
  {
    id: "13",
    period: 3,
    name: "Engenharia de Software I",
    type: "Obrigatória",
    workload: 60,
    prereq: "-",
  },
  {
    id: "14",
    period: 3,
    name: "Programação Orientada a Objetos para Web I",
    type: "Obrigatória",
    workload: 60,
    prereq: "Programação Orientada a Objetos, Banco de Dados I",
  },
  {
    id: "15",
    period: 3,
    name: "Sistemas Operacionais",
    type: "Obrigatória",
    workload: 60,
    prereq: "Organização e Arquitetura de Computadores",
  },
  // 4 Período
  {
    id: "16",
    period: 4,
    name: "Empreendedorismo e Inovação",
    type: "Obrigatória",
    workload: 60,
    prereq: "-",
  },
  {
    id: "17",
    period: 4,
    name: "Engenharia de Software II",
    type: "Obrigatória",
    workload: 60,
    prereq: "Engenharia de Software I",
  },
  {
    id: "18",
    period: 4,
    name: "Estatística",
    type: "Obrigatória",
    workload: 60,
    prereq: "-",
  },
  {
    id: "19",
    period: 4,
    name: "Programação Orientada a Objetos para Web II",
    type: "Obrigatória",
    workload: 60,
    prereq: "Programação Orientada a Objetos para Web I",
  },
  {
    id: "20",
    period: 4,
    name: "Redes de Computadores",
    type: "Obrigatória",
    workload: 60,
    prereq: "-",
  },
  // 5 Período
  {
    id: "21",
    period: 5,
    name: "Padrões de Projeto",
    type: "Obrigatória",
    workload: 60,
    prereq: "Programação Orientada a Objetos",
  },
  {
    id: "22",
    period: 5,
    name: "Programação para Dispositivos Móveis",
    type: "Obrigatória",
    workload: 60,
    prereq: "Programação Orientada a Objetos para Web II",
  },
  {
    id: "23",
    period: 5,
    name: "Projeto Integrador",
    type: "Obrigatória",
    workload: 180,
    prereq: "Engenharia de Software I",
  },
  {
    id: "24",
    period: 5,
    name: "Trabalho de Conclusão de Curso I",
    type: "Obrigatória",
    workload: 0,
    prereq: "-",
  },
  // 6 Período
  {
    id: "25",
    period: 6,
    name: "Gerência de Projetos",
    type: "Obrigatória",
    workload: 60,
    prereq: "Engenharia de Software II",
  },
  {
    id: "26",
    period: 6,
    name: "Tópicos Avançados em Programação Web",
    type: "Obrigatória",
    workload: 60,
    prereq: "-",
  },
  {
    id: "27",
    period: 6,
    name: "Trabalho de Conclusão de Curso II",
    type: "Obrigatória",
    workload: 0,
    prereq: "Trabalho de Conclusão de Curso I",
  },
];

export const prerequisites = [
  {
    subject: "Algoritmos e Lógica de Programação",
    releases: ["Estruturas de Dados", "Programação Orientada a Objetos"],
  },
  {
    subject: "Programação Orientada a Objetos",
    releases: [
      "Padrões de Projeto",
      "Programação Orientada a Objetos para Web I",
    ],
  },
  {
    subject: "Banco de Dados I",
    releases: [
      "Banco de Dados II",
      "Programação Orientada a Objetos para Web I",
    ],
  },
  {
    subject: "Engenharia de Software I",
    releases: ["Engenharia de Software II"],
  },
  {
    subject: "Engenharia de Software II",
    releases: ["Projeto Integrador", "Trabalho de Conclusão de Curso I"],
  },
  {
    subject: "Programação Orientada a Objetos para Web I",
    releases: ["Programação Orientada a Objetos para Web II"],
  },
  {
    subject: "Programação Orientada a Objetos para Web II",
    releases: [
      "Programação para Dispositivos Móveis",
      "Projeto Integrador",
      "Trabalho de Conclusão de Curso I",
      "Tópicos Avançados em Programação Web",
    ],
  },
  {
    subject: "Redes de Computadores",
    releases: ["Tópicos Avançados em Programação Web"],
  },
  {
    subject: "Trabalho de Conclusão de Curso I",
    releases: ["Trabalho de Conclusão de Curso II"],
  },
];

export const waivers = [
  {
    title: "Aproveitamento de Estudos (Disciplinas Cursadas)",
    content:
      "Se você já cursou alguma disciplina equivalente em outra instituição de ensino superior ou em outro curso da mesma instituição, você pode solicitar a dispensa. É necessário apresentar o Histórico Escolar oficial e as Ementas das disciplinas cursadas. A ementa e a carga horária devem corresponder a pelo menos 75% da disciplina que deseja dispensar.",
  },
  {
    title: "Certificação de Conhecimentos (Prova de Proficiência)",
    content:
      "Alunos com notório saber em determinada área podem solicitar uma prova de proficiência. Se aprovado com nota superior à mínima exigida pelo regulamento da instituição, o aluno é dispensado de cursar a disciplina presencialmente.",
  },
  {
    title: "Prazos e Procedimentos",
    content:
      "Os pedidos de dispensa devem ser realizados obrigatoriamente no início de cada semestre letivo, conforme o calendário acadêmico. O processo é feito via portal do aluno, na aba 'Requerimentos > Aproveitamento de Disciplina'.",
  },
];

export const extracurriculars = [
  {
    type: "ACG (Atividades Complementares de Graduação)",
    description:
      "Atividades que complementam a formação do aluno, como palestras, workshops, cursos online extracurriculares (ex: Alura, Udemy) e participação em eventos de tecnologia. Carga horária total exigida: 140h.",
  },
  {
    type: "DCG (Disciplinas Complementares de Graduação)",
    description:
      "Disciplinas optativas ou de outros cursos que o aluno escolhe cursar para enriquecer seu currículo. Geralmente não são obrigatórias na grade padrão, mas somam pontos na formação. Carga horária total exigida: 360h.",
  },
  {
    type: "ACEX / DCEX (Extensão)",
    description:
      "Atividades de extensão universitária que conectam o curso com a comunidade. Participação em projetos sociais, desenvolvimento de software voluntário para ONGs, ou projetos de pesquisa aplicada. Carga horária total exigida: 60h.",
  },
];

export const faqs = [
  {
    question: "O curso é focado mais em Frontend ou Backend?",
    answer:
      "O curso é Full Stack, abrangendo tanto Frontend (HTML, CSS, JavaScript e UX/UI) quanto Backend (Java, Spring e PHP). Também inclui Banco de Dados, DevOps e fundamentos da computação, como Sistemas Operacionais, Engenharia de Software, Gerenciamento de Projetos e Padrões de Projeto, garantindo uma formação completa e alinhada às demandas do mercado.",
  },
  {
    question: "Preciso ter computador potente para o curso?",
    answer:
      "Não necessariamente. Os laboratórios do curso contam com equipamentos adequados para as atividades, permitindo que você acompanhe as aulas mesmo sem um computador potente próprio.",
  },
  {
    question: "O curso é uma graduação de nível superior?",
    answer:
      "Sim. O curso é uma graduação na modalidade Tecnólogo, com duração de 3 anos e realização de TCC (Trabalho de Conclusão de Curso) ao final.",
  },
  {
    question: "Tem estágio obrigatório?",
    answer:
      "Não. O curso de Sistemas para Internet não exige estágio obrigatório, mas o aluno pode buscar oportunidades por conta própria, inclusive por meio das vagas divulgadas por e-mail ao longo do curso.",
  },
  {
    question: "O curso ajuda a conseguir emprego?",
    answer:
      "Sim. O curso mantém parcerias com empresas e a coordenadoria divulga regularmente, por e-mail, oportunidades de bolsas e estágios, auxiliando os alunos na inserção no mercado de trabalho.",
  },
  {
    question: "Posso fazer intercâmbio durante o curso?",
    answer:
      "Sim! A instituição possui programas de mobilidade acadêmica internacional. Fique atento aos editais lançados pela coordenação.",
  },
  {
    question: "Qual turno do Curso?",
    answer:
      "O curso de Sistemas para Internet é ofertado no turno vespertino, com aulas das 13h30 às 17h30, podendo se estender até as 18h30 em alguns dias.",
  },
];

export const studyMaterials = [
  {
    title: "MDN Web Docs",
    description:
      "A documentação oficial e mais completa sobre tecnologias web (HTML, CSS, JavaScript).",
    link: "https://developer.mozilla.org/",
  },
  {
    title: "Roadmap.sh",
    description:
      "Guias de estudo interativos e trilhas de aprendizado para desenvolvedores (Frontend, Backend, DevOps).",
    link: "https://roadmap.sh/",
  },
  {
    title: "FreeCodeCamp",
    description:
      "Plataforma gratuita com milhares de horas de exercícios práticos de programação e certificações.",
    link: "https://www.freecodecamp.org/",
  },
  {
    title: "Repositório do Curso",
    description:
      "GitHub não oficial mantido pelos alunos com resumos, provas antigas e projetos.",
    link: "https://github.com/matheusgmello/Sistemas-Hub-SPI",
  },
];

export const collegiate = {
  description:
    "O Colegiado de Curso é o órgão responsável pela coordenação didática do curso, decidindo sobre questões acadêmicas, pedagógicas e administrativas específicas do curso de Sistemas para Internet. PORTARIA DE PESSOAL POLITÉCNICO/UFSM N. 096/2025, DE 12 DE JUNHO 2025.",
  members: [
    {
      name: "Profa. Juçara Salete Gubiani",
      role: "Presidente e Membro Nato Titular (SIAPE 6379329)",
    },
    {
      name: "Prof. Rafael Gressler Milbradt",
      role: "Membro Nato (SIAPE 2074361)",
    },
    {
      name: "Prof. Leandro Oliveira Freitas",
      role: "Membro Efetivo (SIAPE 2884839)",
    },
    {
      name: "Prof. Daniel Lichtnow",
      role: "Membro Titular (SIAPE 2041838)",
    },
    {
      name: "Prof. Vinicius Maran",
      role: "Membro Substituto (SIAPE 2140348)",
    },
    {
      name: "Prof. Marcos Alexandre Rose Silva",
      role: "Membro Substituto (SIAPE 2147395)",
    },
    {
      name: "TAE Giana Lucca Kroth",
      role: "Membro Externo (SIAPE 1737711)",
    },
    {
      name: "Estudante Matheus Gabriel Fleck de Mello",
      role: "Membro Efetivo (Matrícula 202512603)",
    },
    {
      name: "Estudante José Vitor Marciano Barcelos",
      role: "Membro Substituto (Matrícula 202511054)",
    },
  ],
  functions: [
    "Deliberar sobre o projeto pedagógico do curso.",
    "Decidir sobre pedidos de aproveitamento de estudos e dispensas.",
    "Analisar e aprovar planos de ensino das disciplinas.",
    "Acompanhar o desempenho acadêmico geral do curso.",
  ],
};

export const studentUnionMembers = [
    { name: "Bruno Muniz", role: "Coordenador Geral" },
    { name: "Julia Jaeger", role: "Coordenadora Geral" },
    { name: "Talia Bosi", role: "Coordenadora Geral" },

    { name: "Juliano Rocha", role: "Coordenador de Finanças" },

    { name: "Douglas Santos", role: "Coordenador de Mídia" },
    { name: "Luiza Crumenauer", role: "Coordenadora de Mídia" },

    { name: "Alec Tamarindo", role: "Coordenador de Eventos" },
    { name: "Willian Potkova", role: "Coordenador de Eventos" },

    { name: "Enzo Miguel Militz", role: "Membro" },
    { name: "Gabriel Nunes", role: "Membro" },
    { name: "Gustavo Trimpler Reinhold", role: "Membro" },
    { name: "Isaac Silva dos Santos", role: "Membro" },
    { name: "Lorenzo dos Reis Marty", role: "Membro" },
    { name: "Matheus Gabriel Fleck de Mello", role: "Membro" },
    { name: "Micael Bernardi", role: "Membro" },
    { name: "Sthefany Marim", role: "Membro" },

];

export const dcgs = {
  description:
    "As Disciplinas Complementares de Graduação (DCGs) são matérias que o aluno escolhe cursar para enriquecer sua formação e currículo. Para o curso de Tecnologia em Sistemas para Internet, é necessário integralizar um total de 360 horas em DCGs.",
  internal: [
    { name: "Libras Licenciatura", workload: 60 },
    { name: "Análise de Dados e Extração de Conhecimento", workload: 60 },
    { name: "Conceito e Implementação de DevOps", workload: 60 },
  ],
  external: [
    {
      category: "Segurança",
      items: [
        {
          name: "Cibersegurança",
          workload: 30,
          provider: "CT (Ciência da Computação)",
        },
        {
          name: "Introdução à Segurança Ofensiva (Pentest)",
          workload: 45,
          provider: "CTISM (Redes de Computadores)",
        },
        {
          name: "Criptografia Para Segurança de Dados",
          workload: 60,
          provider: "CT (Sistemas de Informação)",
        },
        {
          name: "Ccna 3 - Enterprise Networking, Security And Automation",
          workload: 75,
          provider: "CTISM (Redes de Computadores)",
        },
        {
          name: "Gestão e Análise de Segurança",
          workload: 30,
          provider: "CT (Ciência da Computação)",
        },
        {
          name: "Segurança e Defesa em Ambientes Digitais",
          workload: 60,
          provider: "CT (Ciência da Computação)",
        },
        {
          name: "Segurança de Rede",
          workload: 60,
          provider: "CT (Engenharia da Computação)",
        },
      ],
    },
    {
      category: "Inteligência Artificial",
      items: [
        {
          name: "Inteligência Artificial",
          workload: 60,
          provider: "CT Ciência da Computação",
        },
        {
          name: "Inteligência Artificial Aplicada a Processamento de Sinais Biomédicos",
          workload: 45,
          provider: "CT (Engenharia da Computação)",
        },
        {
          name: "Sistemas Inteligentes",
          workload: 30,
          provider: "CT Ciência da Computação",
        },
        {
          name: "Machine Learning",
          workload: 60,
          provider: "CT/CCNE Ciência da Computação e Estatística",
        },
        {
          name: "Deep Learning",
          workload: 60,
          provider: "CT/CCNE Ciência da Computação e Estatística",
        },
        {
          name: "Lógica Para Inteligência Artificial e Games",
          workload: 60,
          provider: "CT Ciência da Computação",
        },
      ],
    },
    {
      category: "Dados (Ciência de Dados)",
      items: [
        {
          name: "Fundamentos de Ciência de Dados",
          workload: 60,
          provider: "CT Ciência da Computação e Engenharia da Computação",
        },
        {
          name: "Mineração de Dados",
          workload: 60,
          provider: "CT Ciência da Computação",
        },
        {
          name: "Projeto e Análise de Algoritmos",
          workload: 60,
          provider: "CT Ciência da Computação",
        },
      ],
    },
    {
      category: "Geral",
      items: [
        {
          name: "Computação em Nuvem",
          workload: 60,
          provider: "CT Ciência da Computação e Sistemas de Informação",
        },
        {
          name: "Internet das Coisas",
          workload: 60,
          provider: "CT Ciência da Computação e Engenharia da Computação",
        },
        {
          name: "Computação Quântica",
          workload: 60,
          provider: "CT Ciência da Computação e Engenharia da Computação",
        },
        {
          name: "Computação Gráfica Avançada",
          workload: 60,
          provider: "CT Ciência da Computação",
        },
        {
          name: "Computação Gráfica",
          workload: 60,
          provider: "CT Ciência da Computação",
        },
        {
          name: "Interface Humano-Computador",
          workload: 60,
          provider: "CT Ciência da Computação",
        },
        {
          name: "Robótica Industrial",
          workload: 60,
          provider: "CT Engenharia da Computação",
        },
      ],
    },
  ],
};

export const contributors = [
  {
    name: "Matheus Mello",
    // role: "Desenvolvedor Principal",
    github: "https://github.com/matheusgmello",
    linkedin: "https://www.linkedin.com/in/matheusgmello/",
    image: "https://github.com/matheusgmello.png",
    contribution: "Criador do projeto",
  },
  {
    name: "Gustavo Trimpler Reinhold",
    // role: "Desenvolvedor",
    github: "https://github.com/Gusliro",
    linkedin: "https://www.linkedin.com/in/gustavo-reinhold/",
    image: "https://github.com/Gusliro.png",
    contribution: "Co-Criador do projeto",
  },
  {
    name: "Enzo Miguel Militz",
    // role: "FAQ de perguntas",
    github: "#",
    linkedin: "#",
    image: "",
    contribution: "Coleta e organização das informações do curso.",
  },
  {
    name: "Bruno Muniz",
    // role: "FAQ de perguntas",
    github: "https://github.com/brunogmuniz",
    linkedin: "https://www.linkedin.com/in/omunizdev/",
    image: "https://github.com/brunogmuniz.png",
    contribution: "Refatorou a página do Diretório Acadêmico e contribuiu com informações sobre o curso.",
  },
];

export const careerPaths = [
  {
    id: "frontend",
    title: "Desenvolvimento Frontend",
    icon: "Monitor",
    description:
      "Desenvolvedores Frontend criam interfaces visuais e interativas que os usuários veem e utilizam diariamente. Focam em tornar aplicações web responsivas, intuitivas e performáticas.",
    responsibilities: [
      "Criar interfaces de usuário responsivas e acessíveis",
      "Integrar APIs com o frontend",
      "Otimizar performance e carregamento",
      "Implementar testes unitários e end-to-end",
      "Garantir compatibilidade entre navegadores",
      "Trabalhar com design systems e componentes reutilizáveis",
    ],
    skills: [
      { name: "JavaScript/TypeScript", level: "Essencial" },
      { name: "React", level: "Essencial" },
      { name: "Vue.js", level: "Útil" },
      { name: "Angular", level: "Útil" },
      { name: "HTML/CSS", level: "Essencial" },
      { name: "Tailwind CSS", level: "Útil" },
      { name: "Git/GitHub", level: "Essencial" },
      { name: "REST APIs", level: "Essencial" },
      { name: "GraphQL", level: "Avançado" },
    ],
    salaryRange: "R$ 3.500 - R$ 8.000+",
    careerProgression: ["Junior", "Pleno", "Sênior", "Tech Lead", "Arquiteto Frontend"],
  },
  {
    id: "backend",
    title: "Desenvolvimento Backend",
    icon: "Server",
    description:
      "Desenvolvedores Backend constroem a lógica e infraestrutura que alimentam as aplicações. Trabalham com bancos de dados, APIs, autenticação e segurança.",
    responsibilities: [
      "Desenvolver APIs REST e GraphQL",
      "Gerenciar bancos de dados",
      "Implementar autenticação e autorização",
      "Otimizar queries e performance",
      "Escrever testes e garantir qualidade",
      "Deploy e monitoramento de aplicações",
      "Escalabilidade e arquitetura de sistemas",
    ],
    skills: [
      { name: "Node.js/Express", level: "Essencial" },
      { name: "Python/Django", level: "Essencial" },
      { name: "Java/Spring", level: "Essencial" },
      { name: "SQL", level: "Essencial" },
      { name: "PostgreSQL", level: "Útil" },
      { name: "MongoDB", level: "Útil" },
      { name: "Docker", level: "Importante" },
      { name: "AWS/Google Cloud", level: "Importante" },
      { name: "Redis", level: "Avançado" },
    ],
    salaryRange: "R$ 4.000 - R$ 10.000+",
    careerProgression: ["Junior", "Pleno", "Sênior", "Arquiteto de Software", "CTO"],
  },
  {
    id: "fullstack",
    title: "Desenvolvimento Fullstack",
    icon: "Layers",
    description:
      "Desenvolvedores Fullstack dominam tanto Frontend quanto Backend, podendo trabalhar em todas as camadas da aplicação. Geralmente trabalham em startups ou empresas menores.",
    responsibilities: [
      "Desenvolver aplicações completas (Frontend + Backend)",
      "Gerenciar banco de dados",
      "Criar interfaces e lógica de negócio",
      "Fazer deploy e manutenção",
      "Resolver problemas em qualquer parte da stack",
      "Prototipagem rápida de ideias",
    ],
    skills: [
      { name: "JavaScript/TypeScript", level: "Essencial" },
      { name: "React", level: "Essencial" },
      { name: "Node.js", level: "Essencial" },
      { name: "HTML/CSS", level: "Essencial" },
      { name: "SQL", level: "Essencial" },
      { name: "Git", level: "Essencial" },
      { name: "Docker", level: "Importante" },
      { name: "REST APIs", level: "Essencial" },
      { name: "AWS/Vercel", level: "Importante" },
    ],
    salaryRange: "R$ 4.500 - R$ 9.000+",
    careerProgression: ["Junior", "Pleno", "Sênior", "Tech Lead", "Founder"],
  },
  {
    id: "mobile",
    title: "Desenvolvimento Mobile",
    icon: "Smartphone",
    description:
      "Desenvolvedores Mobile criam aplicações para dispositivos móveis (Android e iOS). Podem trabalhar com tecnologias nativas ou cross-platform.",
    responsibilities: [
      "Desenvolver aplicações iOS e Android",
      "Otimizar para diferentes tamanhos de tela",
      "Implementar sincronização com servidor",
      "Garantir segurança de dados locais",
      "Testes em dispositivos reais",
      "Publicar em App Store e Google Play",
    ],
    skills: [
      { name: "React Native", level: "Essencial" },
      { name: "Flutter", level: "Essencial" },
      { name: "Swift (iOS)", level: "Essencial" },
      { name: "Kotlin (Android)", level: "Essencial" },
      { name: "JavaScript/TypeScript", level: "Essencial" },
      { name: "REST APIs", level: "Essencial" },
      { name: "Firebase", level: "Importante" },
      { name: "Git", level: "Essencial" },
    ],
    salaryRange: "R$ 4.000 - R$ 9.000+",
    careerProgression: ["Junior", "Pleno", "Sênior", "Tech Lead", "Mobile Architect"],
  },
  {
    id: "data",
    title: "Ciência e Engenharia de Dados",
    icon: "BarChart3",
    description:
      "Cientistas de Dados analisam grandes volumes de dados para extrair insights e criar modelos preditivos. Engenheiros de Dados constroem pipelines e infraestrutura para processar dados.",
    responsibilities: [
      "Coletar, processar e analisar dados",
      "Criar modelos preditivos e estatísticos",
      "Visualizar dados e resultados",
      "Extrair insights de negócio",
      "Construir pipelines de dados (Engenharia)",
      "Otimizar processamento em larga escala",
    ],
    skills: [
      { name: "Python", level: "Essencial" },
      { name: "SQL", level: "Essencial" },
      { name: "Pandas", level: "Essencial" },
      { name: "Scikit-Learn", level: "Importante" },
      { name: "TensorFlow/PyTorch", level: "Útil" },
      { name: "Apache Spark", level: "Importante" },
      { name: "Tableau/Power BI", level: "Útil" },
      { name: "Big Data (Hadoop, Spark)", level: "Avançado" },
    ],
    salaryRange: "R$ 5.000 - R$ 12.000+",
    careerProgression: ["Junior", "Pleno", "Sênior", "Líder de Dados", "Chief Data Officer"],
  },
  {
    id: "qa",
    title: "QA (Quality Assurance)",
    icon: "CheckCircle2",
    description:
      "Profissionais QA garantem a qualidade de software através de testes manuais e automatizados. Identificam bugs, documentam problemas e validam funcionalidades.",
    responsibilities: [
      "Executar testes manuais e automatizados",
      "Criar planos e estratégias de teste",
      "Reportar bugs com detalhes",
      "Validar correções",
      "Testar performance e carga",
      "Melhorar processos de qualidade",
    ],
    skills: [
      { name: "Testes manuais", level: "Essencial" },
      { name: "Selenium", level: "Importante" },
      { name: "Jest/Vitest", level: "Importante" },
      { name: "Python", level: "Útil" },
      { name: "JavaScript", level: "Útil" },
      { name: "SQL", level: "Importante" },
      { name: "Git", level: "Essencial" },
      { name: "JIRA", level: "Essencial" },
    ],
    salaryRange: "R$ 3.000 - R$ 7.000+",
    careerProgression: ["Testador", "QA Pleno", "QA Sênior", "QA Lead", "Gerenciador de Qualidade"],
  },
  {
    id: "sre",
    title: "SRE (Site Reliability Engineering)",
    icon: "Zap",
    description:
      "Engenheiros de Confiabilidade (SRE) combinam engenharia de software com operações. Focam em confiabilidade, performance e automação de infraestrutura.",
    responsibilities: [
      "Garantir uptime e performance de sistemas",
      "Automação de processos operacionais",
      "Monitoramento e alertas",
      "Incident response e post-mortems",
      "Disaster recovery e backup",
      "Otimização de custos de infraestrutura",
    ],
    skills: [
      { name: "Linux", level: "Essencial" },
      { name: "Kubernetes", level: "Importante" },
      { name: "Docker", level: "Essencial" },
      { name: "Python/Go", level: "Essencial" },
      { name: "Terraform", level: "Importante" },
      { name: "Prometheus/Grafana", level: "Importante" },
      { name: "AWS/GCP/Azure", level: "Essencial" },
      { name: "CI/CD (Jenkins, GitLab CI)", level: "Essencial" },
    ],
    salaryRange: "R$ 6.000 - R$ 12.000+",
    careerProgression: ["SRE Junior", "SRE Pleno", "SRE Sênior", "SRE Lead", "VP of Engineering"],
  },
  {
    id: "bi",
    title: "Business Intelligence (BI)",
    icon: "TrendingUp",
    description:
      "Profissionais de BI transformam dados em informações úteis para tomar decisões de negócio. Criam dashboards e relatórios que ajudam executivos.",
    responsibilities: [
      "Coletar e integrar dados de várias fontes",
      "Criar data warehouses",
      "Desenvolver dashboards e relatórios",
      "Análise exploratória de dados",
      "Suportar tomada de decisão estratégica",
      "Manter qualidade de dados",
    ],
    skills: [
      { name: "Power BI", level: "Essencial" },
      { name: "Tableau", level: "Essencial" },
      { name: "SQL", level: "Essencial" },
      { name: "Python/R", level: "Importante" },
      { name: "Excel avançado", level: "Essencial" },
      { name: "Looker", level: "Útil" },
      { name: "Apache Spark", level: "Avançado" },
      { name: "ETL (Extract, Transform, Load)", level: "Importante" },
    ],
    salaryRange: "R$ 4.000 - R$ 9.000+",
    careerProgression: ["BI Analyst", "BI Pleno", "BI Sênior", "BI Lead", "Data Strategy Manager"],
  },
  {
    id: "ai-ml",
    title: "Inteligência Artificial e Machine Learning",
    icon: "Brain",
    description:
      "Especialistas em IA/ML desenvolvem modelos de aprendizado de máquina e sistemas inteligentes. Trabalham em áreas como visão computacional, processamento de linguagem natural e recomendadores.",
    responsibilities: [
      "Preparar e limpar dados",
      "Treinar e validar modelos",
      "Feature engineering",
      "Deployment de modelos em produção",
      "Pesquisa e experimentação",
      "Otimização de algoritmos",
    ],
    skills: [
      { name: "Python", level: "Essencial" },
      { name: "TensorFlow/PyTorch", level: "Essencial" },
      { name: "Scikit-Learn", level: "Essencial" },
      { name: "Estatística/Matemática", level: "Essencial" },
      { name: "SQL", level: "Importante" },
      { name: "Pandas/NumPy", level: "Essencial" },
      { name: "Deep Learning", level: "Importante" },
      { name: "NLP/Computer Vision", level: "Avançado" },
    ],
    salaryRange: "R$ 6.000 - R$ 15.000+",
    careerProgression: ["ML Engineer", "ML Pleno", "Senior ML Engineer", "ML Lead", "Research Scientist"],
  },
  {
    id: "devops",
    title: "DevOps e Cloud Computing",
    icon: "Cloud",
    description:
      "Engenheiros DevOps gerenciam infraestrutura em nuvem, automatizam deployments e mantêm sistemas em produção escaláveis e confiáveis.",
    responsibilities: [
      "Configurar e manter infraestrutura em nuvem",
      "Implementar CI/CD pipelines",
      "Containerizar aplicações",
      "Orquestração com Kubernetes",
      "Monitoramento e logging",
      "Segurança de infraestrutura",
    ],
    skills: [
      { name: "AWS", level: "Essencial" },
      { name: "Docker", level: "Essencial" },
      { name: "Kubernetes", level: "Importante" },
      { name: "Terraform", level: "Importante" },
      { name: "Linux", level: "Essencial" },
      { name: "Python/Bash", level: "Importante" },
      { name: "Jenkins/GitLab CI", level: "Importante" },
      { name: "GCP/Azure", level: "Útil" },
    ],
    salaryRange: "R$ 5.000 - R$ 12.000+",
    careerProgression: ["DevOps Engineer", "DevOps Pleno", "Senior DevOps", "DevOps Lead", "Cloud Architect"],
  },
  {
    id: "security",
    title: "Cybersecurity",
    icon: "Shield",
    description:
      "Profissionais de segurança protegem sistemas, redes e dados contra ataques e vulnerabilidades. Trabalham em prevenção, detecção e resposta a incidentes.",
    responsibilities: [
      "Auditar segurança de sistemas",
      "Testes de penetração (pentest)",
      "Análise de vulnerabilidades",
      "Resposta a incidentes de segurança",
      "Implementar políticas de segurança",
      "Educação sobre segurança",
    ],
    skills: [
      { name: "Redes (TCP/IP)", level: "Essencial" },
      { name: "Linux/Windows", level: "Essencial" },
      { name: "Python/Bash", level: "Importante" },
      { name: "Criptografia", level: "Importante" },
      { name: "OWASP", level: "Essencial" },
      { name: "Metasploit", level: "Importante" },
      { name: "Firewall/IDS/IPS", level: "Importante" },
      { name: "Certificações (CEH, OSCP)", level: "Avançado" },
    ],
    salaryRange: "R$ 5.000 - R$ 13.000+",
    careerProgression: ["Security Analyst", "Security Engineer", "Penetration Tester", "Security Architect", "CISO"],
  },
  {
    id: "ux-ui",
    title: "UI/UX Design",
    icon: "Palette",
    description:
      "Designers UI/UX criam experiências digitais intuitivas e atraentes. Focam em usabilidade, estética e psicologia do usuário.",
    responsibilities: [
      "Pesquisa com usuários",
      "Wireframing e prototipagem",
      "Design visual de interfaces",
      "Testes de usabilidade",
      "Documentação de design systems",
      "Colaboração com desenvolvedores",
    ],
    skills: [
      { name: "Figma", level: "Essencial" },
      { name: "Adobe XD", level: "Importante" },
      { name: "Prototipagem", level: "Essencial" },
      { name: "UX Research", level: "Importante" },
      { name: "Design System", level: "Importante" },
      { name: "CSS/HTML básico", level: "Útil" },
      { name: "Accessibility (WCAG)", level: "Importante" },
      { name: "Soft Skills (Comunicação)", level: "Essencial" },
    ],
    salaryRange: "R$ 3.500 - R$ 8.500+",
    careerProgression: ["Designer Junior", "Designer Pleno", "Senior Designer", "Design Lead", "Design Manager"],
  },
  {
    id: "product",
    title: "Product Management",
    icon: "Box",
    description:
      "Gerentes de Produto definem a visão e estratégia dos produtos. Trabalham com desenvolvimento, design, marketing e negócio para entregar valor ao usuário.",
    responsibilities: [
      "Definir roadmap do produto",
      "Análise de mercado e concorrência",
      "Priorização de features",
      "Métricas e analytics",
      "Comunicação com stakeholders",
      "Tomar decisões estratégicas",
    ],
    skills: [
      { name: "Análise de dados", level: "Essencial" },
      { name: "Comunicação", level: "Essencial" },
      { name: "Leadership", level: "Importante" },
      { name: "Noções técnicas", level: "Útil" },
      { name: "Estratégia de negócio", level: "Essencial" },
      { name: "User Research", level: "Importante" },
      { name: "Ferramentas: Jira, Amplitude", level: "Importante" },
      { name: "Pensamento crítico", level: "Essencial" },
    ],
    salaryRange: "R$ 5.000 - R$ 12.000+",
    careerProgression: ["Associate PM", "Product Manager", "Senior PM", "Director of Product", "VP Product"],
  },
];
