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
  width: 100%;
`;

export const ServiceWrapper = styled.div`
  width: 100%;
  gap: ${spaces.space_4};
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  scroll-margin-top: 200px;
`;
export const SectionName = styled.p`
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};
  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
  }
`;
