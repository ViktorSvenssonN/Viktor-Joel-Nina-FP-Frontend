import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "./util";
import {
  OuterWrapper,
  InnerWrapper,
  LogoButtonContainer,
  LogoButton,
  LogoImg,
  ButtonLoginSignUp,
  ContainerButtonLoginSignUp,
  LoginInLinkContainer,
  Form,
  FormOuterContainer,
  FormInnerContainer,
  FormHeaderContainer,
  FormHeader,
  LabelSubHeader,
  InputContainer,
  BallonBackgroundImg,
  ValidationError,
} from "Globalstyles";
import styled, { css } from "styled-components/macro";
import ballons from "../images/ballons_120x250.png";
import logolight from "../logo/logo_light.svg";
import { fetchOptions } from "./util";

const Register = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordWarning, setShowPasswordWarning] = useState(false);
  const [conditionsMet, setConditionsMet] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (password.length >= 8 && password === confirmPassword) {
      setConditionsMet(true);
    } else {
      setConditionsMet(false);
    }
  }, [password, confirmPassword]);

  useEffect(() => {});

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      fetch(
        API_URL("register"),
        fetchOptions(
          "POST",
          "",
          JSON.stringify({ username: username, password: password })
        )
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setTimeout(() => {
              navigate("/login");
            }, 2000);
            setRegisterSuccess(true);
          } else {
            if (data?.response.keyPattern.username) {
              setUsernameTaken(true);
              setUsername("");
              setPassword("");
              setConfirmPassword("");
            }
          }
        })
        .catch((error) => console.error(error));
    }
  };

  const handleEmailChange = (e) => {
    setUsernameTaken(false);
    setUsername(e.target.value);
  };

  const handleShowPasswordWarning = () => {
    if (password.length < 8) {
      setShowPasswordWarning(true);
    }
  };

  const handlePasswordChange = (e) => {
    if (e.target.value.length >= 8) {
      setShowPasswordWarning(false);
    }
    setPassword(e.target.value);
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
          {registerSuccess ? (
            <RegisterSuccessContainer>
              <p>Registration succesful! Re-directing to login</p>
            </RegisterSuccessContainer>
          ) : (
            <FormOuterContainer>
              <BallonBackgroundImg src={ballons} />
              <FormHeaderContainer>
                <FormHeader>REGISTER</FormHeader>
              </FormHeaderContainer>
              {usernameTaken && (
                <ValidationError>
                  Username already registered. Try logging in instead
                </ValidationError>
              )}
              <FormInnerContainer>
                <Form onSubmit={onFormSubmit}>
                  <LabelSubHeader htmlFor="email">Email: </LabelSubHeader>
                  <InputContainer
                    type="email"
                    id="email"
                    placeholder="example@example.com"
                    value={username}
                    required
                    onChange={handleEmailChange}
                  />
                  <LabelSubHeader htmlFor="password">Password: </LabelSubHeader>
                  <InputContainer
                    onBlur={handleShowPasswordWarning}
                    type="password"
                    id="password"
                    value={password}
                    required
                    onChange={handlePasswordChange}
                  />
                  {showPasswordWarning && (
                    <ValidationError>
                      Password must be at least 8 characters!
                    </ValidationError>
                  )}
                  <LabelSubHeader htmlFor="confirmPassword">
                    Confirm password:{" "}
                  </LabelSubHeader>
                  <ConfirmPasswordContainer
                    isSame={confirmPassword === password}
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <LoginInLinkContainer>
                    <p>
                      Already registered?
                      <span>
                        <Link to="/login"> Login here</Link>
                      </span>{" "}
                    </p>
                  </LoginInLinkContainer>
                  <ContainerButtonLoginSignUp>
                    <RegisterButton disabled={!conditionsMet} type="submit">
                      SIGN UP
                    </RegisterButton>
                  </ContainerButtonLoginSignUp>
                </Form>
              </FormInnerContainer>
            </FormOuterContainer>
          )}
        </ClonedInnerWrapper>
      </ClonedOuterWrapper>
    </>
  );
};
export default Register;

const ClonedOuterWrapper = styled(OuterWrapper)`
  flex-direction: column;
  background: var(--clr-bg);
  justify-content: flex-end;
  overflow: hidden;
  max-width: 1000px;
  
  @media (min-width: 668px) {
    width: 70%;
    height: 60%;
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

const RegisterSuccessContainer = styled.div`
  height: 90%;
  color: #e8e8e8;
`;

const ConfirmPasswordContainer = styled(InputContainer)`
  border: ${(props) => (props?.isSame ? "none" : "1px red solid")};
`;

const RegisterButton = styled(ButtonLoginSignUp)`
  :disabled {
    color: grey;
  }
  ${(props) =>
    props.disabled &&
    css`
      &:hover {
        cursor: default;
        background-color: var(--clr-bg-light);
        box-shadow: 5px 6px 10px var(--clr-text-dark);
        color: grey;
        transform: none;
      }
    `}
`;
