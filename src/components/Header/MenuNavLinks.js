import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ui from "reducers/ui";
import user from "reducers/user";
import styled from "styled-components/macro";
import settingsIcon from "images/icons/cog.svg";
import logoutIcon from "images/icons/logout.svg";
import listIcon from "images/icons/list.svg";
import addIcon from "images/icons/list-add.svg";
import aboutIcon from "images/icons/information-outline.svg";

const MenuNavLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLinkClick = () => dispatch(ui.actions.setMenuOpen(false));
  const onLogoutClick = () => {
    dispatch(user.actions.setAccessToken(null));
    navigate("/");
  };

  return (
    <StyledMenuNavLinks>
      <MenuItemWrapper onClick={onLinkClick}>
        <MenuIcon src={listIcon} />
        <Link to="/home">List all birthdays</Link>
      </MenuItemWrapper>
      <MenuItemWrapper onClick={onLinkClick}>
        <MenuIcon src={addIcon} />
        <Link to="/create">Register new birthday</Link>
      </MenuItemWrapper>
      <MenuItemWrapper onClick={onLinkClick}>
        <MenuIcon src={settingsIcon} />
        <Link to="/settings">Settings</Link>
      </MenuItemWrapper>
      <MenuItemWrapper onClick={onLinkClick}>
        <MenuIcon src={aboutIcon} />
        <Link to="/about-us">About</Link>
      </MenuItemWrapper>
      <MenuItemWrapper onClick={onLinkClick}>
        <MenuIcon src={logoutIcon} />
        <button type="button" onClick={onLogoutClick}>
          Logout
        </button>
      </MenuItemWrapper>
    </StyledMenuNavLinks>
  );
};

export default MenuNavLinks;

// ------------- Styled Components -------------------

const StyledMenuNavLinks = styled.section`
  display: flex;
  flex-direction: column;
  height: 90%;
  background: var(--clr-bg-gray);
  a {
    height: 100%;
    line-height: 2;
    width: 100%;
    font-size: 20px;
    color: var(--clr-offwhite);
    text-decoration: none;
  }

  button {
    line-height: 2;
    cursor: pointer;
    width: 100%;
    color: var(--clr-offwhite);
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
