import styled from "styled-components";
import { colors, sizes, weights, contentW } from "@utils/constants";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;

  @media only screen and (max-width: ${contentW.desktop}) {
    padding-top: 16px;
  }
`;
