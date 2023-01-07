import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InnerWrapper, OuterWrapper } from "Globalstyles";
import user from "reducers/user"; 
import WithHeader from "./WithHeader";
import styled from "styled-components/macro";

const ListView = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const inLoggedUser = useSelector((store) => store.user.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  return (
    <ListOuterWrapper>
      <InnerWrapper>
        <WelcomeMsg>
        <h1>Welcome {inLoggedUser}!</h1>
        <h2>add your first Birthday by clicking the -add Birthday- button </h2>
        </WelcomeMsg>
      </InnerWrapper>
    </ListOuterWrapper>
  );
};

export default WithHeader(ListView);

// ------------- Styled Components -------------------

const ListOuterWrapper = styled(OuterWrapper)`
  background: var(--clr-background-light);
`;

const WelcomeMsg = styled.div`
width: 200px;
font-style: var(--font-main);
background: var(--clr-background-ballon);
border-radius: 15px;
border: none;
padding: 4%;

h1 {
  padding-bottom: 5px;
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

//   &:hover {
//     cursor: pointer;
//     background: var(-clr-text-dark);
//     color: var(-clr-text-light);
//   }

//   @media (min-width: 667px) {
//   }
//   @media (min-width: 1024px) {
//   }
// `;


