import styled from "styled-components";
import { colors, sizes, spaces, contentW, weights } from "@utils/constants";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces.space_4};
  min-height: 60vh;
`;
export const SectionName = styled.p`
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};
  padding-bottom: ${spaces.space_4};
  border: 1px solid purple;
  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
    padding-bottom: ${spaces.space_2};
    border: 1px solid orange;
  }
`;
export const Content = styled.p`
  font-size: ${sizes.size_2};
  font-weight: ${weights.light};
`;
export const VideoSection = styled.video`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  transition: all 0.5s ease;
  cursor: pointer;
`;
