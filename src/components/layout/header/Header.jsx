import React, { useEffect, useState } from "react";
import { contentW } from "@utils/constants";

// IMPORT COMPONENTS
import Logo from "@elements/logo/Logo.jsx";
import HamburguerMenu from "@elements/hamburguer/HamburguerMenu";
import Link from "@elements/link/Link";

// IMPORT STYLING
import {
  MainContainer,
  HeaderWrapper,
  Nav,
  NavItem,
  StickyHeader,
  MobileNav,
} from "@layout/header/Header.styles";
// IMPORT DATA
//copies

function Header() {
  //LOGIC MOBILE
  //HOOKS
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [toggle, setToggle] = useState(false);
  //LIFECYCLES
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= parseInt(contentW.tablet, 10));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleLink = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setToggle(false);
    }
  };
  //DATA
  const links = [
    { label: "Sobre mi", href: "about" },
    { label: "Filosofia", href: "philosophy" },
    { label: "Servicios", href: "services" },
    { label: "Plataformas", href: "platforms" },
    { label: "Contacto", href: "contact" },
  ];
  //RENDER FUNCTIONS
  const renderLinks = () => {
    return (
      <Nav>
        {links.map((link) => (
          <Link
            key={link.href}
            label={link.label}
            onClick={() => handleLink(link.href)}
          />
        ))}
      </Nav>
    );
  };
  //LOGIC DESKTOP

  //MAIN RENDER

  return (
    <StickyHeader>
      <MainContainer>
        <HeaderWrapper>
          <Logo onClick={() => handleLink("intro")} />
          {!isMobile && renderLinks()}
        </HeaderWrapper>
        {isMobile && <HamburguerMenu onClick={handleToggle} active={toggle} />}
      </MainContainer>
      {isMobile && toggle && (
        <MobileNav>
          {links.map((link) => (
            <NavItem key={link.href} onClick={() => handleLink(link.href)}>
              {link.label}
            </NavItem>
          ))}
        </MobileNav>
      )}
    </StickyHeader>
  );
}

export default Header;
