import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "My 10-year-old was glued to this workshop! He went from not knowing what a variable is to building a simulated line-following cart in Tinkercad. The mentors were extremely patient.",
      author: "Priya Sharma",
      child: "Parent of Aarav (Age 10)",
      location: "Bangalore",
    },
    {
      text: "The integration of AI vision with robotics was taught so simply. My daughter loved training the webcam model to trigger her motor speeds. Highly recommend this for summers!",
      author: "Rajesh Iyer",
      child: "Parent of Diya (Age 12)",
      location: "Chennai",
    },
    {
      text: "As a software engineer, I was critical of kids' programming workshops. But Gema Robotics focuses on proper logic design and structural testing rather than just copying code. Fantastic structure.",
      author: "Amit Patel",
      child: "Parent of Kabir (Age 13)",
      location: "Mumbai",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest bg-indigo-950/60 border border-indigo-500/20 px-3 py-1 rounded-full">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Loved by <span className="text-gradient">Parents</span> & Kids
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            See how children have transformed screen time into active innovation and logical prototyping.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-8 relative flex flex-col justify-between hover:border-slate-700/80 transition-all duration-300 group"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-8 text-indigo-500/25 group-hover:text-indigo-500/40 transition-colors">
                <Quote className="h-8 w-8 transform rotate-180" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed italic mb-8 font-normal">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-slate-900/60 pt-6">
                {/* Initial Avatar */}
                <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {review.author.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-white leading-none mb-1">
                    {review.author}
                  </h4>
                  <p className="text-xs text-slate-450 leading-none">
                    {review.child} &bull; {review.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
