import { GraduationCap } from "lucide-react";

export function Education() {
  const educations = [
    {
      title: "BACHARELADO EM CIÊNCIA DA COMPUTAÇÃO",
      institution: "Anhanguera Educacional",
      location: "São Luís MA",
      period: "2023 - 2026",
    },
    {
      title: "AUXILIAR ADMINISTRATIVO",
      institution: "Senac",
      location: "São Luís MA",
      period: "2024 - 2026",
    },
  ];

  return (
    <section id="educacao" className="py-24 relative overflow-x-clip">
      {/* Background decoration */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-purple-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4 justify-center md:justify-start">
          <span className="w-8 h-1 bg-purple-primary rounded-full hidden md:block" />
          Educação
        </h2>

        <div className="flex flex-col gap-6 md:gap-8">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="group p-8 md:p-10 rounded-[2rem] bg-[#0E0616] md:bg-[#12081E] hover:bg-[#1A102C] border border-white/5 hover:border-purple-primary/40 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 shadow-xl"
            >
              {/* Icon Box */}
              <div className="flex flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#1A102C] group-hover:bg-[#2A1D45] items-center justify-center border border-white/5 transition-colors duration-300">
                <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-purple-primary" strokeWidth={1.5} />
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-1 w-full text-center md:text-left md:mt-1">
                <span className="text-purple-primary font-bold text-sm md:text-[15px] tracking-wide mb-3">
                  {edu.period}
                </span>
                
                <h3 className="text-xl md:text-[22px] font-bold text-white tracking-wide mb-2 uppercase">
                  {edu.title}
                </h3>
                
                <p className="text-foreground/70 text-[15px] md:text-base font-medium">
                  {edu.institution}{edu.location ? `, ${edu.location}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
