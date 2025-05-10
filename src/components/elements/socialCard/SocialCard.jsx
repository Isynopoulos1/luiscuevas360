import React from "react";
import { CardWrapper, SocialName, FollowButton } from "./SocialCard.styles";

const SocialCard = ({ name, onClick, background }) => {
  return (
    <CardWrapper style={{ backgroundImage: `url(${background})` }}>
      <SocialName>{name}</SocialName>
      <FollowButton onClick={onClick}>follow</FollowButton>
    </CardWrapper>
  );
};

export default SocialCard;
