import {
  MainContainer,
  SectionName,
  Content,
  VideoContainer,
} from "@elements/philosophy/Philosophy.styles";

// IMPORT DATA
import texts from "@data/texts.json";

function Philosophy() {
  return (
    <section id="philosophy">
      <MainContainer>
        <SectionName>Filosofía</SectionName>
        <Content>{texts.philosophy.content}</Content>
        <VideoContainer>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/ngKBwV3blvw"
            title="Video Filosofía"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoContainer>
      </MainContainer>
    </section>
  );
}

export default Philosophy;
