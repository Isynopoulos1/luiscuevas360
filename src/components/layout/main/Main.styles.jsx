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
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: ${spaces.space_4};

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
export const Testimonials = styled.div``;
export const Location = styled.div``;
export const Recomendations = styled.div``;
export const Contact = styled.div``;
export const Social = styled.div``;
