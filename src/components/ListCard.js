import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import {
  formatDate,
  randomInt,
  getAge,
  getDifference,
  getBirthdayText,
  getSettingText,
} from "./util";

export const ListCard = ({ birthday, odd }) => {
  const icons = useSelector((store) => store.ui.icons);
  const [icon, setIcon] = useState(null);
  const name = `${birthday.firstName} ${birthday.lastName}`;
  const age = getAge(birthday.birthDate);
  const difference = getDifference(birthday.birthDate);
  const birthdayText = getBirthdayText(age, difference, birthday.birthDate);

  useEffect(() => {
    setIcon(icons[randomInt(icons.length)]);
  }, []);

  return (
    <GridWrapper odd={odd}>
      <IconImg>
        <Icon>
          <img src={icon} />
        </Icon>
      </IconImg>
      <DaysToBday>
        <DayText>Days left</DayText>
        <Day> {difference > 0 ? difference : "-"}</Day>
      </DaysToBday>
      <InfoBday>
        <BdayName>{name}</BdayName>
        <BdayAge>{birthdayText}</BdayAge>
        <BdayDate>📆 {formatDate(new Date(birthday.birthDate))}</BdayDate>
        <BdayReminders>
          ⏰ {birthday.birthdayReminderSettings
            .sort((a, b) => Number(a) - Number(b))
            .map((setting) => {
              return <span>{getSettingText(setting)}</span>;
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
  min-width: 330px;
  grid-template-columns: 2fr 7fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  margin: 1rem 0;
  border-radius: 15px;
  outline: none;
  background-color: ${(props) =>
    props.odd ? "var(--clr-ballon)" : "var(--clr-mint)"};
  box-shadow: ${(props) =>
    props.odd ? "3px 7px 5px var(--clr-pancho-shadow)" : "3px 7px 5px var(--clr-jungle)"};
  color: var( --clr-dark);
`;

const IconImg = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  background: rgba(161, 175, 186, 0.5);
  border-radius: 13px 0 0 0;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    cursor: pointer;
    height: 50px;
    width: auto;
    transition: 0.2s;
    filter: invert(19%) sepia(8%) saturate(1926%) hue-rotate(195deg)
      brightness(94%) contrast(92%);
  }
`;

const DaysToBday = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: 3 / 1 / 5 / 2;
  background-color: var(--clr-bg-gray);
  border-radius: 0 0 0 13px;
  color: var(--clr-offwhite);
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
  align-items: center;
  padding: 0.5rem 0.7rem 0.5rem 0;
  width: 100%;
  grid-area: 1 / 2 / 5 / 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 1px;
`;

const BdayName = styled.h4`
  font-weight: bold;
  margin-bottom: 5px;
`;

const BdayAge = styled.h5`
  margin-bottom: 5px;
  font-weight: 400;
`;

const BdayDate = styled.p`
  font-size: 14px;
  font-family: var(--font-text);
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin-bottom: 5px;
`;

const BdayReminders = styled.div`
  font-size: 0.8rem;
  display: flex;
  gap: 8px;
`;
