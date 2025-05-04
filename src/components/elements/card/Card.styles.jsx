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
  width: calc(48% - 1px);
  flex-direction: column;
  height: auto;
  gap: ${spaces.space_4};
  margin-top: ${spaces.space_2};
  margin-bottom: ${spaces.space_2};
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
    font-size: ${sizes.size_2};
    font-weight: ${weights.bold};
    text-align: center;
    top: 50%;
    width: 100%;
    z-index: ${zindex.header};
    color: ${colors.white};
    transition: all 0.5s ease;
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
