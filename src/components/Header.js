import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import menuIcon from "../images/icons/menu.svg";
import LightLogo from "logo/logo_light.svg";
import Menu from "./Menu";

const Header = () => {
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
          <Menu onMenuClick={onMenuClick} />
          <MenuBackground onClick={() => setShow(false)} />
        </MenuWrapper>
      )}
      <LogoContainer>
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

const MenuBackground = styled.section`
  width: 30%;
  height: 100%;
  filter: blur(10px);
  opacity: 0.4;
  background: #10181cd9;
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
