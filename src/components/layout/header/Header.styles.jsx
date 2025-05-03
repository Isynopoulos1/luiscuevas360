import styled from "styled-components";
//import { colors, sizes } from "@styles/constants"

export const StickyHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border: 1px solid blue;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//nuevo estilo posicional
export const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  font-size: 16px;
  font-weight: 300;
`;
export const NavItem = styled.a`
  text-decoration: none;

  color: #333;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #722ec0;
  }
`;
