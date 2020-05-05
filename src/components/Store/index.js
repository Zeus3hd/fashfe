import React, { useState, useEffect } from "react";
import {
  Wrapper,
  CategoriesContainer,
  CategoryButton,
  Gallery,
  Product,
  ProductTitle,
  ProductSellingPointContainer,
  ProductSellingPoint,
  ProductPrice,
} from "./index.style";

const Store = () => {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  useEffect(() => {
    fetch("/products")
      .then((res) => {
        return res.json();
      })
      .then((snapshot) => {
        setData(snapshot);
      });
  }, []);

  return (
    <Wrapper>
      <CategoriesContainer>
        <CategoryButton
          active={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
        >
          All
        </CategoryButton>
        <CategoryButton
          active={activeCategory === "dress"}
          onClick={() => setActiveCategory("dress")}
        >
          DRESSES
        </CategoryButton>
        <CategoryButton
          active={activeCategory === "coat"}
          onClick={() => setActiveCategory("coat")}
        >
          COATS
        </CategoryButton>
        <CategoryButton
          active={activeCategory === "abaya"}
          onClick={() => setActiveCategory("abaya")}
        >
          ABAYA
        </CategoryButton>
      </CategoriesContainer>
      <Gallery>
        {data.map((item, i) => {
          if (item.type["en-US"] === activeCategory) {
            return (
              <Product key={i} bg={item.imageurl["en-US"]}>
                <ProductTitle>{item.title["en-US"]}</ProductTitle>
                <ProductPrice>${item.price["en-US"]}</ProductPrice>
                <ProductSellingPointContainer>
                  <ProductSellingPoint>SELLING POINT</ProductSellingPoint>
                  <ProductSellingPoint>SELLING POINT</ProductSellingPoint>
                  <ProductSellingPoint>SELLING POINT</ProductSellingPoint>
                </ProductSellingPointContainer>
              </Product>
            );
          } else if (activeCategory === "all") {
            return (
              <Product key={i} bg={item.imageurl["en-US"]}>
                <ProductTitle>{item.title["en-US"]}</ProductTitle>
                <ProductPrice>${item.price["en-US"]}</ProductPrice>
                <ProductSellingPointContainer>
                  <ProductSellingPoint>SELLING POINT</ProductSellingPoint>
                  <ProductSellingPoint>SELLING POINT</ProductSellingPoint>
                  <ProductSellingPoint>SELLING POINT</ProductSellingPoint>
                </ProductSellingPointContainer>
              </Product>
            );
          } else {
            return false;
          }
        })}
      </Gallery>
    </Wrapper>
  );
};

export default Store;
