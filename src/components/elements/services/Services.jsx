//IMPORT COMPONENTS
import Card from "@elements/card/Card.jsx";

import {
  MainContainer,
  SectionName,
  ServiceWrapper,
} from "@elements/services/Services.styles";
// IMPORT DATA
import { services } from "@data/plans";
function Services() {
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
    <section id="services">
      <MainContainer>
        <SectionName>Services</SectionName>
        <ServiceWrapper>{renderServices()}</ServiceWrapper>
      </MainContainer>
    </section>
  );
}

export default Services;
