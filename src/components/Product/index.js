import React, { useState, useEffect } from "react";
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
  // Thumbnail,
} from "./index.style";
import axios from "axios";
const Product = (props) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  useEffect(() => {
    let param = props.match.params.id;
    console.log(param);
    axios
      .get(`https://shrouded-savannah-97463.herokuapp.com/store/${param}`)
      .then((res) => {
        setData(res.data);
        return setIsLoading(false);
      })
      .catch((err) => console.log(err));
    // fetch(`https://shrouded-savannah-97463.herokuapp.com/store/${param}`)
    //   .then((res) => res.json())
    //   .catch((err) => console.log(err));
  }, []);
  return isLoading ? (
    <p>Loading, Please wait ...</p>
  ) : (
    <Wrapper>
      <BigImageContainer>
        <BigImage bg={data.imageurl["en-US"]} />
      </BigImageContainer>
      <Details>
        <TitleContainer>
          <Title>{data.title["en-US"]}</Title>
          <Price>${data.price["en-US"]}</Price>
        </TitleContainer>
        <DetailsParagraph>{data.desc["en-US"]}</DetailsParagraph>
        <ProductPoints>
          <ProductPoint>Point One</ProductPoint>
          <ProductPoint>Point Two</ProductPoint>
          <ProductPoint>Point Three</ProductPoint>
        </ProductPoints>
        <ThumbnailsContainer>
          {/* {data.map((item, i) => {
          return (
            <Thumbnail bg={item} key={i} onClick={() => setActiveImage(i)} />
          );
        })} */}
        </ThumbnailsContainer>
      </Details>
    </Wrapper>
  );
};

export default Product;
