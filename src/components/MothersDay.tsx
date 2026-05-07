import { Heart } from "lucide-react";
import mae1 from "@/assets/maes/mae1.jpeg";
import mae2 from "@/assets/maes/mae2.jpeg";
import mae3 from "@/assets/maes/mae3.jpeg";
import mae4 from "@/assets/maes/mae4.jpeg";
import mae5 from "@/assets/maes/mae5.jpeg";

const moms = [
  { src: mae1, name: "Mãe Aquazul" },
  { src: mae2, name: "Mãe Aquazul" },
  { src: mae3, name: "Mãe Aquazul" },
  { src: mae4, name: "Mãe Aquazul" },
  { src: mae5, name: "Mãe Aquazul" },
];

const MothersDay = () => {
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
          <p className="text-muted-foreground text-lg">
            Uma homenagem carinhosa às mães da nossa equipe, que com amor e
            dedicação inspiram cada projeto que realizamos.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto">
          {moms.map((mom, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-aqua via-lagoon to-aqua-light opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-background shadow-lg group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500">
                  <img
                    src={mom.src}
                    alt={`Homenagem ${mom.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-background shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="w-4 h-4 text-aqua fill-aqua" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-muted-foreground italic">
          "Ser mãe é mergulhar de cabeça no amor mais profundo." 💙
        </p>
      </div>
    </section>
  );
};

export default MothersDay;
