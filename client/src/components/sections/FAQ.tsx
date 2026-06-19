import React, { useState } from 'react';
import { Accordion } from '../ui/Accordion';

export const FAQ: React.FC = () => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>('q1');

  const handleToggle = (id: string) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const faqs = [
    {
      id: 'q1',
      question: 'Who can join this workshop?',
      answer: 'The workshop is specifically designed for kids and early teens aged 8–14. No programming background or electrical circuit experience is required. We structure classrooms based on age cohorts (e.g., 8–10 years and 11–14 years) to keep discussions engaging.',
    },
    {
      id: 'q2',
      question: 'Do children need prior coding or robotics experience?',
      answer: 'Not at all! We start from the absolute basics of what a microcontroller is and how simple LED circuits work, slowly progressing to custom code blocks. Over 80% of our students are absolute beginners.',
    },
    {
      id: 'q3',
      question: 'Will session recordings be available?',
      answer: 'Yes! All our live mentorship sessions are recorded and posted to the student workspace dashboard within 2 hours. If your child misses a session, they can review the recording and reach out to mentors during active office hours to get caught up.',
    },
    {
      id: 'q4',
      question: 'Do we need to buy a physical robot or hardware kit?',
      answer: 'No hardware purchase is required. The entire workshop is taught using highly interactive, modern web-based simulators (Tinkercad Circuits and Blockly AI Playground). This allows students to experiment safely without the risk of damaged components. If you wish to build physical versions, we provide a complete hardware list.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-indigo-405 uppercase tracking-widest bg-indigo-950/60 border border-indigo-500/20 px-3 py-1 rounded-full">
            Help Center
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Have questions about schedules, devices, or certificates? Find key details here.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              id={faq.id}
              title={faq.question}
              isOpen={openAccordionId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            >
              {faq.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
