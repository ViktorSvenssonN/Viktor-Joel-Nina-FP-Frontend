import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import menuIcon from "images/icons/menu.svg";
import LightLogo from "logo/logo_light.svg";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ui from "reducers/ui";

const Header = () => {
  const menuOpen = useSelector((store) => store.ui.menuOpen);
  const [shouldRender, setRender] = useState(menuOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (menuOpen) setRender(true);
  }, [menuOpen]);

  const onLogoClick = () => navigate("/home");
  const onMenuClick = () => dispatch(ui.actions.setMenuOpen(!menuOpen));
  const onBackgroundClick = () => dispatch(ui.actions.setMenuOpen(false));
  const onAnimationEnd = () => !menuOpen && setRender(false);

  return (
    <StyledHeader>
      <HeaderMenuWrapper>
        <MenuButton onClick={onMenuClick}>
          <img src={menuIcon} />
        </MenuButton>
      </HeaderMenuWrapper>
      {shouldRender && (
        <MenuWrapper menuOpen={menuOpen} onAnimationEnd={onAnimationEnd}>
          <Menu onMenuClick={onMenuClick} />
          <MenuBackground onClick={onBackgroundClick} />
        </MenuWrapper>
      )}
      <LogoContainer onClick={onLogoClick}>
        <img src={LightLogo} />
      </LogoContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
`;

const HeaderMenuWrapper = styled.div`
  width: 25%;
  margin: auto 0;
`;

const MenuButton = styled.button`
  cursor: pointer;
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
  z-index: 10000;
  display: flex;
  grid-template-areas:
    "top top"
    "menu right";
  position: absolute;
  height: 100%;
  width: 100%;
  animation: ${(props) => (props.menuOpen ? fadeInAnimation : fadeOutAnimation)}
    0.5s;
  transform: ${(props) =>
    props.menuOpen ? `translateX(0)` : `translateX(-100%)`};
`;

const MenuBackground = styled.section`
  width: 30%;
  height: 100%;
`;

const LogoContainer = styled.button`
  cursor: pointer;
  width: 50%;
  background: none;
  border: none;
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    height: 100%;
  }
`;
