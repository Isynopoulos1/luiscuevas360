// IMPORT STYLING
import {
  MainContainer,
  AboutWrapper,
  MainBanner,
  PhilosophyWrapper,
  ServicesWrapper,
  PlatformsWrapper,
  Testimonials,
  ContactWrapper,
  Location,
  Recomendations,
  Contact,
  Social,
} from "@layout/main/Main.styles";
//IMPORT COMPONENTS
//SERVICES ETC

// IMPORT DATA
//copies

function Main() {
  return (
    <main>
      <MainContainer>
        Main
        <MainBanner>{/* <p>{main.intro.description}</p> */}</MainBanner>
        <AboutWrapper>{/* <p>{main.about.description}</p> */}</AboutWrapper>
        <PhilosophyWrapper>
          {/* <p>{main.philosophy.description1}</p> */}
        </PhilosophyWrapper>
        <ServicesWrapper>
          {/* <p>{main.services.description1}</p> */}
        </ServicesWrapper>
        <PlatformsWrapper>
          {/* <p>{main.platforms.description1}</p> */}
        </PlatformsWrapper>
        <Testimonials>
          {/* <p>{main.testimonial.1}</p> */}
          {/* <p>{main.testimonial.2}</p> */}
          {/* <p>{main.testimonial.3}</p> */}
          {/* <p>{main.testimonial.4}</p> */}
        </Testimonials>
        <ContactWrapper>
          <Location>{/* <p>{main.testimonial.1}</p> */}</Location>
          <Recomendations>{/* <p>{main.testimonial.1}</p> */}</Recomendations>
          <Contact>{/* <p>{main.testimonial.1}</p> */}</Contact>
          <Social>{/*social network including whatsapp */}</Social>
        </ContactWrapper>
      </MainContainer>
    </main>
  );
}

export default Main;
