import styled from "styled-components";
import { colors, sizes, spaces, contentW, weights } from "@utils/constants";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces.space_4};
`;
export const SectionName = styled.p`
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};
  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
    padding-bottom: ${spaces.space_2};
  }
`;
export const Description = styled.div`
  font-size: ${sizes.size_2};
  font-weight: ${weights.light};
  line-height: 1.7;
`;
export const Content = styled.p`
  font-size: ${sizes.size_2};
  font-weight: ${weights.light};
  line-height: 1.7;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 32px;
`;
