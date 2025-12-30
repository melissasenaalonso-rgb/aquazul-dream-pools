import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import logoAquazul from "@/assets/logo-aquazul.jpg";

const Footer = () => {
  return (
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
                href="https://wa.me/5511947389962" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              </a>
              <a 
                href="https://www.instagram.com/aquazul_piscinas/" 
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
                <a href="tel:+551147228089" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  (11) 4722-8089
                </a>
              </li>
              <li>
                <a href="mailto:aquazul1655@gmail.com" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  aquazul1655@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                Mogi das Cruzes - SP e Região
              </li>
              <li>
                <a href="https://wa.me/5511947389962" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
                  <WhatsApp className="w-5 h-5 flex-shrink-0" />
                  (11) 94738-9962
                </a>
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
              <a href="https://www.instagram.com/aquazul_piscinas/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
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
