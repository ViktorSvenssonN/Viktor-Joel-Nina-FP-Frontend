import React, { useState } from "react";
import { useDispatch, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "utils/utils";
import { OuterWrapper, InnerWrapper, LogoButtonContainer, LogoButton, LogoImg, ButtonLoginSignUp, ContainerButtonLoginSignUp,
Form, FormOuterContainer, FormInnerContainer, FormHeaderContainer, FormHeader, LabelSubHeader, InputContainer } from "Globalstyles";
import user from "reducers/user";
import styled from "styled-components/macro";
import ballons from "../images/ballons_120x250.png";
import logolight from "../logo/logo_light.svg";

// Component check, not worked on.
const Register = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
/*   const [username, setUsername] = useState(""); */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    fetch(API_URL("register"), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTimeout(() => {
            navigate("/login");
          }, 2000);
          setRegisterSuccess(true);
        } else {
          batch(() => {
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setAccessToken(null));
          });
        }
      });
  };

  if (registerSuccess) {
    return (
      <div>
        <p>Registration succesful! Re-directing to login</p>
      </div>
    );
  }

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
          <FormOuterContainer>
            <BallonBackgroundImg src={ballons} />
            <FormHeaderContainer>
              <FormHeader>REGISTER</FormHeader>
            </FormHeaderContainer>
            <FormInnerContainer>
              <Form onSubmit={onFormSubmit}>
{/*                 <LabelSubHeader htmlFor="username">Name: </LabelSubHeader>
                <InputContainer
                  type="text"
                  id="username"
                  placeholder="John Doe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                /> */}
                <LabelSubHeader htmlFor="email">Email: </LabelSubHeader>
                <InputContainer
                  type="email"
                  id="email"
                  placeholder="example@example.com"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <LabelSubHeader htmlFor="password">Password: </LabelSubHeader>
                <InputContainer
                  type="password"
                  id="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <LabelSubHeader htmlFor="password">
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
                  <ButtonLoginSignUp type="submit">SIGN UP</ButtonLoginSignUp>
                </ContainerButtonLoginSignUp>
              </Form>
            </FormInnerContainer>
          </FormOuterContainer>
        </ClonedInnerWrapper>
      </ClonedOuterWrapper>
    </>
  );
};

// Styled components 

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

// ballon img

const BallonBackgroundImg = styled.img`
  position: absolute;
  z-index: 2;
  height: 65%;
  width: 65%;
  left: 51%;
  top: 35%;
`;

const ConfirmPasswordContainer = styled(InputContainer)`
  border: ${(props) => props?.isSame ? "none" : "1px red solid"};

`
const LoginInLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 6%;
  padding-right: 2%;
`;

export default Register;
