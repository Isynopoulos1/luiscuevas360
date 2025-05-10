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
  width: 100%;
  flex-direction: column;
  min-height: 80vh;
`;

export const SectionName = styled.p`
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};

  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
    padding-top: ${spaces.space_2};
  }
`;

export const Testimonials = styled.div`
  width: 100%;
`;
