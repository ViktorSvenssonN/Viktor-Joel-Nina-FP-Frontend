import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components/macro";
import menuIcon from "../images/icons/menu.svg";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  console.log("menuOpen:", menuOpen);
  console.log("fadeOut:", fadeOut);

  return (
    <StyledHeader>
      <HeaderMenuWrapper>
        <MenuButton
          onClick={() => {
            setFadeOut(menuOpen);
            setMenuOpen(!menuOpen);
          }}
        >
          <img src={menuIcon} />
        </MenuButton>
      </HeaderMenuWrapper>
      {menuOpen && (
        <Menu fadeOut={fadeOut}>
          <MenuTopSection />
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
        </Menu>
      )}
      {!menuOpen && fadeOut && (
        <FadeMenu>
          <MenuTopSection />
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
        </FadeMenu>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 10%;
  display: flex;
`;

const HeaderMenuWrapper = styled.div`
  height: 32px;
  width: 32px;
  margin: auto 0;
  padding-left: 20px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(223deg)
    brightness(111%) contrast(101%);
`;

const MenuButton = styled.button`
  cursor: pointer;
  height: 100%;
  width: 100%;
  background: none;
  border: none;
`;

const fadeIn = keyframes`
0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(0)
  }
`;
const fadeOut = keyframes`
0% {
  transform: translateX(0)
  }
  100% {
    transform: translateX(-100%)
  }
`;

const Menu = styled.div`
  position: absolute;
  bottom: 0;
  height: 90%;
  width: 50%;
  transition: width 0.5s;
  background: var(--clr-background);
  animation: ${fadeIn} 0.5s;
`;

const MenuTopSection = styled.section`
  height: 10%;
`;

const FadeMenu = styled(Menu)`
  animation: ${fadeOut} 0.5s;
  transform: translateX(-100%);
`;

const MenuNavLinks = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 90%;
  padding: 40px 0 0 30px;
  a {
    color: black;
    text-decoration: none;
  }
`;
