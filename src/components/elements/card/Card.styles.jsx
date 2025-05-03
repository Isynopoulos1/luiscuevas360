import styled from "styled-components";
// import { colors, sizes } from "@styles/constants"
export const MainContainer = styled.div`
  display: flex;
  width: calc(48% - 1px);
  flex-direction: column;
  height: auto;
  gap: 32px;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  @media only screen and (max-width: 750px) {
  }
  @media only screen and (max-width: 450px) {
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Plan = styled.h1`
  font-size: 16px;
`;
export const Description = styled.p`
  font-size: 16px;
`;
export const ServiceStyle = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  filter: saturate(0);
  transition: all 0.5s ease;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    border-radius: 8px;
  }
  h3 {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-align: center;
    top: 50%;
    width: 100%;
    z-index: 2;
    color: white;
    transition: all 0.5s ease;
  }
  &:hover {
    filter: saturate(1);
    img {
      transform: scale(1.5);
    }
    h3 {
      color: white;
    }
  }
  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 750px) {
    h3 {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;
