import React from "react";
import styled from "styled-components/macro";
import { OuterWrapper } from "Globalstyles";
import WithHeader from "./WithHeader";
import { ListInnerWrapper } from "./ListView";
import { AddBtn } from "./smallComponents/AddBtn";

const StartState = () => {
  const bdDeleted = localStorage.getItem("deletedBirthday");
  if (bdDeleted) {
    window.alert("Birthday deleted!");
    localStorage.removeItem("deletedBirthday");
  }

  return (
    <OuterWrapper>
      <StartWrapper>
        <WelcomeMsg>
          <h1> Welcome to Remindyo!</h1>
          <h3>
            The helper you need! For your created birthdays you will get a
            reminder e-mail at your request, add your first Birthday by clicking
            the button below.
          </h3>
        </WelcomeMsg>
        <AddBdayContainer>
          <PContainer>
            <p>Add Birthday ☞ </p>
          </PContainer>
          <AddBtn invert={true} />
        </AddBdayContainer>
      </StartWrapper>
    </OuterWrapper>
  );
};

export default WithHeader(StartState);

// ------------- Styled Components -------------------

const StartWrapper = styled(ListInnerWrapper)`
  height: 100%;
  max-width: 800px;
  justify-content: space-between;
`;

const WelcomeMsg = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 5fr 0.5fr;
  grid-template-rows: 1fr 2fr 1fr;
  grid-row-gap: 10px;
  width: 85%;
  background: var(--clr-ballon);
  border-radius: 15px;
  border: none;
  padding: 4%;
  margin-top: 30%;
  box-shadow: 3px 7px 5px var(--clr-pancho-shadow);

  h1 {
    font-family: var(--font-brush);
    font-size: 2rem;
    padding-top: 1rem;
    letter-spacing: 0.1rem;
    justify-self: center;
    grid-area: 1 / 2 / 2 / 3;
  }

  h3 {
    font-family: var(--font-text);
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    line-height: 1.3rem;
    grid-area: 2 / 2 / 3 / 3;
    margin-left: 1rem;
  }

  h3:first-letter {
    font-size: 1.6rem;
    font-weight: bolder;
  }

  @media (min-width: 667px) {
    h1 {
      font-size: 2rem;
      padding-bottom: 1rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    h3:first-letter {
      font-size: 2rem;
    }
  }
  @media (min-width: 830px) {
    margin-top: 18%;
  }

  @media (min-width: 1200px) {
    margin-top: 20%;
  }
`;

const AddBdayContainer = styled.div`
  width: 83%;
  position: relative;
  padding: 17px;
  margin-bottom: 10%;

  @media (min-width: 667px) {
    width: 88%;
  }

  @media (min-width: 1200px) {
    width: 91%;
  }
`;

const PContainer = styled.div`
  position: relative;
  right: -20%;
  width: 100%;

  p {
    font-family: var(--font-brush);
    font-weight: bold;
    font-size: 1.8rem;
    color: var(--clr-offwhite);
  }

  @media (min-width: 667px) {
    right: -35%;

    p {
      font-size: 2rem;
    }
  }

  @media (min-width: 1024px) {
    right: -40%;
  }

  @media (min-width: 1200px) {
  }
`;
