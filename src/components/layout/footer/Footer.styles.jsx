import styled from "styled-components";
import {
  colors,
  sizes,
  zindex,
  spaces,
  contentW,
  weights,
} from "@utils/constants";
export const ContactSection = styled.div`
  color: blue;
  scroll-margin-top: 200px;
  border: 1px solid gray;
`;
export const SectionName = styled.p`
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};
`;
export const MainContainer = styled.div`
  color: blue;
  max-width: ${contentW.landing};
  margin: 0 auto;
  border: 1px solid purple;
  height: auto;
  @media only screen and (max-width: ${contentW.desktop}) {
    padding: ${spaces.space_3};
  }
`;
export const Location = styled.div`
  color: blue;
`;
export const Recomendations = styled.div`
  color: blue;
`;
export const Phone = styled.div`
  color: blue;
`;
export const Social = styled.div`
  color: blue;
`;
