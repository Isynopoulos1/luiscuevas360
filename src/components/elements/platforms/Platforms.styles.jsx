import styled from "styled-components";
import { colors, sizes, spaces, contentW, weights } from "@utils/constants";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  height: auto;
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
  padding-bottom: ${spaces.space_5};
  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
  }
`;

export const Testimonials = styled.div`
  width: 100%;
  padding-top: ${spaces.space_10};
  @media only screen and (max-width: ${contentW.mobile}) {
    text-align: center;
    padding-top: 16px;
  }
`;
export const TestimonialWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  @media only screen and (max-width: ${contentW.mobile}) {
    width: 100%;
    text-align: center;
    flex-direction: column;
  }
`;
