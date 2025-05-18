import styled from "styled-components";
import { colors, sizes, spaces, contentW, weights } from "@utils/constants";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 80vh;
`;
export const SectionName = styled.p`
  font-size: ${sizes.size_5};
  font-weight: ${weights.ultralight};
  padding-bottom: ${spaces.space_4};
  border: 1px solid purple;
  @media only screen and (max-width: ${contentW.mobile}) {
    font-size: ${sizes.size_3};
    padding-bottom: ${spaces.space_2};
    border: 1px solid orange;
  }
`;
export const ColumnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  gap: ${spaces.space_4};
  @media only screen and (max-width: ${contentW.mobile}) {
    flex-direction: column;
  }
`;
export const ColumnLeft = styled.div`
  flex: 1 1 calc(50% - 16px);
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${contentW.mobile}) {
    width: 100%;
  }
`;
export const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 calc(50% - 16px);
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
  font-weight: ${weights.light};
  line-height: 1.7;
  strong {
    font-weight: ${weights.bold}; 
`;
export const HobbiesDescription = styled.p`
  font-size: ${sizes.size_2};
  font-weight: ${weights.light};
  line-height: 1.7;
`;
export const HobbiesPhotos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  gap: ${spaces.space_4};
`;
export const RightBox = styled.div`
  flex: 1 1 calc(50% - 16px);
  height: auto;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: ${spaces.space_1};
  }
`;
export const LeftBox = styled.div`
  flex: 1 1 calc(50% - 16px);
  height: auto;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: ${spaces.space_1};
  }
`;
