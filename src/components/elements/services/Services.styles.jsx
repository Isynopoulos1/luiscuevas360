import styled from "styled-components";
import { colors, sizes, spaces, contentW, weights } from "@utils/constants";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: auto;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${spaces.space_2};
  width: 100%;
  line-height: 1.7;
  @media only screen and (max-width: ${contentW.mobile}) {
    width: 100%;
  }
`;
export const SectionName = styled.p`
 font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};
  padding-bottom: ${spaces.space_4};
  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
    padding-bottom: ${spaces.space_2}; 
`;
