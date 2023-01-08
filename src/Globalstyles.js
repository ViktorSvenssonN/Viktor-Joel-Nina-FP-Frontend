import styled from "styled-components/macro";

export const GlobalOuterWrapper = styled.section`
  height: 100vh;
  width: 100%;
`;

export const OuterWrapper = styled.section`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 80%;
  border: 1px solid yellowgreen;
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

// Button Sign up/ Login // 

export const ContainerButtonLoginSignUp = styled.div`
  height: 11vw;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonLoginSignUp = styled.button`
  width: 60%;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2.5px;
  background-color: var(--clr-background-light);
  border: none;
  border-radius: 15px;
  box-shadow: 5px 6px 10px var(--clr-text-dark);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: var(--clr-text-dark);
    box-shadow: 2px 3px 10px var(--clr-text-dark);
    color: #fff;
    transform: translateY(-2px);
  }
`;

/// Form styling for Login/Register ///

