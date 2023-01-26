import React, { useEffect, useState } from "react";
import menuIcon from "images/icons/menu.svg";
import LightLogo from "logo/logo_light.svg";
import DarkLogo from "logo/logo_dark.svg";
import homeIcon from "../../images/iconsR/icons-05.svg";
import settingsIcon from "../../images/icons/cog.svg";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ui from "reducers/ui";
import user from "reducers/user";
import {
  StyledHeader,
  HeaderMenuWrapper,
  MenuButton,
  MenuWrapper,
  MenuBackground,
  LogoContainer,
} from "./Styles";

const Header = () => {
  const menuOpen = useSelector(store => store.ui.menuOpen);
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
