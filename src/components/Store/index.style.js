import styled from "styled-components";
const colors = {
  crimson: "#D72036",
  purple: "#833895",
  black: "#22282E",
  blue: "#2777EF",
};
const Wrapper = styled.div``;
const CategoriesContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`;
const CategoryButton = styled.button`
  margin: 0 1rem;
  background: transparent;
  border: none;
  padding: 0;
  color: ${({ active }) => (active ? colors.crimson : colors.black + "99")};
  font-weight: 700;
  cursor: pointer;
`;
const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 2rem;
  padding: 1rem;
`;
const Product = styled.div`
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 300px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  cursor: pointer;
  > * {
    opacity: 0;
    display: none;
  }
  &:hover {
    background: ${colors.crimson + "DD"} url(${({ bg }) => bg}) no-repeat;
    background-blend-mode: darken;
    background-size: cover;
    > * {
      opacity: 1;
      display: initial;
      margin: 0;
    }
  }
`;
const ProductTitle = styled.p`
  font-weight: 700;
  font-size: 1.3rem;
`;
const ProductSellingPointContainer = styled.div``;
const ProductSellingPoint = styled.p``;
const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 1.3rem;
`;
export {
  Wrapper,
  CategoriesContainer,
  CategoryButton,
  Gallery,
  Product,
  ProductTitle,
  ProductSellingPointContainer,
  ProductSellingPoint,
  ProductPrice,
};
