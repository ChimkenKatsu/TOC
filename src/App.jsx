import { useState } from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CEOMessage from './components/sections/CEOMessage';
import Team from './components/sections/Team';
import Talent from './components/sections/Talent';
import Services from './components/sections/Services';
import WhyUs from './components/sections/WhyUs';
import Reviews from './components/sections/Reviews';
import Careers from './components/sections/Careers';
import Location from './components/sections/Location';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import HireModal from './components/sections/HireModal';

export default function App() {
  const [hireOpen, setHireOpen] = useState(false);

  return (
    <>
      <Header onOpenHire={() => setHireOpen(true)} />
      <Hero onOpenHire={() => setHireOpen(true)} />
      <About />
      <CEOMessage />
      <Team />
      <Talent />
      <Services />
      <WhyUs />
      <Reviews />
      <Careers />
      <Location />
      <Contact />
      <Footer />
      <HireModal open={hireOpen} onClose={() => setHireOpen(false)} />
    </>
  );
}
