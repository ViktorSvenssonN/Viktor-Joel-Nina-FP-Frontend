import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components/macro";
// import { InnerWrapper } from "Globalstyles";
import { formatDate, convertDate } from "./util";
import { differenceInDays, format } from "date-fns";

export const ListCard = ({ birthday, odd }) => {
  //props för ändring av färg på varannat kort
  const dispatch = useDispatch();

  const today = new Date();

  const convertedBirthday = convertDate(new Date(birthday.birthDate));
  const name = `${birthday.firstName} ${birthday.lastName}`;

  const difference = differenceInDays(convertedBirthday, today);

  // console.log("testing days until b-day in ListCard:", difference)
  // console.log("testing in ListCard:", birthday.birthdayReminderSettings)

  var dd = String(today.getDate()).padStart(2, 0);
  var mm = String(today.getMonth() + 1).padStart(2, 0); //January is 0!
  var yyyy = today.getFullYear();

  const getDate = `${yyyy}${mm}${dd}`;
  const birthDay = "19870903";
  // const birthDay =
  // prompt('Write your date of birth in one string, e.g. "19870903"') ?? 19870903
  const formattedBirthday = formatDate(new Date(birthday.birthDate))
    .split("-")
    .join("");

  console.log(typeof formattedBirthday);
  console.log("formatted birthday:", formattedBirthday);

  console.log("birthday.birthDate:", birthday.birthDate);
  console.log("birthDay:", birthDay);
  const age = (getDate - formattedBirthday + "").slice(0, 2);
  console.log("age:", age);

  return (
    <GridWrapper odd={odd}>
      <IconImg> random icon img </IconImg>
      <DaysToBday> Days left </DaysToBday>
      <InfoBday>
        <BdayName>{name}'s birthday</BdayName>
        <BdayAge>Turns xx years old</BdayAge>
        <BdayDate>{formatDate(new Date(birthday.birthDate))}</BdayDate>
        <BdayReminders>
          {birthday.birthdayReminderSettings
            .sort((a, b) => Number(a) - Number(b))
            .map((setting) => {
              if (setting === 0) {
                return <span>Same day</span>;
              }
              if (setting === 2) {
                return <span>2 days</span>;
              }
              if (setting === 7) {
                return <span>1 week</span>;
              }
              if (setting === 30) {
                return <span>1 month</span>;
              }
            })}
        </BdayReminders>
      </InfoBday>
    </GridWrapper>
  );
};

// ------------- Styled Components -------------------

const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;

  margin-top: 1rem;
  border-radius: 15px;
  /* height: 100px; */
  outline: none;
  background-color: ${(props) =>
    props.odd
      ? "var(--clr-background-orange-card)"
      : "var(--clr-background-green-card)"};
  box-shadow: ${(props) =>
    props.odd ? "3px 7px 1px #b19f95" : "3px 7px 1px var(--clr-cascade)"};
  color: var(--clr-text-dark);
`;

// GÖRS OM TILL IMG SEN
const IconImg = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  background-color: gray;
  border-radius: 13px 0 0 0;
`;

const DaysToBday = styled.div`
  grid-area: 3 / 1 / 5 / 2;
  background-color: yellowgreen;
  border-radius: 0 0 0 13px;
`;

const InfoBday = styled.div`
  /* display: grid; */
  align-items: center;
  padding: 0.5rem 0.7rem 0.5rem 0;
  width: 100%;
  grid-area: 1 / 2 / 5 / 3;
`;

const BdayName = styled.h4`
  margin-bottom: 5px;
  /* grid-area: 1 / 2 / 2 / 3;  */
`;

const BdayAge = styled.h5`
  margin-bottom: 5px;
  /* grid-area: 2 / 2 / 3 / 3;  */
`;

const BdayDate = styled.p`
  /* grid-area: 3 / 2 / 4 / 3;  */
`;

const BdayReminders = styled.div`
  font-size: 14px;
  display: flex;
  gap: 10px;
  /* grid-area: 4 / 2 / 5 / 3;  */
`;
