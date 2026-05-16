import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, MapPin, Check, Stethoscope, Activity, HeartPulse, UserCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5513991455678";

const smoothScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          scrolled ? "bg-white/80 backdrop-blur-md border-slate-200 shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-semibold text-primary tracking-tight">
              Dr. Daniel Pires
            </span>
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-slate-500">
              Ortopedia • Especialista em Quadril
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => smoothScroll("hero")} className="hover:text-primary transition-colors">Início</button>
            <button onClick={() => smoothScroll("especialidades")} className="hover:text-primary transition-colors">Especialidades</button>
            <button onClick={() => smoothScroll("sobre")} className="hover:text-primary transition-colors">Sobre</button>
            <button onClick={() => smoothScroll("contato")} className="hover:text-primary transition-colors">Contato</button>
          </div>

          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hidden md:inline-flex">
            <Button className="rounded-full font-semibold shadow-sm hover:shadow-md transition-all gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none">
              <MessageCircle className="w-4 h-4" />
              Agendar Consulta
            </Button>
          </a>
          
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="md:hidden inline-flex">
            <Button size="sm" className="rounded-full font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white border-none">
              Agendar
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Atendimento Especializado
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
                Volte a se movimentar <span className="text-primary italic">sem dor.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Tratamentos modernos e minimamente invasivos para o quadril. 
                Recupere sua mobilidade e qualidade de vida com segurança e acompanhamento humanizado.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto rounded-full text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 gap-2 h-14 px-8">
                    Falar com a Equipe
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => smoothScroll("especialidades")}
                  className="w-full sm:w-auto rounded-full text-base font-medium border-slate-200 hover:bg-slate-100 text-slate-700 h-14 px-8"
                >
                  Conhecer Tratamentos
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md shadow-sm border border-slate-100">
                  <Check className="w-4 h-4 text-primary" />
                  CRM-SP 161894 | RQE 80039
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md shadow-sm border border-slate-100">
                  <Check className="w-4 h-4 text-primary" />
                  Atendimento Particular
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md shadow-sm border border-slate-100">
                  <MapPin className="w-4 h-4 text-primary" />
                  Jundiaí/SP
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative w-full max-w-md lg:max-w-none"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-8 border-white">
                <img 
                  src="/drdanielpires.jpg" 
                  alt="Dr. Daniel Pires" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-primary">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Especialista em</div>
                  <div className="text-slate-900 font-bold">Cirurgia do Quadril</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Você se identifica?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A dor no quadril não afeta apenas o seu corpo, afeta a sua rotina, sua independência e seu humor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Dor ao caminhar ou subir escadas", icon: Activity },
              { title: "Limitação de movimento", icon: ArrowRight },
              { title: "Desconforto constante", icon: HeartPulse },
              { title: "Medo de perder qualidade de vida", icon: UserCircle2 }
            ].map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center mb-4 text-primary-foreground">
                  <point.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{point.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-300 font-medium">
              O primeiro passo para voltar a viver bem é um diagnóstico correto.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="especialidades" className="py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Especialidades</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Tratamentos Especializados</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Abordagens modernas focadas na preservação articular e na rápida recuperação do paciente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Artrose do Quadril",
                desc: "Tratamento focado em aliviar a dor e melhorar a mobilidade na articulação desgastada pelo tempo ou fatores genéticos.",
              },
              {
                title: "Prótese de Quadril",
                desc: "Cirurgia de substituição articular com técnicas modernas e implantes de alta durabilidade, permitindo recuperação acelerada.",
              },
              {
                title: "Impacto Femoroacetabular",
                desc: "Correção de alterações no formato dos ossos do quadril para prevenir o desgaste precoce da cartilagem.",
              },
              {
                title: "Lesões e Dor no Quadril",
                desc: "Investigação e tratamento de dores relacionadas a tendinites, bursites e lesões musculares na região.",
              }
            ].map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{spec.title}</h3>
                <p className="text-slate-600 leading-relaxed">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-primary/5 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Como funciona nosso acompanhamento</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Um processo desenhado para dar clareza, segurança e previsibilidade em cada etapa da sua recuperação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Avaliação individualizada", desc: "Escuta atenta da sua história, rotina e impacto da dor." },
              { step: "02", title: "Diagnóstico preciso", desc: "Análise clínica e de exames de imagem avançados." },
              { step: "03", title: "Planejamento do tratamento", desc: "Decisão conjunta sobre a melhor abordagem terapêutica." },
              { step: "04", title: "Recuperação acompanhada", desc: "Suporte próximo até o retorno completo às suas atividades." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-serif font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 relative w-full"
            >
              <div className="aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop" 
                  alt="Clínica do Dr. Daniel Pires" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Sobre o Doutor</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Dr. Daniel Pires</h2>

              <p className="text-slate-500 text-lg mb-8">
                Com mais de <strong className="text-slate-700 font-semibold">1.500 cirurgias de quadril</strong> realizadas desde 2019, une precisão técnica e atendimento humanizado para devolver mobilidade e qualidade de vida aos seus pacientes.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { year: "2013", text: "Graduação em Medicina — Universidade Anhembi Morumbi" },
                  { year: "2018", text: "Especialização em Ortopedia e Traumatologia — Santa Casa de Santos" },
                  { year: "2019", text: "Especialista em Cirurgia do Quadril — Santa Casa de Santos" },
                  { year: "2019–", text: "Cirurgião de quadril no Hospital Municipal de Cubatão" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-xs font-bold text-primary bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1 mt-0.5 shrink-0 min-w-[48px] text-center">{item.year}</span>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  "Chefe do serviço de ortopedia — Hospital Beneficência Portuguesa, Santos",
                  "Membro e coordenador — Sociedade Brasileira de Ortopedia e Traumatologia",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-700 bg-slate-50 py-3 px-4 rounded-xl border border-slate-100">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-slate-900"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Pronto para voltar a viver sem dor?
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Agende sua avaliação. Estamos prontos para entender o seu caso e desenhar o melhor caminho para a sua recuperação.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-base font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg h-14 px-10 gap-2 border-none">
                  <MessageCircle className="w-5 h-5" />
                  Agende sua avaliação
                </Button>
              </a>
              <a href="https://maps.app.goo.gl/2UMorUFmDM36xH7W7" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base font-medium border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white h-14 px-8 gap-2">
                  <MapPin className="w-4 h-4 text-slate-300" />
                  Ver localização
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="font-serif text-xl font-bold text-white tracking-tight">
                Dr. Daniel Pires
              </div>
              <div className="text-xs font-medium uppercase tracking-wider text-slate-500 mt-1">
                Ortopedia • Especialista em Quadril
              </div>
            </div>
            
            <div className="text-sm text-slate-500">
              © 2026 Dr. Daniel Pires. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-xl shadow-[#25D366]/20 transition-transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
