import { useState } from "react";
import { Plus, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Placeholder cases - can be replaced with real images later
const cases = [
  {
    id: 1,
    title: "Piscina Residencial",
    category: "Piscinas",
    description: "Projeto completo com cascata e iluminação LED",
    image: "https://scontent.fgru8-1.fna.fbcdn.net/v/t39.30808-6/607974857_1618513069515920_6444076586660683878_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=g1_7_TuakCAQ7kNvwF20t4G&_nc_oc=AdmyWJW32c-YG-ApySzwO7KsLZ4eyDSdQabIUEqvORnnZ91jQpi59I9bZ2ljvJjFaBA0VVMm8LyAmnbK7GPpUyGc&_nc_zt=23&_nc_ht=scontent.fgru8-1.fna&_nc_gid=3EXf8yze51xeVj969gX4rA&oh=00_AfmQjgDWXCtragDkGPeMAz0zzP4C_dJwQ4XxvucTItL6uQ&oe=69590259",
  },
  {
    id: 2,
    title: "Lago Ornamental",
    category: "Lagos",
    description: "Lago com carpas e plantas aquáticas",
    image: "https://scontent.fgru8-1.fna.fbcdn.net/v/t39.30808-6/606900399_1618514389515788_3367387341999722906_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=toEDdacmrywQ7kNvwHHRXL_&_nc_oc=Adlm0jlyRR6kiDKgJuSXIWOlYMZZtDA8z4K-7zyuzkiOFNbSQU9duzyTRUWEEwsD3oTrOSqU91MzABgxtk1A76K-&_nc_zt=23&_nc_ht=scontent.fgru8-1.fna&_nc_gid=IpG8UledrfEd9hk4AbehPA&oh=00_Afmn1jMkjvNgzBuxLoOT2w6bnrAeHf1M-sJo8hFPPjIxgQ&oe=695929DA",
  },
  {
    id: 3,
    title: "Piscina Rasas",
    category: "Piscinas",
    description: "Design moderno com fácil acesso para as crianças",
    image: "https://scontent.fgru8-1.fna.fbcdn.net/v/t39.30808-6/607198728_1618514909515736_2524766984308339971_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o5stLdu9BgoQ7kNvwEyjkKK&_nc_oc=Adn2oyURUOBXyVWx7b-wPzgvUQp4iW1K8QPFpl-2KaPxrIVSrCRJheHwTBlWbZC-VAT1ylkZTF5AcMJar9ofBTVO&_nc_zt=23&_nc_ht=scontent.fgru8-1.fna&_nc_gid=fW97FPwmxsVJYk5yDHnOdA&oh=00_Afn1fSuYb0Y0HR_A-s99RthjLkPKEAqn3mDZmyp5bn611Q&oe=69590D97",
  },
  {
    id: 4,
    title: "Lago Ornamental",
    category: "Lagos",
    description: "Lago com carpas e plantas aquáticas",
    image: "https://scontent.fgru8-1.fna.fbcdn.net/v/t39.30808-6/607113679_1618515812848979_3389124929621012481_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5c1Qvd6fsEYQ7kNvwG6YOGs&_nc_oc=AdntVyo33_gfD28LhNDZom4TGC0N1m4VtMsY-Vj3CNscGTp8yEQxcVgGT-pu7PhHxU554hLvFZq6uwl8ASIkhl9l&_nc_zt=23&_nc_ht=scontent.fgru8-1.fna&_nc_gid=meahqpyySRl2dfiTLM4t1w&oh=00_AfnABRChfg1pa_9rFlx8vOMmXzoqozbwxC-kC1TMPF-YqQ&oe=6959083D",
  },
  {
    id: 5,
    title: "Piscina Infinity",
    category: "Piscinas",
    description: "Vista panorâmica com borda infinita",
    image: "https://scontent.fgru8-1.fna.fbcdn.net/v/t39.30808-6/608196336_1618516972848863_8263067396390999363_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JBwLm2_HW6YQ7kNvwGNjwWU&_nc_oc=AdkgznR2AShykmfoye5WEBRukfKnBDO55G6ajdpyRgiaeD6Mx807s3gExXsLyn4E3hpn00ouL1WqxT0BnAxLuz09&_nc_zt=23&_nc_ht=scontent.fgru8-1.fna&_nc_gid=yGy7LoLNbsOfCw-ljqWvzQ&oh=00_Afm65Id-db6-yzmGp6s6geQIevLuyK_PJRMDGUrYLBMVaQ&oe=69592D9C",
  },
  {
    id: 6,
    title: "Produtos e Acessórios",
    category: "Produtos e Acessórios",
    description: "Linha completa de produtos para piscinas",
    image: "https://scontent.fgru8-1.fna.fbcdn.net/v/t39.30808-6/607649521_1619155512785009_8636038571645461630_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rQ2_Unb1szMQ7kNvwFZlDj0&_nc_oc=Adn_GHDN9oN2NPo7PIpCpB_E_1kNfKuMO0jNLcUz9E-TfZ7naPDMU015WV0xvfKOL6wnFXSNXbEVhCdiWR3fylhU&_nc_zt=23&_nc_ht=scontent.fgru8-1.fna&_nc_gid=igAm6btltlAz429hO1ZD_g&oh=00_Aflil9inTb0vCREhrTZ_cyi2vS5qihSpQDZn6HpUIEITHQ&oe=695A2C1A",
  },
];

const categories = ["Todos", "Piscinas", "Lagos", "Produtos e Acessórios"];

const Cases = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredCases = activeCategory === "Todos" 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

  return (
    <section id="cases" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Nossos <span className="text-gradient">projetos realizados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira alguns dos nossos trabalhos e inspire-se para realizar o seu próximo projeto.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "border-border text-foreground hover:border-primary hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((caseItem, index) => (
            <Card 
              key={caseItem.id}
              className="group overflow-hidden bg-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-primary-foreground">
                    <span className="text-sm font-medium text-primary/80">{caseItem.category}</span>
                    <h3 className="text-xl font-serif font-bold mb-2">{caseItem.title}</h3>
                    <p className="text-sm opacity-90">{caseItem.description}</p>
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary/40 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-4 md:hidden">
                <span className="text-sm font-medium text-primary">{caseItem.category}</span>
                <h3 className="text-lg font-serif font-bold text-card-foreground">{caseItem.title}</h3>
                <p className="text-sm text-muted-foreground">{caseItem.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Add more CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer adicionar fotos dos seus projetos?
          </p>
          <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Plus className="w-4 h-4" />
            Adicionar Projeto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
