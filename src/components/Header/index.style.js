import styled from "styled-components";
const colors = {
  crimson: "#D72036",
  purple: "#833895",
  black: "#22282E",
  blue: "#2777EF",
};
const Wrapper = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const TitleContainer = styled.div`
  font-size: 10vw;
  font-weight: 900;
  /* background: rgba(255, 255, 255, 0.3); */
  padding: 0.3rem;
  @media (min-width: 1024px) {
    background: transparent;
  }
`;
const ElegantTitle = styled.p`
  margin: 0.5rem;
  color: ${colors.purple};
`;
const LadyTitle = styled.p`
  margin: 0.5rem;
  color: ${colors.crimson};
`;
const HeaderParagraphContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
const HeaderParagraph = styled.p`
  font-weight: bold;
  line-height: 1.5rem;
  color: ${colors.black};
`;

const ShopButton = styled.button`
  align-self: center;
  padding: 0.5rem 1rem;
  background: ${colors.black};
  border: none;
  color: #fff;
  font-weight: lighter;
  @media (min-width: 1024px) {
    align-self: flex-start;
  }
`;

const BackgroundWordsContainer = styled.div`
  position: absolute;
  width: 100%;
  right: 0;
  top: 0;
  font-size: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: -1;
  mix-blend-mode: multiply;
  opacity: 0.2;
  text-align: right;
`;
const BackgroundWord = styled.p`
  margin: 0;
  color: ${({ color }) => colors[color]};
`;

export {
  Wrapper,
  TitleContainer,
  ElegantTitle,
  LadyTitle,
  HeaderParagraphContainer,
  HeaderParagraph,
  ShopButton,
  BackgroundWordsContainer,
  BackgroundWord,
};
