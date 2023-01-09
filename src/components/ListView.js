import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InnerWrapper, OuterWrapper } from "Globalstyles";
import styled from "styled-components/macro";
import user from "reducers/user"; 
import WithHeader from "./WithHeader";
import { AddBtn } from "./smallComponents/AddBtn";

const ListView = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate("/login");
  //   }
  // }, []);


  // Behövs UseEffect här med selectStart?
  // Mapp alla ListCard's som kommer från Created birthdays

  return (
    <ListOuterWrapper>
      <ListInnerWrapper>
        <AddBtn />
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



