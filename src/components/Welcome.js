import React from "react";
import { Link } from "react-router-dom";
import { OuterWrapper, InnerWrapper } from "Globalstyles";
import styled from "styled-components/macro";
import logowelcome from "../logo/logo_welcome.svg";

const Login = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ImgParent>
          <ImgContainer src={logowelcome} />
        </ImgParent>
        <ButtonWrapper>
          <ParentButton>
            <Link to="login">
              <Button type="button">LOGIN</Button>
            </Link>
          </ParentButton>
          <ParentButton>
            <Link to="register">
              <Button type="button">REGISTER</Button>
            </Link>
          </ParentButton>
        </ButtonWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

// Styled components 

const ImgParent = styled.div`

  @media(min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

const ImgContainer = styled.img`
  width: 100%;
  height: 50%;
  margin-bottom: 10%;

  @media(min-width: 1024px) {
    width: 90%
  }

  @media (min-width: 2000px) {
    width: 70%;
    height: 27vw;
    margin-bottom: 6%;
  }

`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ParentButton = styled.div`
  height: 11vw;
  width: 65%;
  margin-bottom: 10%;

  @media (min-width: 668px) {
    height: 8vw;
    width: 50%;
    margin-bottom: 8%;
  }

  @media (min-width: 1024px) {
  height: 6vw;
  width: 40%;
  }

  @media (min-width: 1024px) {
    height: 4vw;
    width: 30%;
    margin-bottom: 4%;
    }

`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2.5px;
  background-color: var(--clr-bg-light);
  border: none;
  border-radius: 15px;
  box-shadow: 5px 6px 10px var(--clr-text-dark);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: var(--clr-text-dark);
    box-shadow: 2px 3px 10px var(--clr-text-dark);
    color: #fff;
    transform: translateY(-2px);
  }
`;

export default Login;
