import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import ReminderSettingsContainer from "./ReminderSettingsContainer";
import { formatDate } from "../util";
import DatePicker from "react-date-picker";

const CreateEditContentWrapper = ({ icon, birthdayInfo, setBirthdayInfo }) => {
  const handleSettingsChange = (e) => {
    const setting = Number(e.target.name);
    if (e.target.checked) {
      setBirthdayInfo((prev) => ({
        ...prev,
        birthdayReminderSettings: [
          ...prev.birthdayReminderSettings,
          Number(e.target.name),
        ],
      }));
    } else {
      setBirthdayInfo((prev) => ({
        ...prev,
        birthdayReminderSettings: prev.birthdayReminderSettings.filter(
          (x) => x !== setting
        ),
      }));
    }
  };

  return (
    <ContentWrapper>
      <img src={icon} />
      <TextInput
        required
        onChange={(event) =>
          setBirthdayInfo((prev) => ({
            ...prev,
            firstName: event.target.value,
          }))
        }
        type="text"
        placeholder="First name"
        value={birthdayInfo.firstName}
      />
      <TextInput
        required
        onChange={(event) =>
          setBirthdayInfo((prev) => ({
            ...prev,
            lastName: event.target.value,
          }))
        }
        type="text"
        placeholder="Last name"
        value={birthdayInfo.lastName}
      />
      <BirthDateContainer>
        <p>Birthdate</p>
        <DatePicker
          required
          yearPlaceholder="year"
          monthPlaceholder="month"
          dayPlaceholder="day"
          format="y-MM-dd"
          maxDate={
            new Date(new Date().setFullYear(new Date().getFullYear() + 5))
          }
          onChange={(date) =>
            setBirthdayInfo((prev) => ({
              ...prev,
              birthDate: formatDate(date),
            }))
          }
          value={
            birthdayInfo.birthDate ? new Date(birthdayInfo.birthDate) : null
          }
        />
      </BirthDateContainer>
      <NotesInput
        onChange={(event) =>
          setBirthdayInfo((prev) => ({
            ...prev,
            otherInfo: event.target.value,
          }))
        }
        type="text"
        placeholder="Write down ideas for present or activity for birthday...."
        value={birthdayInfo.otherInfo}
      />
      <ReminderSettingsContainer
        birthdayReminderSettings={birthdayInfo.birthdayReminderSettings}
        handleSettingsChange={handleSettingsChange}
      />
    </ContentWrapper>
  );
};

export default CreateEditContentWrapper;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 90%;
  padding: 30px;
  background: var(--clr-background-light);

  img {
    height: 100px;
    width: 100px;
    filter: invert(19%) sepia(8%) saturate(1926%) hue-rotate(195deg)
      brightness(94%) contrast(92%);
  }

  @media (min-width: 668px) {
    border-radius: 0 0 50px 50px;
    align-items: center;
  }
`;

const TextInput = styled.input`
  margin-top: 25px;
  width: 75%;
  font-family: inherit;
  color: var(--clr-text-dark);
  padding: 0px 0px 4px;
  border: none;
  outline: none;
  font-size: 18px;
  box-shadow: rgb(48 51 70 / 30%) 0px 1px;
  background-color: transparent;

  &:focus {
    box-shadow: #303346 0px 2px;
  }

  &::placeholder {
    opacity: 0.3;
    font-family: var(--font-second);
  }
`;

const BirthDateContainer = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  .react-date-picker {
    margin-top: 10px;
    width: 75%;
  }

  .react-date-picker__inputGroup {
    padding-left: 5px;
  }

  .react-date-picker__inputGroup__input:invalid {
    background: none;
  }

  .react-calendar__tile--now {
    background-color: var(--clr-background-green-card);
    background-color: #e8e8e8;
  }

  .react-calendar__tile--active {
    background-color: var(--clr-background-green-card);
    color: #000;
  }

  @media (min-width: 668px) {
    width: 75%;
  }
`;

const NotesInput = styled.textarea`
  font-size: 16px;
  font-style: italic;
  margin-top: 30px;
  padding: 15px;
  border-radius: 15px;
  height: 20%;
  border: none;
  outline: none;
  background-color: #f7d5bf;
  box-shadow: 3px 8px 1px var(--clr-header-create-birthday);
  color: var(--clr-text-dark);

  @media (min-width: 668px) {
    width: 70%;
  }
`;
