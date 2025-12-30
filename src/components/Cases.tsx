import { useState } from "react";
import { Plus, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Placeholder cases - can be replaced with real images later
const cases = [
  {
    id: 1,
    title: "Piscina Residencial",
    category: "Piscinas",
    description: "Projeto completo com cascata e iluminação LED",
    image: "file:///C:/Users/win/OneDrive/Imagens/Imagens%20aquazul/PORTFOLIO1.jpg",
  },
  {
    id: 2,
    title: "Lago Ornamental",
    category: "Lagos",
    description: "Lago com carpas e plantas aquáticas",
    image: "https://images.unsplash.com/photo-1510680940966-e538b8cbbe70?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Piscina com Prainha",
    category: "Piscinas",
    description: "Design moderno com área de prainha para crianças",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Lago para Criação de Peixes",
    category: "Lagos",
    description: "Sistema de filtragem profissional para tilápias",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Piscina Infinity",
    category: "Piscinas",
    description: "Vista panorâmica com borda infinita",
    image: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Produtos e Acessórios",
    category: "Produtos e Acessórios",
    description: "Linha completa de produtos para piscinas",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
];

const categories = ["Todos", "Piscinas", "Lagos", "Produtos e Acessórios"];

const Cases = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredCases = activeCategory === "Todos" 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

  return (
    <section id="cases" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Nossos <span className="text-gradient">projetos realizados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira alguns dos nossos trabalhos e inspire-se para realizar o seu projeto dos sonhos.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "border-border text-foreground hover:border-primary hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((caseItem, index) => (
            <Card 
              key={caseItem.id}
              className="group overflow-hidden bg-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-primary-foreground">
                    <span className="text-sm font-medium text-primary/80">{caseItem.category}</span>
                    <h3 className="text-xl font-serif font-bold mb-2">{caseItem.title}</h3>
                    <p className="text-sm opacity-90">{caseItem.description}</p>
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary/40 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-4 md:hidden">
                <span className="text-sm font-medium text-primary">{caseItem.category}</span>
                <h3 className="text-lg font-serif font-bold text-card-foreground">{caseItem.title}</h3>
                <p className="text-sm text-muted-foreground">{caseItem.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Add more CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer adicionar fotos dos seus projetos?
          </p>
          <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Plus className="w-4 h-4" />
            Adicionar Projeto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
