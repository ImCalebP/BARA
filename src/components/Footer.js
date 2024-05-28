import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useTranslation } from 'react-i18next';
import React from 'react';

export const Footer = () => {
  const { t, i18n } = useTranslation();

  const translations = {
    en: {
      copyright: "Copyright BARA 2024. All Rights Reserved"
    },
    fr: {
      copyright: "Droits d'auteur BARA 2024. Tous droits réservés"
    }
  };

  i18n.addResourceBundle('en', 'translation', translations.en, true, true);
  i18n.addResourceBundle('fr', 'translation', translations.fr, true, true);

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>{t('copyright', { defaultValue: translations.en.copyright })}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;