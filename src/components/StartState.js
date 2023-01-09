import React, { useState } from 'react'
import styled from 'styled-components/macro'

import { OuterWrapper, InnerWrapper } from 'Globalstyles'

import { ReactComponent as AddIcon } from "../images/icons/close.svg";

// Components
import WithHeader from "./WithHeader";
import ListView from './ListView';
import { AddBtn } from './smallComponents/AddBtn';

// finns inga ListCard's så hamnar man här i StartState (welcome msg)
// startTodo här?

const StartState = () => {
  // const inLoggedUser = useSelector((store) => store.user.username);
  // const navigate = useNavigate();
  // // const [addBirthday] = useState(false)
  // // const [addBirthday, setAddBirthday] = useState(false)
  // // const onStartAdding = () => { setAddBirthday(true) }
 

  // const onAddClick = () => navigate("/create");

  return (
    <>
      
      {/* {startTodo && <ListvView/>}
      {!startTodo && (
        <OuterWrapper>
          <InnerWrapper>
            <WelcomeMsg>
              <h1>Welcome {inLoggedUser}!</h1>
              <h3>add your first Birthday by clicking the -add Birthday- button </h3>
            </WelcomeMsg>
            <AddBdayContainer>
              <p>Add Birthday </p>
              <AddBtn />
            </AddBdayContainer>
          </InnerWrapper>
      </OuterWrapper> 
      )}*/}
    </>
  )
}

export default WithHeader(StartState);

// ------------- Styled Components -------------------

const WelcomeMsg = styled.div`
  width: 200px;
  font-style: var(--font-main);
  background: var(--clr-background-ballon);
  border-radius: 15px;
  border: none;
  padding: 4%;
  grid-area: 4 / 1 / 5 / 4; 

  h1 {
    padding-bottom: 5px;
  }
`;

const AddBdayContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  grid-area: 5 / 2 / 6 / 4;
  z-index: 100;  
  padding: 10px;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(-clr-text-dark);
    padding-right: 1.4rem;
    padding-bottom: 1rem;
  }

  @media (min-width: 667px) {

  }
  @media (min-width: 1024px) {

  } 

  `;

  