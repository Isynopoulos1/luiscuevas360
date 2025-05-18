import styled from "styled-components";
import {
  colors,
  sizes,
  zindex,
  spaces,
  contentW,
  weights,
} from "@utils/constants";

export const TestimonialWrapper = styled.div`
  display: flex;
  width: 350px;
  height: auto;
  padding: ${spaces.space_2};
  gap: ${spaces.space_1};
  flex-direction: column;
  background-color: ${colors.white};
  @media only screen and (max-width: ${contentW.tablet}) {
    width: 100%;
  }
`;
export const Ranking = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
`;
export const StarIcon = styled.span`
  font-size: 18px;
  color: ${colors.turquesa};
`;

export const Comment = styled.p`
  font-size: ${sizes.size_2};
  color: ${colors.black};
`;
export const Author = styled.p`
  font-size: ${sizes.size_1};
  font-weight: ${weights.bold};
  color: ${colors.black};
`;
