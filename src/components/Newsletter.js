import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import React from 'react';

export const Newsletter = ({ status, message, onValidated }) => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    });
  }

  const clearFields = () => {
    setEmail('');
  }

  const translations = {
    en: {
      subscribe: "Subscribe to our Newsletter",
      neverMiss: "& Never miss latest updates",
      sending: "Sending...",
      emailPlaceholder: "Email Address",
      submit: "Submit"
    },
    fr: {
      subscribe: "Abonnez-vous à notre newsletter",
      neverMiss: "& Ne manquez jamais les dernières mises à jour",
      sending: "Envoi...",
      emailPlaceholder: "Adresse électronique",
      submit: "Soumettre"
    }
  };

  i18n.addResourceBundle('en', 'translation', translations.en, true, true);
  i18n.addResourceBundle('fr', 'translation', translations.fr, true, true);

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>{t('subscribe', { defaultValue: translations.en.subscribe })}<br></br> {t('neverMiss', { defaultValue: translations.en.neverMiss })}</h3>
            {status === 'sending' && <Alert>{t('sending', { defaultValue: translations.en.sending })}</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder={t('emailPlaceholder', { defaultValue: translations.en.emailPlaceholder })} />
                <button type="submit">{t('submit', { defaultValue: translations.en.submit })}</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
