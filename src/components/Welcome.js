import React from "react";
import { Link } from "react-router-dom";
import { OuterWrapper, InnerWrapper } from "Globalstyles";
import styled from "styled-components/macro";
import logowelcome from "../logo/logo_welcome.svg"

const Login = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ImgParent>
          {/* logo */}
          <ImgContainer src={logowelcome}/>
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

// Styled components // (får kolla om vi ska flytta några till global)

const ClonedInnerWrapper = styled(InnerWrapper)`
  width: 70%;
  margin: 0 auto;
`;

const ImgParent = styled.div`
`;

const ImgContainer = styled.img`
  width: 100%;
  height: 50%;
  margin-bottom: 10%;
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
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2.5px;
  background-color: var(--clr-background-light);
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

const ButtonCleaner = styled.button`
  width: 100%;
  height: 100%;
  font-size: 16px;
  letter-spacing: 2.5px;
  background-color: var(--clr-background-light);
  border: none;
  border-radius: 45px;
  box-shadow: 5px 6px 4px 2px rgba(62, 66, 66, 0.33);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: var(--clr-background-light);
    box-shadow: 0px 10px 15px var(--clr-pancho);
    color: #fff;
    transform: translateY(-2px);
    color: var(--clr-text-dark);
  }
`;

export default Login;
