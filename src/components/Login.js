import React, { useState } from "react";
import { useDispatch, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "utils/utils";
import { OuterWrapper, InnerWrapper } from "Globalstyles";
import user from "reducers/user";
import styled from "styled-components/macro";

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
    <ClonedOuterWrapper>
      <ClonedInnerWrapper>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="username">Email: </label>

          <input
            type="email"
            id="username"
            placeholder="example@example.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <ForgottPasswordContainer>
            <Link to="/forgot"> 
              <p> 
                Forgot password? 
              </p>
            </Link>
          </ForgottPasswordContainer>
          <div className="registerLink">
            <p>
              Not a member?{" "}
              <span>
                <Link to="/register">Register here</Link>
              </span>{" "}
            </p>
          </div>
          <div className="button">
            <button type="submit">login</button>
          </div>
        </form>
      </ClonedInnerWrapper>
    </ClonedOuterWrapper>
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

const ForgottPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2%;
  padding-right: 2%;
`;

export default Login;

