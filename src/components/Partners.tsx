const partners = [
  { name: "Sodramar", logo: "https://www.sodramar.com.br/theme/web/imgs/logo-sodramar.png" },
  { name: "Naútilos", logo: "https://nautilos.com.br/wp-content/uploads/2023/03/logo-nautilos.png" },
  { name: "Genco", logo: "https://genco.com.br/wp-content/uploads/2021/04/logo-genco.png" },
  { name: "HTH", logo: "https://hth.com.br/wp-content/uploads/2021/03/logo-hth.png" },
  { name: "Rheem", logo: "https://www.rheem.com.br/wp-content/uploads/2020/08/logo-rheem.png" },
  { name: "Sibrape", logo: "https://sibrape.com.br/wp-content/uploads/2021/05/logo-sibrape.png" },
  { name: "Tholz", logo: "https://tholz.com.br/wp-content/uploads/2021/01/logo-tholz.png" },
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center w-full h-24 group"
            >
              <span className="text-lg font-semibold text-foreground/70 group-hover:text-primary transition-colors text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
