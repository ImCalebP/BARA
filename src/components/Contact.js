import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from 'react-i18next';
import React from 'react';

export const Contact = () => {
  const { t, i18n } = useTranslation();
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(t('send', { defaultValue: 'Send' }));
  const [status, setStatus] = useState({});

  const translations = {
    en: {
      formTitle: "Fill the form to Get Started",
      firstName: "First Name",
      lastName: "Last Name",
      emailAddress: "Email Address",
      phoneNo: "Phone No.",
      message: "Message",
      send: "Send",
      successMessage: "Email client opened successfully",
      errorMessage: "Failed to open email client"
    },
    fr: {
      formTitle: "Remplissez le formulaire pour commencer",
      firstName: "Prénom",
      lastName: "Nom de famille",
      emailAddress: "Adresse électronique",
      phoneNo: "Numéro de téléphone",
      message: "Message",
      send: "Envoyer",
      successMessage: "Client de messagerie ouvert avec succès",
      errorMessage: "Échec de l'ouverture du client de messagerie"
    }
  };

  i18n.addResourceBundle('en', 'translation', translations.en, true, true);
  i18n.addResourceBundle('fr', 'translation', translations.fr, true, true);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = 'info@barasoftware.com';
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `${t('firstName')}: ${formDetails.firstName}\n` +
      `${t('lastName')}: ${formDetails.lastName}\n` +
      `${t('emailAddress')}: ${formDetails.email}\n` +
      `${t('phoneNo')}: ${formDetails.phone}\n` +
      `${t('message')}:\n${formDetails.message}`
    );

    // Create a link and trigger it
    const link = document.createElement('a');
    link.href = `mailto:${email}?subject=${subject}&body=${body}`;
    document.body.appendChild(link); // Append link to the document so it can be clicked
    link.click();
    link.remove(); // Clean up and remove the link

    // Reset the form and update status message
    setFormDetails(formInitialDetails);
    setStatus({ success: true, message: t('successMessage') });
    setButtonText(t('send'));
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility partialVisibility offset={120}>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility partialVisibility offset={100}>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{t('formTitle', { defaultValue: 'Fill the form to Get Started' })}</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder={t('firstName', { defaultValue: 'First Name' })} onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder={t('lastName', { defaultValue: 'Last Name' })} onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder={t('emailAddress', { defaultValue: 'Email Address' })} onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder={t('phoneNo', { defaultValue: 'Phone No.' })} onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder={t('message', { defaultValue: 'Message' })} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Contact;