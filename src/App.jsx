import { useState } from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CEOMessage from './components/sections/CEOMessage';
import Team from './components/sections/Team';
import Talent from './components/sections/Talent';
import Services from './components/sections/Services';
import WhyUs from './components/sections/WhyUs';
import Careers from './components/sections/Careers';
import Location from './components/sections/Location';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import HireModal from './components/sections/HireModal';
import ContactModal from './components/sections/ContactModal';

export default function App() {
  const [hireOpen, setHireOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Header onOpenContact={() => setContactOpen(true)} />
      <main>
        <Hero onOpenHire={() => setHireOpen(true)} />
        <Services />
        <About />
        <Talent />
        <CEOMessage />
        <Team />
        <WhyUs onOpenHire={() => setHireOpen(true)} />
        <Careers />
        <Contact />
        <Location onOpenContact={() => setContactOpen(true)} />
      </main>
      <Footer />
      <HireModal open={hireOpen} onClose={() => setHireOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
