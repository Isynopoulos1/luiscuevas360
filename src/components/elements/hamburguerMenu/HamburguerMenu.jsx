import React from "react";
import { Cross as Burger } from "hamburger-react";
import { MenuWrapper } from "./HamburguerMenu.styles";

const HamburguerMenu = ({ onClick, active }) => {
  return (
    <MenuWrapper>
      <Burger toggled={active} toggle={onClick} />
    </MenuWrapper>
  );
};

export default HamburguerMenu;
