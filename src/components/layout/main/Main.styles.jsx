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
  position: relative;
  max-width: ${contentW.landing};
  margin: 0 auto;
  border: 1px solid purple;
  height: auto;
  padding-top: ${sizes.size_10};
  @media only screen and (max-width: ${contentW.desktop}) {
    padding: 104px 24px 24px;
  }
`;
//INTRO SECTION
export const IntroSection = styled.div`
  display: flex;
`;

export const SectionName = styled.p`
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};
  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
  }
`;
export const ServicesSection = styled.div`
  width: 100%;
  gap: ${spaces.space_4};
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  scroll-margin-top: 200px;
`;
export const ContactSection = styled.div``;
export const PhilosophySection = styled.div``;
export const AboutSection = styled.div`
  height: auto;
`;
export const PlatformsSection = styled.div``;

export const Location = styled.div``;
export const Recomendations = styled.div``;
export const Contact = styled.div``;
export const Social = styled.div``;
