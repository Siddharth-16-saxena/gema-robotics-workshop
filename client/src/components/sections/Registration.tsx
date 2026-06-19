import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, Mail, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { enquirySchema, EnquirySchemaType } from '../../schemas/enquirySchema';
import { useEnquiry } from '../../hooks/useEnquiry';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';
import { AnimatePresence } from 'framer-motion';

export const Registration: React.FC = () => {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const { mutate, isPending } = useEnquiry();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<EnquirySchemaType>({
    resolver: zodResolver(enquirySchema),
    mode: 'onChange', // Trigger live validation
  });

  const onSubmit = (data: EnquirySchemaType) => {
    mutate(data, {
      onSuccess: (res) => {
        setToast({
          message: res.message || 'Registration successful! We will email you the onboarding details shortly.',
          type: 'success',
        });
        reset(); // Clear form on success
      },
      onError: (err) => {
        setToast({
          message: err.message || 'Failed to submit registration. Please try again.',
          type: 'error',
        });
      },
    });
  };

  return (
    <section id="register" className="py-24 bg-slate-950/40 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-cyan-550/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-indigo-650/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Value Prop Panel */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest bg-indigo-950/60 border border-indigo-500/20 px-3 py-1 rounded-full w-fit block">
              Join Cohort
            </span>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Begin Your Childs <span className="text-gradient">STEM</span> Journey
            </h2>
            
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Secure a seat today. Cohorts are capped at 8 students to maintain quality mentorship, screen-sharing availability, and interactive builds.
            </p>

            {/* Inclusions list */}
            <div className="space-y-4 pt-4 border-t border-slate-900">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <div className="h-5 w-5 rounded-full bg-indigo-950 flex items-center justify-center text-indigo-450">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <span>4 Weeks of Live Guided Classes (8 Live Sessions)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <div className="h-5 w-5 rounded-full bg-indigo-950 flex items-center justify-center text-indigo-450">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <span>Access to Blockly & AI Simulator Sandboxes</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <div className="h-5 w-5 rounded-full bg-indigo-950 flex items-center justify-center text-indigo-450">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <span>Graduation Certificate & Student Portfolio page</span>
              </div>
            </div>

            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-cyan-950/45 border border-cyan-800/20 text-cyan-300 text-xs font-semibold">
              <Sparkles className="h-4 w-4" />
              <span>Only 5 spots left for the July 15th batch!</span>
            </div>
          </div>

          {/* Right Card Form Panel */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 md:p-8 hover:border-slate-800/80 transition-colors duration-300">
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-bold text-white">Enrollment Enquiry</h3>
                <p className="text-xs text-slate-400">Fill in details and a student coordinator will contact you.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                
                {/* Name */}
                <Input
                  id="reg-name"
                  label="Parent / Child Full Name"
                  placeholder="e.g. John Doe"
                  error={errors.name?.message}
                  icon={<User className="h-4.5 w-4.5" />}
                  {...register('name')}
                />

                {/* Email */}
                <Input
                  id="reg-email"
                  label="Email Address"
                  type="email"
                  placeholder="e.g. parent@example.com"
                  error={errors.email?.message}
                  icon={<Mail className="h-4.5 w-4.5" />}
                  {...register('email')}
                />

                {/* Phone */}
                <Input
                  id="reg-phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="e.g. +919876543210"
                  error={errors.phone?.message}
                  icon={<Phone className="h-4.5 w-4.5" />}
                  {...register('phone')}
                />

                {/* Submit button */}
                <Button
                  id="reg-submit"
                  type="submit"
                  variant="primary"
                  className="w-full mt-3 py-4 text-base"
                  disabled={!isValid || !isDirty || isPending}
                  loading={isPending}
                >
                  {isPending ? 'Registering...' : 'Secure My Enrollment'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Actionable Toasts */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Registration;
