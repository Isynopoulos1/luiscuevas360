// IMPORT STYLING
import {
  MainContainer,
  AboutWrapper,
  MainBanner,
  PhilosophyWrapper,
  ServicesWrapper,
  PlatformsWrapper,
  Testimonials,
} from "@layout/main/Main.styles";
//IMPORT COMPONENTS
//SERVICES ETC

// IMPORT DATA
//copies

function Main() {
  return (
    <main>
      <MainContainer>
        <MainBanner id="intro">
          intro
          {/* <p>{main.intro.description}</p> */}
        </MainBanner>
        <AboutWrapper id="about">
          about
          {/* <p>{main.about.description}</p> */}
        </AboutWrapper>
        <PhilosophyWrapper id="philosophy">
          filosofia
          {/* <p>{main.philosophy.description1}</p> */}
        </PhilosophyWrapper>
        <ServicesWrapper id="services">
          servicios
          {/* <p>{main.services.description1}</p> */}
        </ServicesWrapper>
        <PlatformsWrapper id="platforms">
          plataformas
          {/* <p>{main.platforms.description1}</p> */}
          <Testimonials>
            testimoniales
            {/* <p>{main.testimonial.1}</p> */}
            {/* <p>{main.testimonial.2}</p> */}
            {/* <p>{main.testimonial.3}</p> */}
            {/* <p>{main.testimonial.4}</p> */}
          </Testimonials>
        </PlatformsWrapper>
      </MainContainer>
    </main>
  );
}

export default Main;
