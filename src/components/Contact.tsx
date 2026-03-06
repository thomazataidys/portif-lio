"use client";

import { Mail, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Endpoint to integrate with Python backend (FastAPI/Flask)
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem.");
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro ao enviar a mensagem.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-foreground/[0.02]">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center justify-center gap-4">
          Contato
          <span className="w-8 h-1 bg-purple-primary rounded-full hidden md:block" />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Vamos conversar!</h3>
            <p className="text-foreground/70 text-lg mb-10 leading-relaxed">
              Estou sempre aberto a novas oportunidades para aplicar meus conhecimentos em desenvolvimento Full Stack. Se você tem um projeto em mente ou gostaria de conversar, sinta-se à vontade para me mandar uma mensagem.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <div className="p-4 bg-purple-primary/10 rounded-full text-purple-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 font-medium">Email</p>
                  <a href="mailto:thomazataidys@gmail.com" className="hover:text-purple-primary transition-colors font-semibold">
                    thomazataidys@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-lg">
                <div className="p-4 bg-purple-primary/10 rounded-full text-purple-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 font-medium">Telefone</p>
                  <a href="tel:+5598985367745" className="hover:text-purple-primary transition-colors font-semibold">
                    (98) 98536-7745
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background/50 p-8 border border-foreground/10 rounded-3xl shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-xl focus:outline-none focus:border-purple-primary focus:ring-1 focus:ring-purple-primary transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-xl focus:outline-none focus:border-purple-primary focus:ring-1 focus:ring-purple-primary transition-all"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-xl focus:outline-none focus:border-purple-primary focus:ring-1 focus:ring-purple-primary transition-all resize-none"
                  placeholder="Conte-me mais sobre o seu projeto..."
                ></textarea>
              </div>

              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
              {success && <p className="text-green-500 text-sm font-medium">Mensagem enviada com sucesso!</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-4 flex items-center justify-center gap-2 bg-purple-primary hover:bg-purple-secondary text-white rounded-xl font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
                {!loading && <Send className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
