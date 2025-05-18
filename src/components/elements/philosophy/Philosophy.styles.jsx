import styled from "styled-components";
import { colors, sizes, spaces, contentW, weights } from "@utils/constants";

export const MainContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  gap: ${spaces.space_4};
`;
export const SectionName = styled.p`
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};

  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
    padding-top: ${spaces.space_2};
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
