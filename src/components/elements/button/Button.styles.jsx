import styled from "styled-components";
import { colors, sizes, spaces, contentW, weights } from "@utils/constants";

export const ButtonStyle = styled.button`
  position: relative;
  cursor: pointer;
  background-color: ${colors.white};
  border-radius: ${sizes.size_13};
  color: ${colors.default};
  border: 1px solid #9359fc;
  width: ${sizes.size_20};
  height: ${sizes.size_5};
  padding: 6px 12px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${colors.default};
    color: ${colors.white};
  }
`;
