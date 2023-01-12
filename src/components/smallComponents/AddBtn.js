import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import { ReactComponent as AddIcon } from "../../images/icons/close.svg";

export const AddBtn = ({ invert }) => {
  const navigate = useNavigate();

  const onAddClick = () => navigate("/create");

  return (
    <BtnContainer>
      <Btn onClick={onAddClick} invert={invert}>
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
  bottom: 12%;
  right: 10%;
`;

const Btn = styled.button`
  background-color: ${props => props.invert ? "#e8e8e8" : "#6a6d80" };

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
  /* background-color: #6a6d80; */
  box-shadow: 4px 4px 5px 0px #80808082;

  svg {
    width: 25px;
    height: 25px;
    transform: rotate(45deg);
    filter: ${props => props.invert ? "invert(16%) sepia(4%) saturate(4152%) hue-rotate(195deg) brightness(96%) contrast(86%)" : "invert(100%) sepia(27%) saturate(87%) hue-rotate(200deg) brightness(112%) contrast(82%)" };
    /* filter: invert(100%) sepia(27%) saturate(87%) hue-rotate(200deg)
      brightness(112%) contrast(82%); */
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-out;
  }

  @media (min-width: 667px) {
    width: 60px;
    height: 60px;

    &:hover {
      transition: all 0.3s ease-out;
    }
    svg {
      width: 35px;
      height: 35px;
    }
  }
  @media (min-width: 1024px) {
    transform: scale(1.2);
    transition: all 0.3s ease-out;
  }
`;

