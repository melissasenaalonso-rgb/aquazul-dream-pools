import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp",
    content: "(11) 94738-9962",
    href: "https://wa.me/5511947389962",
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
    content: "Seg a Sex: 08:30 às 18:00 e Sáb: 08:30 às 12:30",
    href: "#",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    mensagem: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.nome.trim() || !formData.telefone.trim() || !formData.email.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, telefone e e-mail.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleWhatsApp = () => {
    if (!validateForm()) return;

    const servicoTexto = formData.servico || "Não especificado";
    const mensagemTexto = formData.mensagem.trim() || "Sem mensagem adicional";

    const mensagemWhatsApp = `*Novo Orçamento - Aquazul*%0A%0A*Nome:* ${encodeURIComponent(formData.nome)}%0A*Telefone:* ${encodeURIComponent(formData.telefone)}%0A*E-mail:* ${encodeURIComponent(formData.email)}%0A*Serviço:* ${encodeURIComponent(servicoTexto)}%0A*Mensagem:* ${encodeURIComponent(mensagemTexto)}`;

    const whatsappUrl = `https://wa.me/5511947389962?text=${mensagemWhatsApp}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Complete o envio da mensagem no WhatsApp.",
    });

    clearForm();
  };

  const handleEmail = () => {
    if (!validateForm()) return;

    const servicoTexto = formData.servico || "Não especificado";
    const mensagemTexto = formData.mensagem.trim() || "Sem mensagem adicional";

    const subject = encodeURIComponent(`Novo Orçamento - ${formData.nome}`);
    const body = encodeURIComponent(
      `Novo Orçamento - Aquazul\n\nNome: ${formData.nome}\nTelefone: ${formData.telefone}\nE-mail: ${formData.email}\nServiço: ${servicoTexto}\nMensagem: ${mensagemTexto}`
    );

    const mailtoUrl = `mailto:aquazul1655@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, "_blank");

    toast({
      title: "Abrindo cliente de e-mail",
      description: "Complete o envio no seu aplicativo de e-mail.",
    });

    clearForm();
  };

  const clearForm = () => {
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      servico: "",
      mensagem: "",
    });
  };

  return (
    <section id="contato" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            Contato
          </span>
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6">
            Fale <span className="text-gradient">conosco</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-2">
            Estamos prontos para tirar seu sonho do papel. Entre em contato e solicite um orçamento sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact form */}
          <Card className="bg-card border-border/50 shadow-card">
            <CardContent className="p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-card-foreground mb-5 md:mb-6">
                Solicite um orçamento
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">
                      Nome completo
                    </label>
                    <Input 
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome" 
                      className="bg-background border-border focus:border-primary font-body text-sm md:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">
                      Telefone
                    </label>
                    <Input 
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999" 
                      className="bg-background border-border focus:border-primary font-body text-sm md:text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">
                    E-mail
                  </label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com" 
                    className="bg-background border-border focus:border-primary font-body text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">
                    Tipo de serviço
                  </label>
                  <select 
                    name="servico"
                    value={formData.servico}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-body text-sm md:text-base"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Construção de Piscina">Construção de Piscina</option>
                    <option value="Construção de Lago">Construção de Lago</option>
                    <option value="Produtos e Acessórios">Produtos e Acessórios</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">
                    Mensagem
                  </label>
                  <Textarea 
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Descreva seu projeto ou dúvida..."
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none font-body text-sm md:text-base"
                  />
                </div>
                
                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  Escolha como prefere enviar:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  <Button 
                    type="button" 
                    onClick={handleWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-5 md:py-6 transition-colors gap-2 text-sm md:text-base"
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                    Enviar via WhatsApp
                  </Button>
                  <Button 
                    type="button" 
                    onClick={handleEmail}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5 md:py-6 transition-colors gap-2 text-sm md:text-base"
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    Enviar via E-mail
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact info */}
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="group bg-card rounded-lg md:rounded-xl p-4 md:p-6 border border-border/50 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">{info.title}</h4>
                  <p className="text-muted-foreground text-xs md:text-base leading-tight">{info.content}</p>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-soft h-48 md:h-64">
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
