import styled from "styled-components";
import { colors, sizes, spaces, contentW, weights } from "@utils/constants";

export const MainContainer = styled.div`
  max-width: ${contentW.landing};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media only screen and (max-width: ${contentW.desktop}) {
    padding: ${spaces.space_3};
  }
`;

export const SectionName = styled.p`
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};
  padding-bottom: ${spaces.space_4};
  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
    text-align: center;
    padding-bottom: ${spaces.space_2};
  }
`;
export const ContactWrapper = styled.div`
  background-color: ${colors.footer};
  padding-left: 16px;
  padding-right: 16px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
export const ContactSection = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;
  gap: ${spaces.space_2};

  @media only screen and (max-width: ${contentW.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Module = styled.h1`
  font-size: ${sizes.size_1};
  font-weight: ${weights.bold};
`;
export const Location = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  color: ${colors.white};
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
  color: ${colors.white};
  flex-direction: column;
  height: auto;
  gap: ${spaces.space_2};
  line-height: 1.7;
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
  color: ${colors.white};
  flex-direction: column;
  height: auto;
  gap: ${spaces.space_2};
  cursor: pointer;
`;
export const DataPhone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Number = styled.p`
  font-size: ${sizes.size_1};
`;

export const Social = styled.div`
  gap: ${spaces.space_1};
  display: flex;
  color: ${colors.white};
  flex-direction: column;
  height: auto;
  gap: ${spaces.space_2};
`;
export const Icons = styled.div`
  width: 100%;
  svg {
    color: ${colors.white};
    transition: transform 0.1s ease, fill 0.1s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      color: ${colors.default};
    }
  }
`;

export const Copyright = styled.div`
  color: ${colors.white};
  font-size: ${sizes.size_copyright};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
`;
