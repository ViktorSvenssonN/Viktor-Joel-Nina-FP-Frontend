import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components/macro'

import { OuterWrapper, InnerWrapper } from 'Globalstyles'

import { ReactComponent as AddIcon } from "../images/icons/close.svg";

// Components
import WithHeader from "./WithHeader";
import ListView, { ListOuterWrapper, ListInnerWrapper }from './ListView';
import { AddBtn } from './smallComponents/AddBtn';


const StartState = () => {
  // const accessToken = useSelector((store) => store.user.accessToken);
  // const navigate = useNavigate();
  const inLoggedUser = useSelector((store) => store.user.username);
  const [addBirthday] = useState(false)
 
  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <>
      {addBirthday && <ListView/>}
      {!addBirthday && (
        <OuterWrapper>
          <ListInnerWrapper>
            <WelcomeMsg>
              {/* <h1>Welcome {inLoggedUser}!</h1> */}
              <h1> Welcome to Remindyo!</h1>
              <h3>The helper in need, for your created birthdays you will get a 
                reminder e-mail at your request, add your first Birthday by clicking the button below 
              </h3>
              <h4>⇣</h4>
              </WelcomeMsg>
            <AddBdayContainer>
              <PContainer>
                <p>Add Birthday </p>
              </PContainer>
              <AddBtn />
            </AddBdayContainer>
          </ListInnerWrapper>
      </OuterWrapper> 
      )}
    </>
  )
}

export default WithHeader(StartState);

// ------------- Styled Components -------------------

const WelcomeMsg = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 5fr 0.5fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-row-gap: 10px;
  width: 85%;
  font-style: var(--font-main);
  background: var(--clr-background-ballon);
  border-radius: 15px;
  border: none;
  padding: 4%;
  margin-bottom: 100px;
  /* border: 2px solid red; */

  h1 {
    padding-top: 1rem;
    letter-spacing: 0.1rem;
    /* font-size: 1rem; */
    justify-self: center;
    /* padding-bottom: px; */
    grid-area: 1 / 2 / 2 / 3; 
  }
  h3 {
    font-weight: 400;
    letter-spacing: 0.1rem;
    line-height: 1.3rem;
    grid-area: 2 / 2 / 3 / 3; 
  }
  h4 {
    font-size: 2rem;
    justify-self: flex-end;
    grid-area: 3 / 2 / 3 / 4; 
  }
  @media (min-width: 667px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media (min-width: 1200px) {
    
  } 
`;

const AddBdayContainer = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  align-items: flex-end;
  width: 83%;
  
  /* z-index: 100;   */
  padding: 17px;
  /* border: 2px solid green; */
 

  @media (min-width: 667px) {
    width: 88%;
  }
  @media (min-width: 1200px) {
    width: 91%;
  } 

  `;

  const PContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
    /* border: 2px solid yellowgreen; */

    p {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(-clr-text-dark);
    margin-right: 25%;
    padding-bottom: 1rem;
    }

    @media (min-width: 667px) {
      p {
        margin-right: 20%;
      }

    }
    @media (min-width: 1024px) {

    }   
    @media (min-width: 1200px) {
      p {
        margin-right: 20%;
      }
    }  
  `;  