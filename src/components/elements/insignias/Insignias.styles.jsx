import styled from "styled-components";
import { colors, sizes, spaces, contentW, weights } from "@utils/constants";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: ${spaces.space_11};
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media only screen and (max-width: ${contentW.desktop}) {
    padding-top: 16px;
  }
`;

export const Insignia = styled.div`
  width: ${sizes.size_22};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${spaces.space_2};
  padding: ${spaces.space_2};
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    max-width: ${sizes.sizes_10};
    height: ${sizes.size_10};
  }
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  color: ${colors.default};
  font-weight: ${weights.bold};
`;
