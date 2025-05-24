import styled from "styled-components";
import {
  colors,
  sizes,
  zindex,
  spaces,
  contentW,
  weights,
} from "@utils/constants";

export const StickyHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: ${zindex.header};
  width: 100%;
  height: ${sizes.size_10};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: ${contentW.landing};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${contentW.desktop}) {
    padding: 0 ${spaces.space_3};
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zindex.sidebar};
  height: 100vh;
  width: 100vw;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${spaces.space_3};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${spaces.space_3};
  font-size: ${sizes.size_1};
  font-weight: ${weights.light};
  color: ${colors.black};
`;
export const NavItem = styled.a`
  text-decoration: none;
  color: ${colors.black};
  transition: color 0.2s ease-in-out;
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};

  &:hover {
    color: ${colors.default};
  }
`;
