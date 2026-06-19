import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-slate-300 select-none flex items-center justify-between"
      >
        <span>{label}</span>
        {error && (
          <span className="text-xs text-rose-400 font-medium" role="alert">
            {error}
          </span>
        )}
      </label>
      
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-4 text-slate-400 pointer-events-none flex items-center justify-center">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={`w-full py-3.5 px-4 rounded-xl glass-input text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all duration-150 ${
            icon ? 'pl-11' : ''
          } ${
            error
              ? 'border-rose-500/80 focus:border-rose-400 focus:ring-rose-500/20'
              : 'border-slate-800 hover:border-slate-700'
          } ${className}`}
          aria-invalid={!!error}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
