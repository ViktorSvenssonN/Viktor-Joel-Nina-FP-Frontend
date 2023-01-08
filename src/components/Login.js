import React, { useState } from "react";
import { useDispatch, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "utils/utils";
import { OuterWrapper, InnerWrapper, LogoButtonContainer, LogoButton, LogoImg, Form, FormOuterContainer, FormInnerContainer, LoginInLinkContainer,
  FormHeaderContainer, FormHeader, InputContainer, LabelSubHeader, BallonBackgroundImg, ContainerButtonLoginSignUp, ButtonLoginSignUp } from "Globalstyles";
import user from "reducers/user";
import styled from "styled-components/macro";
import ballons from "../images/ballons_120x250.png";
import logolight from "../logo/logo_light.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    };
    fetch(API_URL("login"), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUsername(data.response.username));
            dispatch(user.actions.setId(data.response.id));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
          });
          navigate("/home");
        } else {
          batch(() => {
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setAccessToken(null));
          });
        }
      });
  };

  return (
    <>
    <LogoButtonContainer>
      <LogoButton>
        <Link to="/">
          <LogoImg src={logolight} />{" "}
        </Link>
      </LogoButton>
    </LogoButtonContainer>
    <ClonedOuterWrapper>
      <ClonedInnerWrapper>
      <ClonedFormOuterContainer>
        <BallonBackgroundImg src={ballons} />
        <ClonedFormHeaderContainer>
          <FormHeader>LOG IN</FormHeader>
        </ClonedFormHeaderContainer>
        <FormInnerContainer>
          <Form onSubmit={onFormSubmit}>
            <LabelSubHeader htmlFor="username">Email: </LabelSubHeader>
            <InputContainer
              type="email"
              id="username"
              placeholder="example@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
            <LabelSubHeader htmlFor="password">Password: </LabelSubHeader>
            <InputContainer
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <ForgottPasswordContainer>
              <Link to="/forgot">
                <p>
                  Forgot password?
                </p>
              </Link>
            </ForgottPasswordContainer>
            <LoginInLinkContainer>
              <p>
                Not a member?{" "}
                <span>
                  <Link to="/register">Register here</Link>
                </span>{" "}
              </p>
            </LoginInLinkContainer>
            <ContainerButtonLoginSignUp>
              <ButtonLoginSignUp type="submit">LOGIN IN</ButtonLoginSignUp>
            </ContainerButtonLoginSignUp>
          </Form>
        </FormInnerContainer>
        </ClonedFormOuterContainer>
      </ClonedInnerWrapper>
    </ClonedOuterWrapper>
      </>
  );
};

// Styled components // (får kolla om vi ska flytta några till global)

const ClonedOuterWrapper = styled(OuterWrapper)`
  flex-direction: column;
  background: var(--clr-background);
  justify-content: flex-end;
  overflow: hidden;
`;

const ClonedInnerWrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 95%;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
`;

const ClonedFormOuterContainer = styled(FormOuterContainer)`
  background: var(--clr-background-login); 
  height: 80%;
`;

const ClonedFormHeaderContainer = styled(FormHeaderContainer)`
  margin-bottom: 5%;
`;

const ForgottPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2%;
  padding-right: 2%;
`;

export default Login;

