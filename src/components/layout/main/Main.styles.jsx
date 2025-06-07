import styled from "styled-components";
import { colors, sizes, spaces, contentW, weights } from "@utils/constants";
export const MainContainer = styled.div`
  position: relative;
  max-width: ${contentW.landing};
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: ${sizes.size_13};
  @media only screen and (max-width: ${contentW.desktop}) {
    padding: 104px 24px 24px;
    gap: ${sizes.size_5};
  }
`;
