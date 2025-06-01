import styled from "styled-components";
import {
  colors,
  sizes,
  zindex,
  spaces,
  contentW,
  weights,
} from "@utils/constants";
export const CardWrapper = styled.div`
  display: flex;
  width: calc(50% - 16px);
  flex-direction: column;
  height: auto;
  @media only screen and (max-width: ${contentW.tablet}) {
    width: 100%;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces.space_1};
`;
export const Plan = styled.h1`
  font-size: ${sizes.size_2};
  font-weight: ${weights.bold};
  padding-top: ${spaces.space_2};
`;
export const Description = styled.p`
  font-size: ${sizes.size_2};
  font-weight: ${weights.light};
`;

export const TitleOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: ${spaces.space_1};
  background-color: ${colors.default};
  color: ${colors.white};
  font-size: ${sizes.size_3};
  font-weight: ${weights.bold};
  text-align: left;
  border-bottom-left-radius: ${spaces.space_1};
  border-bottom-right-radius: ${spaces.space_1};
`;

export const ServiceStyle = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${spaces.space_1};

  transition: all 0.5s ease;

  img {
    width: 100%;
    height: 100%;
    filter: saturate(0);
    object-fit: cover;
    transition: all 0.5s ease;
    border-radius: ${spaces.space_1};
  }

  &:hover img {
    filter: saturate(1);
    transform: scale(1.05);
  }
`;
