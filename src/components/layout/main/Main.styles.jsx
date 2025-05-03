import styled from "styled-components";
export const MainContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid purple;
  height: auto; //cambiar auto
  padding-top: 200px; // altura del header
  @media only screen and (max-width: 1200px) {
    padding: 24px;
  }
`;
export const ContactSection = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
`;
export const PhilosophySection = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
  border: 1px solid gray;
`;
export const AboutSection = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
`;
//INTRO SECTION
export const IntroSection = styled.div`
  display: flex;
  height: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  padding-top: 80px;

  @media only screen and (max-width: 1500px) {
    padding-top: 80px;
  }
`;
export const LogoContainer = styled.svg`
  width: auto;
`;
export const ColumnLeft = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  border: 1px solid blue;

  @media only screen and (max-width: 900px) {
    width: 60%;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const DescriptionIntro = styled.div`
  display: flex;
  width: 50%;
  gap: 32px;
  flex-direction: column;
  border: 1px solid red;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const SectionName = styled.p`
  font-size: 40px;
  font-weight: 200;
`;
export const ServicesSection = styled.div`
  width: 100%;
  gap: 32px;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  scroll-margin-top: 200px;
  border: 1px solid gray;
`;
export const PlatformsSection = styled.div`
  height: 200px;
  scroll-margin-top: 200px;
  border: 1px solid gray;
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
