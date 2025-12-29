import { Waves, Fish, Droplets, Wrench, Sparkles, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Waves,
    title: "Construção de Piscinas",
    description: "Piscinas personalizadas de alvenaria, fibra ou vinil, projetadas para seu espaço e estilo de vida.",
  },
  {
    icon: Fish,
    title: "Construção de Lagos",
    description: "Lagos ornamentais e para criação de peixes, com sistema de filtragem e paisagismo integrado.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Serviços completos de manutenção preventiva e corretiva para sua piscina ou lago.",
  },
  {
    icon: Droplets,
    title: "Tratamento de Água",
    description: "Análise e tratamento químico profissional para água cristalina e saudável.",
  },
  {
    icon: Sparkles,
    title: "Reforma e Modernização",
    description: "Transforme sua piscina antiga em um espaço moderno com novos revestimentos e equipamentos.",
  },
  {
    icon: Shield,
    title: "Produtos e Acessórios",
    description: "Linha completa de produtos químicos, capas, aquecedores e acessórios para piscinas.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gradient-water">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Soluções completas para seu{" "}
            <span className="text-gradient">projeto aquático</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Da construção à manutenção, oferecemos tudo que você precisa para realizar o sonho da piscina ou lago perfeito.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-card border-border/50 hover:border-primary/30 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
