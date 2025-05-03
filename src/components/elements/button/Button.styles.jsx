import styled from "styled-components";
// import { colors, sizes } from "@styles/constants";

export const ButtonStyle = styled.button`
  position: relative;
  cursor: pointer;
  background-color: #9359fc;
  /* background: unset; */
  border-radius: 100px;
  color: white;
  border: none;
  width: 160px;
  height: 40px;
  padding: 6px 12px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #5c24c5;
    color: white;
  }
`;
