import React from "react";
import {
  Wrapper,
  ProductContainer,
  ProductBackground,
  ProductImage,
  ProductTextContainer,
  CatchPhrase,
  ProductParagraph,
} from "./index.style";
import productImg from "../../img/svgcutdress.png";
import productBackground from "../../img/svgpurple.png";
import productImg2 from "../../img/svgcutmiddle.png";
import productBackground2 from "../../img/sbgbackground2.png";
import productImg3 from "../../img/svgcut3.png";
import productBackground3 from "../../img/svgbg3.png";
const Promotion = () => {
  return (
    <Wrapper>
      <ProductContainer>
        <ProductBackground src={productBackground} />
        <ProductImage src={productImg} />
        <ProductTextContainer>
          <CatchPhrase>CATCH PHRASE</CatchPhrase>
          <ProductParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ProductParagraph>
        </ProductTextContainer>
      </ProductContainer>
      <ProductContainer reversed>
        <ProductBackground src={productBackground2} />
        <ProductImage src={productImg2} />
        <ProductTextContainer>
          <CatchPhrase>CATCH PHRASE</CatchPhrase>
          <ProductParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ProductParagraph>
        </ProductTextContainer>
      </ProductContainer>
      <ProductContainer>
        <ProductBackground src={productBackground3} />
        <ProductImage src={productImg3} />
        <ProductTextContainer>
          <CatchPhrase>CATCH PHRASE</CatchPhrase>
          <ProductParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ProductParagraph>
        </ProductTextContainer>
      </ProductContainer>
    </Wrapper>
  );
};

export default Promotion;
