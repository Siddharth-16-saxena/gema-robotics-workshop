import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  id,
  title,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="border border-slate-800/80 rounded-xl overflow-hidden glass transition-colors duration-200">
      <button
        type="button"
        id={`accordion-header-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-100 hover:text-white cursor-pointer transition-colors duration-150 focus:outline-none"
      >
        <span className="text-base md:text-lg">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="text-brand-accent ml-4 flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-panel-${id}`}
            role="region"
            aria-labelledby={`accordion-header-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: { height: { duration: 0.25, ease: 'easeOut' }, opacity: { duration: 0.15 } },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { height: { duration: 0.2, ease: 'easeIn' }, opacity: { duration: 0.1 } },
            }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-sm md:text-base text-slate-350 border-t border-slate-900/40 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
