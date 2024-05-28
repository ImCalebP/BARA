import React, { useEffect, useState } from 'react';
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { useTranslation } from 'react-i18next';

const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick} style={{ position: 'absolute', left: '-50px', zIndex: 2 }}>
    <img src={arrow1} alt="prev" style={{ width: '30px', height: '30px' }} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick} style={{ position: 'absolute', right: '-50px', zIndex: 2 }}>
    <img src={arrow2} alt="next" style={{ width: '30px', height: '30px' }} />
  </button>
);

export const Skills = () => {
  const { t, i18n } = useTranslation();

  const translations = {
    en: {
      expertise: "Our expertise areas",
      description: "At BARA, we specialize in creating <span class='underline-animation'>custom websites</span> and <span class='underline-animation'>automations</span> solutions that help streamline your business and manage your customer relationship. From unique web designs to efficient automated processes, we work closely with you to ensure your digital presence is <span class='underline-animation'>tailored to your needs</span>. Let us help you enhance your online visibility and improve operational efficiency with our personalized services.",
      websiteDesign: "Website Design and Coding",
      automations: "Automations",
      appDevelopment: "App development",
      clientPrograms: "Client lead programs"
    },
    fr: {
      expertise: "Nos domaines d'expertise",
      description: "Chez BARA, nous nous spécialisons dans la création de <span class='underline-animation'>sites Web personnalisés</span> et de <span class='underline-animation'>solutions d'automatisation</span> qui aident à rationaliser votre entreprise et à gérer vos relations client. Des conceptions Web uniques aux processus automatisés efficaces, nous travaillons en étroite collaboration avec vous pour garantir que votre présence numérique est <span class='underline-animation'>adaptée à vos besoins</span>. Laissez-nous vous aider à améliorer votre visibilité en ligne et à améliorer l'efficacité opérationnelle avec nos services personnalisés.",
      websiteDesign: "Conception et codage de sites Web",
      automations: "Automatisations",
      appDevelopment: "Développement d'applications",
      clientPrograms: "Programmes de lead client"
    }
  };

  i18n.addResourceBundle('en', 'translation', translations.en, true, true);
  i18n.addResourceBundle('fr', 'translation', translations.fr, true, true);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3 // Display 3 items on mobile
    }
  };

  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const elements = document.querySelectorAll('.underline-animation');
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const threshold = window.innerHeight * 0.75;

        if (rect.top >= 0 && rect.bottom <= threshold) {
          if (scrollDirection === 'down') {
            element.classList.add('active');
          } else if (scrollDirection === 'up') {
            element.classList.remove('active');
          }
        } else {
          element.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{t('expertise', { defaultValue: 'Our expertise areas' })}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('description', { defaultValue: translations.en.description }) }}></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>{t('websiteDesign', { defaultValue: 'Website Design and Coding' })}</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>{t('automations', { defaultValue: 'Automations' })}</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>{t('appDevelopment', { defaultValue: 'App development' })}</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>{t('clientPrograms', { defaultValue: 'Client lead programs' })}</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;