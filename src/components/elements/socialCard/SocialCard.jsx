import React from "react";
import { CardWrapper, FollowButton } from "./SocialCard.styles";

const SocialCard = ({ label, onClick, background }) => {
  return (
    <CardWrapper
      label={label}
      style={{ backgroundImage: `url(${background})` }}
    >
      <FollowButton onClick={onClick}>Ve más</FollowButton>
    </CardWrapper>
  );
};

export default SocialCard;
