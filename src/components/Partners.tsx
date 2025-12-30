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
];

const Partners = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Marcas Parceiras
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado para garantir qualidade e durabilidade em todos os nossos projetos.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-background rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center w-full h-24 group"
            >
              <img 
                src={partner.logo} 
                alt={`Logo ${partner.name}`}
                className="max-h-16 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
