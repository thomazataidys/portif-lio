import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-purple-primary">
          Thomaz Athaide
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
          <a href="#sobre" className="hover:text-purple-primary transition-colors">Sobre Mim</a>
          <a href="#habilidades" className="hover:text-purple-primary transition-colors">Habilidades</a>
          <a href="#projetos" className="hover:text-purple-primary transition-colors">Projetos</a>
          <a href="#educacao" className="hover:text-purple-primary transition-colors">Educação</a>
          <a href="#contato" className="hover:text-purple-primary transition-colors">Contato</a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
