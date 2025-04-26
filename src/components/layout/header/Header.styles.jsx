import styled from "styled-components";
//import { colors, sizes } from "@styles/constants"

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  border-bottom: 1px solid blue;
  background-color: white;
  border: 1px solid red;
  display: flex; /* <-- AÑADIR */
  justify-content: center; /* <-- AÑADIR */
`;
export const Nav = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1200px;
  height: 70px;
  margin: 0 auto;
  border: 1px solid blue;
`;
