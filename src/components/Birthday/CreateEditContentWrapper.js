import React from "react";
import ReminderSettingsContainer from "./ReminderSettingsContainer";
import { formatDate } from "../util";
import DatePicker from "react-date-picker";
import {
  BirthDateContainer,
  ContentWrapper,
  NotesInput,
  TextInput,
} from "./Styles";

const CreateEditContentWrapper = ({ icon, birthdayInfo, setBirthdayInfo }) => {
  const handleSettingsChange = e => {
    const setting = Number(e.target.name);
    if (e.target.checked) {
      setBirthdayInfo(prev => ({
        ...prev,
        birthdayReminderSettings: [
          ...prev.birthdayReminderSettings,
          Number(e.target.name),
        ],
      }));
    } else {
      setBirthdayInfo(prev => ({
        ...prev,
        birthdayReminderSettings: prev.birthdayReminderSettings.filter(
          x => x !== setting
        ),
      }));
    }
  };

  return (
    <ContentWrapper>
      <img src={icon} />
      <TextInput
        required
        onChange={event =>
          setBirthdayInfo(prev => ({
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
        onChange={event =>
          setBirthdayInfo(prev => ({
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
          maxDate={new Date()}
          onChange={date =>
            setBirthdayInfo(prev => ({
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
        onChange={event =>
          setBirthdayInfo(prev => ({
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
