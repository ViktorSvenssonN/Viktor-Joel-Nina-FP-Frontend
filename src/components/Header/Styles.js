import styled, { keyframes } from "styled-components/macro";


export const StyledHeader = styled.header`
width: 100%;
height: 10%;
display: flex;

@media (min-width: 668px) {
  background: var(--clr-powderblue);
}
`;

export const HeaderMenuWrapper = styled.div`
width: 25%;
margin: auto 0;

@media (min-width: 668px) {
  display: flex;
  justify-content: center;
}
`;

export const MenuButton = styled.button`
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

export const fadeInAnimation = keyframes`
0% {
  transform: translateX(-100%)
}
100% {
  transform: translateX(0)
}
`;
export const fadeOutAnimation = keyframes`
0% {
transform: translateX(0)
}
100% {
  transform: translateX(-100%)
}
`;

export const MenuWrapper = styled.div`
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

export const MenuBackground = styled.section`
width: 30%;
height: 100%;
`;

export const LogoContainer = styled.button`
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
`;
