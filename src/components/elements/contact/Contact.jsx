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
  Office,
  Address,
  Recomendations,
  DataPhone,
  Phone,
  Number,
  RecLink,
  Social,
  SectionName,
  Icons,
  Copyright,
  ContactWrapper,
} from "./Contact.styles";

//CURRENTLY YEAR FUNCTION
const currentYear = new Date().getFullYear();

function Contact() {
  return (
    <section id="contact">
      <MainContainer>
        <ContactWrapper>
          <SectionName>Contacto</SectionName>
          <ContactSection id="contact">
            <Location>
              <DataLoc>
                <Module>Locación</Module>
                <Office>
                  <a
                    href="https://maps.app.goo.gl/C4PDys9giKKHnYhZ9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Orbis Consultores Patrimoniales
                  </a>
                </Office>
                <Address>
                  Av. P.º de la Reforma 342, Juárez, Cuauhtémoc,<br></br> 06600
                  Ciudad de México, CDMX, México
                </Address>
              </DataLoc>
            </Location>
            <Recomendations>
              <Module>Recomendaciones</Module>
              <RecLink>
                <li>
                  <a
                    href="https://open.spotify.com/episode/2yFN4ufVtR9CbL9le01I1A?si=1Zxw14L6RYO8VyDRkFbLeg
                    m"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Compra tu tranquilidad asegurándote
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.elasegurador.com.mx/blog/conocer-sesgos-cognitivos-multiplica-las-opciones-de-dialogo-con-clientes/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Conocer sesgos amplía el diálogo con clientes
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=BUl4YCuNVUc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cómo puedes ser más fuerte ante la adversidad
                  </a>
                </li>
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
                <Number>+52 xx xx xx xx xx</Number>
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
        </ContactWrapper>
      </MainContainer>
    </section>
  );
}

export default Contact;
