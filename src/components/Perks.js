import React, { useEffect, useState } from 'react';
import meter1 from "../assets/img/meter33.png";
import meter2 from "../assets/img/meter22.png";
import meter3 from "../assets/img/meter11.png";
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

export const Perks = () => {
  const { t, i18n } = useTranslation();

  const translations = {
    en: {
      sourceCode: "Source code is yours",
      localBusiness: "Local business, based in Gatineau, Qc, Ca",
      quickUpdates: "Quick updates and results during the process"
    },
    fr: {
      sourceCode: "Le code source est à vous",
      localBusiness: "Entreprise locale, basée à Gatineau, Qc, Ca",
      quickUpdates: "Mises à jour rapides et résultats pendant le processus"
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
        const threshold = window.innerHeight * 0.75; // Adjust this value as needed

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
            <div className="skill-bx2 wow zoomIn">
              <Carousel
                responsive={responsive}
                infinite={true}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>{t('sourceCode', { defaultValue: translations.en.sourceCode })}</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>{t('localBusiness', { defaultValue: translations.en.localBusiness })}</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>{t('quickUpdates', { defaultValue: translations.en.quickUpdates })}</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left2" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Perks;