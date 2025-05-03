//IMPORT COMPONENTS
import Card from "@elements/card/Card.jsx";
import Button from "@elements/button/Button.jsx";
import Logo from "@elements/logo/Logo.jsx";
// IMPORT STYLING
import {
  MainContainer,
  AboutSection,
  IntroSection,
  PhilosophySection,
  ServicesSection,
  PlatformsSection,
  Testimonials,
  SectionName,
  LogoContainer,
} from "@layout/main/Main.styles";

// IMPORT DATA
import { services } from "@data/services";

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
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Button />
          {/* <p>{main.intro.description}</p> */}
        </IntroSection>
        <SectionName>Sobre Mi</SectionName>
        <AboutSection id="about">about</AboutSection>
        <SectionName>Filosofia</SectionName>
        <PhilosophySection id="philosophy">filosofia</PhilosophySection>
        <SectionName>Services</SectionName>
        <ServicesSection id="services">
          {renderServices()}
          {/* <Card /> */}
        </ServicesSection>
        <SectionName>Plataformas</SectionName>
        <PlatformsSection id="platforms">
          plataformas
          <SectionName>Testimoniales</SectionName>
          <Testimonials>testimoniales</Testimonials>
        </PlatformsSection>
      </MainContainer>
    </main>
  );
}

export default Main;
