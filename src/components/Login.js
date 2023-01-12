import React, { useState } from "react";
import { useDispatch, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "./util";
import {
  OuterWrapper,
  InnerWrapper,
  LogoButtonContainer,
  LogoButton,
  LogoImg,
  Form,
  FormOuterContainer,
  FormInnerContainer,
  LoginInLinkContainer,
  FormHeaderContainer,
  FormHeader,
  InputContainer,
  LabelSubHeader,
  BallonBackgroundImg,
  ContainerButtonLoginSignUp,
  ButtonLoginSignUp,
  ValidationError,
} from "Globalstyles";
import user from "reducers/user";
import styled from "styled-components/macro";
import ballons from "../images/ballons_120x250.png";
/* import ballonsBig from "../images/ballons_250x500.png"; */
import logolight from "../logo/logo_light.svg";
import { fetchOptions } from "./util";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    fetch(
      API_URL("login"),
      fetchOptions(
        "POST",
        "",
        JSON.stringify({ username: username, password: password })
      )
    )
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
          setWrongCredentials(true);
          setUsername("");
          setPassword("");
        }
      });
  };

  const handleEmailChange = (e) => {
    setWrongCredentials(false);
    setUsername(e.target.value);
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
            {wrongCredentials && (
              <ValidationError>Wrong username or password</ValidationError>
            )}
            <FormInnerContainer>
              <Form onSubmit={onFormSubmit}>
                <LabelSubHeader htmlFor="username">Email: </LabelSubHeader>
                <InputContainer
                  type="email"
                  id="username"
                  placeholder="example@example.com"
                  value={username}
                  onChange={handleEmailChange}
                />
                <LabelSubHeader htmlFor="password">Password: </LabelSubHeader>
                <InputContainer
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* TODO, forgot password
                <ForgottPasswordContainer>
                  <Link to="/forgot">
                    <p>Forgot password?</p>
                  </Link>
                </ForgottPasswordContainer> */}
                <LoginInLinkContainer>
                  <p>
                    Not a member?{" "}
                    <span>
                      <Link to="/register">Register here</Link>
                    </span>{" "}
                  </p>
                </LoginInLinkContainer>
                <ContainerButtonLoginSignUp>
                  <ButtonLoginSignUp type="submit">LOGIN</ButtonLoginSignUp>
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
  background: var(--clr-bg);
  justify-content: flex-end;
  overflow: hidden;
  max-width: 1000px;

  @media (min-width: 668px) {
    width: 70%;
    height: 70%;
    border-radius: 45px;
  }

  @media (min-width: 1350px) {
    height: 65%;
  }
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
  background: var(--clr-bg-login);
  height: 80%;
`;

const ClonedFormHeaderContainer = styled(FormHeaderContainer)`
  margin-bottom: 5%;

  @media (min-width: 668px) {
    margin-bottom: 1%;
    margin-top: 5%;
    margin-right: 35%;
  }

  @media (min-width: 1024px) {
    margin-right: 44%;
    margin-top: 3%;
  }

  @media (min-width: 1350px) {
    /* margin-top: 22%; */
  }

`;

/* TODO, forgot password
const ForgottPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2%;
  padding-right: 2%;
`;
*/

export default Login;
