import styled from "styled-components";
const colors = {
  crimson: "#D72036",
  purple: "#833895",
  black: "#22282E",
  blue: "#2777EF",
};
const Wrapper = styled.div`
  min-height: 95vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const BigImageContainer = styled.div`
  flex: 1;
  display: flex;
`;
const BigImage = styled.div`
  background: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  width: 50vw;
  height: 50vh;
  transition: 0.4s;
`;
const Details = styled.div`
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4vw;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.black};
  font-weight: bold;
  font-size: 1.5rem;
`;
const Title = styled.p``;
const Price = styled.p`
  color: ${colors.purple};
`;
const DetailsParagraph = styled.p`
  color: ${colors.black};
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 1px;
  line-height: 1.7rem;
`;
const ProductPoints = styled.div`
  font-weight: bold;
  color: ${colors.black};
  font-size: 0.85rem;
`;
const ProductPoint = styled.p`
  &::before {
    content: "- ";
  }
`;
const ThumbnailsContainer = styled.div`
  display: flex;
`;
const Thumbnail = styled.div`
  flex: 1;
  background: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  margin: 0 0.5rem;
  cursor: pointer;
  width: 10vw;
  height: 10vw;
  min-width: 100px;
  min-height: 100px;
`;

export {
  Wrapper,
  BigImageContainer,
  Details,
  TitleContainer,
  Title,
  Price,
  DetailsParagraph,
  ProductPoints,
  ProductPoint,
  ThumbnailsContainer,
  Thumbnail,
  BigImage,
};
