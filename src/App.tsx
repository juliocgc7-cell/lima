import { motion } from "motion/react";
import { Kicker, ProofCard, Slide } from "./components/Layouts";
import { ChevronRight } from "lucide-react";

export default function App() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
      {/* Slide 1: Cover / Hero (Formula A - Split Editorial) */}
      <div className="snap-start">
        <Slide>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Kicker>Press Kit</Kicker>
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[84px] lg:text-[110px] leading-[0.95] tracking-tight mb-8"
              >
                Lima Neto <br />
                <span className="italic text-gold-600">Advogados</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl text-text-secondary-dark max-w-md font-light leading-relaxed"
              >
                Editorial premium e autoridade calma. <br />
                A excelência jurídica traduzida em design.
              </motion.p>
            </div>
            <div className="lg:col-span-6 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="aspect-[4/5] bg-navy-900 border border-divider-dark relative overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" 
                  alt="Executive Office" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className="text-gold-600 font-serif text-3xl mb-1">MCMXXIV</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-text-secondary-dark">Tradition & Innovation</div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-[6%] flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-600/50">Scroll to explore</span>
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-[1px] h-12 bg-gold-600/30"
            />
          </div>
        </Slide>
      </div>

      {/* Slide 2: About (Formula B - Reading Page Light) */}
      <div className="snap-start">
        <Slide light>
          <div className="max-w-4xl">
            <Kicker light>Quem Somos</Kicker>
            <h2 className="text-6xl lg:text-8xl text-text-primary-light mb-12 leading-tight">
              A força da <span className="italic">estratégia</span>, <br />
              a clareza da execução.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-2xl text-text-secondary-light leading-relaxed">
                Nascemos da necessidade de um atendimento jurídico que compreenda a complexidade do agronegócio e do mercado corporativo com profundidade técnica e agilidade operacional.
              </p>
              <p className="text-2xl text-text-secondary-light leading-relaxed">
                Nosso compromisso é com a segurança jurídica que permite o crescimento sustentável de nossos parceiros, pautado pela ética e pela inovação constante.
              </p>
            </div>
          </div>
        </Slide>
      </div>

      {/* Slide 3: Proofs (Formula C - Metrics Grid) */}
      <div className="snap-start">
        <Slide>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <Kicker>Provas</Kicker>
              <h2 className="text-6xl text-text-primary-dark mb-8">
                Resultados em <br />
                <span className="text-gold-600 italic">Números</span>
              </h2>
              <p className="text-xl text-text-secondary-dark leading-relaxed mb-12">
                Nossa trajetória é marcada por conquistas sólidas e parcerias de longo prazo que atestam nossa competência.
              </p>
              <div className="flex items-center gap-2 text-gold-600 group cursor-pointer">
                <span className="text-sm uppercase tracking-widest font-medium">Arraste pro lado</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-divider-dark border border-divider-dark">
              <ProofCard number="15+" label="Anos de Experiência" />
              <ProofCard number="500+" label="Clientes Atendidos" />
              <ProofCard number="R$ 2B+" label="Em Ativos Protegidos" />
              <ProofCard number="98%" label="Taxa de Sucesso" />
            </div>
          </div>
        </Slide>
      </div>

      {/* Slide 4: Contact / Final */}
      <div className="snap-start">
        <Slide className="bg-navy-900">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-24 h-24 border border-gold-600 mx-auto mb-12 flex items-center justify-center">
              <span className="text-gold-600 font-serif text-4xl">LN</span>
            </div>
            <h2 className="text-5xl lg:text-7xl mb-8">Pronto para o próximo nível?</h2>
            <p className="text-xl text-text-secondary-dark mb-12">
              Entre em contato para uma consultoria estratégica personalizada.
            </p>
            <button className="px-12 py-5 border border-gold-600 text-gold-600 uppercase tracking-[0.2em] text-sm hover:bg-gold-600 hover:text-navy-950 transition-all duration-500">
              Falar com um especialista
            </button>
          </div>
          
          <footer className="absolute bottom-12 left-0 w-full px-[6%] flex justify-between items-end">
            <div className="text-[10px] uppercase tracking-widest text-text-secondary-dark/50">
              © 2026 Lima Neto Advogados. Todos os direitos reservados.
            </div>
            <div className="text-[10px] uppercase tracking-widest text-text-secondary-dark/50">
              São Paulo | Brasília | Goiânia
            </div>
          </footer>
        </Slide>
      </div>
    </main>
  );
}
