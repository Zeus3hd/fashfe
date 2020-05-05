import React from "react";
import {
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
} from "./index.style";
import svgBg from "../../img/newsletterbg.png";
import formBg from "../../img/formbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Newsletter = () => {
  return (
    <>
      <Wrapper>
        <SvgBackground src={svgBg} />
        <FormContainer bg={formBg}>
          <FormTitle>GET IN TOUCH</FormTitle>
          <InputGroup>
            <InputLabel>Name</InputLabel>
            <InputField type="text" />
          </InputGroup>
          <InputGroup>
            <InputLabel>E-mail</InputLabel>
            <InputField type="email" />
          </InputGroup>
          <InputGroup>
            <InputLabel>Phone No.</InputLabel>
            <InputField type="text" />
          </InputGroup>
          <FormButton>SEND</FormButton>
        </FormContainer>
      </Wrapper>
      <SocialContainer>
        <SocialButton>
          <SocialLabel>elegant_lady</SocialLabel>
          <FontAwesomeIcon icon={faFacebook} />
        </SocialButton>
        <SocialButton>
          <SocialLabel>elegant_lady</SocialLabel>
          <FontAwesomeIcon icon={faInstagram} />
        </SocialButton>
        <SocialButton>
          <SocialLabel>elegant_lady</SocialLabel>
          <FontAwesomeIcon icon={faTwitter} />
        </SocialButton>
      </SocialContainer>
    </>
  );
};

export default Newsletter;
