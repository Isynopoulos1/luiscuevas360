//IMPORT COMPONENTS
import Card from "@elements/card/Card.jsx";
import Button from "@elements/button/Button.jsx";
import Logo from "@elements/logo/Logo.jsx";
// IMPORT STYLING
import {
  MainContainer,
  AboutSection,
  IntroSection,
  ColumnLeft,
  ColumnRight,
  PhilosophySection,
  ServicesSection,
  PlatformsSection,
  Testimonials,
  SectionName,
  LogoContainer,
  DescriptionIntro,
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
          <ColumnLeft>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <DescriptionIntro>
              <p>{texts.intro.description}</p>
              <Button />
            </DescriptionIntro>
          </ColumnLeft>
          <ColumnRight>
            <img
              src="https://ik.imagekit.io/ppayaz/iselalarcon/luis-cuevas-360/intro/intro-photo-square.png?updatedAt=1746352848599"
              alt="Foto intro"
            />
          </ColumnRight>
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
