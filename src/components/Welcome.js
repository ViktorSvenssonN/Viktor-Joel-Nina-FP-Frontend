import React from "react";
import { Link } from "react-router-dom";
import { OuterWrapper, InnerWrapper } from "Globalstyles";
import styled from "styled-components";

const Login = () => {
  return (
    <ClonedOuterWrapper>
      <ClonedInnerWrapper>
        <ImgParent>
          {/* logo */}
          <ImgContainer />
        </ImgParent>
        <ButtonWrapper>
          <ParentButton>
            <Link to="login">
              <Button type="button">login</Button>
            </Link>
          </ParentButton>
          <ParentButton>
            <Link to="register">
              <Button type="button">register</Button>
            </Link>
          </ParentButton>
          <ParentButton>
            <ButtonCleaner type="button">cleaner</ButtonCleaner>
          </ParentButton>
        </ButtonWrapper>
      </ClonedInnerWrapper>
    </ClonedOuterWrapper>
  );
};

// Styled components // (får kolla om vi ska flytta några till global)

const ClonedOuterWrapper = styled(OuterWrapper)`
  height: 90vh;
`;

const ClonedInnerWrapper = styled(InnerWrapper)`
  width: 70%;
  margin: 0 auto;
`;

const ImgParent = styled.div``;

const ImgContainer = styled.div`
  width: 100%;
  background-color: coral;
  height: 200px;
  margin-bottom: 4%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ParentButton = styled.div`
  height: 10vw;
  width: 65%;
  margin-bottom: 4%;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 16px;
  letter-spacing: 2.5px;
  background-color: var(--clr-button-background);
  border: none;
  border-radius: 45px;
  box-shadow: 0px 2px 3px var(--clr-pancho);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: var(--clr-pancho);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    color: #fff;
    transform: translateY(-2px);
  }
`;

const ButtonCleaner = styled.button`
  width: 100%;
  height: 100%;
  font-size: 16px;
  letter-spacing: 2.5px;
  background-color: var(--clr-button-background);
  border: none;
  border-radius: 45px;
  box-shadow: 5px 6px 4px 2px rgba(62, 66, 66, 0.33);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: 0px 10px 15px var(--clr-pancho);
    color: #fff;
    transform: translateY(-2px);
    color: var(--clr-text-dark);
  }
`;

export default Login;
