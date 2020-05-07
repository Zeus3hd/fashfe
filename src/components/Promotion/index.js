import React from "react";
import {
  Wrapper,
  ProductContainer,
  ProductImageContainer,
  ProductDetails,
  ProductTitle,
  ProductParagraph,
} from "./index.style";
import dress from "../../img/content/img2.jpg";
import coat from "../../img/content/img5.jpg";
import abaya from "../../img/content/abaya.jpg";
const Promotion = () => {
  return (
    <Wrapper>
      <ProductContainer>
        <ProductImageContainer bg={dress} />
        <ProductDetails>
          <ProductTitle>Title here</ProductTitle>
          <ProductParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            suscipit est eget velit scelerisque, nec viverra nisi laoreet.
            Mauris suscipit faucibus mauris vitae faucibus.
          </ProductParagraph>
        </ProductDetails>
      </ProductContainer>
      <ProductContainer reversed>
        <ProductImageContainer bg={coat} />
        <ProductDetails>
          <ProductTitle reversed>Title here</ProductTitle>
          <ProductParagraph reversed>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            suscipit est eget velit scelerisque, nec viverra nisi laoreet.
            Mauris suscipit faucibus mauris vitae faucibus.
          </ProductParagraph>
        </ProductDetails>
      </ProductContainer>
      <ProductContainer>
        <ProductImageContainer bg={abaya} />
        <ProductDetails>
          <ProductTitle>Title here</ProductTitle>
          <ProductParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            suscipit est eget velit scelerisque, nec viverra nisi laoreet.
            Mauris suscipit faucibus mauris vitae faucibus.
          </ProductParagraph>
        </ProductDetails>
      </ProductContainer>
    </Wrapper>
  );
};

export default Promotion;
