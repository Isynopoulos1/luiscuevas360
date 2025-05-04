import styled from "styled-components";
import { zindex } from "@utils/constants";

export const MenuWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  z-index: ${zindex.mobile_menu};
  cursor: pointer;
  align-items: center;

  & .hamburger-react > * {
    height: 1px !important;
  }
`;
