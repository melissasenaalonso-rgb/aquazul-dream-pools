import { useState } from "react";
import { Plus, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Import portfolio images
import piscinaResidencial from "@/assets/portfolio/piscina-residencial.jpg";
import piscinaRasa from "@/assets/portfolio/piscina-rasa.jpg";
import piscinaInfinity from "@/assets/portfolio/piscina-infinity.jpg";
import lagoOrnamental1 from "@/assets/portfolio/lago-ornamental-1.jpg";
import lagoOrnamental2 from "@/assets/portfolio/lago-ornamental-2.jpg";

// Import gallery images for Piscina Residencial
import piscinaResidencial1 from "@/assets/portfolio/piscina-residencial-1.jpg";
import piscinaResidencial2 from "@/assets/portfolio/piscina-residencial-2.jpg";
import piscinaResidencial3 from "@/assets/portfolio/piscina-residencial-3.jpg";
import piscinaResidencial4 from "@/assets/portfolio/piscina-residencial-4.jpg";
import piscinaResidencial5 from "@/assets/portfolio/piscina-residencial-5.jpg";

const piscinaResidencialGallery = [
  piscinaResidencial,
  piscinaResidencial1,
  piscinaResidencial2,
  piscinaResidencial3,
  piscinaResidencial4,
  piscinaResidencial5,
];

interface CaseItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery?: string[];
}

const cases: CaseItem[] = [
  {
    id: 1,
    title: "Piscina Residencial",
    category: "Piscinas",
    description: "Projeto completo com vista panorâmica e deck em madeira",
    image: piscinaResidencial,
    gallery: piscinaResidencialGallery,
  },
  {
    id: 2,
    title: "Lago Ornamental",
    category: "Lagos",
    description: "Lago com plantas aquáticas e pedras decorativas",
    image: lagoOrnamental1,
  },
  {
    id: 3,
    title: "Piscina Rasa",
    category: "Piscinas",
    description: "Design moderno com área de descanso integrada",
    image: piscinaRasa,
  },
  {
    id: 4,
    title: "Lago Ornamental",
    category: "Lagos",
    description: "Projeto natural integrado ao paisagismo",
    image: lagoOrnamental2,
  },
  {
    id: 5,
    title: "Piscina Infinity",
    category: "Piscinas",
    description: "Vista panorâmica com iluminação LED noturna",
    image: piscinaInfinity,
  },
];

const categories = ["Todos", "Piscinas", "Lagos", "Produtos e Acessórios"];

const Cases = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const filteredCases = activeCategory === "Todos" 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

  const handleCaseClick = (caseItem: CaseItem) => {
    if (caseItem.gallery && caseItem.gallery.length > 0) {
      setSelectedCase(caseItem);
      setIsGalleryOpen(true);
    }
  };

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
            Confira alguns dos nossos trabalhos e inspire-se para realizar o seu próximo projeto.
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
              className={`group overflow-hidden bg-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 ${caseItem.gallery ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCaseClick(caseItem)}
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

      {/* Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-secondary/95 backdrop-blur-lg border-border/50">
          <div className="relative p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-foreground">
                  {selectedCase?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedCase?.description}
                </p>
              </div>
              <DialogClose className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-foreground hover:bg-muted transition-colors">
                <X className="w-5 h-5" />
              </DialogClose>
            </div>

            {/* Carousel */}
            {selectedCase?.gallery && (
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedCase.gallery.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[16/10] overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`${selectedCase.title} - Imagem ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-background/80 hover:bg-background border-border" />
                <CarouselNext className="right-2 bg-background/80 hover:bg-background border-border" />
              </Carousel>
            )}

            {/* Thumbnails */}
            {selectedCase?.gallery && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {selectedCase.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-20 h-14 rounded-md overflow-hidden opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Cases;
