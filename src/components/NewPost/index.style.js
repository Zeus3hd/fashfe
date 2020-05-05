import styled from "styled-components";
const colors = {
  crimson: "#D72036",
  purple: "#833895",
  black: "#22282E",
  blue: "#2777EF",
};
const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 270px;
  margin: auto;
  margin-top: 2rem;
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
export { Wrapper, InputGroup, InputField, InputLabel, FormButton };
