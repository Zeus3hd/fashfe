import styled from "styled-components";
const colors = {
  crimson: "#D72036",
  purple: "#833895",
  black: "#22282E",
  blue: "#2777EF",
};
const Wrapper = styled.div`
  position: relative;
`;
const SvgBackground = styled.img`
  width: 100%;
  max-width: 550px;
  z-index: -1;
  margin: 1rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const FormContainer = styled.form`
  background: #fff url(${({ bg }) => bg}) no-repeat;
  background-size: contain;
  background-position: right;
  position: absolute;
  top: 5rem;
  margin: 2.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 650px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    margin: 0;
    background: #fff;
    align-items: stretch;
    position: static;
  }
`;
const FormTitle = styled.p`
  font-weight: bold;
  color: ${colors.black};
  letter-spacing: 1px;
  font-size: 2rem;
  margin: 0;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;
const InputField = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid ${colors.purple + "55"};
  border-radius: 0.5rem;
`;
const InputLabel = styled.label`
  color: ${colors.purple};
  font-size: 0.9rem;
  padding: 0.2rem 0.5rem;
`;
const FormButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 0px 2px ${colors.black};
  background: ${colors.black};
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    left: -9rem;
    transition: 0.4s ease-in;
    &:hover {
      left: 0;
    }
  }
`;
const SocialButton = styled.div`
  margin: 0.5rem 2rem;
  color: ${colors.purple};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const SocialLabel = styled.p`
  margin-right: 1rem;
  font-size: 0.95rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export {
  Wrapper,
  SvgBackground,
  FormContainer,
  FormTitle,
  InputGroup,
  InputField,
  InputLabel,
  FormButton,
  SocialContainer,
  SocialButton,
  SocialLabel,
};
