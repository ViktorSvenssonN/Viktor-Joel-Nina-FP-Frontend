import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { InnerWrapper, OuterWrapper } from "Globalstyles";
import styled from "styled-components/macro";
// import user from "reducers/user";
import WithHeader from "./WithHeader";
import { ListCard } from "./ListCard";
import { AddBtn } from "./smallComponents/AddBtn";

const ListView = ({ birthdays }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  // console.log("testing birthdays in ListView:", birthdays);

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate("/login");
  //   }
  // }, []);

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
  background: var(--clr-bg-light);
  align-items: unset;
  overflow: hidden;
  width: 100%;
  height: 100%;

  @media (min-width: 668px) {
    position: relative;
    height: 80%;
    border-radius: 50px;
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
    }
  }
`;
