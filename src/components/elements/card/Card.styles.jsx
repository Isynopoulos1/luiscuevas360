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
export const ServiceStyle = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  filter: saturate(0);
  transition: all 0.5s ease;
  border-radius: ${spaces.space_1};
  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    border-radius: ${spaces.space_1};
  }
  h3 {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${sizes.size_3};
    font-weight: ${weights.bold};
    text-align: center;
    top: 50%;
    width: 100%;
    z-index: ${zindex.base};
    color: ${colors.white};
    transition: all 0.5s ease;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
  &:hover {
    filter: saturate(1);
    img {
      transform: scale(1.2);
    }
    h3 {
      color: ${colors.white};
    }
  }
  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 750px) {
    h3 {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;
