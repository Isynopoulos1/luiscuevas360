import React from "react";

//IMPORT STYLES
import {
  MainContainer,
  Insignia,
  Icon,
  Title,
} from "@elements/insignias/Insignias.styles";

const Insignias = () => {
  return (
    <MainContainer>
      <Insignia>
        <Icon>
          <img
            src="https://ik.imagekit.io/ppayaz/luis-cuevas-360/insignias/clarity.jpg?updatedAt=1749294295938"
            alt="Claridad"
          />
        </Icon>
        <Title>Claridad</Title>
      </Insignia>
      <Insignia>
        <Icon>
          <img
            src="https://ik.imagekit.io/ppayaz/luis-cuevas-360/insignias/support.jpg?updatedAt=1749294335259"
            alt="Acompañamiento"
          />
        </Icon>
        <Title>Acompañamiento</Title>
      </Insignia>
      <Insignia>
        <Icon>
          <img
            src="https://ik.imagekit.io/ppayaz/luis-cuevas-360/insignias/strategy.jpg?updatedAt=1749294348133"
            alt="Estrategia"
          />
        </Icon>
        <Title>Estrategia</Title>
      </Insignia>
      <Insignia>
        <Icon>
          <img
            src="https://ik.imagekit.io/ppayaz/luis-cuevas-360/insignias/customized.jpg?updatedAt=1749294320572"
            alt="Personalización"
          />
        </Icon>
        <Title>Personalización</Title>
      </Insignia>
      <Insignia>
        <Icon>
          <img
            src="https://ik.imagekit.io/ppayaz/luis-cuevas-360/insignias/protection.jpg?updatedAt=1749294308368"
            alt="Protección"
          />
        </Icon>
        <Title>Protección</Title>
      </Insignia>
    </MainContainer>
  );
};

export default Insignias;
