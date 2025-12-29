import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aquazul Piscinas e Lagos | Mogi das Cruzes - 20 Anos de Experiência</title>
        <meta 
          name="description" 
          content="Aquazul Piscinas e Lagos - Especialistas em construção e manutenção de piscinas e lagos em Mogi das Cruzes e região. 20 anos realizando sonhos. Solicite seu orçamento!" 
        />
        <meta name="keywords" content="piscinas, lagos, mogi das cruzes, construção de piscinas, manutenção de piscinas, reforma de piscinas" />
        <meta property="og:title" content="Aquazul Piscinas e Lagos | Mogi das Cruzes" />
        <meta property="og:description" content="20 anos realizando sonhos em piscinas. Construção, manutenção e reforma de piscinas e lagos." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aquazul.com.br" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Cases />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
