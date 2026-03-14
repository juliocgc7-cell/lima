import { motion } from "motion/react";
import { ReactNode } from "react";

interface KickerProps {
  children: ReactNode;
  light?: boolean;
}

export const Kicker = ({ children, light = false }: KickerProps) => (
  <div className="flex flex-col gap-2 mb-6">
    <span className={`text-[18px] uppercase tracking-[0.06em] font-sans font-medium ${light ? 'text-text-secondary-light' : 'text-gold-600'}`}>
      {children}
    </span>
    <div className={`h-[1px] w-12 ${light ? 'bg-gold-accent' : 'bg-gold-400'}`} />
  </div>
);

interface ProofCardProps {
  number: string;
  label: string;
  light?: boolean;
}

export const ProofCard = ({ number, label, light = false }: ProofCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`p-8 border-l border-gold-400/30 ${light ? 'bg-white shadow-sm' : 'bg-navy-800'}`}
  >
    <div className={`text-5xl font-serif mb-2 ${light ? 'text-ln-navy' : 'text-gold-600'}`}>
      {number}
    </div>
    <div className={`text-sm uppercase tracking-wider ${light ? 'text-text-secondary-light' : 'text-text-secondary-dark'}`}>
      {label}
    </div>
  </motion.div>
);

interface SlideProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export const Slide = ({ children, className = "", light = false }: SlideProps) => (
  <section className={`relative w-full min-h-screen flex items-center justify-center p-[6%] overflow-hidden ${light ? 'bg-paper text-text-primary-light' : 'bg-navy-950 text-text-primary-dark'} ${className}`}>
    {!light && <div className="absolute inset-0 spotlight pointer-events-none" />}
    <div className={`absolute inset-0 grain pointer-events-none ${light ? 'opacity-30' : 'opacity-100'}`} />
    {!light && <div className="absolute inset-0 vignette pointer-events-none" />}
    <div className="relative z-10 w-full max-w-[1700px] mx-auto">
      {children}
    </div>
  </section>
);
