import atlasLogo from "@/assets/partners/atlas.jpg";
import crisaguaLogo from "@/assets/partners/crisagua.png";
import gencoLogo from "@/assets/partners/genco.jpg";
import hthLogo from "@/assets/partners/hth.jpg";
import nautilosLogo from "@/assets/partners/nautilos.svg";
import rheemLogo from "@/assets/partners/rheem.png";
import sibrapeLogo from "@/assets/partners/sibrape.png";
import sodramarLogo from "@/assets/partners/sodramar.png";
import strufaldiLogo from "@/assets/partners/strufaldi.svg";
import tholzLogo from "@/assets/partners/tholz.jpg";
import viapolLogo from "@/assets/partners/viapol.png";
import atcllorLogo from "@/assets/partners/atcllor.webp";
import neoclorLogo from "@/assets/partners/neoclor.webp";
import syllentLogo from "@/assets/partners/syllent.png";
import hidrovinilLogo from "@/assets/partners/hydrovinil.jpeg";
import pooltecLogo from "@/assets/partners/pooltec.webp";
import q1AmbientalLogo from "@/assets/partners/q1-ambiental.png";

const partners = [
  { name: "Sodramar", logo: sodramarLogo },
  { name: "Naútilos", logo: nautilosLogo },
  { name: "Genco", logo: gencoLogo },
  { name: "HTH", logo: hthLogo },
  { name: "Rheem", logo: rheemLogo },
  { name: "Sibrape", logo: sibrapeLogo },
  { name: "Tholz", logo: tholzLogo },
  { name: "Atlas", logo: atlasLogo },
  { name: "Cris Água", logo: crisaguaLogo },
  { name: "Strufaldi", logo: strufaldiLogo },
  { name: "Viapol", logo: viapolLogo },
  { name: "ATcllor", logo: atcllorLogo },
  { name: "NeoClor", logo: neoclorLogo },
  { name: "Syllent", logo: syllentLogo },
  { name: "Hydrovinil", logo: hidrovinilLogo },
  { name: "Pooltec", logo: pooltecLogo },
  { name: "Q1 Ambiental", logo: q1AmbientalLogo },
];

const Partners = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Marcas Parceiras
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Trabalhamos com as melhores marcas do mercado para garantir qualidade e durabilidade em todos os nossos projetos.
          </p>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-6 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-background rounded-lg md:rounded-xl p-2 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center w-full h-16 md:h-24 group"
            >
              <img 
                src={partner.logo} 
                alt={`Logo ${partner.name}`}
                className="max-h-10 md:max-h-16 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
