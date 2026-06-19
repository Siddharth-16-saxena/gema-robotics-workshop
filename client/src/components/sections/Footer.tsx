import React from 'react';
import { Bot, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand info */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-2.5 text-lg font-bold text-white">
            <div className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
              <Bot className="h-4.5 w-4.5" />
            </div>
            <span>GEMA <span className="text-brand-accent">ROBOTICS</span></span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
            Immersive educational experiences designed by Stanford and IIT educators. Our goal is to inspire children to love technology, code, and systems design.
          </p>
        </div>

        {/* Contacts */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase text-indigo-400 tracking-wider">Contact Admissions</h4>
          <ul className="space-y-2 text-xs md:text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-slate-500" />
              <a href="mailto:admissions@gemaeducation.com" className="hover:text-slate-200">
                admissions@gemaeducation.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-slate-500" />
              <a href="tel:+919876543210" className="hover:text-slate-200">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                12, Outer Ring Road, <br />
                Indiranagar, Bangalore - 560038
              </span>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase text-indigo-400 tracking-wider">Legal & Compliance</h4>
          <ul className="space-y-2 text-xs md:text-sm text-slate-400">
            <li>
              <a href="#privacy" className="hover:text-slate-200 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-slate-200 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#refund" className="hover:text-slate-200 transition-colors">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-slate-900/60 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Gema Education. All rights reserved. Built as an original Kidrove-inspired education layout.
      </div>
    </footer>
  );
};

export default Footer;
