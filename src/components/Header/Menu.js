import React from "react";
import styled from "styled-components/macro";
import arrowLeft from "images/icons/arrow-thin-left.svg";
import MenuNavLinks from "./MenuNavLinks";

const Menu = ({ onMenuClick }) => {
  return (
    <StyledMenu>
      <MenuTopSection>
        <OpenMenuButton onClick={onMenuClick}>
          <img src={arrowLeft} />
        </OpenMenuButton>
      </MenuTopSection>
      <MenuNavLinks />
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
