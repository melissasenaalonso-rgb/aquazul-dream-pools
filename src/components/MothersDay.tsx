import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import mae1 from "@/assets/maes/mae1.jpeg";
import mae2 from "@/assets/maes/mae2.jpeg";
import mae3 from "@/assets/maes/mae3.jpeg";
import mae4 from "@/assets/maes/mae4.jpeg";
import mae5 from "@/assets/maes/mae5.jpeg";

const moms = [
  { src: mae1, caption: "Amor que inspira" },
  { src: mae2, caption: "Sorrisos que aquecem" },
  { src: mae3, caption: "Família que acolhe" },
  { src: mae4, caption: "União que fortalece" },
  { src: mae5, caption: "Carinho que transborda" },
];

const MothersDay = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section
      id="dia-das-maes"
      className="py-20 bg-gradient-to-b from-background via-aqua/5 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-aqua blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-lagoon blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aqua/10 text-aqua text-sm font-medium mb-4">
            <Heart className="w-4 h-4 fill-current" />
            Especial Dia das Mães
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Mães Aquazul: <span className="text-aqua">Nossa Inspiração</span>
          </h2>
          <p className="text-aqua-dark text-lg md:text-2xl font-medium leading-relaxed">
            Uma homenagem carinhosa às mães da nossa equipe, que com amor e
            dedicação inspiram cada projeto que realizamos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-12">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "center" }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {moms.map((mom, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group flex flex-col items-center p-6 rounded-3xl bg-card border border-border/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-aqua via-lagoon to-aqua-light opacity-50 group-hover:opacity-100 blur-sm transition-all duration-500" />
                      <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden ring-4 ring-background shadow-lg">
                        <img
                          src={mom.src}
                          alt={`Homenagem - ${mom.caption}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Heart className="w-5 h-5 text-aqua fill-aqua" />
                      </div>
                    </div>
                    <p className="mt-6 text-foreground font-medium italic text-center">
                      "{mom.caption}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12 h-10 w-10 bg-background/90 hover:bg-aqua hover:text-white border-aqua/30" />
            <CarouselNext className="hidden sm:flex -right-4 md:-right-12 h-10 w-10 bg-background/90 hover:bg-aqua hover:text-white border-aqua/30" />
          </Carousel>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-aqua"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-center mt-12 text-aqua-dark text-xl md:text-3xl font-serif italic font-semibold">
          "Ser mãe é mergulhar de cabeça no amor mais profundo." <span className="text-2xl md:text-4xl">💙</span>
        </p>
      </div>
    </section>
  );
};

export default MothersDay;
