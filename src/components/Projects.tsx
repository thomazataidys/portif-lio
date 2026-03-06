import { Briefcase, Kanban, CreditCard } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Minha Sala",
      description: "Sistema de Gerenciamento de Ensalamento. Desenvolvimento full-stack ponta a ponta para otimizar controle e alocação de ambientes/salas.",
      techs: ["React", "TypeScript", "Tailwind", "PHP", "Laravel", "PostgreSQL"],
      link: "https://www.linkedin.com/posts/thomaz-athaide-5546aa293_apresentando-o-minha-sala-um-projeto-ugcPost-7396383053960515584-Q3Cb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcdqJABnrOXOFGlRCIoQWlu7cxCPmYP-PQ",
      icon: Kanban,
    },
    {
      title: "Crachá Pro",
      description: "Sistema de Geração de Crachás. Solução para automatizar e facilitar o processo de emissão de crachás de forma ágil e segura.",
      techs: ["Next.js", "TypeScript", "Tailwind CSS", "PDF Generation", "PostgreSQL"],
      link: "https://www.linkedin.com/posts/thomaz-athaide-5546aa293_nextjs-fullstack-serveractions-ugcPost-7408316451792580608-c5fL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcdqJABnrOXOFGlRCIoQWlu7cxCPmYP-PQ", 
      icon: CreditCard,
    },
  ];

  return (
    <section id="projetos" className="py-24 relative overflow-x-clip">
      {/* Background decorations */}
      <div className="absolute top-24 left-[20%] -translate-x-1/2 w-[500px] h-[400px] bg-purple-primary/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/3 translate-y-1/2 w-[500px] h-[500px] bg-purple-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="w-8 h-1 bg-purple-primary rounded-full" />
          Projetos e Experiência
        </h2>

        <div className="space-y-12 mb-20">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer rounded-3xl overflow-hidden border border-foreground/10 bg-background flex flex-col md:flex-row hover:border-purple-primary/30 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="p-8 md:p-12 md:w-full flex justify-between items-center relative overflow-hidden group">
                
                {/* Content Area */}
                <div className="flex flex-col z-10 sm:w-8/12 lg:w-9/12">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
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

                {/* Animated/Floating Background Icon */}
                <div className="hidden sm:flex absolute right-8 top-1/2 -translate-y-1/2 text-foreground/5 opacity-30 group-hover:opacity-100 group-hover:scale-110 group-hover:text-purple-primary/20 transition-all duration-500 pointer-events-none">
                  <project.icon className="w-48 h-48 md:w-64 md:h-64" strokeWidth={0.5} />
                </div>
              </div>
            </a>
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
