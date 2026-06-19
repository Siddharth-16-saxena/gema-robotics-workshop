import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Globe, CreditCard, Calendar } from 'lucide-react';

export const Details: React.FC = () => {
  const details = [
    {
      icon: <Users className="h-6 w-6 text-indigo-400" />,
      label: 'Age Group',
      value: '8–14 Years',
      description: 'Tailored curriculum suitable for kids & early teens',
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-400" />,
      label: 'Duration',
      value: '4 Weeks',
      description: 'Immersive deep-dive sessions with live mentors',
    },
    {
      icon: <Globe className="h-6 w-6 text-cyan-400" />,
      label: 'Mode',
      value: 'Online',
      description: 'Interactive classroom from comfort of your home',
    },
    {
      icon: <CreditCard className="h-6 w-6 text-emerald-450" />,
      label: 'Workshop Fee',
      value: '₹2,999',
      description: 'One-time payment including certificate & software tools',
    },
    {
      icon: <Calendar className="h-6 w-6 text-rose-450" />,
      label: 'Start Date',
      value: '15 July 2026',
      description: 'Limited cohorts to facilitate closer student support',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {details.map((detail, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between items-start gap-4 transition-all duration-300 hover:border-slate-700/80 group"
            >
              {/* Icon Container */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 group-hover:bg-slate-800 transition-colors">
                {detail.icon}
              </div>

              {/* Text Meta */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-450 uppercase tracking-widest">
                  {detail.label}
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {detail.value}
                </h3>
                <p className="text-xs text-slate-400 leading-normal font-normal">
                  {detail.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Details;
