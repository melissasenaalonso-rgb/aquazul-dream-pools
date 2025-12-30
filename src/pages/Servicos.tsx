import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Servicos = () => {
  return (
    <>
      <Helmet>
        <title>Nossos Serviços | Aquazul Piscinas e Lagos</title>
        <meta 
          name="description" 
          content="Conheça todos os serviços da Aquazul: construção de piscinas e lagos, manutenção, tratamento de água, reformas e produtos. Atendemos Mogi das Cruzes e região." 
        />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-8">
          <div className="container mx-auto px-4 mb-8">
            <Link to="/">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Button>
            </Link>
          </div>
          <Services />
          
          {/* CTA Section */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-secondary-foreground mb-4">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
                Entre em contato conosco e solicite um orçamento sem compromisso.
              </p>
              <Link to="/#contato">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Servicos;
