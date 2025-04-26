import React from "react";

// IMPORT STYLING
import {
  MainContainer,
  Contact,
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
      Footer
      <Contact>{/* <p>{footer.contact.description}</p> */}</Contact>
      <Location>{/* <p>{footer.location.description}</p> */}</Location>
      <Recomendations>
        {/* <p>{footer.recomendations.description}</p> */}
      </Recomendations>
      <Phone>{/* <p>{footer.phone.description}</p> */}</Phone>
      <Social>{/* <p>{footer.social.description}</p> */}</Social>
    </MainContainer>
  );
}

export default Footer;
