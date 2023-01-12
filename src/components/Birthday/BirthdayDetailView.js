import React, { useEffect, useState } from "react";
import WithHeader from "../WithHeader";
import { OuterWrapper } from "Globalstyles";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components/macro";
import backarrow from "images/icons/arrow-thin-left.svg";
import trash from "images/icons/trash.svg";
import editPencil from "images/icons/edit-pencil.svg";
import { fetchOptions, formatDate, randomInt } from "../util";
import { API_URL } from "../util";
import ReminderSettingsContainer from "./ReminderSettingsContainer";
import Loading from "components/Loading";

const BirthdayDetailView = () => {
  const icons = useSelector((store) => store.ui.icons);
  const [icon, setIcon] = useState(null);
  const [birthday, setBirthday] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  const { firstName, lastName, otherInfo } = birthday;

  const { id } = params;

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    setIcon(icons[randomInt(icons.length)]);
  }, []);

  const fetchBirthday = () => {
    fetch(API_URL(`birthday/${id}`), fetchOptions("GET", accessToken))
      .then((res) => res.json())
      .then((data) => setBirthday(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const deleteBirthday = () => {
    fetch(
      API_URL(`birthday`),
      fetchOptions("DELETE", accessToken, JSON.stringify({ id }))
    )
      .then((res) => res.json())
      .then(() => console.log("birthday deleted"))
      .then(() => localStorage.setItem("deletedBirthday", "true"))
      .then(() => navigate("/home"))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchBirthday();
  }, []);

  const onBackClick = () => {
    navigate("/home");
  };

  const onDeleteClick = () => {
    const cancel = window.confirm(
      "Are you sure you want to delete this birthday reminder?"
    );
    if (cancel) deleteBirthday();
  };

  const onEditClick = () => {
    navigate(`/edit/${birthday._id}`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <ClonedOuterWrapper>
      <Wrapper>
        <BirthdayHeader>
          <HeaderButton type="button" onClick={onBackClick}>
            <img src={backarrow} alt="back" />
          </HeaderButton>
          <HeaderText>View birthday reminder</HeaderText>
          <BirthdayRightsideicons>
            <HeaderButton type="button" onClick={onDeleteClick}>
              <img src={trash} alt="OK" />
            </HeaderButton>
            <HeaderButton type="button" onClick={onEditClick}>
              <img src={editPencil} alt="edit" />
            </HeaderButton>
          </BirthdayRightsideicons>
        </BirthdayHeader>
        <ContentWrapper>
          <img src={icon} />
          <TextParagraph> {firstName} </TextParagraph>
          <TextParagraph> {lastName}</TextParagraph>
          <BirthDateContainer>
            <p>Birthdate</p>
            <DateShower>{formatDate(new Date(birthday.birthDate))}</DateShower>
          </BirthDateContainer>
          <NotesInput>
            Gift ideas:
            <br />- {otherInfo}
          </NotesInput>
          <ReminderSettingsContainer
            birthdayReminderSettings={birthday.birthdayReminderSettings}
            handleSettingsChange={() => null}
          />
        </ContentWrapper>
      </Wrapper>
    </ClonedOuterWrapper>
  );
};

export default WithHeader(BirthdayDetailView);

const ClonedOuterWrapper = styled(OuterWrapper)`
  align-items: flex-end;

  @media (min-width: 668px) {
    align-items: center;
  }
`;

const Wrapper = styled.section`
  max-width: 700px;
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    height: 80%;
  }
`;

const BirthdayHeader = styled.header`
  font-family: var(--font-second);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  border-radius: 50px 50px 0 0;
  background: var(--clr-bg-register);
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
  background: var(--clr-bg-light);

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

const TextParagraph = styled.p`
  line-height: normal;
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

  /* .react-date-picker {
    margin-top: 10px;
    width: 75%;
  }

  .react-date-picker__inputGroup {
    padding-left: 5px;
  }

  .react-date-picker__inputGroup__input:invalid {
    background: none;
  } */

  @media (min-width: 668px) {
    width: 75%;
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
  background-color: var(--clr-bg-green-card);
  box-shadow: 3px 8px 1px var(--clr-cascade);
  color: var(--clr-text-dark);

  @media (min-width: 668px) {
    width: 70%;
  }
`;

const DateShower = styled.div`
  width: 75%;
  display: flex;
  padding-left: 5px;
  height: 29px;
  margin-top: 10px;
  align-items: center;
  border: thin solid grey;
`;
