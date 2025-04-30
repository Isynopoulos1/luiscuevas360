import React from "react";

// IMPORT STYLING
import {
  MainContainer,
  ContactWrapper,
  Location,
  Recomendations,
  Phone,
  Social,
} from "./Footer.styles";
// IMPORT DATA
//copies

function Footer() {
  return (
    <MainContainer>
      <ContactWrapper id="contact">
        contacto
        <Location>{/* <p>{main.testimonial.1}</p> */}locacion</Location>
        <Recomendations>
          {/* <p>{main.testimonial.1}</p> */}recomendaciones
        </Recomendations>
        <Phone>{/* <p>{main.testimonial.1}</p> */} telefono</Phone>
        <Social>{/*social network including whatsapp */}social</Social>
      </ContactWrapper>
    </MainContainer>
  );
}

export default Footer;
