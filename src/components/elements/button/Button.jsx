import React from "react";

// IMPORT STYLING
import { ButtonStyle } from "./Button.styles";

const Button = ({ text, onClick }) => {
  return <ButtonStyle onClick={onClick}>Ver más</ButtonStyle>;
};

export default Button;
