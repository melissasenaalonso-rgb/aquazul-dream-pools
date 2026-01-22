import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

// Import portfolio images
import piscinaResidencial from "@/assets/portfolio/piscina-residencial.jpg";
import piscinaRasa from "@/assets/portfolio/piscina-rasa.jpg";
import piscinaInfinity from "@/assets/portfolio/piscina-infinity.jpg";
import lagoOrnamental1 from "@/assets/portfolio/lago-ornamental-1.jpg";
import lagoOrnamental2 from "@/assets/portfolio/lago-ornamental-2.jpg";

// Import gallery images for Piscina Residencial (Alvenaria)
import piscinaResidencial1 from "@/assets/portfolio/piscina-residencial-1.jpg";
import piscinaResidencial2 from "@/assets/portfolio/piscina-residencial-2.jpg";
import piscinaResidencial3 from "@/assets/portfolio/piscina-residencial-3.jpg";
import piscinaResidencial4 from "@/assets/portfolio/piscina-residencial-4.jpg";
import piscinaResidencial5 from "@/assets/portfolio/piscina-residencial-5.jpg";

// Import gallery images for Lagos Ornamentais
import lagoOrnamental3 from "@/assets/portfolio/lago-ornamental-3.jpg";
import lagoOrnamental4 from "@/assets/portfolio/lago-ornamental-4.jpg";
import lagoOrnamental5 from "@/assets/portfolio/lago-ornamental-5.jpg";

// Import gallery images for Piscina Rasa (Vinil)
import piscinaRasa1 from "@/assets/portfolio/piscina-rasa-1.jpg";
import piscinaRasa2 from "@/assets/portfolio/piscina-rasa-2.jpg";
import piscinaRasa3 from "@/assets/portfolio/piscina-rasa-3.jpg";
import piscinaRasa4 from "@/assets/portfolio/piscina-rasa-4.jpg";

// Import gallery images for Lago Ornamental 2
import lagoOrnamental2_1 from "@/assets/portfolio/lago-ornamental-2-1.jpg";
import lagoOrnamental2_2 from "@/assets/portfolio/lago-ornamental-2-2.jpg";
import lagoOrnamental2_3 from "@/assets/portfolio/lago-ornamental-2-3.jpg";
import lagoOrnamental2_4 from "@/assets/portfolio/lago-ornamental-2-4.jpg";

// Import gallery images for Piscina Infinity (Vinil)
import piscinaInfinity1 from "@/assets/portfolio/piscina-infinity-1.jpg";
import piscinaInfinity2 from "@/assets/portfolio/piscina-infinity-2.jpg";
import piscinaInfinity3 from "@/assets/portfolio/piscina-infinity-3.jpg";
import piscinaInfinity4 from "@/assets/portfolio/piscina-infinity-4.jpg";
import piscinaInfinity5 from "@/assets/portfolio/piscina-infinity-5.jpg";

// Gallery arrays for each category
const piscinasAlvenariaImages = [
  piscinaResidencial,
  piscinaResidencial1,
  piscinaResidencial2,
  piscinaResidencial3,
  piscinaResidencial4,
  piscinaResidencial5,
];

const piscinasVinilImages = [
  piscinaRasa,
  piscinaRasa1,
  piscinaRasa2,
  piscinaRasa3,
  piscinaRasa4,
  piscinaInfinity,
  piscinaInfinity1,
  piscinaInfinity2,
  piscinaInfinity3,
  piscinaInfinity4,
  piscinaInfinity5,
];

const lagosOrnamentaisImages = [
  lagoOrnamental1,
  lagoOrnamental2,
  lagoOrnamental3,
  lagoOrnamental4,
  lagoOrnamental5,
  lagoOrnamental2_1,
  lagoOrnamental2_2,
  lagoOrnamental2_3,
  lagoOrnamental2_4,
];

interface CaseItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery: string[];
}

const cases: CaseItem[] = [
  {
    id: 1,
    title: "Piscinas Alvenaria",
    category: "Piscinas",
    description: "Projetos em alvenaria com acabamento premium",
    image: piscinaResidencial,
    gallery: piscinasAlvenariaImages,
  },
  {
    id: 2,
    title: "Piscinas Vinil",
    category: "Piscinas",
    description: "Piscinas com revestimento em vinil de alta qualidade",
    image: piscinaRasa,
    gallery: piscinasVinilImages,
  },
  {
    id: 3,
    title: "Lagos Ornamentais",
    category: "Lagos",
    description: "Lagos decorativos integrados ao paisagismo",
    image: lagoOrnamental1,
    gallery: lagosOrnamentaisImages,
  },
];

const categories = ["Todos", "Piscinas", "Lagos"];

const Cases = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  return (
    <section id="cases" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="inline-block text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            Portfólio
          </span>
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6">
            Nossos <span className="text-gradient">projetos realizados</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-2">
            Confira alguns dos nossos trabalhos e inspire-se para realizar o seu próximo projeto.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              size="sm"
              className={`text-sm md:text-base ${activeCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "border-border text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Cards view for "Todos" */}
        {activeCategory === "Todos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {cases.map((caseItem, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-end p-6">
                    <div className="text-primary-foreground">
                      <span className="text-sm font-medium text-primary/80">{caseItem.category}</span>
                      <h3 className="text-xl font-serif font-bold mb-2">{caseItem.title}</h3>
                      <p className="text-sm opacity-90">{caseItem.description}</p>
                    </div>
                  </div>
                </div>
                {/* Always visible info */}
                <div className="p-4">
                  <span className="text-xs md:text-sm font-medium text-primary">{caseItem.category}</span>
                  <h3 className="text-base md:text-lg font-serif font-bold text-card-foreground">{caseItem.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{caseItem.description}</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Grid view for "Piscinas" */}
        {activeCategory === "Piscinas" && (
          <div className="space-y-8 md:space-y-12">
            {/* Piscinas Alvenaria Section */}
            <div>
              <Button
                variant="outline"
                className="mb-4 md:mb-6 border-primary text-primary pointer-events-none"
                size="sm"
              >
                Piscinas Alvenaria
              </Button>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {piscinasAlvenariaImages.map((image, index) => (
                  <div
                    key={`alvenaria-${index}`}
                    className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Piscina Alvenaria - Imagem ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Piscinas Vinil Section */}
            <div>
              <Button
                variant="outline"
                className="mb-4 md:mb-6 border-primary text-primary pointer-events-none"
                size="sm"
              >
                Piscinas Vinil
              </Button>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {piscinasVinilImages.map((image, index) => (
                  <div
                    key={`vinil-${index}`}
                    className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Piscina Vinil - Imagem ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Grid view for "Lagos" */}
        {activeCategory === "Lagos" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {lagosOrnamentaisImages.map((image, index) => (
              <div
                key={`lago-${index}`}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Lago Ornamental - Imagem ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        )}

        {/* Add more CTA */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            Quer adicionar fotos dos seus projetos?
          </p>
          <Button variant="outline" size="sm" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Plus className="w-4 h-4" />
            Adicionar Projeto
          </Button>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-secondary/95 backdrop-blur-lg border-border/50 overflow-hidden">
          <div className="relative">
            <DialogClose className="absolute top-3 right-3 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted/50 flex items-center justify-center text-foreground hover:bg-muted transition-colors">
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </DialogClose>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Cases;
