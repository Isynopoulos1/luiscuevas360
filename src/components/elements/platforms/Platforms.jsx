import {
  MainContainer,
  SectionName,
  Testimonials,
  CardsWrapper,
} from "@elements/platforms/Platforms.styles";

import SocialCard from "@elements/socialCard/SocialCard.jsx";

function Platforms() {
  return (
    <section id="platforms">
      <MainContainer>
        <SectionName>Plataformas</SectionName>
        <CardsWrapper>
          <SocialCard />
          <SocialCard />
          <SocialCard />
          <SocialCard />
          <SocialCard />
        </CardsWrapper>
        <Testimonials>
          <SectionName>Testimoniales</SectionName>
        </Testimonials>
      </MainContainer>
    </section>
  );
}

export default Platforms;
