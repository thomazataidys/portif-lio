import { Layout, Server, Settings } from "lucide-react";

export function Skills() {
  const skillsConfig = [
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6 text-purple-primary" />,
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6 text-purple-primary" />,
      items: ["Node.js", "Python", "FastAPI", "Flask", "SQL"],
    },
    {
      category: "Outras",
      icon: <Settings className="w-6 h-6 text-purple-primary" />,
      items: ["Git", "Deploy", "Arquitetura de Software", "Clean Code"],
    },
  ];

  return (
    <section id="habilidades" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center justify-end gap-4 text-right">
          Habilidades Técnicas
          <span className="w-8 h-1 bg-purple-primary rounded-full" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsConfig.map((skillGroup, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-foreground/10 bg-background/50 hover:border-purple-primary/50 transition-colors group"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-purple-primary/10 group-hover:bg-purple-primary/20 transition-colors">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-md text-sm font-medium bg-foreground/5 text-foreground/80 border border-foreground/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
