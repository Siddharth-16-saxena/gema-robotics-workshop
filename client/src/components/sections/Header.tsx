import React, { useState, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
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

  const navLinks = [
    { label: 'Curriculum', target: 'curriculum' },
    { label: 'Outcomes', target: 'outcomes' },
    { label: 'Why Us', target: 'why-us' },
    { label: 'FAQ', target: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900/60 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-lg md:text-xl font-bold tracking-tight text-white focus:outline-none hover:opacity-90"
        >
          <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
            <Bot className="h-5 w-5" />
          </div>
          <span>GEMA <span className="text-brand-accent">ROBOTICS</span></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollToSection(link.target)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm" onClick={() => scrollToSection('register')}>
            Enroll Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-slate-950/95 backdrop-blur-lg z-30 flex flex-col p-6 animate-fade-in">
          <nav className="flex flex-col gap-6 mb-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-lg font-medium text-slate-350 text-left hover:text-white py-2 border-b border-slate-900"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <Button variant="primary" size="lg" onClick={() => scrollToSection('register')}>
            Enroll Now
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
