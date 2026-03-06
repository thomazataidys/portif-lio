import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="educacao" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4 justify-center md:justify-start">
          <span className="w-8 h-1 bg-purple-primary rounded-full hidden md:block" />
          Educação
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-foreground/10 bg-background/50 hover:border-purple-primary/50 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Ciências da Computação</h3>
              <p className="text-purple-primary font-medium mb-4">7º Período</p>
              <p className="text-foreground/70">Faculdade Pitágoras / Anhanguera</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-foreground/10 bg-background/50 hover:border-purple-primary/50 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Auxiliar Administrativo</h3>
              <p className="text-purple-primary font-medium mb-4">Concluído</p>
              <p className="text-foreground/70">Senac</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
