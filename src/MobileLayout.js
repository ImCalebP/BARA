import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileNavBar from './components/MobileNavBar'; // Import the new MobileNavBar component
import Banner from './components/Banner';
import Skills from './components/Skills';
import Perks from './components/Perks';
import Projects from './components/Projects';
import Whyus from './components/Whyus';
import Contact from './components/Contact';
import Footer from './components/Footer';

const MobileLayout = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Banner />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/whyus" element={<Whyus />} />
      <Route path="/perks" element={<Perks />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    <MobileNavBar /> {/* Use the MobileNavBar component */}
  </Router>
);

export default MobileLayout;
