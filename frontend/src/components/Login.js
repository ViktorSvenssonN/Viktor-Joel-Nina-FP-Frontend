import React, {useEffect, useState} from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "utils/utils";
import { OuterWrapper, InnerWrapper } from "Globalstyles";
import user from "reducers/user";
import styled from "styled-components";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState("login");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = useSelector((store) => store.user.accessToken);
    
    useEffect( () => {
        if (accessToken) {
            navigate("/");
        }
    }, [accessToken])

    const onFormSubmit =(event) => {
        event.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: username, password: password })
        }
        fetch(API_URL(mode), options)
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    batch(()=> {
                        dispatch(user.actions.setUsername(data.response.username));
                        dispatch(user.actions.setUserId(data.response.id))
                        dispatch(user.actions.setAccessToken(data.response.accessToken));
                        dispatch(user.actions.setError(null));
                    });
                } else {
                    batch (() => {
                        dispatch(user.actions.setUsername(null));
                        dispatch(user.actions.setUserId(null))
                        dispatch(user.actions.setAccessToken(null));
                        dispatch(user.actions.setError(data.response));
                    });
                }
            })
    }

    return (
        <>
        <OuterWrapper>
          <ClonedInnerWrapper>
            <div className="heading">
              <label htmlFor="Sign-Up">Create new account? SIGN UP</label>
              <input
              type="radio"
              id="register"
              checked={mode === "register"}
              onChange={() => setMode("register")}
            />
          </div>
          <div className="heading">
            <label htmlFor="Sign-In"> Already have an account? SIGN IN</label>
            <input
              type="radio"
              id="login"
              checked={mode === "login"}
              onChange={() => setMode("login")}
            />
          </div>
  
          <form onSubmit={onFormSubmit}>
            <label htmlFor="username">Username: </label>
  
            <input
              type="text"
              id="username"
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
            <div className="button">
              <button type="submit">SUBMIT</button>
            </div>
          </form>
          </ClonedInnerWrapper>
        </OuterWrapper>
      </>
    );
}

// Styled components // (får kolla om vi ska flytta några till global)

const ClonedInnerWrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width 70%;
`;

export default Login;