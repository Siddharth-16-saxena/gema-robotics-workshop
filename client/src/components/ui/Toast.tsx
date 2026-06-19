import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const config = {
    success: {
      bg: 'bg-emerald-950/80 border-emerald-500/40 text-emerald-250',
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-450 flex-shrink-0" />,
      title: 'Success',
    },
    error: {
      bg: 'bg-rose-950/80 border-rose-500/40 text-rose-250',
      icon: <AlertCircle className="h-5 w-5 text-rose-450 flex-shrink-0" />,
      title: 'Error',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`fixed top-6 right-6 z-50 flex items-start gap-3 p-4 rounded-xl border backdrop-blur-md shadow-2xl max-w-sm w-[90vw] md:w-auto ${config[type].bg}`}
      role="alert"
    >
      {config[type].icon}
      
      <div className="flex-1 text-sm">
        <h4 className="font-semibold mb-0.5">{config[type].title}</h4>
        <p className="opacity-90 leading-normal">{message}</p>
      </div>

      <button
        onClick={onClose}
        className="text-current opacity-60 hover:opacity-100 focus:outline-none rounded-md transition-opacity"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
};

export default Toast;
