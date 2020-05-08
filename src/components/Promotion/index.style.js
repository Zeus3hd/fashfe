import styled from "styled-components";
const colors = {
  crimson: "#D72036",
  purple: "#833895",
  black: "#22282E",
  blue: "#2777EF",
};
const Wrapper = styled.div``;
const ProductContainer = styled.div`
  display: flex;
  max-width: 60vw;
  padding: 2rem;
  flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};
  @media (max-width: 900px) {
    max-width: 90vw;
    flex-direction: column;
  }
`;
const ProductImageContainer = styled.div`
  flex: 1;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 40vh;
  min-height: 40vh;
`;
const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ProductTitle = styled.p`
  background: ${({ bgColor }) => colors[bgColor]};
  font-size: 2rem;
  padding: 0.5rem 1rem;
  color: #ffffff;
  position: relative;
  align-self: ${({ reversed }) => (reversed ? "flex-end" : "flex-start")};
  left: ${({ reversed }) => (reversed ? "3rem" : "-3rem")};
  @media (max-width: 900px) {
    left: 0;
  }
`;
const ProductParagraph = styled.p`
  background: ${({ bgColor }) => colors[bgColor]};
  line-height: 2rem;
  color: #ffffff;
  margin-left: 2rem;
  ${({ reversed }) => (reversed ? "margin-right:2rem;" : "margin-left:2rem")};
  padding: 0.5rem 1rem;
  @media (max-width: 900px) {
    margin: 0;
  }
`;

export {
  Wrapper,
  ProductContainer,
  ProductImageContainer,
  ProductDetails,
  ProductTitle,
  ProductParagraph,
};
