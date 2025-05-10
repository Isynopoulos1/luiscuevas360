//IMPORT COMPONENTS
import Card from "@elements/card/Card.jsx";
import Button from "@elements/button/Button.jsx";
import About from "@elements/about/About.jsx";
import Platforms from "@elements/platforms/Platforms.jsx";
import Intro from "@elements/intro/Intro.jsx";
import Philosophy from "@elements/philosophy/Philosophy.jsx";
// IMPORT STYLING
import {
  MainContainer,
  AboutSection,
  IntroSection,
  PhilosophySection,
  ServicesSection,
  PlatformsSection,
  SectionName,
} from "@layout/main/Main.styles";

// IMPORT DATA
import { services } from "@data/plans";
import texts from "@data/texts.json";

function Main() {
  //RENDER FUNCTIONS
  const renderServices = () =>
    services?.map((s, i) => (
      <Card
        key={i}
        title={s.title}
        img={s.href}
        plan={s.plan}
        description={s.description}
      />
    )) ?? [];
  //MAIN RENDER
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
        <SectionName>Services</SectionName>
        <ServicesSection id="services">
          {renderServices()}
          {/* <Card /> */}
        </ServicesSection>
        <PlatformsSection id="platforms">
          <Platforms />
        </PlatformsSection>
      </MainContainer>
    </main>
  );
}

export default Main;
