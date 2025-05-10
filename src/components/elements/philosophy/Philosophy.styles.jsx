import styled from "styled-components";
import {
  colors,
  sizes,
  zindex,
  spaces,
  contentW,
  weights,
} from "@utils/constants";

export const MainContainer = styled.div`
  display: flex;
`;
export const SectionName = styled.p`
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};
  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
  }
`;
