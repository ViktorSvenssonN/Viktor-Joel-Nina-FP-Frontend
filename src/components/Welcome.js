import React, {useEffect, useState} from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { OuterWrapper, InnerWrapper } from "Globalstyles";
import user from "reducers/user";
import styled from "styled-components";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState("login");
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const onBackButtonClick = () => {
        navigate(-1);
      }
/*     const accessToken = useSelector((store) => store.user.accessToken);
    
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
 */
    return (
        <>
        <ClonedOuterWrapper >
          <ClonedInnerWrapper>
            <ImgParent>
              <ImgContainer />
            </ImgParent>
            <ButtonWrapper>
            <ParentButton>
              <Link to="login"><Button type="button">login</Button></Link>
            </ParentButton>
            <ParentButton>
              <Link to="register"><Button type="button">register</Button></Link>
            </ParentButton>
            <ParentButton>
              <ButtonCleaner type="button">cleaner</ButtonCleaner>
            </ParentButton>
            </ButtonWrapper>
          </ClonedInnerWrapper>
        </ClonedOuterWrapper >
      </>
    );
}

// Styled components // (får kolla om vi ska flytta några till global)

const ClonedOuterWrapper = styled(OuterWrapper)`
    height: 90vh;
`;

const ClonedInnerWrapper = styled(InnerWrapper)`
    width: 70%;
    margin: 0 auto;
`;

const ImgParent = styled.div`

`;

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
    background-color: var(--clr-background-light);   
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
background-color: var(--clr-background-light);   
border: none;
border-radius: 45px;
box-shadow: 5px 6px 4px 2px rgba(62,66,66,0.33);
transition: all 0.3s ease 0s;
cursor: pointer;
outline: none;

&:hover {
  background-color: var(--clr-background-light);
  box-shadow: 0px 10px 15px var(--clr-pancho);
  color: #fff;
  transform: translateY(-2px);
  color: var(--clr-text-dark);
}

`;

export default Login;

/* was in the old login kommer troligtvis raderas ViSv 3/1-23
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
*/