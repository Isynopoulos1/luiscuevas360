import styled from "styled-components";
import { colors, sizes, spaces, contentW, weights } from "@utils/constants";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  gap: ${spaces.space_4};

  @media only screen and (max-width: ${contentW.tablet}) {
    height: 80vh;
  }
  @media only screen and (max-width: ${contentW.mobile}) {
    flex-direction: column;
    height: auto;
  }
`;
export const LogoContainer = styled.svg`
  width: auto;
`;
export const ColumnLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${contentW.tablet}) {
    width: 60%;
  }
  @media only screen and (max-width: ${contentW.mobile}) {
    width: 100%;
  }
`;
export const ColumnRight = styled.div`
  width: 50%;
  height: auto;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: ${spaces.space_1};
  }
  @media only screen and (max-width: ${contentW.mobile}) {
    width: 100%;
  }
`;
export const DescriptionIntro = styled.div`
  display: flex;
  width: 50%;
  line-height: 1.7;
  gap: ${spaces.space_4};
  flex-direction: column;
  font-weight: ${weights.light};
  @media only screen and (max-width: ${contentW.tablet}) {
    width: 100%;
  }
  @media only screen and (max-width: ${contentW.mobile}) {
    align-items: center;
  }
`;
