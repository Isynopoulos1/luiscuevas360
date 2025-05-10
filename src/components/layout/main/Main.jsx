//IMPORT COMPONENTS
import About from "@elements/about/About.jsx";
import Platforms from "@elements/platforms/Platforms.jsx";
import Intro from "@elements/intro/Intro.jsx";
import Philosophy from "@elements/philosophy/Philosophy.jsx";
import Services from "@elements/services/Services.jsx";
// IMPORT STYLING
import {
  MainContainer,
  AboutSection,
  IntroSection,
  PhilosophySection,
  ServicesSection,
  PlatformsSection,
} from "@layout/main/Main.styles";

function Main() {
  return (
    <main>
      <MainContainer>
        <IntroSection id="intro">
          <Intro />
        </IntroSection>
        <AboutSection id="about">
          <About />
        </AboutSection>
        <PhilosophySection id="philosophy">
          <Philosophy />
        </PhilosophySection>
        <ServicesSection id="services">
          <Services />
        </ServicesSection>
        <PlatformsSection id="platforms">
          <Platforms />
        </PlatformsSection>
      </MainContainer>
    </main>
  );
}

export default Main;
