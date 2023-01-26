import React from "react";
import { SettingsContainer, SettingsWrapper, StyledLabel } from "./Styles";

const ReminderSettingsContainer = ({
  birthdayReminderSettings,
  handleSettingsChange,
}) => {
  return (
    <SettingsWrapper>
      <p>E-mail notification settings</p>
      <SettingsContainer>
        <StyledLabel isChecked={birthdayReminderSettings.includes(0)}>
          <input
            checked={birthdayReminderSettings.includes(0)}
            type="checkbox"
            name={"0"}
            onChange={handleSettingsChange}
          />
          Same day
        </StyledLabel>
        <StyledLabel isChecked={birthdayReminderSettings.includes(2)}>
          <input
            checked={birthdayReminderSettings.includes(2)}
            type="checkbox"
            name={"2"}
            onChange={handleSettingsChange}
          />
          2 days
        </StyledLabel>
        <StyledLabel isChecked={birthdayReminderSettings.includes(7)}>
          <input
            checked={birthdayReminderSettings.includes(7)}
            type="checkbox"
            name={"7"}
            onChange={handleSettingsChange}
          />
          1 week
        </StyledLabel>
        <StyledLabel isChecked={birthdayReminderSettings.includes(30)}>
          <input
            checked={birthdayReminderSettings.includes(30)}
            type="checkbox"
            name={"30"}
            onChange={handleSettingsChange}
          />
          1 month
        </StyledLabel>
      </SettingsContainer>
    </SettingsWrapper>
  );
};

export default ReminderSettingsContainer;
