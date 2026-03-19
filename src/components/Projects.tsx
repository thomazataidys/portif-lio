"use client";

import { useState, useEffect } from "react";
import { Briefcase, X, Check, ExternalLink, ArrowRight, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface Project {
  title: string;
  description: string;
  techs: string[];
  link: string;
  imageUrl: string;
  stats: Stat[];
  features: string[];
  images: string[];
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      setSelectedImageIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      title: "Crachá Pro",
      description: "Software de geração automatizada de crachás, com gerenciamento completo através de painel administrativo focado em eficiência.",
      techs: ["NextJS", "TailwindCSS", "Prisma"],
      link: "https://id-generator-xi.vercel.app/login",
      imageUrl: "/Cracha Pro/cra1.png",
      stats: [
        { value: "90%", label: "Mais Rápido" },
        { value: "1 Click", label: "Para Gerar" }
      ],
      features: [
        "Geração automática de crachás em segundos",
        "Painel administrativo intuitivo e completo",
        "Templates personalizáveis para diferentes eventos",
        "Exportação em alta qualidade para impressão"
      ],
      images: [
        "/Cracha Pro/cra1.png",
        "/Cracha Pro/cra2.png",
        "/Cracha Pro/cra3.png",
        "/Cracha Pro/cra4.png",
        "/Cracha Pro/cra5.png",
        "/Cracha Pro/cra6.png"
      ]
    },
    {
      title: "Minha Sala",
      description: "Aplicação completa para facilitar o ensalamento acadêmico. Permite que alunos encontrem suas salas rapidamente, oferece um painel de gestão intuitivo para coordenadores e disponibiliza uma interface prática para professores.",
      techs: ["React", "TypeScript", "TailwindCSS", "Laravel"],
      link: "https://minhasala.pro/",
      imageUrl: "/Minha Sala/minhasala1.png",
      stats: [
        { value: "80%", label: "Menos Confusão" },
        { value: "3min", label: "Configuração" }
      ],
      features: [
        "Busca rápida e intuitiva de salas para alunos",
        "Painel administrativo completo para coordenadores",
        "Interface dedicada e prática para professores",
        "Redução significativa de atrasos e erros de sala"
      ],
      images: [
        "/Minha Sala/minhasala1.png",
        "/Minha Sala/minhasala2.png",
        "/Minha Sala/minhasala3.png",
        "/Minha Sala/minhasala4.png",
        "/Minha Sala/minhasala5.png",
        "/Minha Sala/minhasala6.png",
        "/Minha Sala/minhasala7.png",
        "/Minha Sala/minhasala8.png",
        "/Minha Sala/minhasala9.png"
      ]
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

        {/* --- GRID DE CARDS DE PROJETOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden border border-foreground/10 bg-background flex flex-col hover:border-purple-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${idx * 150}ms`, animationFillMode: "both" }}
            >
              <div className="w-full h-56 bg-foreground/5 relative flex items-center justify-center overflow-hidden">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <ImageIcon className="w-12 h-12 text-foreground/20" />
                )}
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-6 group-hover:text-purple-primary transition-colors duration-200">
                  {project.title}
                </h3>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-primary mt-2 shrink-0" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-4 bg-purple-primary hover:bg-purple-primary/90 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  Ver Detalhes do Projeto <ArrowRight className="w-5 h-5" />
                </button>
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
            <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
              <h4 className="text-xl font-bold">Auxiliar Administrativo</h4>
              <span className="text-sm text-foreground/50 font-medium bg-foreground/5 px-3 py-1 rounded-full w-fit">Dez/2024 - Jan/2026</span>
            </div>
            <p className="text-foreground/80 font-medium mb-2">CLASI SEGURANÇA PRIVADA LTDA</p>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Visão de negócios e rotinas administrativas que me ajudaram a alinhar os requisitos de software aos objetivos reais das empresas.
            </p>
          </div>
        </div>
      </div>

      {/* --- MODAL DE DETALHES DO PROJETO --- */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Container do Modal expandido para max-w-4xl e barra de rolagem oculta */}
          <div className="relative bg-[#0d0a15] border border-foreground/10 rounded-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/80 backdrop-blur-md text-white rounded-full transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-purple-primary outline-none"
              aria-label="Fechar detalhes do projeto"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Imagem de Capa */}
            <div 
              onClick={() => setLightboxImageIndex(selectedImageIndex)}
              className="w-full h-40 sm:h-56 bg-foreground/5 relative flex items-center justify-center overflow-hidden cursor-pointer group transition-all duration-200"
            >
              {selectedProject.imageUrl ? (
                <img 
                  src={selectedProject.images[selectedImageIndex]} 
                  alt={`Imagem ${selectedImageIndex + 1} do projeto ${selectedProject.title}`} 
                  className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-200" 
                />
              ) : (
                <ImageIcon className="w-16 h-16 text-foreground/20" />
              )}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d0a15] to-transparent" />
              {/* Badge de numeração */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold text-purple-primary border border-purple-primary/30">
                {selectedImageIndex + 1}/{selectedProject.images.length}
              </div>
              {/* Ícone de expandir */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <ArrowRight className="w-6 h-6 text-white transform -rotate-45" />
                </div>
              </div>
            </div>

            {/* Corpo do Modal - Novo Layout em Grid */}
            <div className="p-5 sm:p-8 relative z-10 -mt-6 sm:-mt-10">
              
              {/* Cabeçalho do Modal: Título e Botão lado a lado no desktop */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <h2 id="modal-title" className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
                  {selectedProject.title}
                </h2>
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-8 py-3.5 bg-purple-primary hover:bg-purple-primary/90 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-primary/25 shrink-0"
                >
                  Visitar Projeto <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>

              {/* Galeria de Imagens */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
                  <span className="w-3 h-1 bg-purple-primary rounded-full" />
                  Galeria de Imagens
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {selectedProject.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedImageIndex(idx);
                        setLightboxImageIndex(idx);
                      }}
                      className={`relative group overflow-hidden rounded-lg transition-all duration-200 ${
                        selectedImageIndex === idx 
                          ? 'ring-2 ring-purple-primary scale-105 shadow-lg shadow-purple-primary/50' 
                          : 'hover:ring-2 hover:ring-purple-primary/50'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Screenshot ${idx + 1}`}
                        className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                        <span className="text-white font-bold text-lg drop-shadow-lg">{idx + 1}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Coluna da Esquerda */}
                <div className="flex flex-col gap-6">
                  {/* Estatísticas */}
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.stats.map((stat, i) => (
                      <div key={i} className="flex-1 border border-purple-primary/30 bg-[#0d0a15]/80 backdrop-blur-sm rounded-xl p-3 min-w-[110px] text-center shadow-lg">
                        <div className="text-xl font-bold text-purple-primary mb-0.5">{stat.value}</div>
                        <div className="text-[10px] font-semibold text-foreground/70 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Sobre o Projeto */}
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
                      <span className="w-3 h-1 bg-purple-primary rounded-full" />
                      Sobre o Projeto
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Tecnologias */}
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
                      <span className="w-3 h-1 bg-purple-primary rounded-full" />
                      Stack Tecnológico
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techs.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 text-xs font-semibold border border-purple-primary/30 bg-purple-primary/10 text-purple-primary rounded-lg transition-colors hover:bg-purple-primary hover:text-white cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Coluna da Direita */}
                <div>
                  {/* Funcionalidades */}
                  <h3 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
                    <span className="w-3 h-1 bg-purple-primary rounded-full" />
                    Principais Funcionalidades
                  </h3>
                  <div className="flex flex-col gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors">
                        <div className="bg-purple-primary rounded-md p-1 shrink-0 mt-0.5 shadow-sm">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-foreground/80 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- LIGHTBOX MODAL --- */}
      {selectedProject && lightboxImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setLightboxImageIndex(null)}
          />
          
          <div className="relative bg-black rounded-lg w-full max-w-6xl h-[80vh] flex items-center justify-center overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            
            {/* Botão Fechar */}
            <button 
              onClick={() => setLightboxImageIndex(null)}
              className="absolute top-4 right-4 z-20 p-3 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white rounded-full transition-all duration-200 hover:scale-110 focus:ring-2 focus:ring-purple-primary outline-none"
              aria-label="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Imagem Principal */}
            <img 
              src={selectedProject.images[lightboxImageIndex]} 
              alt={`Imagem ${lightboxImageIndex + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Navegação - Seta Esquerda */}
            {lightboxImageIndex > 0 && (
              <button
                onClick={() => setLightboxImageIndex(lightboxImageIndex - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-purple-primary/80 text-white rounded-full transition-all duration-200 hover:scale-110 focus:ring-2 focus:ring-purple-primary outline-none"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Navegação - Seta Direita */}
            {lightboxImageIndex < selectedProject.images.length - 1 && (
              <button
                onClick={() => setLightboxImageIndex(lightboxImageIndex + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-purple-primary/80 text-white rounded-full transition-all duration-200 hover:scale-110 focus:ring-2 focus:ring-purple-primary outline-none"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Contador */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-white border border-purple-primary/30">
              {lightboxImageIndex + 1} / {selectedProject.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}