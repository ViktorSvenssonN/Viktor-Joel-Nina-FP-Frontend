import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import { Link, useNavigate } from "react-router-dom";
import arrowLeft from "../images/icons/arrow-thin-left.svg";
import user from "reducers/user";
import { useDispatch } from "react-redux";

const Menu = ({ onMenuClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <StyledMenu>
      <MenuTopSection>
        <OpenMenuButton onClick={() => onMenuClick()}>
          <img src={arrowLeft} />
        </OpenMenuButton>
      </MenuTopSection>
      <MenuNavLinks>
        <Link to="/home">List all birthdays</Link>
        <Link to="/birthdayedit">Register new birthday</Link>
        <Link to="/settings">Settings</Link>
        <button
          type="button"
          onClick={() => {
            dispatch(user.actions.setAccessToken(null));
            navigate("/login");
          }}
        >
          Logout
        </button>
      </MenuNavLinks>
    </StyledMenu>
  );
};

export default Menu;

const StyledMenu = styled.section`
  box-shadow: 2px 2px 13px 0px #0000008c;
  width: 70%;
`;

const MenuTopSection = styled.section`
  background: var(--clr-background);
  height: 10%;
  height: 10%;
`;

const OpenMenuButton = styled.button`
  cursor: pointer;
  height: 100%;
  background: none;
  border: none;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(223deg)
    brightness(111%) contrast(101%);
  padding-left: 20px;

  img {
    height: 32px;
    width: 32px;
  }
`;

const MenuNavLinks = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 90%;
  background: var(--clr-background);
  padding: 40px 0 0 30px;
  a {
    color: var(--clr-background-light);
    text-decoration: none;
    font-size: 24px;
  }
`;
