import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import menuIcon from "images/icons/menu.svg";
import LightLogo from "logo/logo_light.svg";
import DarkLogo from "logo/logo_dark.svg";
import homeIcon from "../../images/iconsR/icons-05.svg";
import settingsIcon from "../../images/icons/cog.svg";
import logoutIcon from "../../images/icons/logout.svg";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ui from "reducers/ui";
import user from "reducers/user";

const Header = () => {
  const menuOpen = useSelector((store) => store.ui.menuOpen);
  const [shouldRender, setRender] = useState(menuOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  // console.log(innerWidth);

  useEffect(() => {
    if (menuOpen) setRender(true);
  }, [menuOpen]);

  const onHomeClick = () => navigate("/home");
  const onMenuClick = () => dispatch(ui.actions.setMenuOpen(!menuOpen));
  const onLogoutClick = () => {
    dispatch(user.actions.setAccessToken(null));
    navigate("/");
  };
  const onBackgroundClick = () => dispatch(ui.actions.setMenuOpen(false));
  const onAnimationEnd = () => !menuOpen && setRender(false);

  return (
    <StyledHeader>
      <HeaderMenuWrapper>
        {innerWidth < 668 ? (
          <MenuButton onClick={onMenuClick}>
            <img src={menuIcon} />
          </MenuButton>
        ) : (
          <MenuButton onClick={onHomeClick}>
            <img src={homeIcon} />
          </MenuButton>
        )}
      </HeaderMenuWrapper>
      {shouldRender && (
        <MenuWrapper menuOpen={menuOpen} onAnimationEnd={onAnimationEnd}>
          <Menu onMenuClick={onMenuClick} />
          <MenuBackground onClick={onBackgroundClick} />
        </MenuWrapper>
      )}
      <LogoContainer onClick={onHomeClick}>
        <img src={innerWidth < 668 ? LightLogo : DarkLogo} />
      </LogoContainer>
      {innerWidth > 668 && (
        <HeaderMenuWrapper>
          <MenuButton onClick={() => navigate("/settings")}>
            <img src={settingsIcon} />
          </MenuButton>
        </HeaderMenuWrapper>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 10%;
  display: flex;

  @media (min-width: 668px) {
    background: var(--clr-header-light);
  }
`;

const HeaderMenuWrapper = styled.div`
  width: 25%;
  margin: auto 0;

  @media (min-width: 668px) {
    display: flex;
    justify-content: center;
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
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

  @media (min-width: 668px) {
    filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(268deg) brightness(97%)
      contrast(107%);
    padding-left: 0;
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
  padding: 10px;
  width: 50%;
  background: none;
  border: none;
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    height: 100%;
  }

  @media (min-width: 668px) {
    padding: 20px;
  }
`;
