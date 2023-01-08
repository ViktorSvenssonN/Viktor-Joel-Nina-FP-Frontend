import React, { useState } from "react";
import { useDispatch, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "utils/utils";
import { OuterWrapper, InnerWrapper } from "Globalstyles";
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
                <ParentButton>
                  <Button type="submit">SIGN UP</Button>
                </ParentButton>
              </Form>
            </FormInnerContainer>
          </FormOuterContainer>
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

// Button

const LogoButtonContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoButton = styled.div`
  width: 50%;
  height: 100%;
`;

// blir senare styled.img
const LogoImg = styled.img`
  width: 100%;
  height: 100%;
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

// register form

const FormHeaderContainer = styled.div`
  height: 10%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  position: relative;
  z-index: 3;
`;

const FormHeader = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 0.2px;
`;

const LabelSubHeader = styled.label`
  font-size: 0.9rem;
  letter-spacing: 0.1px;
  padding-left: 4%;
  margin-bottom: 0.8%;
`;

const InputContainer = styled.input`
  margin-bottom: 5%;
  border-radius: 15px;
  border: none;
  height: 3rem;
  padding-left: 4%;
`;

const ConfirmPasswordContainer = styled(InputContainer)`
  border: ${(props) => props?.isSame ? "none" : "1px red solid"};

`

const FormOuterContainer = styled.div`
  width: 100%;
  height: 90%;
  background: var(--clr-background-register);
  border-radius: 45px 45px 0 0;
  position: relative;
`;

const FormInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 3;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const LoginInLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 6%;
  padding-right: 2%;
`;

const ParentButton = styled.div`
  height: 11vw;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 60%;
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

export default Register;
