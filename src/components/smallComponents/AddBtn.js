import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import { ReactComponent as AddIcon } from "../../images/icons/close.svg";

export const AddBtn = () => {
  const navigate = useNavigate();

  const onAddClick = () => navigate("/create");

  return (
    <BtnContainer>
      <Btn onClick={onAddClick}>
        <AddIcon />
      </Btn>
    </BtnContainer>
  );
};

// ------------- Styled Components -------------------

const BtnContainer = styled.div`
  display: flex;
  align-items: flex-end;
  z-index: 2;
  position: absolute;
  height: 80%;
  left: 70%;
  /* border: 2px solid hotpink; */
`;

const Btn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #6a6d80;

  svg {
    width: 25px;
    height: 25px;
    transform: rotate(45deg);
    filter: invert(100%) sepia(27%) saturate(87%) hue-rotate(200deg)
      brightness(112%) contrast(82%);
  }

  &:hover {
    cursor: pointer;
    /* filter: invert(45%) sepia(10%) saturate(686%) hue-rotate(194deg) brightness(91%) contrast(87%);
    background-color: #303346; */
    transform: scale(1.1);
    transition: all 0.4s ease-out;
  }

  @media (min-width: 667px) {
  }
  @media (min-width: 1024px) {
  }
`;
