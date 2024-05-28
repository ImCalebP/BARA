import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from 'react-i18next';


export const Whyus = () => {
  const { t, i18n } = useTranslation();

  const translations = {
    en: {
      whyUs: "Why us?",
      intro: "Any ideas you have for your project, we got you. Our professionalism will help you choose and handle the best options for your business, suited to your needs. We are not here to sell you anything, we are here to help you. We take pride in our honesty.",
      yourVision: "Your vision",
      clientRelationship: "Unrivaled client relationship",
      results: "Actual results",
      firstTab: "In today’s digital age, a <span class='underline-animation'>robust online presence is crucial</span>, and first impressions are vital. We help you make the best impression with expert guidance on everything from site design to color selection. Let us handle the complexities of your digital presence, so you can focus on what you do best—growing your business. Moreover, we offer advanced automation solutions designed to streamline your operations and enhance efficiency. Imagine running your <span class='underline-animation'>business almost on autopilot</span>—from personalized customer interactions and follow-ups to automated appointment confirmations and feedback collection with AI integration. Our tools are designed to <span class='underline-animation'>boost your productivity</span>, increase revenue, and <span class='underline-animation'>improve customer retention</span>.",
      secondTab: "Our commitment extends beyond mere development. We believe in forging close relationships with our clients to ensure that every project is a reflection of their vision. Our hassle-free service is simple yet thorough, emphasizing our dedication to you and your business's growth. We communicate closely with our clients, and even treat them like friends. We take pride in <span class='underline-animation'>HONESTY</span>.",
      thirdTab: "At BARA, we bring your vision to life with unrivaled expertise. Whether it's <span class='underline-animation'>app development, website creation, or bespoke automation solutions</span>, our highly qualified engineering team ensures <span class='underline-animation'>top-tier design and robust security protocols</span> to safeguard your data. From start to finish, we handle your project with precision and care, delivering results that exceed expectations. Trust us to cover all your digital needs and transform your ideas into reality."
    },
    fr: {
      whyUs: "Pourquoi nous?",
      intro: "Toutes les idées que vous avez pour votre projet, nous les réalisons. Notre professionnalisme vous aidera à choisir et à gérer les meilleures options pour votre entreprise, adaptées à vos besoins. Nous ne sommes pas là pour vous vendre quoi que ce soit, nous sommes là pour vous aider. Nous sommes fiers de notre honnêteté.",
      yourVision: "Votre vision",
      clientRelationship: "Relation client inégalée",
      results: "Résultats réels",
      firstTab: "À l'ère numérique d'aujourd'hui, une <span class='underline-animation'>présence en ligne solide est cruciale</span>, et les premières impressions sont essentielles. Nous vous aidons à faire la meilleure impression grâce à des conseils d'experts sur tout, de la conception du site au choix des couleurs. Laissez-nous gérer la complexité de votre présence numérique, afin que vous puissiez vous concentrer sur ce que vous faites de mieux : développer votre entreprise. De plus, nous proposons des solutions d'automatisation avancées conçues pour rationaliser vos opérations et améliorer l'efficacité. Imaginez gérer votre <span class='underline-animation'>entreprise presque en mode automatique</span>—des interactions client personnalisées et des suivis aux confirmations de rendez-vous automatisées et à la collecte de feedback avec l'intégration de l'IA. Nos outils sont conçus pour <span class='underline-animation'>augmenter votre productivité</span>, accroître vos revenus et <span class='underline-animation'>améliorer la fidélisation de la clientèle</span>.",
      secondTab: "Notre engagement va au-delà du simple développement. Nous croyons en la création de relations étroites avec nos clients pour nous assurer que chaque projet reflète leur vision. Notre service sans tracas est simple mais complet, mettant en avant notre dévouement envers vous et la croissance de votre entreprise. Nous communiquons étroitement avec nos clients, et les traitons même comme des amis. Nous sommes fiers de notre <span class='underline-animation'>HONNÊTETÉ</span>.",
      thirdTab: "Chez BARA, nous donnons vie à votre vision avec une expertise inégalée. Qu'il s'agisse de <span class='underline-animation'>développement d'applications, de création de sites Web ou de solutions d'automatisation sur mesure</span>, notre équipe d'ingénieurs hautement qualifiés garantit <span class='underline-animation'>une conception de premier ordre et des protocoles de sécurité robustes</span> pour protéger vos données. Du début à la fin, nous gérons votre projet avec précision et soin, en livrant des résultats qui dépassent les attentes. Faites-nous confiance pour couvrir tous vos besoins numériques et transformer vos idées en réalité."
    }
  };

  i18n.addResourceBundle('en', 'translation', translations.en, true, true);
  i18n.addResourceBundle('fr', 'translation', translations.fr, true, true);

  return (
    <section className="project2" id="Whyus">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility offset={130}>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{t('whyUs', { defaultValue: translations.en.whyUs })}</h2>
                  <p>{t('intro', { defaultValue: translations.en.intro })}</p>
                  <Tab.Container id="projects-tabs2" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">{t('results', { defaultValue: translations.en.results })}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">{t('clientRelationship', { defaultValue: translations.en.clientRelationship })}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">{t('yourVision', { defaultValue: translations.en.yourVision })}</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p dangerouslySetInnerHTML={{ __html: t('firstTab', { defaultValue: translations.en.firstTab }) }}></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p dangerouslySetInnerHTML={{ __html: t('secondTab', { defaultValue: translations.en.secondTab }) }}></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p dangerouslySetInnerHTML={{ __html: t('thirdTab', { defaultValue: translations.en.thirdTab }) }}></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Whyus;