import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="py-8 bg-background border-t border-foreground/10 text-center text-foreground/50 text-sm">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} Todos os direitos reservados. Desenvolvido por Thomaz Jefferson.
        </div>
      </footer>
    </div>
  );
}
