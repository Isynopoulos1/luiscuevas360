import styled from "styled-components";
import { colors, sizes, spaces, contentW, weights } from "@utils/constants";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces.space_1};
  width: 100%;
  min-height: 80vh;
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  @media only screen and (max-width: ${contentW.mobile}) {
    width: 100%;
  }
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
