import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Details from './components/sections/Details';
import Outcomes from './components/sections/Outcomes';
import Timeline from './components/sections/Timeline';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Registration from './components/sections/Registration';
import Footer from './components/sections/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans select-none scroll-smooth">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Navigation Header */}
      <Header />

      {/* Core Page Sections */}
      <main className="flex-grow z-10 relative">
        <Hero />
        <Details />
        <Outcomes />
        <Timeline />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Registration />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
};

export default App;
