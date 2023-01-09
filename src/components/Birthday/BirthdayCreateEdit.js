// Should be used for both creating new birthday, and edit, with props to change some labels
import { OuterWrapper } from "Globalstyles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import user from "reducers/user";
import styled from "styled-components/macro";
import WithHeader from "../WithHeader";
import closeIcon from "images/icons/close.svg";
import checkmarkIcon from "images/icons/checkmark.svg";
import { formatDate, randomInt } from "../util";
import DatePicker from "react-date-picker";
import ReminderSettingsContainer from "./ReminderSettingsContainer";

const BirthdayCreateEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  const accessToken = useSelector((store) => store.user.accessToken);
  const icons = useSelector((store) => store.ui.icons);
  const mode = location.pathname.includes("create") ? "create" : "edit";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [icon, setIcon] = useState(null);

  const [dateValue, setDateValue] = useState(null);
  const [notes, setNotes] = useState("");
  const [reminderSettings, setReminderSettings] = useState([]);

  // use the id to look up birthday from API/Redux
  const { id } = params;

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (mode === "create") {
      console.log("create");
    }
    if (mode === "edit") {
      // TODO
      // If in Edit mode, get the birthday info with matching Id from params from API or redux
      console.log("edit");
    }
    console.log(location);
  }, []);

  useEffect(() => {
    setIcon(icons[randomInt(icons.length)]);
  }, []);

  const onFormCancel = () => {
    const cancel = window.confirm(
      "Are you sure you want to discard this birthday reminder?"
    );
    if (cancel) navigate("/home");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("yay!");
    // TODO
    // push new birthday to API
  };

  const handleSettingsChange = (e) => {
    const setting = Number(e.target.name);
    if (e.target.checked) {
      setReminderSettings((prev) => [...prev, Number(e.target.name)]);
    } else {
      setReminderSettings((prev) => prev.filter((x) => x !== setting));
    }
  };

  // console.log("reminderSettings:", reminderSettings);
  // console.log(formatDate(dateValue));
  // console.log("notes:", notes);

  return (
    <ClonedOuterWrapper>
      <FormWrapper onSubmit={onFormSubmit}>
        <BirthdayHeader>
          <HeaderButton type="button" onClick={onFormCancel}>
            <img src={closeIcon} alt="cancel" />
          </HeaderButton>
          <HeaderText>Add birthday reminder</HeaderText>
          <HeaderButton type="submit">
            <img src={checkmarkIcon} alt="OK" />
          </HeaderButton>
        </BirthdayHeader>
        <ContentWrapper>
          <img src={icon} />
          <TextInput
            required
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            placeholder="First name"
            value={firstName}
          />
          <TextInput
            required
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            placeholder="Last name"
            value={lastName}
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
              onChange={setDateValue}
              value={dateValue}
            />
          </BirthDateContainer>
          <NotesInput
            onChange={(event) => setNotes(event.target.value)}
            type="text"
            placeholder="Write down ideas for present or activity for birthday...."
            value={notes}
          />
          <ReminderSettingsContainer
            reminderSettings={reminderSettings}
            handleSettingsChange={handleSettingsChange}
          />
        </ContentWrapper>
      </FormWrapper>
    </ClonedOuterWrapper>
  );
};

export default WithHeader(BirthdayCreateEdit);

const ClonedOuterWrapper = styled(OuterWrapper)`
  align-items: flex-end;
`;

const FormWrapper = styled.form`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
`;

const BirthdayHeader = styled.header`
  font-family: var(--font-second);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  border-radius: 50px 50px 0 0;
  background: var(--clr-background-register);
  color: var(--clr-text-dark);

  img {
    cursor: pointer;
    height: 32px;
    width: 32px;
    transition: 0.2s;
    filter: invert(19%) sepia(8%) saturate(1926%) hue-rotate(195deg)
      brightness(94%) contrast(92%);
    &:hover {
      transform: scale(1.1) translateX(2px);
      transition: 0.2s;
    }
  }
`;

const HeaderText = styled.p`
  font-family: var(--font-second);
`;

const HeaderButton = styled.button`
  background: none;
  border: none;
`;

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

  .react-date-picker__inputGroup__input:invalid {
    background: none;
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
  background-color: var(--clr-background-green-card);
  box-shadow: 3px 8px 1px var(--clr-cascade);
  color: var(--clr-text-dark);
`;
