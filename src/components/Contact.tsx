import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 4722-8089",
    href: "tel:+551147228089",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "aquazul1655@gmail.com",
    href: "mailto:aquazul1655@gmail.com",
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "Av. Francisco Ferreira Lopes, 1655 - Vila Lavinia, Mogi das Cruzes - SP",
    href: "#",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg a Sex: 08:30 às 18:00" <br /> "Sáb: 08:30 às 13:30",
    href: "#",
  },
];

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Fale <span className="text-gradient">conosco</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você e realizar o seu sonho. Entre em contato para um orçamento sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="bg-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-card-foreground mb-6">
                Solicite um orçamento
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome completo
                    </label>
                    <Input 
                      placeholder="Seu nome" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input 
                      placeholder="(11) 99999-9999" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-mail
                  </label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tipo de serviço
                  </label>
                  <select className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Selecione um serviço</option>
                    <option value="piscina">Construção de Piscina</option>
                    <option value="lago">Construção de Lago</option>
                    <option value="produtos">Produtos e Acessórios</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Descreva seu projeto ou dúvida..."
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-hero text-primary-foreground font-semibold py-6 shadow-glow hover:opacity-90 transition-opacity gap-2">
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="group bg-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  <p className="text-muted-foreground">{info.content}</p>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-soft h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7315.736291017295!2d-46.22907845930333!3d-23.537244365265288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce77e7dd9ad6c9%3A0xf43fb49f632a09ec!2sAquazul%20Piscinas%20e%20Lagos!5e0!3m2!1spt-BR!2sbr!4v1767061981073!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Aquazul"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
