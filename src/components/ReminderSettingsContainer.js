import React from "react";
import styled from "styled-components/macro";

const ReminderSettingsContainer = ({
  reminderSettings,
  handleSettingsChange,
}) => {
  return (
    <Wrapper>
      <p>E-mail notification settings</p>
      <StyledSettingsContainer>
        <StyledLabel isChecked={reminderSettings.includes(0)}>
          <input type="checkbox" name={"0"} onChange={handleSettingsChange} />
          Same day
        </StyledLabel>
        <StyledLabel isChecked={reminderSettings.includes(2)}>
          <input type="checkbox" name={"2"} onChange={handleSettingsChange} />2
          days
        </StyledLabel>
        <StyledLabel isChecked={reminderSettings.includes(7)}>
          <input type="checkbox" name={"7"} onChange={handleSettingsChange} />1
          week
        </StyledLabel>
        <StyledLabel isChecked={reminderSettings.includes(30)}>
          <input type="checkbox" name={"30"} onChange={handleSettingsChange} />1
          month
        </StyledLabel>
      </StyledSettingsContainer>
    </Wrapper>
  );
};

export default ReminderSettingsContainer;

const Wrapper = styled.section`
  margin-top: 40px;
`;

const StyledSettingsContainer = styled.section`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: ${(props) => (props.isChecked ? "700" : "500")};
  padding: 10px;
  background-color: ${(props) =>
    props.isChecked ? "var(--clr-background)" : "transparent"};
  box-shadow: 2px 2px 4px grey;
  border-radius: 5rem;
  color: ${(props) =>
    props.isChecked ? "var(--clr-background-light)" : "var(--clr-text-dark)"};
  border: none;

  &:hover {
    cursor: pointer;
  }
  input[type="checkbox"] {
    display: none;
  }
`;
