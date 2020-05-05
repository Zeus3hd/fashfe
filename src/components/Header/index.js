import React from "react";
import {
  Wrapper,
  TitleContainer,
  ElegantTitle,
  LadyTitle,
  HeaderParagraphContainer,
  HeaderParagraph,
  ShopButton,
  BackgroundWordsContainer,
  BackgroundWord,
} from "./index.style";
const Header = () => {
  return (
    <Wrapper>
      <BackgroundWordsContainer>
        <BackgroundWord color="purple">FASHION</BackgroundWord>
        <BackgroundWord color="crimson">STYLE</BackgroundWord>
        <BackgroundWord color="black">ELEGANCE</BackgroundWord>
      </BackgroundWordsContainer>
      <TitleContainer>
        <ElegantTitle>ELEGANT</ElegantTitle>
        <LadyTitle>LADY</LadyTitle>
      </TitleContainer>
      <HeaderParagraphContainer>
        <HeaderParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        </HeaderParagraph>
        <HeaderParagraph>
          accumsan, velit sed sagittis vestibulum, justo tellus aliquet neque.
        </HeaderParagraph>
        <ShopButton>SHOP NOW</ShopButton>
      </HeaderParagraphContainer>
    </Wrapper>
  );
};

export default Header;
