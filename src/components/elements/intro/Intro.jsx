import styled from "styled-components";
//IMPORT STYLING
import {
  MainContainer,
  ColumnLeft,
  LogoContainer,
  DescriptionIntro,
  ColumnRight,
} from "@elements/intro/Intro.styles";
//IMPORT COMPONENTS
import Logo from "@elements/logo/Logo.jsx";
import Button from "@elements/button/Button.jsx";

// IMPORT DATA
import texts from "@data/texts.json";

function Intro() {
  return (
    <section id="intro">
      <MainContainer>
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
            src="https://ik.imagekit.io/ppayaz/luis-cuevas-360/intro/intro-photo-square?updatedAt=1746813292241"
            alt="Foto intro"
          />
        </ColumnRight>
      </MainContainer>
    </section>
  );
}

export default Intro;
