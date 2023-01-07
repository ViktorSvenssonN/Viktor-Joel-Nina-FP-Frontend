import React, { useState } from "react";
import { useDispatch, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "utils/utils";
import { OuterWrapper, InnerWrapper } from "Globalstyles";
import user from "reducers/user";
import styled from "styled-components/macro";

// Component check, not worked on.
const Register = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [username, setUsername] = useState("");
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
        <LogoImg>
        </LogoImg>
      </LogoButton>
    </LogoButtonContainer><ClonedOuterWrapper>
        <ClonedInnerWrapper>
          <FormOuterContainer>
            <FormHeaderContainer>
              <FormHeader>REGISTER</FormHeader>
            </FormHeaderContainer>
            <FormInnerContainer>
              <Form onSubmit={onFormSubmit}>
                <LabelSubHeader htmlFor="username">Name: </LabelSubHeader>
                  <InputContainer
                    type="text"
                    id="username"
                    placeholder="John doe"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <LabelSubHeader htmlFor="email">Email: </LabelSubHeader>
                  <InputContainer
                    type="email"
                    id="email"
                    placeholder="example@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <LabelSubHeader htmlFor="password">Password: </LabelSubHeader>
                  <InputContainer
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <LabelSubHeader htmlFor="password">Confirm password: </LabelSubHeader>
                  <InputContainer
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                <LoginInLinkContainer>
                  <p>
                    Already registered?
                    <span>
                      <Link to="/login"> Login here</Link>
                    </span>{" "}
                  </p>
                </LoginInLinkContainer>
                <div className="button">
                  <button type="submit">REGISTER</button>
                </div>
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
`;

const ClonedInnerWrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 95%;
  justify-content: flex-end;
`;

// Button 

const LogoButtonContainer = styled.div`
  width: 100%;
  height: 10%;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoButton = styled.div`
  width: 55px;
  height: 55px;  
  border: 1px solid red;
`;

// blir senare styled.img
const LogoImg = styled.div`
  width: 25px;
  height: 25px;  
  border: 1px solid yellow;
`;

// register form

const FormHeaderContainer = styled.div`
  height: 10%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const FormHeader = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 0.2px;
`;

const LabelSubHeader = styled.label`
  font-size: 0.9rem;
  letter-spacing: 0.1px;
  padding-left: 4%;

`;

const InputContainer= styled.input`
  margin-bottom: 5%;
  border-radius: 15px;
  border: none;
  height: 3rem;
  padding-left: 4%;
`;

const FormOuterContainer = styled.div`
  width: 100%;
  height: 90%;
  background: var(--clr-background-register);
  border-radius: 45px 45px 0 0;
`;

const FormInnerContainer = styled.div`
  display: flex;
  justify-content: center;
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

export default Register;
