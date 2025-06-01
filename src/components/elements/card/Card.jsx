import React from "react";

// IMPORT STYLING
import {
  ServiceStyle,
  CardWrapper,
  Plan,
  Description,
  TitleOverlay,
  Content,
} from "@elements/card/Card.styles";

const Card = ({ title, img, description, plan }) => {
  return (
    <CardWrapper>
      <ServiceStyle>
        <img src={img} alt={title} />
        <TitleOverlay>{title}</TitleOverlay>
      </ServiceStyle>
      <Content>
        <Plan>{plan}</Plan>
        <Description>{description}</Description>
      </Content>
    </CardWrapper>
  );
};
export default Card;
