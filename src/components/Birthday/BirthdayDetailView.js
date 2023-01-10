import React, { useEffect, useState } from "react";
import WithHeader from "../WithHeader";
import { OuterWrapper } from "Globalstyles";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import user from "reducers/user";
import styled from "styled-components/macro";
import backarrow from "images/icons/arrow-thin-left.svg";
import trash from "images/icons/trash.svg";
import editPencil from "images/icons/edit-pencil.svg";
import { formatDate, randomInt } from "../util";
import DatePicker from "react-date-picker";
import { API_URL } from "utils/utils";
 import ReminderSettingsContainer from "./ReminderSettingsContainer"; 

const BirthdayDetailView = () => {
  const icons = useSelector((store) => store.ui.icons);
  const [icon, setIcon] = useState(null);
  const [birthday, setBirthday] = useState([]);
  useEffect(() => {
    setIcon(icons[randomInt(icons.length)]);
  }, []);
  const params = useParams();
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  const firstName = `${birthday.firstName}`
  const lastName = `${birthday.lastName}`
  const otherInfo = `${birthday.otherInfo}`
  const ChoosenBirthdayRemainders = `${birthday.birthdayReminderSettings}`
  // use the id to look up birthday from API/Redux
  const { id } = params;

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
  };

  const fetchBirthday = () => {
    /*    setLoading(true); */
    fetch(API_URL(`birthday/${id}`), options)
      .then((res) => res.json())
      .then((data) => setBirthday(data))
      .catch((error) => console.error(error));
    /*       .finally(() => setLoading(false)); */
  };

  useEffect(() => {
    fetchBirthday();
  }, []);

  console.log("birthday", birthday)

  const onFormBack = () => {
    navigate("/home");
  };

  const onFromDelete = () => {
  const cancel = window.confirm(
    "Are you sure you want to delete this birthday reminder?"
  );
  if (cancel) navigate("/home");
};

  const onFormEdit = () => {
    navigate(`/edit/${birthday._id}`);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // TODO
    // push new birthday to API
  };

  return (
    <ClonedOuterWrapper>
      <FormWrapper onSubmit={onFormSubmit}>
        <BirthdayHeader>
          <HeaderButton type="button" onClick={onFormBack}>
            <img src={backarrow} alt="back" />
          </HeaderButton>
          <HeaderText>birthday</HeaderText>
          <BirthdayRightsideicons>
          <HeaderButton type="submit">
            <img src={trash} alt="OK" />
          </HeaderButton>
          <HeaderButton type="button" onClick={onFormEdit}>
            <img src={editPencil} alt="edit" />
          </HeaderButton>
          </BirthdayRightsideicons>
        </BirthdayHeader>
        <ContentWrapper>
          <img src={icon} />
          <TextInput> {firstName} </TextInput>
          <TextInput> {lastName}</TextInput>
          <BirthDateContainer>
            <p>Birthdate</p>
            <DateShower>{formatDate(new Date(birthday.birthDate))}</DateShower>
          </BirthDateContainer>
          <NotesInput>
           Gift ideas:
           <br />
            - {otherInfo} 
            </NotesInput>
            <Wrapper>
              <p>E-mail notification settings</p>
               <StyledSettingsContainer>
                <StyledLabel>  
                  {ChoosenBirthdayRemainders}
                </StyledLabel>
              </StyledSettingsContainer> 
            </Wrapper>
        </ContentWrapper>
      </FormWrapper>
    </ClonedOuterWrapper>
  );
};



export default WithHeader(BirthdayDetailView);

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
    height: 28px;
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

const BirthdayRightsideicons = styled.div`
  width: 19%;
  display: flex;
  justify-content: space-between;
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

const TextInput = styled.p`
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
`;

const NotesInput = styled.div`
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

const DateShower = styled.div`
`;

/// Remainder setting components

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
  font-weight: 700;
  padding: 10px;
  background-color: var(--clr-background);
  box-shadow: 2px 2px 4px grey;
  border-radius: 5rem;
  color: var(--clr-text-dark);
  border: none;
`;
