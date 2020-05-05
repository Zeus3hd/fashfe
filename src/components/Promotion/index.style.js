import styled from "styled-components";
const colors = {
  crimson: "#D72036",
  purple: "#833895",
  black: "#22282E",
  blue: "#2777EF",
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem 0;
  @media (min-width: 1024px) {
    flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};
    align-items: center;
  }
`;
const ProductBackground = styled.img`
  transform: rotateZ(35deg);
  box-sizing: border-box;
  width: 90vw;
  max-width: 500px;
`;
const ProductImage = styled.img`
  position: absolute;
  margin: 1rem;
  box-sizing: border-box;
  width: 80vw;
  max-width: 500px;
`;
const ProductTextContainer = styled.div`
  padding: 0 1rem;
  margin: 0.5rem;
`;
const CatchPhrase = styled.p`
  font-weight: bold;
  color: ${colors.black};
  font-size: 4vw;
`;
const ProductParagraph = styled.p`
  color: ${colors.black};
  font-size: 1rem;
`;
export {
  Wrapper,
  ProductContainer,
  ProductBackground,
  ProductImage,
  ProductTextContainer,
  CatchPhrase,
  ProductParagraph,
};
