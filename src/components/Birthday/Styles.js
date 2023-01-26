import { OuterWrapper } from "Globalstyles";
import styled from "styled-components/macro";

////////////// COMMON //////////////

export const ClonedOuterWrapper = styled(OuterWrapper)`
  align-items: flex-end;

  @media (min-width: 668px) {
    align-items: center;
  }
`;

export const FormWrapper = styled.form`
  max-width: 700px;
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    height: 80%;
  }
  @media (min-width: 1024px) {
    max-width: 800px;
  }
`;

export const BirthdayHeader = styled.header`
  font-family: var(--font-second);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  border-radius: 50px 50px 0 0;
  background: ${props =>
    props.view ? "var(--clr-jungle)" : "var(--clr-pancho)"};
  color: var(--clr-dark);

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

export const HeaderText = styled.p`
  font-family: var(--font-second);
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
`;

////////////// DETAIL VIEW //////////////

export const BirthdayRightsideicons = styled.div`
  width: 19%;
  display: flex;
  justify-content: space-between;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 90%;
  padding: 30px;
  background: var(--clr-offwhite);

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

export const TextParagraph = styled.p`
  line-height: normal;
  margin-top: 25px;
  width: 75%;
  font-family: inherit;
  color: var(--clr-dark);
  padding: 0px 0px 4px;
  border: none;
  outline: none;
  font-size: 18px;
  box-shadow: 0px 1px rgb(48, 51, 70, 30%);
  background-color: transparent;

  &:focus {
    box-shadow: var(--clr-dark) 0px 2px;
  }

  &::placeholder {
    opacity: 0.3;
    font-family: var(--font-second);
  }
`;

export const BirthDateContainer = styled.section`
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
    background-color: var(--clr-mint);
    background-color: var(--clr-offwhite);
  }

  .react-calendar__tile--active {
    background-color: var(--clr-mint);
    color: #000;
  }

  @media (min-width: 668px) {
    width: 75%;
  }
`;

export const NotesContainer = styled.div`
  font-size: 16px;
  font-style: italic;
  margin-top: 30px;
  padding: 15px;
  border-radius: 15px;
  height: 20%;
  border: none;
  outline: none;
  background-color: var(--clr-mint);
  box-shadow: 3px 8px 3px var(--clr-jungle);
  color: var(--clr-dark);

  @media (min-width: 668px) {
    width: 70%;
  }
`;

export const DateShower = styled.div`
  width: 75%;
  display: flex;
  padding-left: 5px;
  height: 29px;
  margin-top: 10px;
  align-items: center;
  border: thin solid grey;
`;

////////////// CREATE/EDIT //////////////

export const TextInput = styled.input`
  margin-top: 25px;
  width: 75%;
  font-family: inherit;
  color: var(--clr-dark);
  padding: 0px 0px 4px;
  border: none;
  outline: none;
  font-size: 18px;
  box-shadow: 0px 1px rgb(48, 51 70, 30%);
  background-color: transparent;

  &:focus {
    box-shadow: var(--clr-dark) 0px 2px;
  }

  &::placeholder {
    opacity: 0.3;
    font-family: var(--font-second);
  }
`;

export const NotesInput = styled.textarea`
  resize: none;
  font-size: 16px;
  font-style: italic;
  margin-top: 30px;
  padding: 15px;
  border-radius: 15px;
  height: 20%;
  border: none;
  outline: none;
  background-color: var(--clr-ballon);
  box-shadow: 3px 8px 3px var(--clr-pancho);
  color: var(--clr-dark);

  @media (min-width: 668px) {
    width: 70%;
  }
`;

// SETTINGS

export const SettingsWrapper = styled.section`
  margin-top: 40px;
`;

export const SettingsContainer = styled.section`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: ${props => (props.isChecked ? "700" : "500")};
  padding: 10px;
  background-color: ${props =>
    props.isChecked ? "var(--clr-bg-gray)" : "transparent"};
  box-shadow: 2px 2px 4px grey;
  border-radius: 5rem;
  color: ${props =>
    props.isChecked ? "var(--clr-offwhite)" : "var(--clr-dark)"};
  border: none;

  &:hover {
    cursor: pointer;
  }
  input[type="checkbox"] {
    display: none;
  }
`;
