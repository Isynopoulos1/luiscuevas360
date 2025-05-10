import styled from "styled-components";
import { colors, sizes, spaces, weights } from "@utils/constants";

export const CardWrapper = styled.div`
  min-width: 220px;
  min-height: 220px;
  margin: 8px;
  background-color: ${colors.turquesa};
  background-size: cover;
  background-position: center;
  border-radius: ${spaces.space_1};
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

export const FollowButton = styled.button`
  padding: ${spaces.space_1} ${spaces.space_3};
  border: 1px solid ${colors.white};
  border-radius: 20px;
  color: ${colors.white};
  background-color: transparent;
  margin-bottom: ${spaces.space_2};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${colors.default};
    color: ${colors.white};
  }
`;
