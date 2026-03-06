import { 
  SiPostgresql, 
  SiDocker, 
  SiGit, 
  SiWordpress, 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPython, 
  SiNodedotjs, 
  SiGithub 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export function Skills() {
  const technologies = [
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "WordPress", icon: SiWordpress, color: "text-[#21759B]" },
    { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: SiCss, color: "text-[#1572B6]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "GitHub", icon: SiGithub, color: "text-foreground" },
    { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]" },
  ];

  return (
    <section id="habilidades" className="py-24 relative overflow-x-clip">
      {/* Background decoration */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-purple-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold flex flex-col items-center justify-center gap-4 text-center">
          <span className="px-4 py-1 rounded-full bg-purple-primary/10 text-purple-primary text-sm font-semibold tracking-wider uppercase">
            Tech Stack
          </span>
          Habilidades Técnicas
        </h2>
      </div>

      <div className="relative w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fade mask para suavizar as bordas */}
        <div className="absolute inset-0 z-10 pointer-events-none" 
             style={{ 
               background: "linear-gradient(to right, var(--background) 0%, transparent 15%, transparent 85%, var(--background) 100%)" 
             }}>
        </div>

        {/* Container do Carousel */}
        <div className="flex overflow-hidden group py-10">
          <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] w-max">
            {/* 1º Lista Original */}
            <div className="flex gap-6 md:gap-8 pr-6 md:pr-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] flex-shrink-0 flex flex-col items-center justify-center gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.03] hover:border-purple-primary/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-105 transition-all duration-300 md:gap-4 group/card"
                >
                  <tech.icon className={`w-8 h-8 md:w-12 md:h-12 ${tech.color} opacity-80 group-hover/card:opacity-100 transition-opacity`} />
                  <span className="text-[10px] md:text-xs font-medium text-foreground/70">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* 2º Lista Duplicada para criar a ilusão de loop infinito. */}
            <div className="flex gap-6 md:gap-8 pr-6 md:pr-8">
              {technologies.map((tech, index) => (
                <div
                  key={`dup-${index}`}
                  className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] flex-shrink-0 flex flex-col items-center justify-center gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.03] hover:border-purple-primary/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-105 transition-all duration-300 md:gap-4 group/card"
                >
                  <tech.icon className={`w-8 h-8 md:w-12 md:h-12 ${tech.color} opacity-80 group-hover/card:opacity-100 transition-opacity`} />
                  <span className="text-[10px] md:text-xs font-medium text-foreground/70">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
