import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Monica Morais",
    role: "Cliente desde 2025",
    content: "Atendimento impecável, todos muito atenciosos, profissionais qualificados!",
    rating: 5,
    avatar: "MM",
  },
  {
    id: 2,
    name: "Anderson Neves",
    role: "Cliente desde 2020",
    content: "Fui muito bem atendido. Foram Fiéis e Responsáveis ao orçamento e a entrega dos produtos. Parabéns e Obrigado!",
    rating: 5,
    avatar: "AN",
  },
  {
    id: 3,
    name: "Melissa Sena",
    role: "Cliente desde 2018",
    content: "Já são 6 anos de parceria com a Aquazul para manutenção da nossa piscina. Serviço impecável e atendimento excepcional.",
    rating: 5,
    avatar: "MS",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-water relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            Depoimentos
          </span>
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-2">
            A satisfação dos nossos clientes é o nosso maior orgulho. Confira alguns depoimentos.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 md:p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/20 mb-3 md:mb-4" />
                
                {/* Rating */}
                <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm md:text-base text-foreground mb-4 md:mb-6 italic font-serif">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm md:text-base">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
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
