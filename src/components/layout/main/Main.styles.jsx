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
export const ContactSection = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
`;
export const PhilosophySection = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
`;
export const AboutSection = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
`;
//INTRO SECTION
export const IntroSection = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  display: flex;
  gap: ${spaces.space_2};

  @media only screen and (max-width: ${contentW.mobile}) {
    flex-direction: column;
  }
`;
export const LogoContainer = styled.svg`
  width: auto;
`;
export const ColumnLeft = styled.div`
  width: 60%;
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
  width: 40%;
  height: auto;
  border: 1px solid orange;
  @media only screen and (max-width: ${contentW.mobile}) {
    width: 100%;
  }
`;
export const DescriptionIntro = styled.div`
  display: flex;
  width: 50%;
  gap: ${spaces.space_4};
  flex-direction: column;
  @media only screen and (max-width: ${contentW.tablet}) {
    width: 100%;
  }
  @media only screen and (max-width: ${contentW.mobile}) {
    align-items: center;
  }
`;

export const SectionName = styled.p`
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};
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
export const PlatformsSection = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
`;
export const Testimonials = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
`;
export const Location = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
`;
export const Recomendations = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
`;
export const Contact = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
`;
export const Social = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
`;
