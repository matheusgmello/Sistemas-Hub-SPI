import { PageTransition } from "@/components/page-transition";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookMarked, Code2, Globe, Database, Coffee, Container } from "lucide-react";

const categorizedMaterials = [
  {
    category: "Algoritmos e estruturas de dados em C",
    icon: Code2,
    items: [
      { title: "Estruturas de Dados em C", description: "Livro de Estruturas de dados em C", link: "https://github.com/ramonfsk/estruturadedados/blob/master/(ebook)Estruturas%20de%20Dados%20Usando%20C%20(Tenenbaum).pdf" },
      { title: "Algoritmos em C", description: "Algoritmos em C", link: "https://www.ime.usp.br/~pf/algoritmos-livro/downloads/Algoritmos-em-linguagem-C.pdf" }
    ]
  },
  {
    category: "Programação web PHP, HTML, CSS, JS",
    icon: Globe,
    items: [
      { title: "MDN Web Docs", description: "Documentação oficial para tecnologias web.", link: "https://developer.mozilla.org/" },
      { title: "PHP", description: "Práticas modernas de desenvolvimento com PHP.", link: "https://www.devmedia.com.br/guia/linguagem-php/38780" },
      { title: "HTML/CSS guide", description: "Guia de CSS e HTML", link: "https://www.devmedia.com.br/guia/programador-front-end/38792" },
      { title: "JavaScript Guide", description: "Tudo sobre o ecossistema JS moderno.", link: "https://www.devmedia.com.br/guia/programador-javascript/40182" }
    ]
  },
  {
    category: "Banco de dados",
    icon: Database,
    items: [
      { title: "SQL Tutorial", description: "Fundamentos e consultas avançadas em SQL.", link: "https://www.devmedia.com.br/guia/tecnologia-sql/37586" }
    ]
  },
  {
    category: "Programação Java, Spring",
    icon: Coffee,
    items: [
      { title: "Java Documentation", description: "Documentação oficial da linguagem Java.", link: "https://www.devmedia.com.br/guia/programador-java/37809" },
      { title: "Spring Framework Guide", description: "Desenvolvimento robusto com Spring Boot e Security.", link: "https://www.devmedia.com.br/guia/spring-framework/37806" }
    ]
  },
  {
    category: "Docker",
    icon: Container,
    items: [
      { title: "Docker Docs", description: "Documentação oficial de containerização.", link: "https://www.devmedia.com.br/guia/docker/40813" },
    ]
  },
  {
    category: "Plataformas Recomendadas",
    icon: BookMarked,
    items: [
      { title: "Roadmap.sh", description: "Trilhas de aprendizado para desenvolvedores.", link: "https://roadmap.sh/" },
      { title: "FreeCodeCamp", description: "Exercícios práticos e certificações gratuitas.", link: "https://www.freecodecamp.org/" }
    ]
  }
];

export default function StudyMaterials() {
  return (
    <PageTransition>
      <div className="space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-display mb-2">Material para Estudo</h1>
          <p className="text-muted-foreground">Conteúdos organizados por categorias para facilitar seu aprendizado.</p>
        </div>

        <div className="space-y-12">
          {categorizedMaterials.map((category, cIdx) => (
            <div key={cIdx} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-border/40 pb-2">
                <category.icon className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold font-display">{category.category}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, iIdx) => (
                  <a key={iIdx} href={item.link} target="_blank" rel="noopener noreferrer" className="block outline-none">
                    <Card className="h-full hover-elevate transition-all border-border/50 group hover:border-primary/50 cursor-pointer">
                      <CardHeader className="pb-3 flex flex-row items-start justify-between space-y-0">
                        <div className="flex gap-3">
                          <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                            <BookMarked className="w-5 h-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                              {item.title}
                            </CardTitle>
                            <CardDescription className="mt-2 text-sm leading-relaxed">
                              {item.description}
                            </CardDescription>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </CardHeader>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
