# Como Contribuir

O **Hub de Conhecimento SPI** e um projeto comunitario feito por estudantes para estudantes. Toda contribuicao que melhora a clareza, a atualizacao ou a experiencia do projeto e bem-vinda.

## Formas de Contribuir

### 1. Reportando Problemas

Encontrou um erro de digitacao, um link quebrado, uma informacao desatualizada ou algum comportamento estranho na interface?

- abra uma issue no repositorio;
- descreva o problema com clareza;
- informe em qual pagina ele acontece;
- se possivel, anexe print, video curto ou contexto adicional.

### 2. Sugerindo Melhorias

Se voce tiver uma ideia para melhorar o projeto, tambem vale contribuir abrindo uma issue.

Exemplos:

- novas paginas ou guias uteis para o curso;
- reorganizacao de conteudo;
- melhoria de acessibilidade;
- refinamentos de design e usabilidade;
- ampliacao de materiais de estudo.

## Contribuicao Tecnica

Se voce quiser contribuir diretamente no codigo:

1. Faca um fork do repositorio.
2. Crie uma branch para sua alteracao.
3. Implemente a mudanca.
4. Rode as validacoes necessarias.
5. Abra um pull request com uma descricao objetiva do que foi alterado.

Exemplo de fluxo:

```bash
git checkout -b feature/minha-melhoria
npm install
npm run check
npm run build
git add .
git commit -m "feat: adiciona melhoria na pagina de materiais"
git push origin feature/minha-melhoria
```

## Onde o Conteudo Fica

Grande parte do conteudo do projeto esta centralizada em arquivos estaticos dentro de `client/src/lib`.

Os principais pontos hoje sao:

- `client/src/lib/dados-hub.ts`
- `client/src/lib/guias-estudo.ts`

Ja a interface fica distribuida principalmente entre:

- `client/src/pages`
- `client/src/components`

## Boas Praticas Para Contribuir

- mantenha as mudancas focadas;
- prefira descricoes claras em commits e pull requests;
- preserve a identidade visual atual do projeto ao propor ajustes de interface;
- quando alterar conteudo academico, tente manter a informacao verificavel e objetiva;
- se mexer no frontend, valide o comportamento em tema claro e escuro;
- valide tambem a navegacao direta nas rotas principais quando mexer em layout ou roteamento;
- sempre que possivel, rode:

```bash
npm run check
npm run build
```

## Tipos de Contribuicao Bem-vindos

- correcoes de texto;
- atualizacao de contatos, links e informacoes do curso;
- novos materiais de estudo;
- ajustes de navegacao e experiencia;
- melhoria visual;
- organizacao de dados e documentacao.

## Pull Requests

Ao abrir um pull request, tente responder de forma simples:

- o que mudou;
- por que essa mudanca foi feita;
- como validar;
- se existe alguma observacao importante para revisao.
