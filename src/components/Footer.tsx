import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import logoAquazul from "@/assets/logo-aquazul.jpg";

const Footer = () => {
  return (
    {/* Marcas Parceiras */}
<section class="marcas-parceiras">
  <h2>Marcas Parceiras</h2>

  <div class="conteudo-marcas">
    <img src="img/sodrama.png" alt="Logo Sodrama">
    <img src="img/nautilos.png" alt="Logo Naútilos">
    <img src="img/genco.png" alt="Logo Genco">
    <img src="img/hth.png" alt="Logo HTH">
    <img src="img/rheem.png" alt="Logo Rheem">
    <img src="img/sibrape.png" alt="Logo Sibrape">
    <img src="img/tholz.png" alt="Logo Tholz">
  </div>
</section>
      
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoAquazul}
                alt="Aquazul"
                className="w-16 h-16 rounded-full shadow-glow"
              />
              <div>
                <h3 className="text-xl font-serif font-bold">Aquazul</h3>
                <p className="text-sm opacity-80">Piscinas e Lagos</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-6">
              Há 20 anos realizando sonhos em piscinas e lagos na região de Mogi das Cruzes.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/aquazulpiscinas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/aquazulpiscinas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Início", "Serviços", "Projetos", "Sobre", "Contato"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Construção de Piscinas",
                "Construção de Lagos",
                "Manutenção",
                "Tratamento de Água",
                "Reforma e Modernização",
                "Produtos e Acessórios",
              ].map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+5511999999999" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a href="mailto:contato@aquazul.com.br" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  contato@aquazul.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                Mogi das Cruzes - SP e Região
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© 2024 Aquazul Piscinas e Lagos. Todos os direitos reservados.</p>
            <p className="flex items-center gap-2">
              Siga-nos nas redes sociais:
              <a href="https://facebook.com/aquazulpiscinas" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/aquazulpiscinas" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Instagram className="w-4 h-4" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
      
export default Footer;
