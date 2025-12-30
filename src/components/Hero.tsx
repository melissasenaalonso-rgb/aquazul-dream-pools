import { useState, useEffect } from "react";
import { ArrowDown, Award, Users, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroPool1 from "@/assets/hero-pool-1.jpg";
import heroPool2 from "@/assets/hero-pool-2.jpg";
import heroPool3 from "@/assets/hero-pool-3.jpg";

const heroImages = [heroPool1, heroPool2, heroPool3];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background carousel images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Piscina ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/80" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Carousel navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-card/20 backdrop-blur-sm hover:bg-card/40 text-primary-foreground p-2 rounded-full transition-all"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-card/20 backdrop-blur-sm hover:bg-card/40 text-primary-foreground p-2 rounded-full transition-all"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary-foreground scale-110"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Animated waves decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden z-10">
        <svg 
          viewBox="0 0 1550 120" 
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
            Mais Lazer,{" "}
            <span className="relative">
              com Qualidade
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="currentColor" strokeWidth="3"/>
              </svg>
            </span>
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Construção de piscinas e lagos, com experiência e compromisso com seu sonho.
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
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 shadow-card"
            >
              Ver Nossos Projetos
            </Button>
          </div>

          {/* Stats */}
          <div className="" style={{ animationDelay: "0.4s" }}>
            <div className="">
              <div className="flex items-center justify-center gap-3 text-primary-foreground">
                
                <div className="text-left">
                  <span className=""></span>
                  <p className="text-sm opacity-80"></p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-center gap-3 text-primary-foreground">
                
                <div className="text-left">
                  <span className="text-3xl font-bold"></span>
                  <p className="text-sm opacity-80"></p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-center gap-3 text-primary-foreground">
                
                <div className="text-left">
                  <span className="text-3xl font-bold"></span>
                  <p className="text-sm opacity-80"></p>
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
