import React, { useState } from "react";
import {
  Wrapper,
  BigImageContainer,
  BigImage,
  Details,
  TitleContainer,
  Title,
  Price,
  DetailsParagraph,
  ProductPoints,
  ProductPoint,
  ThumbnailsContainer,
  Thumbnail,
} from "./index.style";
import imageOne from "../../img/content/abaya5.jpg";
import imageTwo from "../../img/content/abaya6.jpg";
import imageThree from "../../img/content/abaya7.jpg";

const Product = () => {
  // eslint-disable-next-line
  const [data, setDate] = useState([imageOne, imageTwo, imageThree]);
  const [activeImage, setActiveImage] = useState(0);
  return (
    <Wrapper>
      <BigImageContainer>
        <BigImage bg={data[activeImage]} />
      </BigImageContainer>
      <Details>
        <TitleContainer>
          <Title>TITLE HERE</Title>
          <Price>$85,85</Price>
        </TitleContainer>
        <DetailsParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sollicitudin dolor eu tincidunt posuereaes putate.
        </DetailsParagraph>
        <ProductPoints>
          <ProductPoint>Point One</ProductPoint>
          <ProductPoint>Point Two</ProductPoint>
          <ProductPoint>Point Three</ProductPoint>
        </ProductPoints>
        <ThumbnailsContainer>
          {data.map((item, i) => {
            return (
              <Thumbnail bg={item} key={i} onClick={() => setActiveImage(i)} />
            );
          })}
        </ThumbnailsContainer>
      </Details>
    </Wrapper>
  );
};

export default Product;
