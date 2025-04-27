// IMPORT COMPONENTS
import Logo from "@elements/logo/Logo.jsx";

// IMPORT STYLING
import {
  MainContainer,
  HeaderWrapper,
  Nav,
  Main,
} from "@layout/header/Header.styles";
// IMPORT DATA
//copies

function Header() {
  //LOGIC RENDER LINKS
  //LOGIC MOBILE
  //LOGIC DESKTOP

  //MAIN RENDER
  return (
    <Main>
      <MainContainer>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            <div>Nav</div>
            {/* <p>{header.nav.1}</p> */}
            {/* <p>{header.nav.2}</p> */}
            {/* <p>{header.nav.3}</p> */}
            {/* <p>{header.nav.4}</p> */}
            {/* <p>{header.nav.5} BUTTON CONTACT</p> */}
          </Nav>
        </HeaderWrapper>
      </MainContainer>
    </Main>
  );
}

export default Header;
