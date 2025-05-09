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
  width: 100%;
  height: auto;
`;
export const SectionName = styled.p`
  width: 100%;
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};
  padding-top: ${spaces.space_4};
  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
    padding-top: ${spaces.space_1};
  }
`;
export const ColumnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  gap: ${spaces.space_2};
`;
export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 8px);
  @media only screen and (max-width: ${contentW.mobile}) {
    width: 100%;
  }
`;
export const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 8px);
  justify-content: space-between;
  @media only screen and (max-width: ${contentW.mobile}) {
    width: 100%;
  }
`;

export const Photo = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: ${spaces.space_1};
  }
`;
export const ProfesionalDescription = styled.p`
  font-size: ${sizes.size_2};
`;
export const HobbiesDescription = styled.p`
  font-size: ${sizes.size_2};
`;
export const HobbiesPhotos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  gap: ${spaces.space_2};
`;
export const RightBox = styled.div`
  width: calc(50% - 8px);
  height: auto;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: ${spaces.space_1};
  }
`;
export const LeftBox = styled.div`
  width: calc(50% - 8px);
  height: auto;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: ${spaces.space_1};
  }
`;
