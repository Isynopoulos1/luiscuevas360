import styled from "styled-components";
import {
  colors,
  sizes,
  zindex,
  spaces,
  contentW,
  weights,
} from "@utils/constants";

export const SectionName = styled.p`
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};
  padding-top: ${spaces.space_4}; //

  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
    padding-top: ${spaces.space_2};
  }
`;
export const MainContainer = styled.div`
  max-width: ${contentW.landing};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: auto;
  @media only screen and (max-width: ${contentW.desktop}) {
    padding: ${spaces.space_3};
  }
`;
export const ContactSection = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 32px;
`;
export const Module = styled.h1`
  font-size: ${sizes.size_1};
  font-weight: ${weights.bold};
`;
export const Location = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DataLoc = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${sizes.size_2};
  height: auto;
  gap: ${spaces.space_2};
`;

export const Adress = styled.p`
  font-size: ${sizes.size_1};
`;

export const Recomendations = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  gap: ${spaces.space_2};
`;
export const RecLink = styled.div`
  display: flex;
  flex-direction: column;
  & li {
    font-size: ${sizes.size_1};
    text-decoration: underline;
  }
`;
export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  gap: ${spaces.space_2};
`;
export const DataPhone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Number = styled.p`
  font-size: ${sizes.size_1};
`;

export const Social = styled.div`
  gap: ${spaces.space_1};
  display: flex;
  flex-direction: column;
  height: auto;
  gap: ${spaces.space_2};
`;
export const Icons = styled.div`
  width: 100%;
`;

export const Copyright = styled.div`
  font-size: 8px;
  color: ${colors.black};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;
