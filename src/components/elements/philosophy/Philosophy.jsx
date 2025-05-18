import {
  MainContainer,
  SectionName,
  Content,
  VideoSection,
} from "@elements/philosophy/Philosophy.styles";

function Philosophy() {
  return (
    <section id="philosophy">
      <MainContainer>
        <SectionName>Filosofía</SectionName>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Content>
        <VideoSection>video</VideoSection>
      </MainContainer>
    </section>
  );
}

export default Philosophy;
