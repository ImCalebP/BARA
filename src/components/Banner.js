import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from 'react-i18next';
import React from 'react';

export const Banner = () => {
  const { t, i18n } = useTranslation();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(25 - Math.random() * 30);  // Adjusted delta for faster typing animation
  const [rotationDone, setRotationDone] = useState(false); // Track if rotation is done
  const [textLorem, setTextLorem] = useState('');
  const [doneAnimatingLorem, setDoneAnimatingLorem] = useState(false);

  const toRotateBusiness = t('toRotateBusiness', { defaultValue: "Website, app, automations and AI development for your business" });
  const toRotateLorem = t('toRotateLorem', { defaultValue: "We create fully customized software from scratch, suited to any project or vision. Our AI-powered solutions automate routine tasks, enhancing your efficiency and freeing up your time. This boosts revenue, improves client retention, and streamlines operations. Elevate your productivity and strengthen your web presence with our professional app development, web design, and automation services." });

  useEffect(() => {
    // Add translations to i18next
    i18n.addResourceBundle('en', 'translation', {
      toRotateBusiness: "Website, app, automations and AI development for your business",
      toRotateLorem: "We create fully customized software from scratch, suited to any project or vision. Our AI-powered solutions automate routine tasks, enhancing your efficiency and freeing up your time. This boosts revenue, improves client retention, and streamlines operations. Elevate your productivity and strengthen your web presence with our professional app development, web design, and automation services.",
      tagline: "Where your imagination comes to life",
      connect: "Let’s Connect"
    }, true, true);

    i18n.addResourceBundle('fr', 'translation', {
      toRotateBusiness: "Site Web, applications, automatisations et développement IA pour votre entreprise",
      toRotateLorem: "Nous créons des logiciels entièrement personnalisés à partir de zéro, adaptés à tout projet ou vision. Nos solutions alimentées par l'IA automatisent les tâches routinières, améliorant votre efficacité et libérant votre temps. Cela augmente les revenus, améliore la rétention des clients et rationalise les opérations. Élevez votre productivité et renforcez votre présence web avec nos services professionnels de développement d'applications, de conception web et d'automatisation.",
      tagline: "Où votre imagination prend vie",
      connect: "Connectons-nous"
    }, true, true);

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, textLorem, isDeleting, i18n.language]);

  useEffect(() => {
    setText('');
    setTextLorem('');
    setRotationDone(false);
    setDoneAnimatingLorem(false);
  }, [i18n.language]);

  const tick = () => {
    if (!doneAnimatingLorem) {
      let updatedTextLorem = textLorem.length < toRotateLorem.length ? toRotateLorem.substring(0, textLorem.length + 1) : toRotateLorem;
      setTextLorem(updatedTextLorem);

      if (updatedTextLorem === toRotateLorem) {
        setDoneAnimatingLorem(true); // Stop updating Lorem text
      }
    }

    if (!rotationDone) {
      let updatedTextBusiness = text.length < toRotateBusiness.length ? toRotateBusiness.substring(0, text.length + 1) : toRotateBusiness;
      setText(updatedTextBusiness);

      if (updatedTextBusiness === toRotateBusiness) {
        setRotationDone(true); // Mark rotation as done
      }
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="text-container">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">{t('tagline', { defaultValue: "Where your imagination comes to life" })}</span>
                <h1><span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                <p><span className="txt-rotate"><span className="wrap">{textLorem}</span></span></p>
                <a href="mailto:info@barasoftware.com" className="btn btn-primary2">
                    {t('connect', { defaultValue: "Let’s Connect" })} <ArrowRightCircle size={25} />
                  </a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Banner;