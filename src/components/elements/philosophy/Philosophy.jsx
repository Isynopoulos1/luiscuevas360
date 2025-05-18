import {
  MainContainer,
  SectionName,
  Content,
  VideoSection,
} from "@elements/philosophy/Philosophy.styles";

// IMPORT DATA
import texts from "@data/texts.json";

function Philosophy() {
  return (
    <section id="philosophy">
      <MainContainer>
        <SectionName>Filosofía</SectionName>
        <Content>{texts.philosophy.content}</Content>
        <VideoSection>video</VideoSection>
      </MainContainer>
    </section>
  );
}

export default Philosophy;
