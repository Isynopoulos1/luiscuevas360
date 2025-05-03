import React from "react";

// IMPORT STYLING
import {
  MainContainer,
  ContactSection,
  Location,
  Recomendations,
  Phone,
  Social,
  SectionName,
} from "./Footer.styles";
// IMPORT DATA
//copies

function Footer() {
  return (
    <MainContainer>
      <SectionName>Contacto</SectionName>
      <ContactSection id="contact">
        contacto
        <Location>{/* <p>{main.testimonial.1}</p> */}locacion</Location>
        <Recomendations>
          {/* <p>{main.testimonial.1}</p> */}recomendaciones
        </Recomendations>
        <Phone>{/* <p>{main.testimonial.1}</p> */} telefono</Phone>
        <Social>{/*social network including whatsapp */}social</Social>
      </ContactSection>
    </MainContainer>
  );
}

export default Footer;
