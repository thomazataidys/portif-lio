import Image from "next/image";
import { User } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-x-clip">
      {/* Background decoration */}
      <div className="absolute top-24 left-[20%] -translate-x-1/2 w-[400px] h-[400px] bg-purple-primary/15 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8 relative lg:pr-16">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl lg:mt-4">
            <h2 className="text-[#8b5cf6] font-bold tracking-wider uppercase mb-6 text-sm md:text-base">
              Quem sou eu?
            </h2>

            <div className="text-base md:text-lg text-foreground/80 leading-relaxed font-sans space-y-4">
              <p>
                Atuo como Desenvolvedor Full Stack e atualmente estou no 7º período de Ciências da Computação na Faculdade Pitágoras/Anhanguera, residindo em São Luís - MA.
              </p>
              <p>
                Gosto de unir arquitetura de software com uma visão de negócios adquirida em rotinas administrativas. Meu objetivo é criar soluções robustas, escaláveis e com foco em uma excelente experiência de usuário, garantindo que a tecnologia seja uma aliada estratégica para o sucesso do projeto.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:pr-24">
            <div className="relative w-72 h-[350px] md:w-80 md:h-[420px] rounded-xl overflow-hidden bg-foreground/5 shadow-2xl group border border-foreground/5">
              <Image 
                src="/profile.jpg"
                alt="Foto de perfil de Thomaz Jefferson"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Fallback caso a imagem demore ou falhe ao carregar */}
              <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-foreground/20">
                <User className="w-20 h-20 mb-2" />
                <span className="text-xs font-medium">/public/profile.jpg</span>
              </div>
            </div>
          </div>

          {/* Vertical Side Indicator (Desktop Only) */}
          <div className="hidden lg:flex flex-col items-center absolute right-0 top-0 h-full">
            <div className="bg-[#191530] text-white px-3 py-6 rounded object-contain flex items-center justify-center mb-4">
              <span className="[writing-mode:vertical-rl] font-medium tracking-[0.25em] text-sm mt-2">
                SOBRE MIM
              </span>
            </div>
            <div className="w-px h-full bg-foreground/10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
