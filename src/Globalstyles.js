import styled from "styled-components/macro";

export const GlobalOuterWrapper = styled.section`
  height: 100vh;
  width: 100%;
`;

export const OuterWrapper = styled.section`
  height: 90%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 668px) {
    position: initial;
    width: 80%;
    margin: auto;
  }
`;

export const InnerWrapper = styled.div`
  width: 80%;
`;

////////////// Globalstyles Login/Register //////////////

/// Buttons for Login/Register ///

// Header link/button //
export const LogoButtonContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoButton = styled.div`
  width: 50%;
  height: 100%;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

// Validation error for Login & Register //

export const ValidationError = styled.p`
  z-index: 3;
  position: inherit;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
  color: red;
`;

// Button Login & Register //

export const ContainerButtonLoginSignUp = styled.div`
  height: 11vw;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  @media (min-width: 668px) {
    margin-top: 5%;
    height: 5vw;
  }

  @media (min-width: 1024px) {
    height: 3vw;
  }

  @media (min-width: 1500px) {
    height: 2vw;
  }
`;

export const ButtonLoginSignUp = styled.button`
  width: 60%;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2.5px;
  background-color: var(--clr-offwhite);
  border: none;
  border-radius: 15px;
  box-shadow: 5px 6px 10px var( --clr-dark);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: var(--clr-dark);
    box-shadow: 2px 3px 10px var(--clr-dark);
    color: var(--clr-offwhite);
    transform: translateY(-2px);
  }

  @media (min-width: 668px) {
    width: 55%;
  }
`;

/// Form styling for Login/Register ///

export const FormOuterContainer = styled.div`
  width: 100%;
  height: 90%;
  background: var(--clr-jungle);
  border-radius: 45px 45px 0 0;
  position: relative;
`;

export const FormInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 3;

  @media (min-width: 668px) {
    width: 65%;
  }

  @media (min-width: 1024px) {
    width: 55%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const FormHeaderContainer = styled.div`
  height: 10%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  position: relative;
  z-index: 3;

  @media (min-width: 668px) {
    margin-bottom: 1%;
    margin-top: 5%;
    margin-right: 35%;
  }

  @media (min-width: 1024px) {
    margin-right: 44%;
    margin-top: 3%;
  }

  @media (min-width: 1350px) {
    margin-top: 22%;
  }
`;

export const FormHeader = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 0.2px;
`;

export const LabelSubHeader = styled.label`
  font-size: 0.9rem;
  letter-spacing: 0.1px;
  padding-left: 4%;
  margin-bottom: 0.8%;
`;

export const InputContainer = styled.input`
  margin-bottom: 5%;
  border-radius: 15px;
  border: none;
  height: 3rem;
  padding-left: 4%;
`;

/// Login/Register Link div

export const LoginInLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 6%;
  padding-right: 2%;
`;

/// Ballong img in background ///

export const BallonBackgroundImg = styled.img`
  position: absolute;
  z-index: 2;
  height: 65%;
  width: auto;
  left: 51%;
  top: 35%;

  @media (min-width: 668px) {
    height: 100%;
    left: 48%;
    top: 9%;
  }
`;
