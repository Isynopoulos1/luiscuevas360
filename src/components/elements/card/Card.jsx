import React from "react";

// IMPORT STYLING
import {
  ServiceStyle,
  MainContainer,
  Plan,
  Description,
  Content,
} from "@elements/card/Card.styles";

const Card = ({ title, img, description, plan }) => {
  return (
    <MainContainer>
      <ServiceStyle>
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </ServiceStyle>
      <Content>
        <Plan>{plan}</Plan>
        <Description>{description}</Description>
      </Content>
    </MainContainer>
  );
};

export default Card;
