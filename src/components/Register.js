import React, { useState } from "react";
import { useDispatch, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "utils/utils";
import { OuterWrapper, InnerWrapper } from "Globalstyles";
import user from "reducers/user";
import styled from "styled-components";

// Component check, not worked on.
const Register = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
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
          <FormContainer>
            <form onSubmit={onFormSubmit}>
              <label htmlFor="username">Username: </label>

              <input
                type="email"
                id="username"
                placeholder="example@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
              <br />
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <br />
              <div className="registerLink">
                <p>
                  Already registered?
                  <span>
                    <Link to="/login"> Login here</Link>
                  </span>{" "}
                </p>
              </div>
              <div className="button">
                <button type="submit">REGISTER</button>
              </div>
            </form>
          </FormContainer>
        </ClonedInnerWrapper>
      </ClonedOuterWrapper>
      </>
  );
};

// Styled components // (får kolla om vi ska flytta några till global)

const ClonedOuterWrapper = styled(OuterWrapper)`
  flex-direction: column;
  background: var(--clr-background);
`;

const ClonedInnerWrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 85%;
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

const FormContainer = styled.div`
  width: 100%;
  height: 90%;
  background: var(--clr-background-register);
  border-radius: 45px;
`;

export default Register;
