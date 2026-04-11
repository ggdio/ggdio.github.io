import { motion } from 'framer-motion';
import { Download, Quote } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export function Header() {
  return (
    <header className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full border border-brand/30 bg-brand/10 text-brand-light font-medium tracking-wide text-sm">
              Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-2 font-display tracking-tight text-white">
            {resumeData.name}
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display tracking-tight text-slate-400 flex flex-wrap gap-y-2">
            {resumeData.role.split(' | ').map((part, index, array) => (
              <span key={index} className="flex items-center">
                <span className="whitespace-nowrap">{part}</span>
                {index < array.length - 1 && (
                  <span className="hidden sm:inline text-brand-light font-normal mx-2 opacity-50">|</span>
                )}
                {index < array.length - 1 && (
                  <span className="sm:hidden mx-2 opacity-0 w-0"></span> // Technical spacer for mobile flow
                )}
              </span>
            ))}
          </h2>
          
          <blockquote className="relative my-10 group">
            <Quote className="absolute -top-10 -left-8 w-16 h-16 text-brand/10 group-hover:text-brand/20 transition-colors pointer-events-none" />
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed italic font-light relative z-10">
              {resumeData.about}
            </p>
          </blockquote>
          <div className="flex gap-4">
            <a 
              href="/resume.pdf" 
              download="Guilherme_Dio_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white transition-all bg-brand/90 rounded-lg hover:bg-brand hover:scale-105 hover:shadow-[0_0_15px_rgba(10,102,194,0.5)] active:scale-95"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-accent-violet/20 blur-[150px] rounded-full pointer-events-none -z-10" />
    </header>
  );
}
