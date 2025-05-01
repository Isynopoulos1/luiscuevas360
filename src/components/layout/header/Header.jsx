// IMPORT COMPONENTS
import Logo from "@elements/logo/Logo.jsx";

// IMPORT STYLING
import {
  MainContainer,
  HeaderWrapper,
  Nav,
  NavItem,
  StickyHeader,
} from "@layout/header/Header.styles";
// IMPORT DATA
//copies

function Header() {
  //LOGIC RENDER LINKS
  //LOGIC MOBILE
  //LOGIC DESKTOP

  //MAIN RENDER
  return (
    <StickyHeader>
      <MainContainer>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem href="#about">Sobre mí</NavItem>
            <NavItem href="#philosophy">Filosofía</NavItem>
            <NavItem href="#services">Sevicios</NavItem>
            <NavItem href="#platforms">Plataformas</NavItem>
            <NavItem href="#contact">Contacto</NavItem>
          </Nav>
        </HeaderWrapper>
      </MainContainer>
    </StickyHeader>
  );
}

export default Header;
