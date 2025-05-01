//IMPORT COMPONENTS
import Card from "@elements/card/Card.jsx";
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
        <MainBanner id="intro">
          intro
          {/* <p>{main.intro.description}</p> */}
        </MainBanner>
        <AboutWrapper id="about">about</AboutWrapper>
        <PhilosophyWrapper id="philosophy">filosofia</PhilosophyWrapper>
        <ServicesWrapper id="services">
          {renderServices()}
          {/* <Card /> */}
        </ServicesWrapper>
        <PlatformsWrapper id="platforms">
          plataformas
          <Testimonials>testimoniales</Testimonials>
        </PlatformsWrapper>
      </MainContainer>
    </main>
  );
}

export default Main;
