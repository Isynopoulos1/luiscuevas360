import React from "react";
//IMPORT COMPONENTS
import Linkedin from "@assets/icons/Linkedin.jsx";
import Instagram from "@assets/icons/Instagram.jsx";
import Youtube from "@assets/icons/Youtube.jsx";
import Tiktok from "@assets/icons/Tiktok.jsx";
import Spotify from "@assets/icons/Spotify.jsx";
import Whatsapp from "@assets/icons/Whatsapp.jsx";
// IMPORT STYLING
import {
  MainContainer,
  ContactSection,
  Location,
  Recomendations,
  Phone,
  Social,
  SectionName,
  Icons,
} from "./Footer.styles";
// IMPORT DATA
//copies

function Footer() {
  return (
    <MainContainer>
      <SectionName>Contacto</SectionName>
      <ContactSection id="contact">
        contacto
        <Whatsapp />
        <Location>{/* <p>{main.testimonial.1}</p> */}locacion</Location>
        <Recomendations>
          {/* <p>{main.testimonial.1}</p> */}recomendaciones
        </Recomendations>
        <Phone>{/* <p>{main.testimonial.1}</p> */} telefono</Phone>
        <Social>
          {" "}
          social
          <Icons>
            <Youtube />
            <Tiktok />
            <Linkedin />
            <Instagram />
            <Spotify />
          </Icons>
        </Social>
      </ContactSection>
    </MainContainer>
  );
}

export default Footer;
