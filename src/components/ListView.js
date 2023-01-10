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

  console.log("testing birthdays in ListView:", birthdays);

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate("/login");
  //   }
  // }, []);

  // Behövs UseEffect här med selectStart?
  // Mapp alla ListCard's som kommer från Created birthdays

  const bdDeleted = localStorage.getItem("deletedBirthday");

  if (bdDeleted) {
    window.alert("Birthday deleted!");
    localStorage.removeItem("deletedBirthday");
  }

  return (
    <ListOuterWrapper>
      <ListInnerWrapper>
        {/* {items.map((item) => (
          <ListCardContainer key={item.id}>
            <ListCard />
          </ListCardContainer>
        ))} */}
        {birthdays.map((birthday) => {
          return (
            <Link to={`/view/${birthday._id}`}>
              {" "}
              <ListCard key={birthday.id} birthday={birthday} />
            </Link>
          );
        })}
        <AddBtn />
      </ListInnerWrapper>
    </ListOuterWrapper>
  );
};

export default WithHeader(ListView);

// ------------- Styled Components -------------------

const ListOuterWrapper = styled(OuterWrapper)`
  background: var(--clr-background-light);
  align-items: unset;
  overflow: scroll;
`;

const ListInnerWrapper = styled(InnerWrapper)`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-row-gap: 10px;
  height: 100%; */
  display: flex;
  flex-direction: column;
`;
