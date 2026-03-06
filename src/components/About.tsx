export function About() {
  return (
    <section id="sobre" className="py-24 bg-foreground/[0.02]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="w-8 h-1 bg-purple-primary rounded-full" />
          Sobre Mim
        </h2>

        <div className="max-w-3xl text-lg text-foreground/80 leading-relaxed font-sans">
          <p className="mb-6">
            Atuo como Desenvolvedor Full Stack e atualmente estou no 7º período de Ciências da Computação na Faculdade Pitágoras/Anhanguera, residindo em São Luís - MA.
          </p>
          <p>
            Gosto de unir arquitetura de software com uma visão de negócios adquirida em rotinas administrativas. Meu objetivo é criar soluções robustas, escaláveis e com foco em uma excelente experiência de usuário, garantindo que a tecnologia seja uma aliada estratégica para o sucesso do projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
