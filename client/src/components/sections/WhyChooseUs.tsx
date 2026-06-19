import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Video, Wrench, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-indigo-400" />,
      title: 'Safe learning environment',
      desc: 'COPPA-compliant sandbox tools, moderated live classrooms, and zero advertisements.',
    },
    {
      icon: <Video className="h-6 w-6 text-purple-400" />,
      title: 'Live interactive sessions',
      desc: 'Small class sizes (max 8 students) with 2-way screen sharing to ensure individual feedback.',
    },
    {
      icon: <Wrench className="h-6 w-6 text-cyan-400" />,
      title: 'Hands-on projects',
      desc: 'Build real simulations and write actual code. Not just watching slide presentations.',
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-emerald-450" />,
      title: 'Dedicated mentor support',
      desc: 'Access to guided office hours and Q&A chat panels to resolve circuit bugs.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="why-us" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-650/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-indigo-450 uppercase tracking-widest bg-indigo-950/60 border border-indigo-500/20 px-3 py-1 rounded-full">
            Our Guarantees
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Why Parents <span className="text-gradient">Trust</span> Us
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            We put students first, ensuring safety, depth of study, and consistent visual project outcomes.
          </p>
        </div>

        {/* Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl glass-card border border-slate-800/80 flex flex-col items-start gap-4 transition-all duration-300 hover:border-slate-700/80 group"
            >
              {/* Icon Container */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-200 group-hover:bg-indigo-950 group-hover:border-indigo-800 transition-colors duration-300">
                {point.icon}
              </div>

              {/* Title & Desc */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
