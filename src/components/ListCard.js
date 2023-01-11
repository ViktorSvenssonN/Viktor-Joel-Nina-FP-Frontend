import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { formatDate, convertDate, randomInt } from "./util";
import { differenceInDays, format } from "date-fns";

export const ListCard = ({ birthday, odd }) => {
  const icons = useSelector((store) => store.ui.icons);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    setIcon(icons[randomInt(icons.length)]);
  }, []);

  const name = `${birthday.firstName} ${birthday.lastName}`;

  const today = new Date();

  const convertedBirthday = convertDate(new Date(birthday.birthDate));
  const difference = differenceInDays(convertedBirthday, today);

  var dd = String(today.getDate()).padStart(2, 0);
  var mm = String(today.getMonth() + 1).padStart(2, 0); //January is 0!
  var yyyy = today.getFullYear();

  const getDate = `${yyyy}${mm}${dd}`;
  // const birthDay = "19870903";
  const formattedBirthday = formatDate(new Date(birthday.birthDate))
    .split("-")
    .join("");

  const age = (getDate - formattedBirthday + "").slice(0, 2);


  return (
    <GridWrapper odd={odd}>
      <IconImg> 
        <Icon>
          <img src={icon} />
        </Icon>
      </IconImg>
      <DaysToBday> 
        <DayText>Days left</DayText>
        <Day> {difference}</Day> 
      </DaysToBday>
      <InfoBday>
        <BdayName>{name}'s birthday</BdayName>
        <BdayAge>Turns {age} years old</BdayAge>
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
  min-width: 300px;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;

  margin-top: 1rem;
  border-radius: 15px;
  /* height: 100px; */
  outline: none;
  background-color: ${(props) =>
    props.odd
      ? "var(--clr-bg-orange-card)"
      : "var(--clr-bg-green-card)"};
  box-shadow: ${(props) =>
    props.odd ? "3px 7px 5px #b19f95" : "3px 7px 5px var(--clr-cascade)"};
  color: var(--clr-text-dark);
`;

// GÖRS OM TILL IMG SEN
const IconImg = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  background:rgba(161, 175, 186, 0.5);
  border-radius: 13px 0 0 0;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    cursor: pointer;
    
    height: 45px;
    width: auto;
    transition: 0.2s;
    Filter: invert(19%) sepia(8%) saturate(1926%) hue-rotate(195deg)
      brightness(94%) contrast(92%);
    
  }

`;

const DaysToBday = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: 3 / 1 / 5 / 2;
  background-color: rgba(161, 175, 186, 1);
  border-radius: 0 0 0 13px;
`;

const DayText = styled.h5`
  font-family: var(--font-text);
  font-weight: bold;
  padding-bottom: 0.2rem;

`;

const Day = styled.p`
  font-family: var(--font-second);
  font-size: 1.2rem;
  font-weight: bold;
`;

const InfoBday = styled.div`
  /* display: grid; */
  align-items: center;
  padding: 0.5rem 0.7rem 0.5rem 0;
  width: 100%;
  grid-area: 1 / 2 / 5 / 3;
`;

const BdayName = styled.h4`
  font-weight: bold;
  margin-bottom: 5px;
  /* grid-area: 1 / 2 / 2 / 3;  */
`;

const BdayAge = styled.h5`
  margin-bottom: 5px;
  font-weight: 400;
  /* grid-area: 2 / 2 / 3 / 3;  */
`;

const BdayDate = styled.p`
  font-family: var(--font-text);
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin-bottom: 5px;

  /* grid-area: 3 / 2 / 4 / 3;  */
`;

const BdayReminders = styled.div`
  font-size: 0.7rem;
  display: flex;
  gap: 8px;
  /* grid-area: 4 / 2 / 5 / 3;  */
`;
