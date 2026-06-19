import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Calendar, Sparkles, Trophy, Video } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[95vh] pt-32 pb-16 flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left space-y-6"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(99,102,241,0.15)]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Admissions open for July 2026</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            AI & Robotics <br />
            <span className="text-gradient">Summer Workshop</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-semibold text-slate-200"
          >
            Build robots, explore AI, and create real-world projects.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl"
          >
            A 4-week immersive online workshop designed for children aged 8–14 to learn robotics, AI concepts, and hands-on innovation. No prior experience required!
          </motion.p>

          {/* Key Quick Info Badge */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 text-sm text-slate-300"
          >
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-4 py-2 rounded-xl">
              <Calendar className="h-4.5 w-4.5 text-brand-accent" />
              <span>Starts: <strong>15 July 2026</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-4 py-2 rounded-xl">
              <Video className="h-4.5 w-4.5 text-brand-accent" />
              <span>Format: <strong>Live Interactive</strong></span>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Button variant="primary" size="lg" onClick={() => scrollToSection('register')}>
              Enroll Now
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('curriculum')}>
              View Curriculum
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-slate-900 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2.5 text-slate-400 text-sm">
              <Trophy className="h-5 w-5 text-indigo-400" />
              <span>Certificate of Excellence</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 text-sm">
              <Bot className="h-5 w-5 text-cyan-400" />
              <span>Hardware Simulators Provided</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Visual Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Glass Card Robotics Simulator Mock */}
          <div className="w-full max-w-[420px] aspect-square rounded-3xl glass-card relative p-6 flex flex-col justify-between overflow-hidden group">
            {/* Glowing Orb Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-indigo-500/25 blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-500" />
            
            {/* Top Indicator */}
            <div className="flex justify-between items-center z-10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Simulator online</span>
              </div>
              <div className="px-2 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-[10px] font-mono text-cyan-400">
                GEMA-V1.0
              </div>
            </div>

            {/* Middle Robot Visual */}
            <div className="flex-1 flex items-center justify-center relative z-10 my-4">
              <svg
                width="160"
                height="160"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              >
                {/* Robot Head Body */}
                <rect x="25" y="30" width="50" height="42" rx="14" fill="#1e1b4b" stroke="#6366f1" strokeWidth="3" />
                {/* Eyes screen */}
                <rect x="33" y="38" width="34" height="16" rx="6" fill="#090514" />
                {/* Left Eye */}
                <circle cx="43" cy="46" r="3.5" fill="#06b6d4" />
                {/* Right Eye */}
                <circle cx="57" cy="46" r="3.5" fill="#06b6d4" />
                {/* Antenna */}
                <line x1="50" y1="30" x2="50" y2="18" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
                <circle cx="50" cy="15" r="4.5" fill="#a855f7" />
                {/* Chest pattern */}
                <line x1="38" y1="58" x2="62" y2="58" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                <rect x="42" y="62" width="16" height="5" rx="2" fill="#06b6d4" opacity="0.8" />
              </svg>

              {/* Floating Parameters */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-4 right-2 bg-slate-900/90 border border-indigo-500/20 px-3 py-1.5 rounded-xl backdrop-blur-sm text-[11px] font-mono shadow-lg"
              >
                <span className="text-slate-400">FPS:</span> <span className="text-indigo-400">60</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 left-2 bg-slate-900/90 border border-cyan-500/20 px-3 py-1.5 rounded-xl backdrop-blur-sm text-[11px] font-mono shadow-lg"
              >
                <span className="text-slate-400">SENSOR:</span> <span className="text-cyan-400">ACTIVE</span>
              </motion.div>
            </div>

            {/* Bottom Code Snippet */}
            <div className="z-10 bg-slate-950/80 border border-slate-800/80 rounded-xl p-3 font-mono text-[11px] text-slate-300">
              <span className="text-purple-400">robot</span>.<span className="text-indigo-300">onUpdate</span>(() =&gt; &#123; <br />
              &nbsp;&nbsp;<span className="text-cyan-400">robot</span>.<span className="text-indigo-300">detectObstacle</span>(); <br />
              &#125;);
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer pointer-events-none select-none opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-1.5 h-6 rounded-full bg-brand-accent/50 relative overflow-hidden"
        >
          <div className="w-full h-2 rounded-full bg-brand-accent absolute top-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
