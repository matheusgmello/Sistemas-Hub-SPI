export type StudyResource = {
  title: string;
  description: string;
  link: string;
};

export type SubjectStudyGuide = {
  label: string;
  summary: string;
  topics: string[];
  resources: StudyResource[];
};

const catalog = {
  cs50: {
    title: "CS50: Introduction to Computer Science",
    description: "Base forte de logica, algoritmos, estruturas e fundamentos de computacao.",
    link: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
  },
  learnC: {
    title: "Learn C",
    description: "Tutorial interativo para praticar C do basico ate ponteiros e memoria.",
    link: "https://www.learn-c.org/",
  },
  acmEthics: {
    title: "ACM Code of Ethics",
    description: "Referencia profissional para discutir impactos sociais e eticos da computacao.",
    link: "https://www.acm.org/about-acm/code-of-ethics",
  },
  mitEthics: {
    title: "MIT OCW: Social and Ethical Responsibilities of Computing",
    description: "Curso aberto para ampliar repertorio sobre tecnologia, responsabilidade e sociedade.",
    link: "https://learn.mit.edu/c/unit/ocw?resource=5148",
  },
  mdnLearn: {
    title: "MDN Learn Web Development",
    description: "Trilha estruturada de HTML, CSS, JavaScript, acessibilidade e fundamentos web.",
    link: "https://developer.mozilla.org/en-US/docs/Learn",
  },
  webDev: {
    title: "web.dev Learn",
    description: "Cursos objetivos de HTML, CSS, JavaScript, performance e acessibilidade.",
    link: "https://web.dev/learn/",
  },
  webDesign: {
    title: "web.dev Learn Responsive Design",
    description: "Otimo apoio para layout, adaptabilidade, tipografia e design responsivo.",
    link: "https://web.dev/learn/design",
  },
  webAccessibility: {
    title: "web.dev Learn Accessibility",
    description: "Curso focado em acessibilidade pratica para interfaces e paginas web.",
    link: "https://web.dev/learn/accessibility",
  },
  openLogic: {
    title: "Open Logic Project",
    description: "Material aberto para reforcar logica formal, proposicoes e demonstracoes.",
    link: "https://openlogicproject.org/",
  },
  nand2tetris: {
    title: "Nand to Tetris",
    description: "Curso classico para entender como um computador funciona da base ao software.",
    link: "https://www.nand2tetris.org/",
  },
  postgresDocs: {
    title: "PostgreSQL Documentation",
    description: "Documentacao oficial atual para SQL, modelagem, consultas e administracao.",
    link: "https://www.postgresql.org/docs/",
  },
  oracleSql: {
    title: "Oracle SQL Learning Resources",
    description: "Reforco para consultas, DDL, DML e fundamentos de SQL.",
    link: "https://www.oracle.com/database/technologies/appdev/sql.html",
  },
  oracleJava: {
    title: "Java Documentation",
    description: "Portal oficial da Oracle com documentacao, guias e referencia da plataforma Java.",
    link: "https://docs.oracle.com/en/java",
  },
  springGuides: {
    title: "Spring Guides",
    description: "Guias oficiais do Spring para APIs, dados, seguranca e servicos web.",
    link: "https://spring.io/guides",
  },
  mitSoftwareWeb: {
    title: "MIT OCW: Software Engineering for Web Applications",
    description: "Material aberto para pensar arquitetura, processo e qualidade em aplicacoes web.",
    link: "https://learn.mit.edu/c/unit/ocw?resource=4446",
  },
  mitSoftwareConcepts: {
    title: "MIT OCW: Software Engineering Concepts",
    description: "Leituras e notas sobre ciclo de vida, requisitos, testes e manutencao.",
    link: "https://ocw.mit.edu/courses/16-355j-software-engineering-concepts-fall-2005/",
  },
  mitOperatingSystems: {
    title: "MIT OCW: Operating System Engineering",
    description: "Base teorica boa para processos, memoria, concorrencia e sistemas.",
    link: "https://learn.mit.edu/c/unit/ocw?resource=16265",
  },
  khanStatistics: {
    title: "Khan Academy: Statistics and Probability",
    description: "Trilha gratuita para probabilidade, distribuicoes e leitura de dados.",
    link: "https://www.khanacademy.org/math/statistics-probability",
  },
  ciscoBasics: {
    title: "Cisco: Networking Basics",
    description: "Explica fundamentos de redes, switches, roteadores e conectividade.",
    link: "https://www.cisco.com/site/us/en/learn/topics/small-business/networking-basics.html",
  },
  netAcad: {
    title: "Cisco Networking Academy",
    description: "Cursos gratuitos e guiados de redes, seguranca, IoT e trilhas de carreira.",
    link: "https://www.cisco.com/site/us/en/learn/training-certifications/training/netacad/index.html",
  },
  androidBasics: {
    title: "Android Basics with Compose",
    description: "Curso oficial para desenvolvimento mobile moderno com Kotlin e Jetpack Compose.",
    link: "https://developer.android.com/kotlin/androidbasics",
  },
  composeBasics: {
    title: "Jetpack Compose Basics",
    description: "Codelab oficial para criar UI, estado e componentes em apps Android.",
    link: "https://developer.android.com/codelabs/jetpack-compose-basics",
  },
  refactoringGuru: {
    title: "Refactoring.Guru: Design Patterns",
    description: "Explica padroes de projeto, motivacoes e exemplos em varias linguagens.",
    link: "https://refactoring.guru/design-patterns",
  },
  atlassianAgile: {
    title: "Atlassian: Agile Project Management",
    description: "Boa base para backlog, sprint, fluxo continuo, scrum e kanban.",
    link: "https://www.atlassian.com/agile/project-management",
  },
  mitEntrepreneurship: {
    title: "MIT Learn: Entrepreneurship",
    description: "Porta de entrada para pensamento de produto, negocio e inovacao.",
    link: "https://learn.mit.edu/c/unit/ocw?resource=10654",
  },
  gitBook: {
    title: "Pro Git Book",
    description: "Livro oficial gratuito para versionamento, branching e colaboracao.",
    link: "https://git-scm.com/book/en/v2.html",
  },
  mitTechWriting: {
    title: "MIT OCW: Graduate Technical Writing Workshop",
    description: "Apoio para escrita tecnica, clareza, estrutura e revisao de texto academico.",
    link: "https://learn.mit.edu/c/unit/ocw?resource=3465",
  },
  ncbiWriting: {
    title: "NCBI: How to Write and Publish a Scientific Manuscript",
    description: "Guia pratico para estruturar pesquisa, resultados, revisao e submissao.",
    link: "https://www.ncbi.nlm.nih.gov/books/NBK564394/",
  },
} satisfies Record<string, StudyResource>;

export const studyTracks = [
  {
    title: "Base Web",
    description: "Para disciplinas ligadas a web, UX e frontend.",
    resources: [catalog.mdnLearn, catalog.webDev, catalog.webAccessibility],
  },
  {
    title: "Backend e Dados",
    description: "Para banco, Java, Spring, APIs e integracao.",
    resources: [catalog.postgresDocs, catalog.oracleJava, catalog.springGuides],
  },
  {
    title: "Pesquisa e Projeto",
    description: "Para TCC, projeto integrador, organizacao e escrita.",
    resources: [catalog.atlassianAgile, catalog.mitTechWriting, catalog.ncbiWriting],
  },
];

export const subjectStudyGuidesById: Record<string, SubjectStudyGuide> = {
  "1": {
    label: "Logica e base de programacao",
    summary: "Ideal para ganhar ritmo com pensamento computacional, estruturas de controle e resolucao de problemas.",
    topics: ["algoritmos", "condicionais", "repeticao", "funcoes"],
    resources: [catalog.cs50, catalog.learnC],
  },
  "2": {
    label: "Impacto social da computacao",
    summary: "Ajuda a discutir etica, responsabilidade profissional, privacidade e os efeitos da tecnologia na sociedade.",
    topics: ["etica", "sociedade", "privacidade", "responsabilidade"],
    resources: [catalog.acmEthics, catalog.mitEthics],
  },
  "3": {
    label: "Primeiros passos na web",
    summary: "Boa base para aprender estrutura de paginas, estilos, navegacao e publicacao de sites simples.",
    topics: ["html", "css", "javascript", "publicacao"],
    resources: [catalog.mdnLearn, catalog.webDev, catalog.webDesign],
  },
  "4": {
    label: "Fundamentos da area",
    summary: "Serve para conectar hardware, software, algoritmos e a visao geral da computacao.",
    topics: ["arquitetura", "abstracao", "hardware", "software"],
    resources: [catalog.cs50, catalog.nand2tetris],
  },
  "5": {
    label: "Raciocinio formal",
    summary: "Bom para reforcar proposicoes, conectivos, tabelas-verdade e demonstracoes.",
    topics: ["proposicoes", "provas", "conjuntos", "formalizacao"],
    resources: [catalog.openLogic, catalog.khanStatistics],
  },
  "6": {
    label: "Modelagem e SQL",
    summary: "Ajuda a estudar consultas, normalizacao, modelagem relacional e operacoes com dados.",
    topics: ["sql", "modelagem", "ddl", "dml"],
    resources: [catalog.postgresDocs, catalog.oracleSql],
  },
  "7": {
    label: "Estruturas lineares e recursao",
    summary: "Foco em listas, pilhas, filas, arvores, ponteiros e custo de operacoes.",
    topics: ["listas", "pilhas", "filas", "arvores"],
    resources: [catalog.learnC, catalog.cs50],
  },
  "8": {
    label: "Arquitetura e organizacao",
    summary: "Bom para estudar binario, memoria, CPU, montagem e relacao entre hardware e software.",
    topics: ["cpu", "memoria", "assembly", "organizacao"],
    resources: [catalog.nand2tetris, catalog.cs50],
  },
  "9": {
    label: "POO e modelagem",
    summary: "Ajuda a consolidar classes, objetos, encapsulamento, heranca e principios de modelagem.",
    topics: ["classes", "objetos", "encapsulamento", "heranca"],
    resources: [catalog.oracleJava, catalog.cs50],
  },
  "10": {
    label: "Frontend e dinamica web",
    summary: "Bom para evoluir em HTML, CSS, JavaScript, formularios, acessibilidade e paginas interativas.",
    topics: ["frontend", "formularios", "dom", "acessibilidade"],
    resources: [catalog.mdnLearn, catalog.webDev, catalog.webAccessibility],
  },
  "11": {
    label: "Banco intermediario",
    summary: "Aprofunda consultas, relacionamento entre tabelas, otimizacao e integridade dos dados.",
    topics: ["joins", "indices", "integridade", "modelagem"],
    resources: [catalog.postgresDocs, catalog.oracleSql],
  },
  "12": {
    label: "UX e experiencia",
    summary: "Ajuda a pensar fluxo, usabilidade, consistencia, acessibilidade e comportamento do usuario.",
    topics: ["ux", "usabilidade", "fluxo", "acessibilidade"],
    resources: [catalog.webDesign, catalog.webAccessibility],
  },
  "13": {
    label: "Processo e qualidade",
    summary: "Bom para revisar requisitos, backlog, modelagem, versionamento e processo de desenvolvimento.",
    topics: ["requisitos", "processo", "qualidade", "documentacao"],
    resources: [catalog.mitSoftwareConcepts, catalog.gitBook],
  },
  "14": {
    label: "Web orientada a objetos",
    summary: "Une backend com POO, persistencia, arquitetura de aplicacoes e integracao com banco.",
    topics: ["java web", "mvc", "persistencia", "api"],
    resources: [catalog.oracleJava, catalog.springGuides, catalog.postgresDocs],
  },
  "15": {
    label: "Infra e sistemas",
    summary: "Bom para entender processos, escalonamento, arquivos, memoria e chamadas de sistema.",
    topics: ["processos", "threads", "memoria", "arquivos"],
    resources: [catalog.mitOperatingSystems, catalog.nand2tetris],
  },
  "16": {
    label: "Negocio e produto",
    summary: "Ajuda a relacionar tecnologia com proposta de valor, problema real e inovacao.",
    topics: ["produto", "modelo de negocio", "inovacao", "mercado"],
    resources: [catalog.mitEntrepreneurship, catalog.atlassianAgile],
  },
  "17": {
    label: "Engenharia aplicada",
    summary: "Continua o trabalho de processo, arquitetura, testes, manutencao e entrega de software.",
    topics: ["arquitetura", "testes", "refatoracao", "manutencao"],
    resources: [catalog.mitSoftwareWeb, catalog.mitSoftwareConcepts, catalog.gitBook],
  },
  "18": {
    label: "Probabilidade e analise",
    summary: "Boa base para distribuicoes, amostragem, interpretacao de graficos e leitura de dados.",
    topics: ["estatistica", "probabilidade", "graficos", "amostragem"],
    resources: [catalog.khanStatistics, catalog.oracleSql],
  },
  "19": {
    label: "Aplicacoes web mais robustas",
    summary: "Aprofunda integracao, camadas, persistencia, seguranca e padroes de aplicacao.",
    topics: ["spring", "api", "persistencia", "seguranca"],
    resources: [catalog.springGuides, catalog.oracleJava, catalog.postgresDocs],
  },
  "20": {
    label: "Infra e comunicacao de redes",
    summary: "Bom para revisar modelos de rede, enderecamento, protocolos, switches e roteamento.",
    topics: ["tcp/ip", "osi", "switching", "roteamento"],
    resources: [catalog.ciscoBasics, catalog.netAcad],
  },
  "21": {
    label: "Padroes de software",
    summary: "Ajuda a reconhecer problemas recorrentes de design e escolher solucoes mais sustentaveis.",
    topics: ["padroes", "solid", "refatoracao", "design"],
    resources: [catalog.refactoringGuru, catalog.mitSoftwareConcepts],
  },
  "22": {
    label: "Mobile e interfaces",
    summary: "Boa porta de entrada para ciclo de vida de apps, UI declarativa e consumo de dados no mobile.",
    topics: ["android", "kotlin", "ui", "estado"],
    resources: [catalog.androidBasics, catalog.composeBasics],
  },
  "23": {
    label: "Entrega de projeto",
    summary: "Material para organizacao, acompanhamento, definicao de escopo e colaboracao em equipe.",
    topics: ["escopo", "roadmap", "kanban", "versionamento"],
    resources: [catalog.atlassianAgile, catalog.gitBook, catalog.mitSoftwareWeb],
  },
  "24": {
    label: "Pesquisa e escrita tecnica",
    summary: "Ajuda a sair da ideia para o problema de pesquisa, referencial, cronograma e texto inicial.",
    topics: ["problema", "referencial", "planejamento", "escrita"],
    resources: [catalog.mitTechWriting, catalog.ncbiWriting],
  },
  "25": {
    label: "Gestao de execucao",
    summary: "Bom para backlog, acompanhamento, risco, comunicacao e organizacao de entregas.",
    topics: ["gestao", "sprint", "risco", "priorizacao"],
    resources: [catalog.atlassianAgile, catalog.gitBook],
  },
  "26": {
    label: "Web em nivel avancado",
    summary: "Serve para estudar performance, acessibilidade, stack moderna, APIs e boas praticas de producao.",
    topics: ["performance", "acessibilidade", "apis", "arquitetura"],
    resources: [catalog.webDev, catalog.springGuides, catalog.webAccessibility],
  },
  "27": {
    label: "Escrita final e publicacao",
    summary: "Material para redacao tecnica, organizacao das secoes, revisao e preparo para a banca.",
    topics: ["redacao", "revisao", "metodologia", "apresentacao"],
    resources: [catalog.mitTechWriting, catalog.ncbiWriting],
  },
};

