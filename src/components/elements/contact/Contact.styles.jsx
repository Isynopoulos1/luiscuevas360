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
  color: ${colors.black};
  font-weight: ${weights.ultralight};
  padding-bottom: ${spaces.space_5};

  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
    text-align: center;
    padding-bottom: ${spaces.space_2};
  }
`;
export const ContactWrapper = styled.div`
  background-color: ${colors.white};
  padding-left: ${spaces.space_2};
  padding-right: ${spaces.space_2};
  display: flex;
  flex-direction: column;
  border-top-left-radius: ${spaces.space_1};
  border-top-right-radius: ${spaces.space_1};
`;
export const ContactSection = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
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
  color: ${colors.black};
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
  color: ${colors.black};
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
  color: ${colors.black};
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
  color: ${colors.black};
  flex-direction: column;
  height: auto;
  gap: ${spaces.space_2};
`;
export const Icons = styled.div`
  width: 100%;
  svg {
    color: ${colors.black};
    transition: transform 0.1s ease, fill 0.1s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      color: ${colors.default};
    }
  }
`;

export const Copyright = styled.div`
  color: ${colors.black};
  font-size: ${sizes.size_copyright};
  font-family: "Roboto", sans-serif;
  font-weight: ${weights.light};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: ${sizes.size_6};
  padding-bottom: ${sizes.size_2};
`;
