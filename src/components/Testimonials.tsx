import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Cliente desde 2019",
    content: "A Aquazul transformou meu quintal em um verdadeiro paraíso. Profissionais competentes e atenciosos do início ao fim do projeto.",
    rating: 5,
    avatar: "MS",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Cliente desde 2020",
    content: "Excelente trabalho na construção do nosso lago. A equipe foi pontual, organizada e o resultado superou nossas expectativas.",
    rating: 5,
    avatar: "JS",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Cliente desde 2018",
    content: "Já são 5 anos de parceria com a Aquazul para manutenção da nossa piscina. Serviço impecável e atendimento excepcional.",
    rating: 5,
    avatar: "AC",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-water relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A satisfação dos nossos clientes é o nosso maior orgulho. Confira alguns depoimentos.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
