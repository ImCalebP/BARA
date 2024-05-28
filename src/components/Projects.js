import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/story.jpg";
import projImg2 from "../assets/img/story-2.jpg";
import projImg3 from "../assets/img/story-3.jpg";
import projImg4 from "../assets/img/story-4.jpg";
import projImg5 from "../assets/img/story-5.jpg";
import projImg6 from "../assets/img/story-6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from 'react-i18next';
import React from 'react';

export const Projects = () => {
  const { t, i18n } = useTranslation();

  const translations = {
    en: {
      projectsTitle: "Projects",
      projectsIntro: "A glimpse of our projects. Possibilities are endless. Fully coded.",
      barberWebsite: "Barber Website",
      portfolio: "Portfolio",
      churchWebsite: "Church Website",
      aiApp: "AI glass sign translator app",
      travelingWebsite: "Traveling website",
      baraWebsite: "BARA website",
      htmlJsCss: "HTML,Js,CSS",
      reactJs: "ReactJS",
      multipleSearchFeatures: "Multiple search features",
      pythonFirebaseReactNative: "Python, firebase, ReactNative, SKLearn",
      loremIpsum: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo."
    },
    fr: {
      projectsTitle: "Projets",
      projectsIntro: "Un aperçu de nos projets. Les possibilités sont infinies. Entièrement codé.",
      barberWebsite: "Site Web de barbier",
      portfolio: "Portfolio",
      churchWebsite: "Site Web d'église",
      aiApp: "Application de traduction de signe pour lunettes AI",
      travelingWebsite: "Site Web de voyage",
      baraWebsite: "Site Web BARA",
      htmlJsCss: "HTML,Js,CSS",
      reactJs: "ReactJS",
      multipleSearchFeatures: "Multiples fonctionnalités de recherche",
      pythonFirebaseReactNative: "Python, firebase, ReactNative, SKLearn",
      loremIpsum: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo."
    }
  };

  i18n.addResourceBundle('en', 'translation', translations.en, true, true);
  i18n.addResourceBundle('fr', 'translation', translations.fr, true, true);

  const projects = [
    {
      title: t('barberWebsite', { defaultValue: translations.en.barberWebsite }),
      description: t('htmlJsCss', { defaultValue: translations.en.htmlJsCss }),
      imgUrl: projImg1,
    },
    {
      title: t('portfolio', { defaultValue: translations.en.portfolio }),
      description: t('reactJs', { defaultValue: translations.en.reactJs }),
      imgUrl: projImg2,
    },
    {
      title: t('churchWebsite', { defaultValue: translations.en.churchWebsite }),
      description: t('multipleSearchFeatures', { defaultValue: translations.en.multipleSearchFeatures }),
      imgUrl: projImg3,
    },
    {
      title: t('aiApp', { defaultValue: translations.en.aiApp }),
      description: t('pythonFirebaseReactNative', { defaultValue: translations.en.pythonFirebaseReactNative }),
      imgUrl: projImg4,
    },
    {
      title: t('travelingWebsite', { defaultValue: translations.en.travelingWebsite }),
      description: t('reactJs', { defaultValue: translations.en.reactJs }),
      imgUrl: projImg5,
    },
    {
      title: t('baraWebsite', { defaultValue: translations.en.baraWebsite }),
      description: t('reactJs', { defaultValue: translations.en.reactJs }),
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility offset={100}>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{t('projectsTitle', { defaultValue: translations.en.projectsTitle })}</h2>
                <p>{t('projectsIntro', { defaultValue: translations.en.projectsIntro })}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>{t('loremIpsum', { defaultValue: translations.en.loremIpsum })}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>{t('loremIpsum', { defaultValue: translations.en.loremIpsum })}</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
export default Projects;