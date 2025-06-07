import {
  MainContainer,
  SectionName,
  Description,
  Content,
  VideoContainer,
} from "@elements/philosophy/Philosophy.styles";

// IMPORT DATA
import texts from "@data/texts.json";

function Philosophy() {
  const { philosophy } = texts;
  return (
    <section id="philosophy">
      <MainContainer>
        <SectionName>Filosofía</SectionName>
        <Description>
          <Content>{philosophy.content1}</Content>
          <Content>{philosophy.content2}</Content>
          {philosophy.items.map((item, index) => (
            <Content key={index}>
              <br />
              <strong>{item.bold}</strong>
              <br />
              {item.text}
            </Content>
          ))}
          <Content style={{ marginTop: "1em" }}>{philosophy.content3}</Content>
        </Description>
        <VideoContainer>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/USLMmVWP9RE"
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
