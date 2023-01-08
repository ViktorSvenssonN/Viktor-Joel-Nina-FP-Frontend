import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InnerWrapper, OuterWrapper } from "Globalstyles";
import user from "reducers/user"; 
import WithHeader from "./WithHeader";
import styled from "styled-components/macro";

import { ReactComponent as AddIcon } from "../images/icons/close.svg";


const ListView = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const inLoggedUser = useSelector((store) => store.user.username);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate("/login");
  //   }
  // }, []);

  const onAddClick = () => navigate("/create");

  return (
    <ListOuterWrapper>
      <ListInnerWrapper>
        <WelcomeMsg>
        <h1>Welcome {inLoggedUser}!</h1>
        <h2>add your first Birthday by clicking the -add Birthday- button </h2>
        </WelcomeMsg>
      
        <AddBdayContainer onClick={onAddClick}>
          <p>Add Birthday </p>
          <AddBtn>
          <AddIcon style={{ color: "#e8e8e8", background: "none" }} />
          </AddBtn>
        </AddBdayContainer>
      </ListInnerWrapper>
    </ListOuterWrapper>
  );
};

export default WithHeader(ListView);

// ------------- Styled Components -------------------

const ListOuterWrapper = styled(OuterWrapper)`
  background: var(--clr-background-light);
`;

const ListInnerWrapper = styled(InnerWrapper)`

display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-row-gap: 10px;
height: 100%;

`;

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

  `;

  const AddBtn = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50% ;
    margin-right: 1rem;
    transition: all 0.3s ease-in-out;
    background-color: #6a6d80; 
        
    

  svg {
    width: 25px;
    height: 25px;
    transform: rotate(45deg);
    
    /* outline: 2px solid yellowgreen;
    outline-offset: 3px; */
    /* filter: invert(18%) sepia(11%) saturate(1416%) hue-rotate(194deg) brightness(92%) contrast(89%);; */
    
    
    &:hover {
     cursor: pointer;
          
   }


  }
  
    @media (min-width: 667px) {
    }
    @media (min-width: 1024px) {
     } 
  `;

// export const CrossBtn = styled.button`
//   height: 40px;
//   width: 40px;
//   font-size: 1.5rem;
//   font-weight: bold;
//   border-radius: 25px;
//   border: none;
//   color: var(-clr-text-dark);
//   background-color: transparent;
//   display: flex;
//   align-items: center;
//   justify-content: center;

// 
// `;


