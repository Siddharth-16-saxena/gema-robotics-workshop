import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Cpu, Sparkles, Terminal } from 'lucide-react';

export const Timeline: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const curriculum = [
    {
      week: 'Week 1',
      title: 'Introduction + Robotics Fundamentals',
      subtitle: 'Build your first circuit & control motors',
      desc: 'Students learn basic electronics, how microcontrollers process data, and how to command electrical motors.',
      topics: [
        'Introduction to microcontrollers (Arduino/Blockly ecosystems)',
        'Understanding voltage, current, and breadboard connections',
        'Programming DC and servo motors for robot locomotion',
        'Creating simulated hardware circuits using sandbox platforms',
      ],
      project: 'Obstacle-Avoiding Robot Simulator',
      tools: 'Blockly Editor, Tinkercad Sim, Arduino C++',
      icon: <Cpu className="h-6 w-6 text-indigo-400" />,
    },
    {
      week: 'Week 2',
      title: 'Artificial Intelligence & Smart Systems',
      subtitle: 'Teach computers to see & recognize patterns',
      desc: 'An interactive week diving into training neural networks, understanding data classification, and camera sensors.',
      topics: [
        'How AI models learn: Training vs testing data',
        'Computer vision: Edge detection and face landmark recognition',
        'Classifying audio and gesture commands',
        'Integrating camera sensors with logic loops',
      ],
      project: 'AI Smart Doorbell (Face Recognition)',
      tools: 'Teachable Machine, Webcams, Blockly AI Modules',
      icon: <Sparkles className="h-6 w-6 text-purple-400" />,
    },
    {
      week: 'Week 3',
      title: 'Full-Stack Robotics Integration',
      subtitle: 'Connecting AI triggers to physical actions',
      desc: 'Students bridge Week 1 robotics with Week 2 AI models, creating automated response systems based on visual cues.',
      topics: [
        'Serial communication protocols: How brains talk to wheels',
        'Building conditional logic triggers (If AI sees object, move motor)',
        'Sensor calibration and ultrasonic range detection',
        'Troubleshooting code and debugging circuit diagrams',
      ],
      project: 'Gesture-Controlled Delivery Cart',
      tools: 'Simulated motor shield, Gesture Recognizers',
      icon: <Terminal className="h-6 w-6 text-cyan-400" />,
    },
    {
      week: 'Week 4',
      title: 'Final Project Build & Showcase',
      subtitle: 'Perfecting, testing, and presenting to parents',
      desc: 'The capstone week where students finalize their custom projects, refine the codebase, and present their work.',
      topics: [
        'Defining project boundaries & sandbox challenge targets',
        'Refining code architecture & code cleanups',
        'Testing systems against target scenarios',
        'Preparing presentation pitches & slide demonstrations',
      ],
      project: 'Graduation Capstone Project Showcase',
      tools: 'Full AI-Robotics Suite, Graduation Certificates',
      icon: <BookOpen className="h-6 w-6 text-emerald-450" />,
    },
  ];

  return (
    <section id="curriculum" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest bg-indigo-950/60 border border-indigo-500/20 px-3 py-1 rounded-full">
            Syllabus Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            4-Week Intensive <span className="text-gradient">Curriculum</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            A step-by-step pathway starting from simple electrical circuits to advanced visual AI integrations.
          </p>
        </div>

        {/* Interactive Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Week Navigation */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
            {curriculum.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWeek(idx)}
                className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-4 flex-shrink-0 min-w-[240px] focus:outline-none ${
                  activeWeek === idx
                    ? 'bg-indigo-950/40 border-indigo-500/50 shadow-md shadow-indigo-500/5'
                    : 'bg-slate-900/40 border-slate-900 hover:bg-slate-900/60 hover:border-slate-800/80'
                }`}
              >
                <div
                  className={`h-11 w-11 rounded-xl flex items-center justify-center transition-colors ${
                    activeWeek === idx
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-950 border border-slate-800 text-slate-400'
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
                    {item.week}
                  </span>
                  <span className="text-sm font-bold text-slate-100 block truncate max-w-[180px]">
                    {item.title.split(' + ')[1] || item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detailed Content Showcase */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWeek}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="glass-card rounded-3xl p-6 md:p-8 space-y-6"
              >
                {/* Header */}
                <div className="space-y-2 border-b border-slate-900 pb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded bg-indigo-950 text-indigo-300 text-xs font-bold font-mono border border-indigo-500/20 uppercase">
                      {curriculum[activeWeek].week}
                    </span>
                    <span className="text-sm text-cyan-400 font-medium">
                      {curriculum[activeWeek].subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {curriculum[activeWeek].title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {curriculum[activeWeek].desc}
                  </p>
                </div>

                {/* Topics covered */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase text-slate-350 tracking-wider flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-indigo-400" />
                    <span>Modules Covered</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-1">
                    {curriculum[activeWeek].topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-400 leading-normal">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Highlight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-900">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest block">
                      Target Project
                    </span>
                    <span className="text-sm font-bold text-slate-100 block">
                      {curriculum[activeWeek].project}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest block">
                      Key Software & Tools
                    </span>
                    <span className="text-sm font-mono text-slate-100 block">
                      {curriculum[activeWeek].tools}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
