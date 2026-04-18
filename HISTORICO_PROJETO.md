# Historico do Projeto

Este arquivo serve como memoria viva do projeto `Sistemas-Hub-SPI`.
Nossa ideia e manter aqui o contexto tecnico, o historico recente, os residuos de scaffold herdados da Replit e as decisoes de refatoracao que forem acontecendo.

## Resumo Atual

- Nome funcional do projeto: Hub de Conhecimento / guia de sobrevivencia do curso SPI.
- Objetivo do produto: centralizar informacoes uteis para estudantes de Sistemas para Internet.
- Estado atual: aplicacao com frontend React/Vite e um backend Express minimo usado principalmente para servir o app.
- Modelo de dados atual: conteudo majoritariamente estatico e hardcoded em `client/src/lib/mock-data.ts`.
- Roteamento do frontend: `wouter`.
- UI: Tailwind CSS + componentes `shadcn/ui` + `framer-motion`.

## Stack e Estrutura

### Frontend

- `client/src/App.tsx`: estrutura principal do layout, providers, sidebar e rotas.
- `client/src/pages/*`: paginas do hub.
- `client/src/components/*`: componentes de layout e biblioteca de UI.
- `client/src/lib/mock-data.ts`: principal fonte de conteudo estatico do projeto.
- `client/src/lib/queryClient.ts`: utilitarios de fetch/react-query, mesmo sem uso forte de API no estado atual.

### Backend

- `server/index.ts`: sobe o Express, registra middlewares e inicializa Vite em dev.
- `server/routes.ts`: hoje possui apenas uma rota dummy (`/api/dummy`).
- `server/vite.ts`: integracao customizada entre Express e Vite para desenvolvimento.
- `server/static.ts`: serve o build do frontend em producao.

### Build e execucao

- `npm run dev`: roda `tsx server/index.ts`.
- `npm run build`: build do cliente via Vite + bundle do servidor via esbuild.
- `npm run start`: sobe `dist/index.cjs`.

## Residuos Herdados da Replit

Itens encontrados que indicam origem ou acoplamento com scaffold da Replit:

- Arquivo `.replit`.
- Dependencias `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` e `@replit/vite-plugin-runtime-error-modal`.
- Arquitetura com `server/` mesmo para um caso de uso que hoje parece majoritariamente estatico.
- Dependencias de backend que nao parecem essenciais para o produto atual, como `passport`, `passport-local`, `express-session`, `connect-pg-simple`, `pg`, `drizzle-orm` e correlatas.
- Script de build com allowlist ampla em `script/build.ts`, sugerindo reaproveitamento de template mais generico do que o necessario.

## Leitura Tecnica do Estado Atual

### O que o projeto parece ser de verdade

Pelo codigo atual, o produto se comporta mais como um portal de conteudo estatico com navegacao SPA do que como uma aplicacao full-stack real.

### O que a documentacao atual diz

O `README.md` descreve o projeto como uma aplicacao web estatica.

### Divergencia importante

Existe uma divergencia entre a documentacao e a implementacao:

- o README fala em site estatico;
- o repositorio hoje roda via servidor Express;
- existe infraestrutura de API, autenticacao e banco instalada, mas quase sem uso real;
- o conteudo do produto esta hardcoded no frontend.

Essa divergencia deve orientar a refatoracao: antes de simplificar, precisamos decidir se o produto vai continuar sendo essencialmente estatico ou se vamos aproveitar a base atual para crescer como app full-stack.

## Oportunidades de Refatoracao

### Alta prioridade

- Mapear e remover dependencias e arquivos da Replit que nao agregam mais valor.
- Decidir se o backend Express continua existindo.
- Simplificar o fluxo de desenvolvimento e deploy para refletir o uso real do projeto.
- Revisar `package.json` para remover pacotes sem uso.

### Media prioridade

- Quebrar `client/src/lib/mock-data.ts` em modulos menores por dominio.
- Melhorar a documentacao raiz para refletir o estado real do codigo.
- Revisar textos e possiveis problemas de encoding/acentuacao durante manutencoes.

### Baixa prioridade

- Avaliar se `react-query` ainda faz sentido no estado atual.
- Revisar a pasta `attached_assets` para entender o que e historico util e o que e sobra de processo.

## Historico Inicial Conhecido

Com base no `git log` recente:

- `8ee02f7` - remove favicon antiga.
- `3b14b12` - corrige favicon e adiciona novo contributor.
- `9895735` - adiciona guia detalhado de trilhas de carreira.
- `e2f7a80` - adiciona novo membro na pagina de contribuidores e corrige direcionamento para SPI.
- `a4e979d` - merge de PR com ajustes na area do DASPI.

## Estado Local no Momento Desta Leitura

Havia alteracoes locais nao comitadas nestes arquivos:

- `package.json`
- `package-lock.json`
- `server/index.ts`

Importante: essas alteracoes nao foram revertidas nem modificadas por esta etapa de mapeamento.

## Hipoteses de Direcao

Hoje existem dois caminhos naturais para a refatoracao:

1. Reduzir o projeto para um frontend puro em Vite, removendo o backend e os residuos da Replit.
2. Manter a estrutura full-stack, mas limpando dependencias inutilizadas e definindo um plano real para APIs/dados dinamicos.

No estado atual do codigo, o caminho 1 parece o mais coerente, mas essa decisao deve ser tomada junto com as proximas tasks.

## Combinado para as Proximas Tasks

Sempre que fizermos uma mudanca relevante, vale atualizar este arquivo com:

- data;
- decisao tomada;
- motivacao;
- arquivos afetados;
- riscos ou pendencias.

## Proxima Leitura Recomendada

Se formos continuar a refatoracao, os arquivos mais importantes para atacar primeiro sao:

- `package.json`
- `.replit`
- `vite.config.ts`
- `server/index.ts`
- `server/routes.ts`
- `script/build.ts`
- `client/src/lib/mock-data.ts`

## Registro de Mudancas

### 2026-04-18 - Limpeza inicial + Vercel Analytics

Motivacao:

- remover sobras evidentes de scaffold/template;
- reduzir ruido tecnico antes da refatoracao maior;
- preparar o projeto para observabilidade basica na Vercel.

Mudancas aplicadas:

- instalacao de `@vercel/analytics`;
- integracao do componente `Analytics` em `client/src/App.tsx`;
- remocao de plugins da Replit e aliases nao usados em `vite.config.ts`;
- remocao da rota dummy em `server/routes.ts`;
- simplificacao do `tsconfig.json`, removendo referencia a `shared`;
- limpeza inicial de dependencias sem uso do `package.json`/`package-lock.json`;
- enxugamento da allowlist de build em `script/build.ts`.

Arquivos/pastas identificados como sem funcionalidade real e candidatos claros a remocao:

- `.replit`
- `drizzle.config.ts`
- `server/storage.ts`
- `shared/schema.ts`
- `shared/routes.ts`
- `attached_assets/`

Observacao:

- esses itens foram classificados como sem uso pelo codigo atual;
- se algum deles estiver sendo mantido apenas como arquivo historico, podemos arquivar em outra pasta em vez de excluir definitivamente.

### 2026-04-18 - Refatoracao da pagina de materiais

Motivacao:

- alinhar a pagina de materiais com a grade real do curso;
- sair de uma lista generica de links para uma experiencia por disciplina;
- deixar a navegacao mais util para futuras manutencoes e expansoes.

Mudancas aplicadas:

- criacao de `client/src/lib/study-guides.ts` com guias por disciplina e trilhas base;
- repaginacao completa de `client/src/pages/study-materials.tsx`;
- adicao de materiais para todas as disciplinas atuais da grade;
- inclusao de busca por termo e filtro por periodo.

Resultado funcional:

- a pagina agora cobre as 27 materias cadastradas em `subjects`;
- cada materia passou a exibir foco de estudo e links recomendados;
- o layout foi reorganizado com destaque inicial, rotas base e blocos por periodo.

Observacoes:

- os links foram curados com base em fontes abertas e amplamente reconhecidas, incluindo documentacoes oficiais e materiais educacionais consolidados;
- o build atual passa, mas o Vite segue emitindo warning de chunk grande no bundle do frontend, algo que pode virar task de performance depois.
