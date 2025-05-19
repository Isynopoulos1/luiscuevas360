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
  Module,
  DataLoc,
  Location,
  Adress,
  Recomendations,
  DataPhone,
  Phone,
  Number,
  RecLink,
  Social,
  SectionName,
  Icons,
  Copyright,
} from "./Contact.styles";

//CURRENTLY YEAR FUNCTION
const currentYear = new Date().getFullYear();

function Contact() {
  return (
    <section id="contact">
      <MainContainer>
        <SectionName>Contacto</SectionName>
        <ContactSection id="contact">
          <Location>
            <DataLoc>
              <Module>Locación</Module>
              <Adress>text</Adress>
            </DataLoc>
          </Location>
          <Recomendations>
            <Module>Recomendaciones</Module>
            <RecLink>
              <li>www.ejemplo.com</li>
              <li>www.ejemplo.com</li>
              <li>www.ejemplo.com</li>
            </RecLink>
          </Recomendations>
          <Phone>
            <Module>Teléfono</Module>
            <DataPhone>
              <a
                href="https://wa.me/525540908318"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Whatsapp />
              </a>
              <Number>+52 5540908318</Number>
            </DataPhone>
          </Phone>
          <Social>
            <Module>Sígueme</Module>
            <Icons>
              <a
                href="https://www.youtube.com/@luiscuevas3603"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube />
              </a>
              <a
                href="https://www.tiktok.com/@luigicaves"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tiktok />
              </a>
              <a
                href="https://www.linkedin.com/in/luis-cuevas-3a533a69/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/luiscuevas360"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://open.spotify.com/show/1yUfLj4f0KAWrzRbjJeItK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Spotify />
              </a>
            </Icons>
          </Social>
        </ContactSection>
        <Copyright>
          Copyright {currentYear} Luis Cuevas 360© | Todos los derechos
          reservados
        </Copyright>
      </MainContainer>
    </section>
  );
}

export default Contact;
