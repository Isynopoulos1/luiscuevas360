import styled from "styled-components";
import { colors, sizes, weights } from "@utils/constants";

export const StyledLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.black};
  text-decoration: none;
  height: ${sizes.xl};
  font-size: ${sizes.size_1};
  font-weight: ${weights.light};
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${colors.default};
  }
`;
