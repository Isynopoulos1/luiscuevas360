import React, { useEffect, useState } from "react";
import { contentW } from "@utils/constants";

// IMPORT COMPONENTS
import Logo from "@elements/logo/Logo.jsx";
import HamburguerMenu from "@elements/hamburguerMenu/HamburguerMenu";
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
  const handleLink = () => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
      });
      setToggle(false); // Cierra el menú tras click
    }
  };
  //DATA
  const links = [
    { label: "sobre mi", href: "about" },
    { label: "filosofia", href: "philosophy" },
    { label: "servicios", href: "services" },
    { label: "plataformas", href: "platforms" },
    { label: "contacto", href: "contact" },
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
          <Logo onClick={handleLink} />
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
