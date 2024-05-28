import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Perks from './components/Perks';
import Projects from './components/Projects';
import Whyus from './components/Whyus';
import Contact from './components/Contact';
import Footer from './components/Footer';

const DesktopLayout = () => (
  <>
    <NavBar />
    <Banner />
    <Skills />
    <Whyus />
    <Perks />
    <Projects />
    <Contact />
    <Footer />
  </>
);

export default DesktopLayout;
