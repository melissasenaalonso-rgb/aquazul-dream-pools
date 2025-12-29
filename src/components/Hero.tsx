import { ArrowDown, Award, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Animated waves decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg 
          viewBox="0 0 1440 120" 
          className="absolute bottom-0 w-full h-32 text-background animate-wave"
          preserveAspectRatio="none"
        >
          <path 
            fill="currentColor" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-primary-foreground/20 animate-fade-in">
            <Award className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-semibold text-sm md:text-base">
              20 ANOS fazendo sonhos em piscinas
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transforme seu espaço em um{" "}
            <span className="relative">
              paraíso aquático
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="currentColor" strokeWidth="3"/>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Especialistas em construção e manutenção de piscinas e lagos em Mogi das Cruzes e região. 
            Qualidade, experiência e compromisso com seu sonho.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="bg-card text-secondary hover:bg-card/90 font-semibold text-lg px-8 py-6 shadow-card"
            >
              Solicitar Orçamento Grátis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6"
            >
              Ver Nossos Projetos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="flex items-center justify-center gap-3 text-primary-foreground">
                <Award className="w-8 h-8" />
                <div className="text-left">
                  <span className="text-3xl font-bold">20+</span>
                  <p className="text-sm opacity-80">Anos de experiência</p>
                </div>
              </div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="flex items-center justify-center gap-3 text-primary-foreground">
                <Users className="w-8 h-8" />
                <div className="text-left">
                  <span className="text-3xl font-bold">500+</span>
                  <p className="text-sm opacity-80">Clientes satisfeitos</p>
                </div>
              </div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="flex items-center justify-center gap-3 text-primary-foreground">
                <Wrench className="w-8 h-8" />
                <div className="text-left">
                  <span className="text-3xl font-bold">1000+</span>
                  <p className="text-sm opacity-80">Projetos realizados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary-foreground/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
