import React from "react";

// IMPORT STYLING
import {
  ServiceStyle,
  CardWrapper,
  Plan,
  Description,
  Content,
} from "@elements/card/Card.styles";

const Card = ({ title, img, description, plan }) => {
  return (
    <CardWrapper>
      <ServiceStyle>
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </ServiceStyle>
      <Content>
        <Plan>{plan}</Plan>
        <Description>{description}</Description>
      </Content>
    </CardWrapper>
  );
};

export default Card;
