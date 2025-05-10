import React from "react";
//IMPORT COMPONENTS
import Contact from "@elements/contact/Contact.jsx";

// IMPORT STYLING
import { MainContainer } from "./Footer.styles";
// IMPORT DATA

//copies

function Footer() {
  return (
    <MainContainer>
      <Contact />
    </MainContainer>
  );
}

export default Footer;
