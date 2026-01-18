import { CheckCircle, Award, MapPin, Clock } from "lucide-react";
import logoAquazul from "@/assets/logo-aquazul.jpg";
import aboutPool from "@/assets/about-pool.jpg";

const features = [
  "Profissionais qualificados",
  "Materiais de qualidade",
  "Garantia em todos os serviços",
  "Atendimento personalizado",
  "Orçamento sem compromisso",
  "Pontualidade na entrega",
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-card font-serif">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and badge */}
          <div className="relative">
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={aboutPool}
                  alt="Piscina construída pela Aquazul"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-card p-4 flex items-center gap-4 border border-border">
                <img 
                  src={logoAquazul}
                  alt="Logo Aquazul"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <span className="text-2xl font-bold text-primary">20+</span>
                  <p className="text-sm text-muted-foreground">Anos de experiência</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-12 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>

          {/* Right side - Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre a Aquazul
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Há mais de 20 anos cuidando{" "}
              <span className="text-gradient">dos seus momentos de lazer</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A Aquazul Piscinas e Lagos nasceu com o propósito de proporcionar lazer e bem-estar às famílias. Ao longo de duas décadas, construímos uma trajetória sólida na construção de piscinas e lagos.
            </p>
            <p className="text-muted-foreground mb-8">
              Nossa missão é desenvolver espaços de lazer com qualidade, aplicando técnicas e materiais adequados, sempre com atendimento próximo e compromisso com a satisfação do cliente.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Info boxes */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Mogi das Cruzes e região</span>
              </div>
              <div className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Seg - Sex: 08:30 às 18:00 e Sáb: 08:30 às 12:30 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
