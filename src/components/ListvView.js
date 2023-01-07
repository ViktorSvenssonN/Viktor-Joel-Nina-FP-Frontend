import { InnerWrapper, OuterWrapper } from "Globalstyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import user from "reducers/user"; 
import WithHeader from "./WithHeader";
import styled from "styled-components/macro";
// import { icon } from "@fortawesome/fontawesome-svg-core";

const ListView = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  return (
    <ListOuterWrapper>
      <InnerWrapper>
        <h1>Welcome!</h1>
        <h2>Now you are logged in </h2>
        <CrossBtn>✕</CrossBtn>
        <Icon>
          {/* <FontAwesomeIcon icon="fa-solid fa-check" size="3x"/> */}
        </Icon>
      </InnerWrapper>
    </ListOuterWrapper>
  );
};

export default WithHeader(ListView);

const ListOuterWrapper = styled(OuterWrapper)`
  background: var(--clr-background-light);
`;

// ------------- Styled Components -------------------

export const CrossBtn = styled.button`
  height: 40px;
  width: 40px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 25px;
  border: none;
  color: var(-clr-text-dark);
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background: var(-clr-text-dark);
    color: var(-clr-text-light);
  }

  @media (min-width: 667px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const Icon = styled.div`
  border: 1px solid pink;
  width: 50px;
  height: 50px;
`;
