import { Briefcase, Image as ImageIcon } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Minha Sala",
      description: "Sistema de Gerenciamento de Ensalamento. Desenvolvimento full-stack ponta a ponta para otimizar controle e alocação de ambientes/salas.",
      techs: ["Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"],
    },
    {
      title: "Crachá Pro",
      description: "Sistema de Geração de Crachás. Solução para automatizar e facilitar o processo de emissão de crachás de forma ágil e segura.",
      techs: ["React", "TypeScript", "Tailwind CSS", "PDF Generation"],
    },
  ];

  return (
    <section id="projetos" className="py-24 bg-foreground/[0.02]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="w-8 h-1 bg-purple-primary rounded-full" />
          Projetos e Experiência
        </h2>

        <div className="space-y-12 mb-20">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden border border-foreground/10 bg-background flex flex-col md:flex-row hover:border-purple-primary/30 transition-colors shadow-sm hover:shadow-md"
            >
              {/* Image Placeholder */}
              <div className="md:w-5/12 bg-foreground/5 min-h-[250px] md:min-h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-foreground/10 relative overflow-hidden">
                <ImageIcon className="w-12 h-12 text-foreground/20 group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 md:w-7/12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-3 py-1 bg-purple-primary/10 text-purple-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-purple-primary" />
            Experiência Profissional
          </h3>
          <div className="relative pl-8 border-l-2 border-foreground/10">
            <div className="absolute w-4 h-4 rounded-full bg-purple-primary -left-[9px] top-2" />
            <div className="mb-2 flex items-center justify-between">
              <h4 className="text-xl font-bold">Auxiliar Administrativo</h4>
              <span className="text-sm text-foreground/50 font-medium">Dez/2024 - Jan/2026</span>
            </div>
            <p className="text-foreground/80 font-medium mb-1">CLASI SEGURANÇA PRIVADA LTDA</p>
            <p className="text-foreground/60 text-sm">
              Visão de negócios e rotinas administrativas que me ajudaram a alinhar os requisitos de software aos objetivos reais das empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
