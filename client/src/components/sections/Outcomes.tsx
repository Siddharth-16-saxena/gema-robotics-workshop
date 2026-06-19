import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Workflow, Hammer, ShieldAlert, BrainCircuit, Mic } from 'lucide-react';

export const Outcomes: React.FC = () => {
  const outcomes = [
    {
      icon: <Cpu className="h-6 w-6 text-indigo-400" />,
      title: 'Understand robotics fundamentals',
      desc: 'Learn about motors, chassis, microcontrollers, and how electrical signals drive movement.',
    },
    {
      icon: <Workflow className="h-6 w-6 text-purple-400" />,
      title: 'Build beginner AI workflows',
      desc: 'Gain exposure to model training concepts like computer vision and classification logic.',
    },
    {
      icon: <Hammer className="h-6 w-6 text-cyan-400" />,
      title: 'Create mini robotics projects',
      desc: 'Assemble working robots virtually or physically and see code translate directly into physical action.',
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-rose-400" />,
      title: 'Learn sensors and automation',
      desc: 'Connect ultrasonic, infrared, and optical sensors to enable environment mapping and navigation.',
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-emerald-450" />,
      title: 'Develop logical thinking',
      desc: 'Strengthen algorithm development, debugging workflows, and structural system designs.',
    },
    {
      icon: <Mic className="h-6 w-6 text-amber-450" />,
      title: 'Present final project confidently',
      desc: 'Demonstrate creations to mentors, parents, and peers in a graduation presentation.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
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
    <section id="outcomes" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest bg-indigo-950/60 border border-indigo-500/20 px-3 py-1 rounded-full">
            Key Objectives
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            What Your Child Will <span className="text-gradient">Achieve</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Our specialized STEM curriculum bridges core theoretical blocks with exciting sandbox applications.
          </p>
        </div>

        {/* Outcomes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-7 relative overflow-hidden group hover:border-slate-700 transition-all duration-300"
            >
              {/* Number Index */}
              <div className="absolute top-6 right-6 text-3xl font-black text-slate-800/40 group-hover:text-brand-accent/20 font-mono transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 w-fit mb-6 text-slate-200 group-hover:bg-slate-800 transition-colors">
                {outcome.icon}
              </div>

              {/* Title & Desc */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                  {outcome.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {outcome.desc}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Outcomes;
