import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoAquazul from "@/assets/logo-aquazul.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início", isRoute: false },
    { href: "/servicos", label: "Serviços", isRoute: true },
    { href: "#cases", label: "Projetos", isRoute: false },
    { href: "#sobre", label: "Sobre", isRoute: false },
    { href: "#contato", label: "Contato", isRoute: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      {/* Top bar */}
      <div className="hidden md:block bg-secondary text-secondary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+5511999999999" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              (11) 99999-9999
            </a>
            <a href="mailto:contato@aquazul.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              contato@aquazul.com.br
            </a>
          </div>
          <span className="font-medium">Mogi das Cruzes e Região</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img 
              src={logoAquazul} 
              alt="Aquazul Piscinas e Lagos" 
              className="w-14 h-14 rounded-full shadow-glow transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-bold text-secondary">Aquazul</h1>
              <p className="text-xs text-muted-foreground">Piscinas e Lagos</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-gradient-hero hover:opacity-90 transition-opacity text-primary-foreground font-semibold shadow-glow">
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground font-medium hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground font-medium hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Button className="bg-gradient-hero text-primary-foreground font-semibold mt-2 w-full">
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
