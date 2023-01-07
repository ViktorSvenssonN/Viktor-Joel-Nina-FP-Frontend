import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import { Link, useNavigate } from "react-router-dom";
import arrowLeft from "../images/icons/arrow-thin-left.svg";
import user from "reducers/user";
import settingsIcon from "../images/icons/cog.svg";
import logoutIcon from "../images/icons/logout.svg";
import listIcon from "../images/icons/list.svg";
import addIcon from "../images/icons/list-add.svg";
import aboutIcon from "../images/icons/information-outline.svg";

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
        <MenuItemWrapper>
          <MenuIcon src={listIcon} />
          <Link to="/home">List all birthdays</Link>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuIcon src={addIcon} />
          <Link to="/birthdayedit">Register new birthday</Link>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuIcon src={settingsIcon} />
          <Link to="/settings">Settings</Link>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuIcon src={aboutIcon} />
          <Link to="/about-us">About</Link>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuIcon src={logoutIcon} />
          <button
            type="button"
            onClick={() => {
              dispatch(user.actions.setAccessToken(null));
              navigate("/login");
            }}
          >
            Logout
          </button>
        </MenuItemWrapper>
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
  height: 90%;
  background: var(--clr-background);
  a {
    font-size: 20px;
    color: var(--clr-background-light);
    text-decoration: none;
  }

  button {
    color: var(--clr-background-light);
    text-decoration: none;
    font-size: 20px;
    background: none;
    border: none;
    text-align: unset;
  }
`;

const MenuItemWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 50px 0 0 20px;
`;

const MenuIcon = styled.img`
  width: 32px;
  height: 32px;
  filter: invert(72%) sepia(24%) saturate(323%) hue-rotate(339deg)
    brightness(109%) contrast(95%);
`;
