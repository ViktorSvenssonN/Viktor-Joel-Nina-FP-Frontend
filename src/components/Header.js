import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components/macro";
import menuIcon from "../images/icons/menu.svg";
import arrowLeft from "../images/icons/arrow-thin-left.svg";

const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onMenuClick = () => setShow(!show);

  const onAnimationEnd = () => !show && setRender(false);

  return (
    <StyledHeader>
      <HeaderMenuWrapper>
        <MenuButton onClick={() => onMenuClick()}>
          <img src={menuIcon} />
        </MenuButton>
      </HeaderMenuWrapper>
      {shouldRender && (
        <MenuWrapper show={show} onAnimationEnd={() => onAnimationEnd()}>
          <Menu>
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
          </Menu>
          <MenuBackground onClick={() => setShow(false)} />
        </MenuWrapper>
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
  margin: auto 0;
`;

const MenuButton = styled.button`
  cursor: pointer;
  height: 100%;
  width: 100%;
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

const fadeInAnimation = keyframes`
0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(0)
  }
`;
const fadeOutAnimation = keyframes`
0% {
  transform: translateX(0)
  }
  100% {
    transform: translateX(-100%)
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  grid-template-areas:
    "top top"
    "menu right";
  position: absolute;
  height: 100%;
  width: 100%;
  animation: ${(props) => (props.show ? fadeInAnimation : fadeOutAnimation)}
    0.5s;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(-100%)`)};
`;

const Menu = styled.section`
  box-shadow: 2px 2px 13px 0px #0000008c;
  width: 70%;
`;

const MenuTopSection = styled.section`
  background: var(--clr-background);
  height: 10%;
  height: 10%;
`;

const OpenMenuButton = styled(MenuButton)`
  width: unset;
`;

const MenuNavLinks = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 90%;
  background: var(--clr-background);
  padding: 40px 0 0 30px;
  a {
    color: black;
    text-decoration: none;
  }
`;

const MenuBackground = styled.section`
  width: 30%;
  height: 100%;
`;
