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
  bottom: 10%;
  right: 10%;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #6a6d80;
  box-shadow: 4px 4px 5px 0px #80808082;

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
    transform: scale(1.05);
    transition: all 0.2s ease-out;
  }

  @media (min-width: 667px) {
  }
  @media (min-width: 1024px) {
  }
`;
