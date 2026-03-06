import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-x-clip py-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Olá, eu sou <br />
          <span className="text-purple-primary">Thomaz Jefferson</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl">
          Desenvolvedor Full Stack especializado em criar interfaces modernas, 
          performáticas e arquiteturas de software sólidas.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#projetos"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-purple-primary text-white font-medium hover:bg-purple-secondary transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Ver Projetos
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <a
            href="/curriculo.pdf"
            target="_blank"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-foreground/5 text-foreground font-medium hover:bg-foreground/10 border border-foreground/10 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Baixar Currículo
            <Download className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <a
            href="https://github.com/thomazataidys"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-foreground/5 hover:bg-purple-primary hover:text-white transition-all text-foreground/70"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="www.linkedin.com/in/thomaz-ataidys-5546aa293"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-foreground/5 hover:bg-purple-primary hover:text-white transition-all text-foreground/70"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
