import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'; // Assuming this is the Instagram icon.
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import React from 'react';

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState(i18n.language || 'en');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const translations = {
    en: {
      home: "Home",
      whyUs: "Why us?",
      services: "Services",
      projects: "Projects",
      getStarted: "Get started"
    },
    fr: {
      home: "Accueil",
      whyUs: "Pourquoi nous?",
      services: "Services",
      projects: "Projets",
      getStarted: "Commencer"
    }
  };

  i18n.addResourceBundle('en', 'translation', translations.en, true, true);
  i18n.addResourceBundle('fr', 'translation', translations.fr, true, true);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t('home', { defaultValue: translations.en.home })}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{t('whyUs', { defaultValue: translations.en.whyUs })}</Nav.Link>
              <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>{t('services', { defaultValue: translations.en.services })}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t('projects', { defaultValue: translations.en.projects })}</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="Facebook" /></a>
                
                <a href="https://www.instagram.com/barasoftware?igsh=MWNjZzR4aXZyZjJwNA%3D%3D&utm_source=qr">
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
              <div className="language-switch2">
                <span className="language-label2">{language === 'en' ? 'EN' : 'FR'}</span>
                <label className="switch2">
                  <input type="checkbox" checked={language === 'fr'} onChange={(e) => changeLanguage(e.target.checked ? 'fr' : 'en')} />
                  <span className="slider2 round2"></span>
                </label>
                <span className="language-label2">{language === 'en' ? 'FR' : 'EN'}</span>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>{t('getStarted', { defaultValue: translations.en.getStarted })}</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
export default NavBar;