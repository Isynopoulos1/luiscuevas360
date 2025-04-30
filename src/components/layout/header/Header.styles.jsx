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

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
`;
export const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #722ec0;
  }
`;
