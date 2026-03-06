import { MapPin, Mail, MessageCircle, Github, Linkedin } from "lucide-react";

export function Contact() {
  const contacts = [
    {
      label: "WhatsApp",
      value: "+55 (98) 98536-7745",
      link: "https://wa.me/5598985367745",
      icon: MessageCircle,
      iconBg: "bg-[#0ED85F]", // Verde vibrante da referência
    },
    {
      label: "Email",
      value: "thomazataidys@gmail.com",
      link: "mailto:thomazataidys@gmail.com",
      icon: Mail,
      iconBg: "bg-[#8A2BE2]", // Roxo da referência
    },
    {
      label: "Localização",
      value: "São Luís, MA",
      link: "https://maps.google.com/?q=São Luís, MA",
      icon: MapPin,
      iconBg: "bg-[#FF0055]", // Rosa-Red vibrante da referência
    },
  ];

  return (
    <section id="contato" className="py-24 relative overflow-x-clip bg-background">
      {/* Background decoration */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-purple-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* Top Row: 3 Individual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, idx) => (
              <a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 md:p-10 rounded-[2rem] bg-[#0E0616] md:bg-[#12081E] hover:bg-[#1A102C] border border-white/5 hover:border-purple-primary/40 transition-all duration-300 flex flex-col items-start shadow-xl"
              >
                <div className={`w-[72px] h-[72px] rounded-3xl flex items-center justify-center ${contact.iconBg} text-white shadow-md mb-8 group-hover:scale-105 transition-transform`}>
                  <contact.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1 w-full text-left">
                  <h3 className="text-xl md:text-[22px] font-bold text-white tracking-wide">{contact.label}</h3>
                  <p className="text-foreground/50 text-[15px] md:text-base font-medium truncate">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom Row: Social Links */}
          <div className="w-full mt-4 md:mt-8 p-10 md:p-16 rounded-[2.5rem] bg-[#160B24] border border-white/5 flex flex-col items-center justify-center gap-10 shadow-xl overflow-hidden relative">
            
            {/* Inner Glow effect matching reference */}
             <div className="absolute inset-0 bg-linear-to-b from-purple-primary/10 to-transparent opacity-50 pointer-events-none" />

            <h3 className="text-[28px] md:text-3xl font-bold text-[#D8B4FE] z-10 tracking-wide">
              Conecte-se Comigo
            </h3>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 z-10">
              <a
                href="https://github.com/Thomaz-Athaidys"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#1F1433] hover:bg-[#2A1D45] border border-white/5 transition-all duration-300 font-semibold text-[15px] md:text-base text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:-translate-y-1"
              >
                <Github className="w-[18px] h-[18px]" strokeWidth={2.5} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/thomaz-athaide-5546aa293/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#1F1433] hover:bg-[#2A1D45] border border-white/5 transition-all duration-300 font-semibold text-[15px] md:text-base text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:-translate-y-1"
              >
                <Linkedin className="w-[18px] h-[18px]" strokeWidth={2.5} />
                LinkedIn
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
