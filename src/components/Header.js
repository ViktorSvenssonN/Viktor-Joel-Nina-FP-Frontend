import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import menuIcon from "../images/icons/menu.svg";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHeader>
      {menuOpen && (
        <MenuDrawer>
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
        </MenuDrawer>
      )}
      <MenuWrapper>
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuIcon} />
        </MenuButton>
      </MenuWrapper>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 10%;
  display: flex;
`;

const MenuWrapper = styled.div`
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

const MenuDrawer = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  background: var(--clr-background);
`;

const MenuTopSection = styled.section`
  height: 10%;
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
