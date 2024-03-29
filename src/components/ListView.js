import React from "react";
import { Link } from "react-router-dom";
import { InnerWrapper, OuterWrapper } from "Globalstyles";
import styled from "styled-components/macro";
import WithHeader from "./WithHeader";
import { ListCard } from "./ListCard";
import { AddBtn } from "./smallComponents/AddBtn";

const ListView = ({ birthdays }) => {

  const bdDeleted = localStorage.getItem("deletedBirthday");

  if (bdDeleted) {
    window.alert("Birthday deleted!");
    localStorage.removeItem("deletedBirthday");
  }

  return (
    <OuterWrapper>
      <ListOuterWrapper>
        <ListInnerWrapper>
          {birthdays.map((birthday, i) => {
            const odd = Boolean(i % 2);
            return (
              <Link to={`/view/${birthday._id}`} key={birthday._id}>
                <ListCard birthday={birthday} odd={odd} />
              </Link>
            );
          })}
          <AddBtn />
        </ListInnerWrapper>
      </ListOuterWrapper>
    </OuterWrapper>
  );
};

export default WithHeader(ListView);

// ------------- Styled Components -------------------

export const ListOuterWrapper = styled(OuterWrapper)`
  background: var(--clr-offwhite);
  align-items: unset;
  overflow: hidden;
  width: 100%;
  height: 100%;

  @media (min-width: 668px) {
    position: relative;
    height: 80%;
    border-radius: 50px;
  }
  @media (min-width: 1024px) {
    max-width: 800px;
  }
`;

export const ListInnerWrapper = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  overflow-x: hidden;

  a {
    text-decoration: none;
  }

  @media (min-width: 668px) {
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      width: 55%;
    }
  }
`;
