import React from "react";
import { Cross as Burger } from "hamburger-react";
//TODO: IMPORT PROPTYPES

import { MenuWrapper } from "./HamburguerMenu.styles";

const HamburguerMenu = ({ onClick }) => {
  return (
    <MenuWrapper onClick={onClick}>
      <Burger />
    </MenuWrapper>
  );
};

export default HamburguerMenu;
